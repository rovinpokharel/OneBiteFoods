import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function ForgotPasswordPanel({ onSendResetEmail, onBackToLogin }) {
  const [email, setEmail] = useState('');

  const handleSendResetEmail = () => {
    if (!email.trim()) {
      alert('Please enter your email.');
      return;
    }
    onSendResetEmail(email);
  };

  const handleBackToLogin = () => {
    onBackToLogin();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>Enter your email to receive a password reset link:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#777"
      />
      <TouchableOpacity style={styles.button} onPress={handleSendResetEmail}>
        <Text style={styles.buttonText}>Send Reset Email</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBackToLogin}>
        <Text style={styles.backToLoginText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#777',
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#3F51B5',
    width: '80%',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backToLoginText: {
    marginTop: 20,
    color: '#3F51B5',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default ForgotPasswordPanel;
