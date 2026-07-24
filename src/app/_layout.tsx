import { Stack } from "expo-router";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fa"
      }}
      >
        <ActivityIndicator
          size="large"
          color="#2563eb"
        />
      </View>
    );
  }
  
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
