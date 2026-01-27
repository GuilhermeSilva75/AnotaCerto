import { supabase } from "../config/supabase";

export type CreateClientPayload = {
    name: string
}

export type Client = {
    id: string;
    name: string;
    created_at: string;
    saldo: number;
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
    },

    getClients: async (user_id: string): Promise<Client[]> => {
        const { data, error } = await supabase.from("clients")
            .select("*")
            .eq("user_id", user_id)
            .order("created_at", { ascending: false })

        if (error) throw error

        return data
    },

    getClientById: async (client_id: string): Promise<Client> => {
        const { data, error } = await supabase
            .from("clients")
            .select("*")
            .eq("id", client_id)
            .single()

        if (error) throw error



        return data;
    },

    deleteClient: async (client_id: string) => {
        const { error } = await supabase.from("clients").delete().eq("id", client_id)

        if (error) throw error
    }

}