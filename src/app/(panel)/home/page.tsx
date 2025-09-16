import useProfile from "@/src/hooks/useProfile";
import HomeScreen from "@/src/screens/home";

export default function Home() {

  const { logout } = useProfile()

  return (
    <HomeScreen
      logout={logout}
    />
  );
}