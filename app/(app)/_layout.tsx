import { Stack } from "expo-router";

export default function AppLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            {/* Add other authenticated screens here */}
        </Stack>
    );
}