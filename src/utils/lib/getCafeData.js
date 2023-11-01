// @ts-nocheck
import { Client, LogLevel } from '@notionhq/client';

export default async function getCafeData() {
  if (typeof window !== 'undefined') return;

  const notion = new Client({
    auth: process.env.NOTION_KEY,
    logLevel: LogLevel.DEBUG,
  });

  // 1. Loading Data (노션에서 데이터 로드)
  const cafeData = await notion.databases.query({
    database_id: process.env.DATABASE_CAFE_KEY,
  });

  // 2. filtering Data (다녀온 곳만 색출)
  const filteredCafeData = cafeData.results.filter(
    (cafe) => cafe.properties.다녀옴.select.name !== '아니!'
  );

  // 3. Parsing Data (데이터 파싱)
  const parseCafeData = filteredCafeData.map((data) => {
    const { id, properties } = data;
    const { 날짜, 위치, 이름, 설명, 재한평점, 태희평점 } = properties;

    // Data Info Filtering //
    const dateInfo = properties['💞 데이트'].relation;
    const locationInfo = 위치.select;
    const nameInfo = 이름.title[0];
    const explainInfo = 설명.rich_text[0];
    const valueJaehanInfo = 재한평점.formula;
    const valueTaeHeeInfo = 태희평점.formula;
    // Data Info Filtering //

    // Data Parsing //
    const cafeDate = 날짜.rollup.array.map((data, idx) => ({
      startDate: data.date.start,
      endDate: data.date.end,
      dateIdx: dateInfo[idx].id,
    }));
    const cafeLocation = {
      locationIdx: locationInfo.id,
      locationName: locationInfo.name,
    };
    const cafeName = nameInfo.plain_text;
    const cafeExplain = explainInfo.plain_text;
    const cafeValue = {
      jaeHanValue: valueJaehanInfo.number,
      taeHeeValue: valueTaeHeeInfo.number,
    };
    // Data Parsing //

    return {
      cafeIdx: id,
      cafeDate,
      cafeLocation,
      cafeName,
      cafeExplain,
      cafeValue,
    };
  });

  return parseCafeData;
}
