import * as Yup from "yup";

export const employeeSchema = Yup.object({
    employeeId: Yup.string()
        .required("Employee ID is required")
        .matches(/^(000)?\d{6}$/, "Employee ID must be 6 digits or start with 000 followed by 6 digits."),

    fullName: Yup.string()
        .required("Full Name is required")
        .min(3, "Minimum of 3 characters")
        .max(50, "Maximum of 50 characters")
        .matches(/^[A-Za-z ]+$/, "Only letters and spaces are allowed"),

    address: Yup.string()
        .required("Address is required")
        .min(5, "Address is too short")
        .max(100, "Address is too long")
        .matches(/^[A-Za-z0-9\s]+$/, "Address can only contain letters, numbers, and spaces"),

    email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),

    phone: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),

    positionTitle: Yup.string()
        .required("Position Title is required")
        .min(5, "Minimum of 5 characters")
        .max(20, "Maximum of 20 characters")
        .matches(/^[A-Za-z ]+$/, "Only letters and spaces are allowed"),

    department: Yup.string()
        .required("Department is required")
        .min(2, "Minimum of 2 characters"),

    dateOfHire: Yup.date()
        .required("Date of Hire is required")
        .max(new Date(), "Date of Hire cannot be in the future")
    
})