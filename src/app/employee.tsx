import EmployeeForm from "@/screens/EmployeeForm";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Employee() {
    return (
        <ProtectedRoute>

            <EmployeeForm />

        </ProtectedRoute>
    );
}