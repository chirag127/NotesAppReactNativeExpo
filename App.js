import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");

    // Load notes from AsyncStorage when the app starts
    useEffect(() => {
        loadNotes();
    }, []);

    // Save notes to AsyncStorage
    const saveNotes = async (notes) => {
        try {
            await AsyncStorage.setItem("notes", JSON.stringify(notes));
        } catch (error) {
            console.error("Error saving notes:", error);
        }
    };

    // Load notes from AsyncStorage
    const loadNotes = async () => {
        try {
            const storedNotes = await AsyncStorage.getItem("notes");
            if (storedNotes) {
                setNotes(JSON.parse(storedNotes));
            }
        } catch (error) {
            console.error("Error loading notes:", error);
        }
    };

    // Add a new note
    const addNote = () => {
        if (newNote.trim() === "") {
            Alert.alert("Error", "Note cannot be empty!");
            return;
        }
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
        saveNotes(updatedNotes);
        setNewNote("");
    };

    // Delete a note
    const deleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
        saveNotes(updatedNotes);
    };

    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: "#f8f8f8" }}>
            <Text
                style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}
            >
                Notes App
            </Text>

            <TextInput
                style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 10,
                    marginBottom: 10,
                    borderRadius: 5,
                    backgroundColor: "#fff",
                }}
                placeholder="Write a note..."
                value={newNote}
                onChangeText={setNewNote}
            />

            <TouchableOpacity
                onPress={addNote}
                style={{
                    backgroundColor: "blue",
                    padding: 10,
                    borderRadius: 5,
                    alignItems: "center",
                    marginBottom: 20,
                }}
            >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                    Add Note
                </Text>
            </TouchableOpacity>

            <FlatList
                data={notes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View
                        style={{
                            backgroundColor: "white",
                            padding: 10,
                            marginBottom: 10,
                            borderRadius: 5,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text>{item}</Text>
                        <TouchableOpacity onPress={() => deleteNote(index)}>
                            <Text style={{ color: "red", fontWeight: "bold" }}>
                                Delete
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}
