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

  const details = [
    { label: "Employee ID", value: employee.employeeId },
    { label: "Address", value: employee.address },
    { label: "Email", value: employee.email },
    { label: "Phone", value: employee.phone },
    { label: "Position", value: employee.positionTitle },
    { label: "Department", value: employee.department },
    { label: "Date of Hire", value: employee.dateOfHire },
  ];

  return (
    <View style={styles.alignment}>
      <View style={styles.card}>
        <Text style={styles.title}>{employee.fullName}</Text>

        <View style={styles.detailsMargin}>
          {details.map((item) => (
            <View key={item.label} style={styles.detailRow}>
              <Text style={styles.detailLabel}>{item.label}</Text>

              <Text style={styles.detailValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
