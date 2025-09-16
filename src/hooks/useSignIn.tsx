import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { authService } from "../services/auth-services";

const sigInSchema = z.object({
    email: z.string().email("Digite um email válido").min(1, "O email é obrigatório"),
    password: z.string().min(4, "Senha deve ter pelo menos 6 caracteres."),
})

export type SignInFormData = z.infer<typeof sigInSchema>

const useSigIn = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<SignInFormData>({
        resolver: zodResolver(sigInSchema)
    })

    const onSubmit = async (data: SignInFormData) => {
        try {
            await authService.signin(data.email, data.password)

            router.replace('/(panel)/home/page')

        } catch (error) {
            console.log(error);
            ("FALHA AO LOGAR")
        }
    }

    return {
        onSubmit,
        handleSubmit,
        control,
        errors,
        isSubmitting
    }

}

export default useSigIn;