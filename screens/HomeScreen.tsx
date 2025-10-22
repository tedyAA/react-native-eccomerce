import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Hero from 'components/Hero';
import { ProductItem } from 'components/ProductItem';

export const HomeScreen = () => {
  return (
    <ScrollView
      className="flex-1"
      contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 60 }}
      showsVerticalScrollIndicator={false}>
      <Hero heroImg={require('../assets/hero_img.jpg')} />

      {/* Section title */}
      <View className="mt-8 space-y-4">
        <View className="mb-3 flex-row items-center gap-2">
          <Text className="text-3xl font-bold text-gray-500">
            Latest<Text className="text-gray-700"> Collection</Text>
          </Text>
          <View className="h-[1px] w-8 bg-gray-700 sm:h-[2px] sm:w-12" />
        </View>
      </View>
      <Text className="text-gray-600">
        Lorem Ipsum is a simply dummy text of the printing and typesetting industry.
      </Text>

      {/* Product carousel */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4 space-x-4">
        {[...Array(5)].map((_, index) => (
          <ProductItem key={index} />
        ))}
      </ScrollView>
      {/* Section title */}
      <View className="mt-8 space-y-4">
        <View className="mb-3 flex-row items-center gap-2">
          <Text className="text-3xl font-bold text-gray-500">
            Best<Text className="text-gray-700">Sellers</Text>
          </Text>
          <View className="h-[1px] w-8 bg-gray-700 sm:h-[2px] sm:w-12" />
        </View>
      </View>
      <Text className="text-gray-600">
        Lorem Ipsum is a simply dummy text of the printing and typesetting industry.
      </Text>

      {/* Product carousel */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4 space-x-4">
        {[...Array(5)].map((_, index) => (
          <ProductItem key={index} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};
