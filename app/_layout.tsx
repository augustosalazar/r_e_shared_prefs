// app/_layout.tsx
import { Stack } from "expo-router";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { AuthProvider } from "./state/AuthProvider";

export default function RootLayout() {
  return (
    <PaperProvider>
      <AuthProvider>
        <Stack />
      </AuthProvider>
    </PaperProvider>
  );
}


