import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import auth from '../api/users/auth';
import { useNavigation } from '@react-navigation/native';

export const AccountScreen = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<any>();

  useEffect(() => {
    (async () => {
      const currentUser = await auth.current();
      setUser(currentUser);
      setLoading(false);
    })();
  }, []);

  return (
    <View className="flex-1 justify-center bg-gray-900 px-8">
      <Text className="mb-6 text-center text-4xl font-bold text-white">Account</Text>
      {user ? (
        <View>
          <Text className="mb-2 text-lg text-white">
            Name: {user.first_name} {user.last_name}
          </Text>
          <Text className="text-lg text-white">Email: {user.email}</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="mt-4 text-center text-blue-400">Already have an account? Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
