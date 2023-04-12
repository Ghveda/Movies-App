import { Button, Input } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleLoginClick = () => {
    navigate("/auth/login");
  };

  const onSubmit = (body: any) => {
    console.log(body);
    navigate("/");
  };

  return (
    <section>
      <div className="w-full flex justify-center mb-16">
        <h1 className="text-3xl">Register</h1>
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
          <Button variant="outlined" type="button" onClick={handleLoginClick}>
            Login
          </Button>
          <Button variant="outlined" type="submit">
            Register
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Register;
