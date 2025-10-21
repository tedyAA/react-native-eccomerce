import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    Alert.alert('Success', `Logged in with: ${email}`);
  };

  return (
    <View className="flex-1 justify-center bg-gray-900 px-8">
      <Text className="mb-12 text-center text-4xl font-bold text-white">Login</Text>

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
        onPress={handleLogin}>
        <Text className="text-lg font-bold text-white">Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text className="mt-4 text-center text-blue-400">Don't have an account? Register</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="text-center text-gray-400">Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};
