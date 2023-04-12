import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <main className="flex items-center justify-center h-[100vh]">
      <section>
        <span>There is no such route</span>
        <Button onClick={handleClick}>Redirect to Home</Button>
      </section>
    </main>
  );
};

export default Error;
