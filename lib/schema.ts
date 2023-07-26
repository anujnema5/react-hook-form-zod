import { zodResolver } from '@hookform/resolvers/zod';
import { Schema, ZodType, z } from 'zod';

type formData = {
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    password: string,
    confirmPassword: string
}

export const schema: ZodType<formData> = z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    email: z.string().email(),
    age: z.number().min(18),
    password: z.string().min(5).max(20),
    confirmPassword: z.string().min(5).max(20)
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password do not match",
        path: ['confirmPassword']
    })