import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export type News = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type response = {
  status: string;
  totalResults: number;
  articles: News[];
};

export const newsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://newsapi.org/v2/'}),
  endpoints: builder => ({
    getAllNews: builder.query<response, string>({
      query: (topic: string) =>
        `everything?q=${topic}&pageSize=3&apiKey=${process.env.NEWS_API_KEY}`,
    }),
  }),
});
