import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Alert,
    ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {BookPlusIcon} from "../components/BookPlusIcon";
import {ArrowBackIcon} from "../components/ArrowBackIcon";

const AddBookScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [pages, setPages] = useState('');

    const handleAddBook = () => {
        if (!title.trim() || !author.trim()) {
            Alert.alert('Error', 'Title AND Author required');
            return;
        }

        const newBook = {
            title: title.trim(),
            author: author.trim(),
            genre: genre || 'Other',
            pages: pages ? parseInt(pages) : 0,
        };

        Alert.alert(
            'Success',
            'Book added to your library!',
            [{
                text: 'OK',
                onPress: () => {
                    navigation.navigate('list', { newBook });
                }
            }]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.7}
                >
                    <ArrowBackIcon name="arrow-back" size={24} color="#1a1a2e" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Add New Book</Text>
                <View style={styles.placeholder} />
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text style={styles.label}>Book Title *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter book title"
                        value={title}
                        onChangeText={setTitle}
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Author *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter author name"
                        value={author}
                        onChangeText={setAuthor}
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Genre</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={genre}
                            style={styles.picker}
                            onValueChange={(itemValue) => setGenre(itemValue)}
                            mode="dropdown"
                        >
                            <Picker.Item label="Select a genre" value="" />
                            <Picker.Item label="Fiction" value="Fiction" />
                            <Picker.Item label="Non-Fiction" value="Non-Fiction" />
                            <Picker.Item label="Mystery" value="Mystery" />
                            <Picker.Item label="Romance" value="Romance" />
                            <Picker.Item label="Sci-Fi" value="Sci-Fi" />
                            <Picker.Item label="Fantasy" value="Fantasy" />
                            <Picker.Item label="Biography" value="Biography" />
                            <Picker.Item label="History" value="History" />
                            <Picker.Item label="Self-Help" value="Self-Help" />
                            <Picker.Item label="Poetry" value="Poetry" />
                            <Picker.Item label="Drama" value="Drama" />
                            <Picker.Item label="Other" value="Other" />
                        </Picker>
                    </View>

                    <Text style={styles.label}>Number of Pages</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter number of pages (optional)"
                        value={pages}
                        onChangeText={setPages}
                        keyboardType="numeric"
                        placeholderTextColor="#999"
                    />
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.addButton} onPress={handleAddBook}>
                    <BookPlusIcon name="boolkplus" size={20} color="#fff" />
                    <Text style={styles.addButtonText}>Add Book to Library</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    backButton: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1a1a2e',
    },
    placeholder: {
        width: 40,
    },
    content: {
        flex: 1,
    },
    form: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1a1a2e',
        marginBottom: 8,
        marginTop: 15,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        color: '#333',
    },
    pickerContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        overflow: 'hidden',
    },
    picker: {
        height: 50,
        width: '100%',
        color: '#333',
    },
    footer: {
        padding: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    addButton: {
        backgroundColor: '#1a1a2e',
        paddingVertical: 15,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
});

export default AddBookScreen;