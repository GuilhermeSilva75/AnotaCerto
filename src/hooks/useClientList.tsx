import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";
import { clientService } from "../services/client-service";


export interface Client {
    id: string,
    name: string,
    created_at: string,
    saldo: number;
}

const useClientList = () => {
    const [clients, setClients] = useState<Client[]>([])
    const [loading, setLoading] = useState(true)
    const [userId, setUserId] = useState<null | string>(null)

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true)

            const { data: userData } = await supabase.auth.getUser()
            const user = userData?.user ?? null

            if (!user) return
            setUserId(user.id)

            try {

                const data = await clientService.getClients(user.id)
                setClients(data)
                
                setLoading(false)

            } catch (error) {
                console.log("FALHA AO BUSCAR DADOS DO CLIENTE", error);
                setLoading(false)
            }
        }
        fetchData()
    }, [])



    return {
        clients,
        loading
    }

}

export default useClientList;