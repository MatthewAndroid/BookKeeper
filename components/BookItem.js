import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const BookItem = ({ book, onDelete }) => {
    const handleDelete = () => {
        Alert.alert(
            'Delete Book',
            'Are you sure you want to remove this book from your library?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => onDelete(book.id)
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>by {book.author}</Text>
                <View style={styles.details}>
                    <View style={styles.genreChip}>
                        <Text style={styles.details}>{book.genre}</Text>
                    </View>
                    {book.pages > 0 && (
                        <Text style={styles.pages}>{book.pages} pages</Text>
                    )}
                </View>
            </View>
            <TouchableOpacity style={styles.subtitle} onPress={handleDelete}>
                <MaterialIcons name="delete" size={20} color="#ff4757" />
            </TouchableOpacity>
        </View>
    );
};