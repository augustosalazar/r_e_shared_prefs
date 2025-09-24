import { Redirect } from 'expo-router';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import { AppContext } from './state/AuthProvider';

export default function Index() {
    const { login, isLoading } = useContext(AppContext);

    console.log("Index: Current state - login:", login, "isLoading:", isLoading);

    // Show loading while checking authentication state
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </View>
        );
    }

    // Redirect based on authentication status
    if (login) {
        console.log("User is logged in, redirecting to /(app)");
        return <Redirect href="/(app)" />;
    }

    console.log("User is not logged in, redirecting to /auth/sign-in");
    return <Redirect href="/auth/sign-in" />;
}
