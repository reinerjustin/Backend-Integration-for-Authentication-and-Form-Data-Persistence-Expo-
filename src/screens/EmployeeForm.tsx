import { View, Text, TextInput, Pressable, ActivityIndicator, ScrollView } from "react-native";
import { Formik } from "formik";
import { employeeSchema } from "@/validation/employeeSchema";
import { router } from "expo-router";
import { styles } from "@/style/Shared";

interface EmployeeFormValues {
    employeeId: string;
    fullName: string;
    address: string;
    email: string;
    phone: string;
    positionTitle: string;
    department: string;
    dateOfHire: string;
}

const initialValues: EmployeeFormValues = {
    employeeId: "",
    fullName: "",
    address: "",
    email: "",
    phone: "",
    positionTitle: "",
    department: "",
    dateOfHire: "",
};

const mockApi = () => new Promise((resolve) => 
    setTimeout(resolve, 2000));

function EmployeeForm() {
    const handleSubmit = async (values: EmployeeFormValues, 
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void}) => {
        try {
            console.log(values);

            await mockApi();

            alert("Employee information submitted successfully!");

            router.push("/");
        } finally {
            setSubmitting(false);
        } 
    };

    return (
        <View style={styles.alignment}>
            <View style={styles.card}>
                <ScrollView>
                    <Text style={styles.title}>Employee Information</Text>
                    <Formik<EmployeeFormValues>
                        initialValues={initialValues}
                        validationSchema={employeeSchema}
                        onSubmit={handleSubmit}
                        validateOnMount
                        validateOnChange
                        validateOnBlur
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
                            <Text style={styles.label}>Employee ID</Text>
                            <TextInput
                                style={styles.input}
                                value={values.employeeId}
                                onChangeText={handleChange("employeeId")}
                                onBlur={handleBlur("employeeId")}
                            />
                            {touched.employeeId && errors.employeeId && (
                                <Text style={styles.error}>{errors.employeeId}</Text>
                            )}

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

                            <Text style={styles.label}>Address</Text>
                            <TextInput
                                style={styles.input}
                                value={values.address}
                                onChangeText={handleChange("address")}
                                onBlur={handleBlur("address")}
                            />
                            {touched.address && errors.address && (
                                <Text style={styles.error}>{errors.address}</Text>
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

                            <Text style={styles.label}>Phone</Text>
                            <TextInput
                                style={styles.input}
                                value={values.phone}
                                onChangeText={handleChange("phone")}
                                onBlur={handleBlur("phone")}
                                keyboardType="phone-pad"
                            />
                            {touched.phone && errors.phone && (
                                <Text style={styles.error}>{errors.phone}</Text>
                            )}

                            <Text style={styles.label}>Position Title</Text>
                            <TextInput
                                style={styles.input}
                                value={values.positionTitle}
                                onChangeText={handleChange("positionTitle")}
                                onBlur={handleBlur("positionTitle")}
                            />
                            {touched.positionTitle && errors.positionTitle && (
                                <Text style={styles.error}>{errors.positionTitle}</Text>
                            )}

                            <Text style={styles.label}>Department</Text>
                            <TextInput
                                style={styles.input}
                                value={values.department}
                                onChangeText={handleChange("department")}
                                onBlur={handleBlur("department")}
                            />
                            {touched.department && errors.department && (
                                <Text style={styles.error}>{errors.department}</Text>
                            )}

                            <Text style={styles.label}>Date of Hire</Text>
                            <TextInput
                                style={styles.input}
                                value={values.dateOfHire}
                                onChangeText={handleChange("dateOfHire")}
                                onBlur={handleBlur("dateOfHire")}
                                placeholder="YYYY-MM-DD"
                            />
                            {touched.dateOfHire && errors.dateOfHire && (
                                <Text style={styles.error}>{errors.dateOfHire}</Text>
                            )}

                            <Pressable
                                style={styles.secondaryButton}
                                disabled={isSubmitting}
                                onPress={() => resetForm()}
                            >
                                <Text style={styles.secondaryButtonText}>Clear Form</Text>
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
                                        <Text style={styles.loadingText}>Submitting...</Text>
                                    </View>
                                    
                                ) : (
                                    <Text style={styles.loadingText}>Submit</Text>
                                )}
                            </Pressable>
                        </View>
                    )}
                    </Formik>
                </ScrollView>
            </View>
        </View>   
    );
}

export default EmployeeForm;