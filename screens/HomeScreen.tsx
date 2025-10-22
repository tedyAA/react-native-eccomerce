import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Hero from 'components/Hero';

export const HomeScreen = () => {
  return (
    <ScrollView
      className="flex-1"
      contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 60 }}>
      <Hero heroImg={require('../assets/hero_img.jpg')} />

      <View className="mt-8 space-y-4">
        <View className="mb-3 inline-flex items-center gap-2">
          <Text className="text-3xl font-bold text-gray-500">
            Latest<Text className="text-gray-700">Collection</Text>
          </Text>
          <Text className="h-[1px] w-8 bg-gray-700 sm:h-[2px] sm:w-12" />
        </View>
      </View>
    </ScrollView>
  );
};
