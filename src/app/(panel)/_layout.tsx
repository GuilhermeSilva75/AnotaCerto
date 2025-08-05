import { Stack } from "expo-router";

export default function PanelLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="home/page"
            />
        </Stack>
    )
}
