import { supabase } from "../config/supabase";

export const authService = {

    signin: async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })

        if (error) {
            throw error
        }

        return data
    },

    signup: async (email: string, password: string, username: string) => {
        const { data, error } = await supabase.auth.signUp({
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
    },

    signout: async () => {
        const { error } = await supabase.auth.signOut()


        if (error) {
            throw error
        }

        return true
    }

}