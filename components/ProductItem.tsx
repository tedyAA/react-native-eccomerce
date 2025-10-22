import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

export const ProductItem = () => {
  return (
    <View className="flex-1 items-center justify-center p-5">
      <View className="overflow-hidden rounded-xl border-2 border-gray-300">
        <Image
          source={require('../assets/placeholder.jpg')}
          className="h-64 w-48"
          resizeMode="cover"
        />
      </View>
      <View className="mt-2 w-48 flex-row items-center justify-between">
        <View>
          <Text className="text-lg font-semibold">Lorem Ipsum</Text>
          <Text className="text-gray-600">550$</Text>
        </View>
        <TouchableOpacity className="p-1">
          <Image
            source={require('../assets/icons/cart_icon.png')}
            className="h-6 w-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
