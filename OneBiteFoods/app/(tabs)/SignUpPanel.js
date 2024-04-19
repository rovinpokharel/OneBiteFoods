import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

function SignUpPanel({ onSignUp, onLoginButton }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSignUp = () => {
        if (!firstName.trim()) {
            alert('Please enter your first name.');
            return;
        }
        if (!lastName.trim()) {
            alert('Please enter your last name.');
            return;
        }
        if (!email.trim()) {
            alert('Please enter your email.');
            return;
        }
        if (!password.trim()) {
            alert('Please enter your password.');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
        if (!termsAccepted) {
            alert('Please accept terms of use and privacy policy.');
            return;
        }
        onSignUp({ firstName, lastName, email, password });
    };

    const handleLoginButton = () => {
        onLoginButton();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Login/Sign Up</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={firstName}
                        onChangeText={setFirstName}
                        placeholder="First Name"
                        placeholderTextColor="#777"
                    />
                    <TextInput
                        style={styles.input}
                        value={lastName}
                        onChangeText={setLastName}
                        placeholder="Last Name"
                        placeholderTextColor="#777"
                    />
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#777"
                    />
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        secureTextEntry
                        placeholderTextColor="#777"
                    />
                    <TextInput
                        style={styles.input}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder="Confirm Password"
                        secureTextEntry
                        placeholderTextColor="#777"
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <TouchableOpacity
                        style={styles.checkbox}
                        onPress={() => setTermsAccepted(!termsAccepted)}
                    >
                        {termsAccepted && <View style={styles.checkedBox} />}
                    </TouchableOpacity>
                    <Text style={styles.checkboxText}>
                        I accept the terms of use and privacy policy
                    </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLoginButton}>
                    <Text style={styles.loginButtonText}>Already Hava an Account? Login Here</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Light orange for restaurant theme
    },
    card: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333333', // White text
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: '#000', // Black text
        backgroundColor: '#fff', // White background
    },
    button: {
        backgroundColor: '#3F51B5', // Blue color for button color
        width: '100%',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginButtonText: {
        marginTop: 20,
        color: '#3F51B5', // Blue color for login link
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#aaa',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checkedBox: {
        width: 14,
        height: 14,
        backgroundColor: '#3F51B5', // Blue color for checked box
    },
    checkboxText: {
        color: '#fff',
    },
});

export default SignUpPanel;
