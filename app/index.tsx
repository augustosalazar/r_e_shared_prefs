import { Redirect } from 'expo-router';
import { useContext } from 'react';
import { AppContext } from './state/AuthProvider';

export default function Index() {
    const { login } = useContext(AppContext);

    // Redirect based on authentication status
    if (login) {
        console.log("User is logged in, redirecting to /(app)/index");
        return <Redirect href="/(app)/index" />;
    }

    return <Redirect href="/auth/sign-in" />;
}
