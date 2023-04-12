import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPostQuery } from "store/api/postsApi";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: post } = useGetPostQuery({ id: +id! });

  const handleClick = () => {
    navigate("/");
  };

  return (
    <main className="flex justify-center mt-[20%] h-[100vh]">
      <section>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span>Title: {post?.name}</span>
            <span>Release {post?.date}</span>
          </div>
          <Button variant="contained" type="button" onClick={handleClick}>
            Go Back
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Detail;
