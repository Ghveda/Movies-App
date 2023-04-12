import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <main className="flex justify-center mt-[20%] h-[100vh]">
      <section>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span>Title: Double Indemnity</span>
            <span>Release year: 1944</span>
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
