import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import { styles } from "@/style/Shared";
import { useAuth } from "@/context/AuthContext";
import { getEmployees, Employee } from "@/services/employeeService";

export default function EmployeeListScreen() {
    const { user } = useAuth();
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const loadEmployees = async() => {
        if (!user) return;

        try {
            setLoading(true);
            setError("");
            const data = await getEmployees(user.uid);
            setEmployees(data);
        } catch {
            setError("Unable to load employee records.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadEmployees();
    }, []);

    if (loading) {
        return (
            <View style={styles.alignment}>
                <ActivityIndicator size= "large"/>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.alignment}>

                <Text>{error}</Text>

                <Pressable
                    style={styles.primaryButton}
                    onPress={loadEmployees}
                >

                    <Text style={styles.loadingText}>
                        Retry
                    </Text>

                </Pressable>
            </View>
        );
    }

    if (employees.length === 0) {
        return (
            <View style={styles.alignment}>

                <Text>No submission yet.</Text>

                <Pressable
                    style={styles.primaryButton}
                    onPress={() => router.push("/employee")}
                >
                    <Text style={styles.loadingText}>
                        Add Employee
                    </Text>

                </Pressable>

            </View>
        );
    }

    return (
        <FlatList
            data={employees}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (

                <Pressable 
                    style={styles.card}
                    onPress={() =>
                        router.push({
                            pathname: "/employee-details",
                            params: {
                                id: item.id
                            }
                        })
                    }
                >

                    <Text style={styles.title}>
                        {item.fullName}
                    </Text>

                    <Text>
                        Employee ID: {item.employeeId}
                    </Text>

                    <Text>
                        Department: {item.department}
                    </Text>

                    <Text>
                        Position: {item.positionTitle}
                    </Text>

                    <Text>
                        Email: {item.email}
                    </Text>

                </Pressable>
            )}
        />
    );
}
