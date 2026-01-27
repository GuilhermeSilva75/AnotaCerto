import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

import { router } from "expo-router";

import { Client, clientService } from "../services/client-service";

const useDetailClient = () => {

    const [client, setClient] = useState<Client | null>(null);
    const [loading, setLoading] = useState(true);
    const { id } = useLocalSearchParams<{ id: string }>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const data = await clientService.getClientById(id)
                setClient(data);
                setLoading(false)

                
            } catch (error) {
                console.log("ERRO AO BUSCAR DETALHES", error);
                setLoading(false)
            }
        }

        fetchData()
    },[id])

        const onDelete = async () => {
            try {
                await clientService.deleteClient(id)

                router.replace('/(panel)/home/page');
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
        client,
        loading,
        handleDeleteClient
    }
}

export default useDetailClient;