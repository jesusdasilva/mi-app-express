import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const createPaymentCategory = async (categoryData: Prisma.payment_categoriesCreateArgs) => {
  return await prisma.payment_categories.create(categoryData);
};

export const getAllPaymentCategories = async () => {
  return await prisma.payment_categories.findMany();
};

export const getPaymentCategory = async (id: number) => {
  return await prisma.payment_categories.findUnique({
    where: { id },
  });
};

export const updatePaymentCategory = async (id: number, categoryData: Prisma.payment_categoriesUpdateArgs) => {
  return await prisma.payment_categories.update({
    where: { id },
    data: categoryData,
  });
};

export const deletePaymentCategory = async (id: number) => {
  return await prisma.payment_categories.delete({
    where: { id },
  });
};