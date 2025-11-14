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

            <Stack.Screen
                name="profile/page"
            />

            <Stack.Screen
                name="new/page"
            />

            <Stack.Screen
                name="detail/[id]"
            />
        </Stack>
    )
}
