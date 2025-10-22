import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

interface HeroProps {
  heroImg: any;
}

const Hero: React.FC<HeroProps> = ({ heroImg }) => {
  return (
    <ImageBackground
      source={heroImg}
      resizeMode="cover"
      className="flex-1 justify-center px-8 py-16"
      imageStyle={{ opacity: 0.9 }}>
      {/* Overlay */}
      <View className="absolute inset-0 bg-black/40" />

      <View className="relative z-10 max-w-md">
        <View className="mb-3 flex-row items-center">
          <View className="h-[2px] w-8 bg-white" />
          <Text className="ml-2 text-sm font-medium text-white">OUR BEST SELLER</Text>
        </View>

        <Text className="mb-4 text-5xl font-bold leading-snug text-white">Latest Arrivals</Text>

        <TouchableOpacity className="flex-row items-center">
          <Text className="text-base font-semibold text-white">SHOP NOW</Text>
          <View className="ml-2 h-[2px] w-8 bg-white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Hero;
