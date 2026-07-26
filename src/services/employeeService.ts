import { collection, addDoc, serverTimestamp } from "firebase/firestore";
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