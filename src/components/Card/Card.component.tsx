import { Button } from "@mui/material";
import { ICard } from "./Card.config";
import { useNavigate } from "react-router-dom";

const Card = ({ id, name, category, description }: ICard) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className="border-[1px] border-solid w-[400px] h-[300px] py-5 px-3 flex flex-col gap-5 rounded-md">
      <div className="flex flex-row justify-between">
        <h1>{name}</h1>
        <span className="bg-pink-200 text-pink-600 rounded-[30px] text-xs p-2">
          {category}
        </span>
      </div>
      <p className="text-gray-400 h-20">{description}</p>
      <div className="flex justify-between">
        <Button variant="contained">Like</Button>
        <Button color="error" variant="contained">
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
