import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { supabase } from "../config/supabase";
import { clientService } from "../services/client-service";


export interface Client {
    id: string,
    name: string,
    created_at: string,
}

const useClientList = () => {
    const [clients, setClients] = useState<Client[]>([])
    const [loading, setLoading] = useState(true)
    const [userId, setUserId] = useState<null | string>(null)

    const { id } = useLocalSearchParams<{ id: string }>()

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
    }, [id])

    const onDelete = async () => {
        try {
            await clientService.deleteClient(id)
        } catch (error) {
            console.log("ERRO AO DELETAR CLIENTE", error);
        }
    }

    const handleDeleteClient = async () => {
        Alert.alert(
            "Excluir cliente!",
            "Deseja realmente excluir esse cliente?",
            [
                { text: "Não", style: "cancel" },
                { text: "Sim", onPress: async () => await onDelete() }
            ]
        )
    }



    return {
        clients,
        loading,
        handleDeleteClient
    }

}

export default useClientList;