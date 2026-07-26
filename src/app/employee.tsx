import ProtectedRoute from "@/components/ProtectedRoute";
import EmployeeForm, { EmployeeRecord } from "@/screens/EmployeeForm";
import { useLocalSearchParams } from "expo-router";

export default function Employee() {
  const { employee } = useLocalSearchParams();

  const employeeData: EmployeeRecord | undefined = employee
    ? JSON.parse(employee as string)
    : undefined;

  return (
    <ProtectedRoute>
      <EmployeeForm employee={employeeData} />
    </ProtectedRoute>
  );
}
