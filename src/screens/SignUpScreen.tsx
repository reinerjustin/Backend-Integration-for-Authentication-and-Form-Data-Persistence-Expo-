import { View, Text, TextInput, Pressable, ActivityIndicator, ScrollView } from "react-native";
import { Formik } from "formik";
import { signUpSchema } from "@/validation/authSchema";
import { router } from "expo-router";
import { useState } from "react";
import { styles } from "@/style/Shared";

const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const mockApi = () => new Promise((resolve) =>
    setTimeout(resolve, 2000));

export default function SignUpScreen() {

    const handleSubmit = async (values: typeof initialValues,
        { setSubmitting } : { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        try {
            console.log(values);

            await mockApi();

            router.push("/signin");
        } finally {
            setSubmitting(false);
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <View style={styles.alignment}>
            <View style={styles.card}>
                <ScrollView>
                    <Text style={styles.title}>Sign Up</Text>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={signUpSchema}
                        validateOnMount
                        validateOnChange
                        validateOnBlur
                        onSubmit={handleSubmit}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isValid,
                            isSubmitting,
                            resetForm
                        }) => (
                            <View>

                                <Text style={styles.label}>Full Name</Text>
                                <TextInput
                                    style={styles.input}
                                    value={values.fullName}
                                    onChangeText={handleChange("fullName")}
                                    onBlur={handleBlur("fullName")}
                                />

                                {touched.fullName && errors.fullName && (
                                    <Text style={styles.error}>{errors.fullName}</Text>
                                )}

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
                                    onPress={() => setShowPassword(!showPassword)}>
                                    <Text style={styles.showText}>
                                        {showPassword ? "Hide" : "Show"}
                                    </Text>
                                </Pressable>

                                {touched.password && errors.password && (
                                    <Text style={styles.error}>{errors.password}</Text>
                                )}

                                <Text style={styles.label}>Confirm Password</Text>
                                <TextInput
                                style={styles.input}
                                value={values.confirmPassword}
                                onChangeText={handleChange("confirmPassword")}
                                onBlur={handleBlur("confirmPassword")}
                                secureTextEntry={!showConfirmPassword}
                            />

                            <Pressable 
                                style={styles.showButton}
                                onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                                <Text style={styles.showText}>
                                    {showConfirmPassword ? "Hide" : "Show"}
                                </Text>
                            </Pressable>

                            {touched.confirmPassword && errors.confirmPassword && (
                                <Text style={styles.error}>{errors.confirmPassword}</Text>
                            )}

                                <Pressable
                                    style={styles.secondaryButton}
                                    disabled={isSubmitting}
                                    onPress={() => resetForm()}
                                >
                                    <Text style={styles.secondaryButtonText}>
                                        Clear Form
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
                                            <Text style={styles.loadingText}>Signing up...</Text>
                                        </View>
                                    ) : (
                                        <Text style={styles.loadingText}>Sign Up</Text>
                                    )}
                                </Pressable>

                                <Pressable
                                    style={styles.footer}
                                    onPress={() => router.back()}
                                >
                                    <Text style={styles.footerText}>
                                        Already have an account? Sign in.
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