import getFoodData from '@/utils/lib/getFoodData';

export async function load() {
  const foodData = await getFoodData();

  return {
    foodData,
  };
}
