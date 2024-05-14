import Joi from '@hapi/joi';

export const categoryCreateSchema = Joi.object({
  data: Joi.object({
    name: Joi.string().max(255).required(),
    color: Joi.string().max(255).required(),
    description: Joi.string().max(255).optional(),
    created_at: Joi.date().optional(),
    updated_at: Joi.date().optional(),
  }).required()
});

export const categoryUpdateSchema = Joi.object({
  where: Joi.object({
    id: Joi.number().required(),
  }).required(),
  data: Joi.object({
    name: Joi.string().max(255).optional(),
    color: Joi.string().max(255).optional(),
    description: Joi.string().max(255).optional(),
    created_at: Joi.date().optional(),
    updated_at: Joi.date().optional(),
  }).required()
});