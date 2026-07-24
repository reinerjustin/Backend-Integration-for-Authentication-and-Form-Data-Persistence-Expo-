import { View, Text, TextInput, Pressable, ActivityIndicator, ScrollView, Alert } from "react-native";
import { Formik } from "formik";
import { router } from "expo-router";
import { signInSchema } from "@/validation/authSchema";
import { useState } from "react";
import { styles } from "../style/Shared";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

const initialValues = {
    email: "",
    password: "",
};

export default function SignInScreen() {
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = async (
        values: typeof initialValues,
        {
            setSubmitting
        }: {
            setSubmitting:(isSubmitting:boolean)=>void
        }
    ) => {
        try {
            await signInWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
            router.replace("/employee");
        } catch(error:any) {
            let message = "Something went wrong. Please try again.";

            switch(error.code) {
                case "auth/invalid-email":
                    message = "Please enter a valid email address (e.g., name@example.com)."
                    break;

                case "auth/invalid-credential":
                    message = "Invalid email or password.";
                    break;

                case "auth/user-not-found":
                    message = "No account exists with this email.";
                    break;

                case "auth/wrong-password":
                    message = "Incorrect password. Try again.";
                    break;

                case "auth/network-request-failed":
                    message = "Network error. Check your internet connection."
                    break;
                
                default:
                    message = error.message;
            }

            Alert.alert(
                "Sign In Failed",
                message
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <View style={styles.alignment}>
            <View style={styles.card}>
                <ScrollView>

                    <Text style={styles.title}>Sign In</Text>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={signInSchema}
                        validateOnMount
                        validateOnChange
                        validateOnBlur
                        onSubmit={handleSubmit}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                            isValid,
                            isSubmitting,
                            resetForm
                        }) => (
                            <View>
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    style={styles.input}
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                    keyboardType="email-address"
                                />

                                {touched.email && errors.email && (
                                    <Text style={styles.error}>{errors.email}</Text>
                                )}


                                <Text style={styles.label}>Password</Text>
                                <TextInput
                                    style={styles.input}
                                    value={values.password}
                                    onChangeText={handleChange("password")}
                                    onBlur={handleBlur("password")}
                                    secureTextEntry={!showPassword}
                                />

                                <Pressable  
                                    style={styles.showButton}
                                    onPress={() => setShowPassword(!showPassword)}
                                >
                                    <Text style={styles.showText}>
                                        {showPassword ? "Hide" : "Show"}
                                    </Text>
                                </Pressable>

                                {touched.password && errors.password && (
                                    <Text style={styles.error}>{errors.password}</Text>
                                )}

                                <Pressable
                                    style={styles.secondaryButton}
                                    disabled={isSubmitting}
                                    onPress={() => resetForm()}
                                >
                                    <Text style={styles.secondaryButtonText}>
                                        Reset
                                    </Text>
                                </Pressable>

                                <Pressable
                                    style={[
                                        styles.primaryButton,
                                        (!isValid || isSubmitting) &&
                                            styles.primaryButtonDisabled,
                                    ]}
                                    disabled={!isValid || isSubmitting}
                                    onPress={() => handleSubmit()}
                                >
                                    {isSubmitting ? (
                                        <View style={styles.loadingRow}>
                                            <ActivityIndicator />
                                            <Text style={styles.loadingText}>Signing in...</Text>
                                        </View>
                                    ) : (
                                        <Text style={styles.loadingText}>Sign In</Text>
                                    )}
                                </Pressable>

                                <Pressable
                                    style={styles.footer}
                                    onPress={() => router.push("/signup")}
                                >
                                    <Text style={styles.footerText}>
                                        Don't have an account? Register.
                                    </Text>
                                </Pressable>

                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </View>
        </View>
        
    );
}