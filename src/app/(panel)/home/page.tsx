import useClientList from "@/src/hooks/useClientList";
import HomeScreen from "@/src/screens/home";

export default function Home() {

  const { clients, loading,handleDeleteClient } = useClientList()

  return (
    <HomeScreen
      clients={clients}
      loading={loading}
      handleDeleteClient={handleDeleteClient}
    />
  );
}