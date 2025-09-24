import { router } from "expo-router";
import React, { useContext, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { AppContext } from "../state/AuthProvider";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { signupUser } = useContext(AppContext);

    const handleSignup = async () => {
        if (!email.trim()) {
            Alert.alert("Validation Error", "Email cannot be empty.");
            return;
        }
        if (!password.trim()) {
            Alert.alert("Validation Error", "Password cannot be empty.");
            return;
        }
        if (!confirmPassword.trim()) {
            Alert.alert("Validation Error", "Confirm Password cannot be empty.");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Validation Error", "Passwords do not match.");
            return;
        }

        console.log("signupUser called with:", email, password);

        try {
            await signupUser(email, password);
            Alert.alert("Success", "Account created successfully! Please login.", [
                { text: "OK", onPress: () => router.navigate("/(auth)/sign-in") }
            ]);
        } catch (error) {
            Alert.alert("Signup Error", error instanceof Error ? error.message : "An error occurred");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
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
            <TextInput
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button mode="contained" onPress={handleSignup} style={styles.button}>
                Signup
            </Button>
            <Button
                mode="text"
                onPress={() => router.navigate("/(auth)/sign-in")}
                style={styles.button}
            >
                Already have an account? Login
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 24
    },
    input: {
        marginBottom: 16
    },
    button: {}
});