import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Hero from 'components/Hero';
import { ProductItem } from 'components/ProductItem';
import products from 'api/products';

export const HomeScreen = () => {
  const [bestsellers, setBestsellers] = useState<Product[]>([]);
  const [bestsellersLoading, setBestsellersLading] = useState<boolean>(true);
  const [latestCollection, setLatestCollection] = useState<Product[]>([]);
  const [latestCollectionLoading, setLatestCollectionLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        setBestsellersLading(true);
        const response = await products.index({ bestseller: true, per: 5, page: 1, random: true });
        setBestsellers(response.data.products);
      } catch (error) {
        console.error('Failed to fetch bestsellers:', error);
      } finally {
        setBestsellersLading(false);
      }
    };
    const fetchLatestCollection = async () => {
      try {
        setLatestCollectionLoading(true);
        const response = await products.index({ per: 5, page: 1, random: true });
        setLatestCollection(response.data.products);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLatestCollectionLoading(false);
      }
    };
    fetchBestsellers();
    fetchLatestCollection();
  }, []);

  type Product = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    bestseller?: boolean;
  };

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
        {!latestCollectionLoading && latestCollection.length > 0 && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4 space-x-4">
            {latestCollection.map((product: Product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ScrollView>
        )}
      </ScrollView>
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
        {!bestsellersLoading && bestsellers.length > 0 && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4 space-x-4">
            {bestsellers.map((product: Product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ScrollView>
        )}
      </ScrollView>
    </ScrollView>
  );
};
