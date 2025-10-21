import useProfile from "@/src/hooks/useProfile";
import ProfileScreen from "@/src/screens/profile";

export default function Profile() {

  const { logout } = useProfile()
  return (
    <ProfileScreen 
    logout={logout}
    />
  );
}