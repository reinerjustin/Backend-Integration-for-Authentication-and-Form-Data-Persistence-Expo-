import { Stack } from "expo-router";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      
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

    </AuthProvider>
  );
}
