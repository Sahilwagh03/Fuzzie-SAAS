'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { EditUserProfileSchema } from '@/lib/types'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Loader2 } from 'lucide-react'

const ProfileForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm({
        mode: 'onChange',
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
            name: "",
            email: "",
        }
    })

    const onSubmit = (data) => {
        setIsLoading(true);
        // Handle form submission here
    }

    return (
        <Form {...form} onSubmit={form.handleSubmit(onSubmit)}>
            <form className='flex flex-col gap-6'>
                <FormField name="name" label="User full name" form={form} render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-lg">User full name</FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                placeholder="Name"

                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField name="email" label="Email" form={form} render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-lg">Email</FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                type="email"
                                placeholder="Email"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <Button
                    type="submit"
                    className="self-start hover:bg-[#2F006B] hover:text-white "
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving
                        </>
                    ) : (
                        'Save User Settings'
                    )}
                </Button>
            </form>
        </Form>
    )
}

export default ProfileForm
