import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

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

    return {
        client,
        loading
    }
}

export default useDetailClient;