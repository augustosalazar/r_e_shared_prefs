import { AppText } from "@/src/components/AppText";
import { Button } from "@/src/components/Button";
import { Link, useRouter } from "expo-router";
import { View } from "react-native";

export default function SecondScreen() {
  const router = useRouter();

  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>Second Screen</AppText>
      <Link href="/second/nested" push asChild>
        <Button title="Push to /second/nested" />
      </Link>
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

/**
 * /index
 * /second (stack)
 *   /second/index
 *   /second/nested
 *   /second/also-nested
 * /third
 * /fourth
 */
