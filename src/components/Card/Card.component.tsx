import { Button } from "@mui/material";
import { ICard } from "./Card.config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showModal } from "store/slice/modalSlice";
import { useUpdatePostMutation } from "store/api/postsApi";

const Card = ({ post }: ICard) => {
  const [updatePost] = useUpdatePostMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDetailClick = () => {
    navigate(`/detail/${post.id}`);
  };

  const handleDeleteClick = () => {
    dispatch(showModal({ id: post.id }));
  };

  const handleLikeClick = () => {
    updatePost({ ...post, liked: post.liked ? false : true });
  };

  return (
    <div className="border-[1px] border-solid w-[400px] h-[300px] py-5 px-3 flex flex-col gap-5 rounded-md">
      <div className="flex flex-row justify-between">
        <h1>{post.name}</h1>
        <span className="bg-pink-200 text-pink-600 rounded-[30px] text-xs p-2">
          {post.category}
        </span>
      </div>
      <p className="text-gray-400 h-20">{post.description}</p>
      <div className="flex justify-between">
        <Button variant="contained" onClick={handleLikeClick}>
          {post.liked ? "Unlike" : "Like"}
        </Button>
        <Button color="error" variant="contained" onClick={handleDeleteClick}>
          Delete
        </Button>
      </div>
      <button
        className="w-full !bg-blue-100 !text-blue-500 !rounded-[10px] p-2"
        onClick={handleDetailClick}
      >
        Show Details
      </button>
    </div>
  );
};

export default Card;
