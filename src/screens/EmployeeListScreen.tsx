import { useAuth } from "@/context/AuthContext";
import {
  Employee,
  deleteEmployeeById,
  getEmployees,
} from "@/services/employeeService";
import { styles } from "@/style/Shared";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";

export default function EmployeeListScreen() {
  const { user } = useAuth();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleDelete = async (id: string) => {
    try {
      await deleteEmployeeById(id);
      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
    } catch {
      setError("Unable to delete employee.");
    }
  };

  const handleUpdate = (employee: Employee) => {
    router.push({
      pathname: "/employee",
      params: {
        employee: JSON.stringify(employee),
      },
    });
  };

  const loadEmployees = async () => {
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
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.alignment}>
        <Text style={styles.error}>{error}</Text>

        <Pressable style={styles.primaryButton} onPress={loadEmployees}>
          <Text style={styles.loadingText}>Retry</Text>
        </Pressable>
      </View>
    );
  }

  if (employees.length === 0) {
    return (
      <View style={styles.alignment}>
        <Text style={styles.title}>No submission yet.</Text>

        <Pressable
          style={styles.primaryButton}
          onPress={() => router.push("/employee")}
        >
          <Text style={styles.loadingText}>Add Employee</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={{
        padding: 24,
        backgroundColor: "#f5f7fa",
      }}
      data={employees}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.cardSpacing}>
          <Pressable
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/employee-details",
                params: {
                  id: item.id,
                },
              })
            }
          >
            <Text style={styles.title}>{item.fullName}</Text>

            <Text>Employee ID: {item.employeeId}</Text>

            <Text>Department: {item.department}</Text>

            <Text>Position: {item.positionTitle}</Text>

            <Text>Email: {item.email}</Text>

            <Pressable
              style={styles.primaryButton}
              onPress={() => handleUpdate(item)}
            >
              <Text style={styles.loadingText}>Update</Text>
            </Pressable>

            <Pressable
              style={styles.secondaryButton}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={styles.secondaryButtonText}>Delete</Text>
            </Pressable>
          </Pressable>
        </View>
      )}
    />
  );
}
