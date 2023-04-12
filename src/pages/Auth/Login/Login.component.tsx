import { Button, Input } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleRegisterClick = () => {
    navigate("/auth/register");
  };

  const onSubmit = (body: any) => {
    console.log(body);
    navigate("/");
  };

  return (
    <section>
      <div className="w-full flex justify-center mb-16">
        <h1 className="text-3xl">Login</h1>
      </div>
      <form
        className="w-[500px] flex flex-col gap-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            required
            type="email"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            required
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        <div className="flex flex-row gap-5 justify-end">
          <Button variant="outlined" type="submit">
            Login
          </Button>
          <Button
            variant="outlined"
            type="button"
            onClick={handleRegisterClick}
          >
            Register
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Login;
