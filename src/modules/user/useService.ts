import { PrismaClient, User } from '@prisma/client';
const prisma = new PrismaClient();
export const createUserService = async (userData: User) => {
  return await prisma.user.create({
    data: userData,
  });
};
