import useDebit from "@/src/hooks/useDebit";
import useDetailClient from "@/src/hooks/useDetailClient";
import DetailScreen from "@/src/screens/details";


export default function Detail() {

    const { client, loading,handleDeleteClient } = useDetailClient()
    const debitHook = useDebit()
   
    return (
        <DetailScreen 
        client={client}
        loading={loading}
        debitHook={debitHook}
        handleDeleteClient={handleDeleteClient}
        />
    )
}