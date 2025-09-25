
import { Button } from "@/src/components/Button";

import { useContext } from "react";
import { View } from "react-native";
import { AppText } from "../components/AppText";
import { AuthContext } from "../utils/authContext";

export default function LoginScreen() {
  const authContext = useContext(AuthContext);

  return (
    <View className="flex-1 justify-center p-4">
      <AppText>
        Login Screen
      </AppText>
      <Button title="Log in!" onPress={authContext.logIn} />
    </View>
  );
}
