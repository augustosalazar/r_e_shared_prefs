import { AppText } from "@/src/components/AppText";
import { Button } from "@/src/components/Button";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function ThirdScreen() {
  const router = useRouter();

  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>Third Screen</AppText>
      <Button
        title="Back"
        theme="secondary"
        onPress={() => {
          router.back();
        }}
      />
    </View>
  );
}
