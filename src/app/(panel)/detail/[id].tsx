import useDetailClient from "@/src/hooks/useDetailClient";
import DetailScreen from "@/src/screens/details";


export default function Detail() {

    const { client, loading } = useDetailClient()

    return (
        <DetailScreen 
        client={client}
        loading={loading}
        />
    )
}