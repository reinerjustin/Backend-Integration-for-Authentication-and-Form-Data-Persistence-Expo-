import ProtectedRoute from "@/components/ProtectedRoute";
import EmployeeListScreen from "@/screens/EmployeeListScreen";

export default function Employees() {

    return (

        <ProtectedRoute>

            <EmployeeListScreen />

        </ProtectedRoute>

    );

}