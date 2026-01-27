import { supabase } from "../config/supabase";

interface DebitPayload {
    client_id: string;
    description: string;
    value: string;
}

export interface Debit {
    id: string;
    client_id: string;
    description: string;
    created_at: string;
    value: string;
    date: string;
}

export const debitService = {

    getDebits: async (client_id: string): Promise<Debit[]> => {
        const { data, error } = await supabase
            .from("debits")
            .select("*")
            .eq("client_id", client_id)
            .order("created_at", { ascending: true })

        if (error) throw error;


        return data;
    },

    create: async (payload: DebitPayload) => {

        const { error, data } = await supabase.from("debits").insert([
            {
                client_id: payload.client_id,
                description: payload.description,
                value: payload.value
            }
        ])

        if (error) throw error;
        return data;
    },

    delete: async (debit_id: string) => {
        const { error } = await supabase.from("debits").delete().eq("id", debit_id)

        if (error) throw error
    }
}