import * as z from 'zod';

export const EmployeeValidation = z.object({
    name: z.string().min(3).max(50),
    surname: z.string().min(3).max(50),
    email: z.string().email(),
    age: z.number().min(18).max(65)
})