import { supabase } from "../config/supabase"

export type CreateClientPayload = {
    name: string
}

export const clientService = {
    createClient: async (payload: CreateClientPayload, user_id: string) => {
        const { data, error } = await supabase.from("clients").insert([
            {
                ...payload,
                user_id: user_id
            }
        ])

        if (error) {
            throw error
        }

        return data;
    }

}