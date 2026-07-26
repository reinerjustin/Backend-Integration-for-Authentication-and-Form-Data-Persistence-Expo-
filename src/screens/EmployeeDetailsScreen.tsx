import { Employee, getEmployeeById } from "@/services/employeeService";
import { styles } from "@/style/Shared";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function EmployeeDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getEmployeeById(id as string);
        setEmployee(data);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) {
    return (
      <View style={styles.alignment}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!employee) {
    return (
      <View style={styles.alignment}>
        <Text>Employee not found.</Text>
      </View>
    );
  }

  return (
    // <ScrollView style={styles.alignment}>

    <View style={styles.card}>
      <Text style={styles.title}>{employee.fullName}</Text>

      <Text>Employee ID: {employee.employeeId}</Text>

      <Text>Address: {employee.address}</Text>

      <Text>Email: {employee.email}</Text>

      <Text>Phone: {employee.phone}</Text>

      <Text>Position: {employee.positionTitle}</Text>

      <Text>Department: {employee.department}</Text>

      <Text>Date of Hire: {employee.dateOfHire}</Text>
    </View>

    // </ScrollView>
  );
}
