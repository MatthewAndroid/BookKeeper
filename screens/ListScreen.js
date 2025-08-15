import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    FlatList,
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import {PlusIcon} from "../components/PlusIcon";
import {TrashIcon} from "../components/TrashIcon";
import {BookIcon} from "../components/BookIcon";

const ListScreen = ({ navigation, route }) => {
    const [books, setBooks] = useState(route.params?.books || []);
    const bookIdCounter = useRef(route.params?.nextId || 1);

    useFocusEffect(
        React.useCallback(() => {
            if (route.params?.newBook) {
                const updatedBooks = [...books, {
                    ...route.params.newBook,
                    id: bookIdCounter.current++
                }];
                setBooks(updatedBooks);
                navigation.setParams({
                    newBook: undefined,
                    books: updatedBooks,
                    nextId: bookIdCounter.current
                });
            }
        }, [route.params?.newBook, books, navigation])
    );

    const deleteBook = (bookId) => {
        const updatedBooks = books.filter(book => book.id !== bookId);
        setBooks(updatedBooks);
        navigation.setParams({ books: updatedBooks });
    };

    const renderBookItem = ({ item }) => (
        <View style={styles.bookItem}>
            <View style={styles.bookContent}>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookAuthor}>by {item.author}</Text>
                <View style={styles.bookDetails}>
                    <View style={styles.genreChip}>
                        <Text style={styles.genreText}>{item.genre}</Text>
                    </View>
                    {item.pages > 0 && (
                        <Text style={styles.pagesText}>{item.pages} pages</Text>
                    )}
                </View>
            </View>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteBook(item.id)}
            >
                <TrashIcon name="delete" size={24} color="#ff4444" />
            </TouchableOpacity>
        </View>
    );

    const renderEmptyState = () => (
        <View style={styles.emptyContainer}>
            <View style={styles.emptyIconContainer}>
                <BookIcon name="menu-book" size={60} color="#ccc"/>
            </View>
            <Text style={styles.emptyTitle}>No books yet</Text>
            <Text style={styles.emptySubtitle}>
                Start building your library by adding your first book.
            </Text>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('add', {
                    currentBooks: books,
                    nextId: bookIdCounter.current
                })}
            >
                <PlusIcon name="add" size={20} color="#fff"/>
                <Text style={styles.addButtonText}>Add First Book</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Books</Text>
                <TouchableOpacity
                    style={styles.addHeaderButton}
                    onPress={() => navigation.navigate('add', {
                        currentBooks: books,
                        nextId: bookIdCounter.current
                    })}
                >
                    <PlusIcon name="add" size={18} color="#fff"/>
                    <Text style={styles.addHeaderButtonText}>Add</Text>
                </TouchableOpacity>
            </View>

            {books.length === 0 ? (
                renderEmptyState()
            ) : (
                <FlatList
                    data={books}
                    keyExtractor={(item) => item.id}
                    renderItem={renderBookItem}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                />
            )}
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
        paddingHorizontal: 16,
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
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        flex: 1,
        textAlign: 'center',
        marginHorizontal: 16,
    },
    addHeaderButton: {
        backgroundColor: '#1a1a2e',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
    },
    addHeaderButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 4,
    },
    listContainer: {
        padding: 16,
    },
    bookItem: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    bookContent: {
        flex: 1,
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1a1a2e',
        marginBottom: 4,
    },
    bookAuthor: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    bookDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    genreChip: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginRight: 10,
    },
    genreText: {
        fontSize: 12,
        color: '#666',
        fontWeight: '500',
    },
    pagesText: {
        fontSize: 12,
        color: '#999',
    },
    deleteButton: {
        padding: 8,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingTop: 100,
    },
    emptyIconContainer: {
        marginBottom: 20,
    },
    emptyTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    emptySubtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 22,
    },
    addButton: {
        backgroundColor: '#1a1a2e',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
});

export default ListScreen;