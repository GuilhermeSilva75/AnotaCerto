import { supabase } from "../config/supabase";

export const authService = {

    signup: async (email: string, password: string, username: string) => {
        const {data,error} = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    name: username
                }
            }
        })

        if (error) {
            throw error
        }

        return data;
    }

}