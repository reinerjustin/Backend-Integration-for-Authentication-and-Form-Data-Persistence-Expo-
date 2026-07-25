import ProtectedRoute from "@/components/ProtectedRoute";
import EmployeeForm from "@/screens/EmployeeForm";

export default function Employee() {
  return (
    <ProtectedRoute>
      <EmployeeForm />
    </ProtectedRoute>
  );
}
