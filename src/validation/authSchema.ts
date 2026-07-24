import * as Yup from "yup";

export const signInSchema = Yup.object({
    email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),

        password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(/[^a-zA-Z0-9]/, "Password must contain at least one special character"),
});

export const signUpSchema = Yup.object({
    fullName: Yup.string()
        .required("Full Name is required")
        .min(3, "Minimum of 3 characters")
        .max(50, "Maximum of 50 characters")
        .matches(/^[A-Za-z ]+$/, "Only letters and spaces are allowed"),

    email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),

    password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(/[^a-zA-Z0-9]/, "Password must contain at least one special character"),

    confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password")], "Passwords must match")
});