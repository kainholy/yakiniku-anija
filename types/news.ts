export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  eye_catch: {
    url: string;
    height: number;
    width: number;
  };
  content: string;
};

export type NewsApiResponse = {
  contents: News[];
  totalCount: number;
  offset: number;
  limit: number;
};
