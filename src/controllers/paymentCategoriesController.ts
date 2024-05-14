import { PrismaClient, Prisma } from '@prisma/client';
import { categoryCreateSchema, categoryUpdateSchema } from '../validationSchemas';

const prisma = new PrismaClient();

export const createPaymentCategory = async (
  categoryData: Prisma.payment_categoriesCreateArgs
) => {
  const { error } = categoryCreateSchema.validate(categoryData);
  if (error) {
    throw new Error(`Invalid data: ${error.details[0].message}`);
  }
  return await prisma.payment_categories.create(categoryData);
};

export const getAllPaymentCategories = async () => {
  return await prisma.payment_categories.findMany();
};

export const getPaymentCategory = async (id: number) => {
  return await prisma.payment_categories.findUnique({
    where: { id }
  });
};

export const updatePaymentCategory = async (
  id: number,
  categoryData: Prisma.payment_categoriesUpdateArgs
) => {
  const { error } = categoryUpdateSchema.validate(categoryData);
  if (error) {
    throw new Error(`Invalid data: ${error.details[0].message}`);
  }
  return await prisma.payment_categories.update({
    where: { id },
    data: categoryData
  });
};

export const deletePaymentCategory = async (id: number) => {
  return await prisma.payment_categories.delete({
    where: { id }
  });
};
