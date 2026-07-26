import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export interface EmployeeData {
    employeeId: string;
    fullName: string;
    address: string;
    email: string;
    phone: string;
    positionTitle: string;
    department: string;
    dateOfHire: string;
}

export interface Employee extends EmployeeData {
    id: string;
    userId: string;
}

export async function createEmployee(
    employeeData: EmployeeData,
    userId: string
) {
    try {
        const docRef = await addDoc(
            collection(db, "employees"),
            {
                ...employeeData,
                userId: userId,
                createdAt: serverTimestamp()
            }
        );

        return docRef.id;
    } catch(error) {
        throw error;
    }
}

export async function getEmployees(userId: string): Promise<Employee[]> {
    try {
        const q = query(
            collection(db, "employees"),
            where("userId", "==", userId)
        );

        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<Employee, "id">),
        }));
    } catch (error) {
        throw error;
    }
}