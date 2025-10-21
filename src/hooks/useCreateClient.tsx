import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { supabase } from '../config/supabase';
import { clientService } from '../services/client-service';


const clientSchema = z.object({
    name: z.string().min(1, "Nome do cliente obrigatorio")
})

export type ClientFromData = z.infer<typeof clientSchema>

export const useCreateClient = () => {

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting}, reset} = useForm<ClientFromData>({
        resolver: zodResolver(clientSchema)
    })

    const [userId, setUserId] = useState<null | string>(null)

    useEffect(() => {
        const fetchuser = async () => {
            const { data } = await supabase.auth.getUser()
            setUserId(data?.user?.id ?? null)
            console.log(userId);
            
        }

        fetchuser()
    }, [])

    const createClient = async (data: ClientFromData) => {
        if (!userId) return

        try {
            await clientService.createClient(data, userId)
            reset()
            router.replace('/home/page')

        } catch (error) {
            console.log(error);
            console.log("Erro ao criar cliente");
        }

    }

    return {
        control,
        handleSubmit,
        errors,
        isSubmitting,
        createClient
    }
}