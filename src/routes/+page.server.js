import getFoodData from '@/utils/lib/getFoodData';
import getCafeData from '@/utils/lib/getCafeData';
import getMeetingData from '@/utils/lib/getMeetingData';

export async function load() {
  const foodData = await getFoodData();
  const cafeData = await getCafeData();
  const meetingData = await getMeetingData();
  console.log(meetingData);

  return {
    foodData,
    cafeData,
    meetingData,
  };
}
