import { Client, LogLevel } from '@notionhq/client';

export async function load() {
  const notion = new Client({
    auth: process.env.NOTION_KEY,
    logLevel: LogLevel.DEBUG,
  });

  const getData = async () => {
    const blogPage = await notion.databases.query({
      database_id: process.env.DATABASE_FOOD_KEY,
    });
    console.log(blogPage);
  };

  return {};
}
