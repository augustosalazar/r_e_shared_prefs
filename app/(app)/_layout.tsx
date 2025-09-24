// app/(app)/_layout.tsx
import { Stack, useRootNavigationState, useRouter, useSegments } from "expo-router";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../state/AuthProvider";

export default function AppLayout() {
    const { login, isLoading } = useContext(AppContext);
    const router = useRouter();
    const segments = useSegments();
    const navState = useRootNavigationState();

    const isReady = !!navState?.key && segments.length > 0;

    useEffect(() => {
        if (!isReady || isLoading) return;
        // If user is not logged in, bounce to auth
        if (!login) router.replace("/(auth)/sign-in" as never);
    }, [isReady, isLoading, login, router]);

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            {/* other authenticated screens here */}
        </Stack>
    );
}
