import * as React from "react";
import { Text, TextStyle } from "react-native";

type AppTextProps = {
  children: React.ReactNode;
  bold?: boolean;
  center?: boolean;
  style?: TextStyle | TextStyle[];
};

export function AppText({
  children,
  bold = false,
  center = false,
  style,
}: AppTextProps) {
  return (
    <Text>
      {children}
    </Text>
  );
}
