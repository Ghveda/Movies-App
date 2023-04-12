import { IPost } from "store/api/postsApi";

export interface ICard {
  post: IPost;
  refetchPosts: () => void;
}
