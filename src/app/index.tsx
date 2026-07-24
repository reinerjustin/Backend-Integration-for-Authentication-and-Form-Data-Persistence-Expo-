import { router, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { main } from "../style/Main";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={main.alignment}>
        <View style={main.main}>
          <Text style={main.logo}>🐾</Text>

          <Text style={main.title}>Welcome</Text>

          <Text style={main.subtitle}>
            Sign in to continue or create a new account.
          </Text>

          <Pressable
            style={main.primaryButton}
            onPress={() => router.push("/signin")}
          >
            <Text style={main.primaryText}>Sign In</Text>
          </Pressable>

          <Pressable
            style={main.secondaryButton}
            onPress={() => router.push("/signup")}
          >
            <Text style={main.secondaryText}>Sign Up</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}
