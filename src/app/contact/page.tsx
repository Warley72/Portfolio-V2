"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { LuSend } from "react-icons/lu";

import Navigation from "@/components/layout/Navigation";
import { PageTransition } from "@/components/layout/PageTransition";

const schema = z.object({
    name: z.string().min(2, 'Campo obrigatório'),
    email: z.string().email('Campo obrigatório'),
    message: z.string().min(5, 'A mensagem deve ter pelo menos 5 caracteres'),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });
    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    return (
        <PageTransition>
            <div className="p-6 md:p-12">
                <div className="max-w-6xl mx-auto">
                    <Navigation />
                    <h1 className="font-mono text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg text-[#A1A1AA] font-semibold mb-8">Have a question or want to work together? Feel free to reach out.</p>
                    <Card className="p-6 border stroke-black dark:stroke-white">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full md:w-1/2">
                                    <label className="block text-white font-semibold mb-1">Name</label>
                                    <Input className="text-white border stroke-black dark:stroke-white" placeholder="Your name" {...register('name')} />
                                    {errors.name && (
                                        <span className="text-red-500 text-sm">{errors.name.message}</span>
                                    )}
                                </div>
                                <div className="w-full md:w-1/2">
                                    <label className="block text-white font-semibold mb-1">Email</label>
                                    <Input className="text-white border stroke-black dark:stroke-white" placeholder="your@email.com" {...register('email')} />
                                    {errors.email && (
                                        <span className="text-red-500 text-sm">{errors.email.message}</span>
                                    )}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="text-lg text-white font-semibold mb-2 block">Message</label>
                                <textarea
                                    placeholder="Your message..."
                                    rows={6}
                                    className="w-full rounded-md border stroke-black dark:stroke-white p-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                                    {...register('message')}
                                />
                                {errors.message && (
                                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                                )}
                            </div>
                            <Button className="flex items-center gap-2 px-4 py-2 font-medium bg-transparent text-[#A1A1AA] hover:bg-zinc-200 dark:hover:bg-[#222224] hover:text-black dark:hover:text-white border stroke-black dark:stroke-white transition duration-300 cursor-pointer rounded-md w-fit">
                                <LuSend />Send Message
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </PageTransition>
    )
}
