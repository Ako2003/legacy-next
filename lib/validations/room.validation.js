import * as z from 'zod';

export const RoomValidation = z.object({
    number: z.string().min(3,{
        message: 'Number must be at least 3 characters long'
    }).max(50, {
        message: 'Number must be at most 50 characters long'
    }),
    floor: z.string().min(1,{
        message: 'Floor must be at least 1 characters long'
    }).max(2,{
        message: 'Floor must be at most 2 characters long'
    }),
    available: z.boolean(),
    price: z.string().min(2,{
        message: 'Price must be at least 2 characters long'
    }).max(5,{
        message: 'Price must be at most 5 characters long'
    }),
    description: z.string().min(10,{
        message: 'Description must be at least 10 characters long'
    }).max(100,{
        message: 'Description must be at most 100 characters long'
    })
})