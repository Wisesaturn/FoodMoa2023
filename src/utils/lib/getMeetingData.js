// @ts-nocheck
import { Client, LogLevel } from '@notionhq/client';

export default async function getMeetingData() {
  if (typeof window !== 'undefined') return;

  const notion = new Client({
    auth: process.env.NOTION_KEY,
    logLevel: LogLevel.DEBUG,
  });

  // 1. Loading Data (노션에서 데이터 로드)
  const meetingData = await notion.databases.query({
    database_id: process.env.DATABASE_MEETING_KEY,
  });

  // 2. filtering Data (개인 일정 아닌 것만 색출)
  const filteredMeetingData = meetingData.results.filter((meeting) => {
    const location = meeting.properties.어디갔어요.multi_select;
    return location.length > 0 && location[0].name !== '[일정]';
  });

  // 3. Parsing Data (데이터 파싱)
  const parseMeetingData = filteredMeetingData.map((data) => {
    const { id, properties } = data;
    const { 날짜, 이름, 어디갔어요 } = properties;

    // Data Info Filtering //
    const dateInfo = 날짜.date;
    const nameInfo = 이름.title[0];
    const locationInfo = 어디갔어요.multi_select;
    const countInfo = properties['D-day'].formula.string;
    const commentInfo = properties['한 줄 요약'].rich_text;
    const foodInfo = properties['😋 맛집'].relation;
    const cafeInfo = properties['☕ 카페'].relation;
    // Data Info Filtering //

    // Data Parsing //
    const meetingDate = {
      startDate: dateInfo.start,
      endDate: dateInfo.end,
    };
    const meetingName = nameInfo.plain_text;
    const meetingLocation = locationInfo.map((locate) => ({
      id: locate.id,
      name: locate.name,
    }));
    const meetingCount = countInfo.split('일')[0];
    const meetingComment = commentInfo.length > 0 ? commentInfo[0].plain_text : '';
    const meetingFood = foodInfo.length > 0 ? foodInfo.map((food) => food.id) : '';
    const meetingCafe = cafeInfo.length > 0 ? cafeInfo.map((cafe) => cafe.id) : '';
    // Data Parsing //

    return {
      meetingIdx: id,
      meetingDate,
      meetingName,
      meetingLocation,
      meetingCount,
      meetingComment,
      meetingFood,
      meetingCafe,
    };
  });

  return parseMeetingData;
}
