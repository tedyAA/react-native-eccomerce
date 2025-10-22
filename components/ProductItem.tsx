import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

type Product = {
  id: string;
  name: string;
  price: number;
  image_urls?: string[];
};

type ProductItemProps = {
  product: Product;
};

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const productImage = product?.image_urls?.[0] || 'https://placehold.co/600x400?font=roboto';

  return (
    <View className="p-2">
      {/* Navigate to Product Details */}
      <TouchableOpacity>
        <View className="mx-2 h-80 overflow-hidden rounded-xl border-2 border-gray-300">
          <Image source={{ uri: productImage }} className="h-80 w-48" resizeMode="cover" />
        </View>
      </TouchableOpacity>

      {/* Product Info + Cart */}
      <View className="mt-2 w-48 flex-row items-center justify-between">
        <View>
          <Text className="pb-1 pt-2 text-sm text-gray-700">{product.name}</Text>
          <Text className="pb-2 pt-1 text-sm text-gray-500">{product.price / 100} $</Text>
        </View>

        <TouchableOpacity>
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
