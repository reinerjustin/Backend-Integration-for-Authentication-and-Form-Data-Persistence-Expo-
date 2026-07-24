import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home" }}
      />

      <Stack.Screen
        name="signin"
        options={{ title: "Sign In" }}
      />

      <Stack.Screen
        name="signup"
        options={{ title: "Sign Up"}}
      />

      <Stack.Screen
        name="employee"
        options={{ title: "Employee Information" }}
      />
    </Stack>
  );
}
