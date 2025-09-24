import { router } from "expo-router";
import { useContext, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { AppContext } from "../state/AuthProvider";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loginUser } = useContext(AppContext);

    const handleLogin = async () => {
        // Validate the form fields
        if (!email.trim()) {
            Alert.alert("Validation Error", "Email cannot be empty.");
            return;
        }
        if (!password.trim()) {
            Alert.alert("Validation Error", "Password cannot be empty.");
            return;
        }
        try {
            await loginUser(email, password);
            console.log("Login successful");
        } catch (error) {
            Alert.alert("Login Error", error instanceof Error ? error.message : "An error occurred");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button mode="contained" onPress={handleLogin} style={styles.button}>
                Login
            </Button>
            <Button
                mode="text"
                onPress={() => router.navigate("/auth/sign-up")}
                style={styles.button}
            >
                Create an account
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 24,
    },
    input: {
        marginBottom: 16,
    },
    button: {},
});