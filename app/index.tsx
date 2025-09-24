// app/index.tsx
import { useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { AppContext } from "./state/AuthProvider";

export default function Index() {
    const { login, isLoading } = useContext(AppContext);
    const router = useRouter();

    useEffect(() => {
        if (isLoading) return; // 👈 wait until PrefsService resolves

        if (login) {
            router.replace("/(app)");
        } else {
            router.replace(
                "/(auth)/sign-in");
        }
    }, [login, isLoading, router]);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" />
            <Text style={{ marginTop: 10 }}>Loading...</Text>
        </View>
    );
}
