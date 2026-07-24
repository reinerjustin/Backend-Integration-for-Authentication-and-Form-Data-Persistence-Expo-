import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    alignment: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
        backgroundColor: "#f5f7fa",
    },

    card: {
        backgroundColor: "#fff",
        padding: 24,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        elevation: 5,
    },

    title: {
        fontSize: 28,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 30,
    },

    label: {
        fontSize: 15,
        fontWeight: "600",
        marginBottom: 6,
        marginTop: 14,
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 16,
        backgroundColor: "#fff",
    },

    error: {
        color: "#d32f2f",
        marginTop: 4,
        marginLeft: 4,
        fontSize: 13,
    },

    showButton: {
        alignSelf: "flex-end",
        marginTop: 6,
    },

    showText: {
        color: "#2563eb",
        fontWeight: "600",
    },

    primaryButton: {
        backgroundColor: "#2563eb",
        marginTop: 30,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
    },

    primaryButtonDisabled: {
        backgroundColor: "#9dbcf5",
    },

    primaryButtonText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 16,
    },

    secondaryButton: {
        marginTop: 12,
        borderWidth: 1,
        borderColor: "#2563eb",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
    },

    secondaryButtonText: {
        color: "#2563eb",
        fontWeight: "600",
    },

    footer: {
        marginTop: 24,
        alignItems: "center",
    },

    footerText: {
        color: "#2563eb",
        fontWeight: "600",
    },

    loadingRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    loadingText: {
        color: "#fff",
        marginLeft: 10,
        fontWeight: "600",
    },
});