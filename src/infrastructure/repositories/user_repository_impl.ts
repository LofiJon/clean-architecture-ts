import {UserRepository} from "@core/repositories/user-repository";
import {User} from "@core/models/user";
import prisma from '../database/prisma';

export class UserRepositoryImpl implements UserRepository {
    async add(user: User): Promise<User> {
        const createdUser = await prisma.user.create({
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                created_at: new Date(),
                updated_at: new Date(),
            },
        });
        return User.mapToModel(createdUser);
    }

    async count(): Promise<number> {
        return prisma.user.count({});
    }

   async delete(id: string): Promise<void> {
        const user = await prisma.user.findUnique({where: {id}});
        if (user) {
            await prisma.user.update({
                where: { id },
                data: { deleted_at: new Date() },
            });
        } else {
            throw new Error("User not fount")
        }
    }

    async findAll(): Promise<any> {
        return prisma.user.findMany();
    }

    async findById(id: string): Promise<any> {
        return prisma.user.findUnique({where: {id: id}});
    }

    async pageable(page: number, limit: number, search: string): Promise<{ data: User[], total: number }> {
        const skip = (page - 1) * limit;
        const whereClause = search ? {
            deleted_at: null,
            OR: [
                { name: { contains: search, mode: 'insensitive' as const } },
                { email: { contains: search, mode: 'insensitive' as const } },
            ],
        } : { deleted_at: null };

        const users = await prisma.user.findMany({
            skip,
            take: limit,
            where: whereClause,
        });

        const total = await prisma.user.count({
            where: whereClause,
        });

        return {
            data: users.map(User.mapToModel),
            total,
        };
    }


}