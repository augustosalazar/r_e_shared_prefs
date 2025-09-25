import { AppText } from "@/src/components/AppText";
import { Button } from "@/src/components/Button";
import { Link } from "expo-router";
import { View } from "react-native";

export default function SecondNestedScreen() {
  return (
    <View className="justify-center flex-1 p-4 bg-pink-200">
      <AppText center>Second Nested Screen</AppText>
      <Link href="/second/also-nested" push asChild>
        <Button title="Push to /second/also-nested" />
      </Link>
    </View>
  );
}
