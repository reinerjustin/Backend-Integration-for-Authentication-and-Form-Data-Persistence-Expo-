import { db } from "@/firebase/config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

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
  userId: string,
) {
  try {
    const docRef = await addDoc(collection(db, "employees"), {
      ...employeeData,
      userId: userId,
      createdAt: serverTimestamp(),
    });

    return docRef.id;
  } catch (error) {
    throw error;
  }
}

export async function getEmployees(userId: string): Promise<Employee[]> {
  try {
    const q = query(collection(db, "employees"), where("userId", "==", userId));

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Employee, "id">),
    }));
  } catch (error) {
    throw error;
  }
}

export async function getEmployeeById(id: string) {
  const docRef = doc(db, "employees", id);

  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    throw new Error("Employee not found.");
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<Employee, "id">),
  };
}

export async function deleteEmployeeById(id: string) {
  try {
    await deleteDoc(doc(db, "employees", id));
  } catch (error) {
    throw error;
  }
}

export async function updateEmployee(
  id: string,
  employeeData: EmployeeData,
  userId: string,
) {
  try {
    const docRef = doc(db, "employees", id);

    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      throw new Error("Employee not found.");
    }

    if (snapshot.data().userId !== userId) {
      throw new Error("You do not have permission to update this employee.");
    }

    await updateDoc(docRef, {
      ...employeeData,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    throw error;
  }
}
