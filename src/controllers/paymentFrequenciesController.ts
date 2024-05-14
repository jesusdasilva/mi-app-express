import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const createPaymentFrequency = async (
  frequencyData: Prisma.payment_frequenciesCreateArgs
) => {
  return await prisma.payment_frequencies.create(frequencyData);
};

export const getAllPaymentFrequencies = async () => {
  return await prisma.payment_frequencies.findMany();
};

export const getPaymentFrequency = async (id: number) => {
  return await prisma.payment_frequencies.findUnique({
    where: { id }
  });
};

export const updatePaymentFrequency = async (
  id: number,
  frequencyData: Prisma.payment_frequenciesUpdateArgs
) => {
  return await prisma.payment_frequencies.update({
    where: { id },
    data: frequencyData
  });
};

export const deletePaymentFrequency = async (id: number) => {
  return await prisma.payment_frequencies.delete({
    where: { id }
  });
};