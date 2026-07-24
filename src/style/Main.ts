import { StyleSheet } from "react-native";

export const main = StyleSheet.create({
    alignment: {
        flex: 1,
        backgroundColor: "#f5f7fa",
    },

    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
    },

    logo: {
        fontSize: 72,
        marginBottom: 20,
    },

    title: {
        fontSize: 32,
        fontWeight: "700",
        marginBottom: 10,
    },

    subtitle: {
        textAlign: "center",
        color: "#666",
        fontSize: 16,
        marginBottom: 40,
    },

    primaryButton: {
        width: "100%",
        backgroundColor: "#2563eb",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 15,
    },

    primaryText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 16,
    },

    secondaryButton: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#2563eb",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
    },

    secondaryText: {
        color: "#2563eb",
        fontWeight: "700",
        fontSize: 16,
    },
});