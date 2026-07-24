import { router } from "expo-router";
import { ReactNode, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { ActivityIndicator, View } from "react-native";

interface ProtectedRouteProps {
    children: ReactNode;
}

export default function ProtectedRoute({
    children
}: ProtectedRouteProps) {
    const {
        user,
        loading
    } = useAuth();

    useEffect(()=> {
        if (!loading && !user) {
            router.replace("/signin");
        }
    }, [loading, user]);

    if (loading) {
        return (
            <View style = {{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "f5f7fa"
            }}
            >
                <ActivityIndicator
                    size = "large"
                    color = "2563eb"
                />
            </View>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <>
            {children}
        </>
    );
}