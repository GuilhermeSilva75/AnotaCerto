import { router } from "expo-router";
import { authService } from "../services/auth-services";

const useProfile = () => {
    const logout = async () => {
        await authService.signout()

        router.replace('/(auth)/signin/page')
    }

    return {
        logout
    }
}

export default useProfile