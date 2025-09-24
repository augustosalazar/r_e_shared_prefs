import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { AppContext } from '../state/AuthProvider';

export default function Index() {
    const { logoutUser, getLoggedUser } = useContext(AppContext);
    const [userEmail, setUserEmail] = useState<string>('');

    useEffect(() => {
        const loadUserInfo = async () => {
            const email = await getLoggedUser();
            setUserEmail(email);
        };
        loadUserInfo();
    }, [getLoggedUser]);

    const handleLogout = async () => {
        try {
            await logoutUser();
            console.log("Logout successful");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the App!</Text>
            <Text style={styles.email}>Logged in as: {userEmail}</Text>
            <Button
                mode="contained"
                onPress={handleLogout}
                style={styles.logoutButton}
            >
                Logout
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    email: {
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center',
    },
    logoutButton: {
        minWidth: 120,
    },
});