import ProtectedRoute from "@/components/ProtectedRoute";

import EmployeeDetailsScreen from "@/screens/EmployeeDetailsScreen";

export default function EmployeeDetails() {

    return (
        <ProtectedRoute>
            <EmployeeDetailsScreen />
        </ProtectedRoute>
    );

}
