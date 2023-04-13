export interface IPost {
  id: number;
  category: string;
  date: string;
  description: string;
  name: string;
  liked: boolean;
}

export interface IPostParams {
  _page: number;
  _limit?: number;
  category?: string;
  liked?: boolean;
}
