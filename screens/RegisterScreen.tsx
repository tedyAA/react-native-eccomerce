import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../api/users/auth';

export const RegisterScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<any>();

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    try {
      setLoading(true);
      const response = await api.signup(firstName, lastName, email, password);

      if (response?.data) {
        Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', 'Something went wrong. Please try again.');
      }
    } catch (error: any) {
      console.error('Signup error:', error);
      Alert.alert('Signup Failed', error.response?.data?.message || 'Please check your input.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center bg-gray-900 px-8">
      <Text className="mb-12 text-center text-4xl font-bold text-white">Create Account</Text>

      <TextInput
        className="mb-4 h-12 rounded-xl bg-gray-800 px-4 text-white"
        placeholder="First Name"
        placeholderTextColor="#aaa"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        className="mb-4 h-12 rounded-xl bg-gray-800 px-4 text-white"
        placeholder="Last Name"
        placeholderTextColor="#aaa"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        className="mb-4 h-12 rounded-xl bg-gray-800 px-4 text-white"
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        className="mb-6 h-12 rounded-xl bg-gray-800 px-4 text-white"
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        disabled={loading}
        className={`mb-4 h-12 items-center justify-center rounded-xl ${
          loading ? 'bg-blue-400' : 'bg-blue-500'
        }`}
        onPress={handleRegister}>
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-lg font-bold text-white">Register</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text className="mt-4 text-center text-blue-400">Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};
