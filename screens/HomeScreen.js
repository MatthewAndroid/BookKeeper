import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import {BookIcon} from '../components/BookIcon';
import {PlusIcon} from "../components/PlusIcon";
import {ListIcon} from "../components/ListIcon";


const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <BookIcon size={80} color="white" />
                </View>

                <Text style={styles.title}>BookKeeper</Text>

                <Text style={styles.subtitle}>
                    Add new books and manage your personal library.
                </Text>

                <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={() => navigation.navigate('MyBooks')}
                >
                    <ListIcon name="list" size={20} color="#fff" style={styles.buttonIcon} />
                    <Text style={styles.primaryButtonText}>View My Books</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.secondaryButton}
                    onPress={() => navigation.navigate()}
                >
                    <PlusIcon name="add" size={20} color="#1a1a2e" />
                    <Text style={styles.secondaryButtonText}>Add New Book</Text>
                </TouchableOpacity>

                <Text style={styles.footerText}>by Matthew Mayman</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    iconContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#1a1a2e',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a1a2e',
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 40,
        paddingHorizontal: 10,
    },
    primaryButton: {
        backgroundColor: '#1a1a2e',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        width: '100%',
        justifyContent: 'center',
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        width: '100%',
        justifyContent: 'center',
    },
    buttonIcon: {
        marginRight: 8,
    },
    primaryButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    secondaryButtonText: {
        color: '#1a1a2e',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
    footerText: {
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
    },
});

export default HomeScreen;