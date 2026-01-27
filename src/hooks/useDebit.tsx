import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Keyboard } from 'react-native';
import { debitService } from "../services/debit-service";

import { Debit } from "../services/debit-service";


const useDebit = () => {
    const { id } = useLocalSearchParams<{ id: string }>()
    const [loading, setloading] = useState(true)
    const [newDebit, setNewDebit] = useState<string>("")
    const [description, setDescription] = useState("")
    const [debits, setDebits] = useState<Debit[]>([])

    const fetchDebit = async (client_id: string) => {
        setloading(true)

        try {

            const data = await debitService.getDebits(client_id)
            setDebits(data)

        } catch (error) {
            console.log("ERRO AO CARREGAR OS DÉBITOS", error);
            setloading(false)
        }
    }

    const addDebit = async () => {

        if (!description || !newDebit) return

        try {
            await debitService.create({
                client_id: id,
                description: description,
                value: newDebit
            })

            setNewDebit("")
            setDescription("")
            Keyboard.dismiss()
            await fetchDebit(id)

        } catch (error) {
            console.log("ERRO", error);

        }
    }

    const deleteDebit = async (debit_id: string) => {
        try {
            if (!debit_id) return

            await debitService.delete(debit_id)
            await fetchDebit(id)

        } catch (error) {
            console.log("ERRO AO DELETAR O DEBITO", error);
            
        }
    }

    useEffect(() => {
        if (!id) return

        fetchDebit(id)
    },[id])

    return {
        loading,
        newDebit,
        setNewDebit,
        addDebit,
        fetchDebit,
        description,
        setDescription,
        debits,
        deleteDebit
    }
}

export default useDebit;