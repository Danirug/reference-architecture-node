import { z } from 'zod';

export const createTaskBodySchema = z.object({
  title: z.string(),
  description: z.string().optional(),
});

export const taskIdParamsSchema = z.object({
  id: z.string().uuid(),
});

export type CreateTaskBody = z.infer<typeof createTaskBodySchema>;
export type TaskIdParams = z.infer<typeof taskIdParamsSchema>;