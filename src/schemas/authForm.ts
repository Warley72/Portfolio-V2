import { z } from "zod"

export const authForm = z.object ({
    name: z.string().min(1, {message: "Campo obigatório"}).max(10),
    email: z.email( {message:"Campo obrigatório"}),
    message: z.string().min(5, {message:"A mensagem deve ter pelo menos 5 caracteres"}).max(150),
})

export type AuthForm = z.infer<typeof authForm>
