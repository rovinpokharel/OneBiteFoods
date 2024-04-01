import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function LoginPanel({ navigation, onLogin, onForgotPassword, onSignUpButton }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.trim()) {
      alert('Please enter your email.');
      return;
    }
    if (!password.trim()) {
      alert('Please enter your password.');
      return;
    }
    onLogin({ email, password });
  };

  const handleForgotPassword = () => {
    onForgotPassword();
  };

  const handleSignUpButton = () => {
    navigation.navigate('SignUpPanel'); // Navigate to SignUpPanel
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Welcome to OneBiteFood</Text>
      <View style={styles.cardContainer}>
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
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSignUpButton}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <Text style={styles.orText}>OR</Text>
      {/* Add buttons for social login */}
      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#db4437' }]}>
        <Text style={styles.socialButtonText}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#db4437' }]}>
        <Text style={styles.socialButtonText}>Google</Text>
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
  appTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333',
  },
  cardContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#3F51B5',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    marginTop: 10,
    color: '#3F51B5',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  signupButtonText: {
    marginTop: 10,
    color: '#3F51B5',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  orText: {
    fontSize: 20,
    color: '#333',
    marginBottom: 10,
  },
  socialButton: {
    backgroundColor: '#db4437',
    width: '80%',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginPanel;
