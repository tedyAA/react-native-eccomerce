import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleRegister = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    Alert.alert('Success', `Logged in with: ${email}`);
  };

  return (
    <View className="flex-1 justify-center bg-gray-900 px-8">
      <Text className="mb-12 text-center text-4xl font-bold text-white">Register</Text>

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
        className="mb-4 h-12 items-center justify-center rounded-xl bg-blue-500"
        onPress={handleRegister}>
        <Text className="text-lg font-bold text-white">Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text className="mt-4 text-center text-blue-400">Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};
