import * as z from 'zod';

export const EmployeeValidation = z.object({
    name: z.string().min(3,{
        message: 'Name must be at least 3 characters long'
    }).max(50, {
        message: 'Name must be at most 50 characters long'
    }),
    surname: z.string().min(3,{
        message: 'Surname must be at least 3 characters long'
    }).max(50,{
        message: 'Surname must be at most 50 characters long'
    }),
    email: z.string().email({
        message: 'Please enter a valid email'
    }),
    age: z.string().max(3,{
        message: 'Age must be at most 3 characters long'
    })
})