"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import { Schema, ZodType, z } from 'zod';

import {schema} from "@/lib/schema";

export default function Home() {

    const {register, handleSubmit, formState: {errors}} = useForm<z.infer<typeof schema>>({resolver: zodResolver(schema)})

    const submitData = (data: z.infer<typeof schema>)=>{
      console.log(data);
    }

  return (
    <div>
      <form className='text-gray-600 flex flex-col w-60' onSubmit={handleSubmit(submitData)}>
        <label htmlFor="">First Name : </label>
        <input type="text" {...register("firstName")}/>

        <label htmlFor="">Last Name : </label>
        <input type="text" {...register("lastName")} />

        <label htmlFor="">Email : </label>
        <input type="text" {...register("email")} />

        <label htmlFor="">Age : </label>
        <input type="number" {...register("age", {valueAsNumber: true})} />

        <label htmlFor="">Password : </label>
        <input type="text" {...register("password")} />

        <label htmlFor="">Confirm Password : </label>
        <input type="text" {...register("confirmPassword")}  />

        <input type="submit" className='cursor-pointer'/>

      </form>
    </div>
  )
}
