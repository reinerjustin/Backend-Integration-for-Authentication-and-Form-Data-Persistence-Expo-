import { router } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { ActivityIndicator, View } from "react-native";

export default function ProtectedRoute({
    children
}:{
    children:React.ReactNode
}){
    const{
        user,
        loading
    } = useAuth();

    useEffect(()=>{
        router.replace("/signin");
    },[loading,user]);

    if(loading){
        return(
            <View>
                <ActivityIndicator size="large"/>
            </View>
        );
    }
    if(!user){
        return null;
    }

    return children;
}