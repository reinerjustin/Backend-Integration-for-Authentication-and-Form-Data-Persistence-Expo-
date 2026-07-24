import { View, Text, TextInput, Pressable, ActivityIndicator, ScrollView } from "react-native";
import { Formik } from "formik";
import { router } from "expo-router";
import { signInSchema } from "@/validation/authSchema";
import { useState } from "react";
import { styles } from "../style/Shared";

const initialValues = {
    email: "",
    password: "",
};

const mockApi = () => new Promise((resolve) => 
    setTimeout(resolve, 1000));

export default function SignInScreen() {
    const [showPassword, setShowPassword] = useState(false);

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
                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                console.log(values);

                                await mockApi();
                                
                                router.push("/employee");
                            } finally {
                            setSubmitting(false);
                            }
                        }}
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