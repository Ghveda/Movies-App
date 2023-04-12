import { Button, Input } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "store/api/authApi";
import { IAuthState, userLogin } from "store/slice/userSlice";

const Login = () => {
  const [user, setUser] = useState<IAuthState>();

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [loginMutation, { data, isSuccess, isError }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleRegisterClick = () => {
    navigate("/auth/register");
  };

  const onSubmit = (body: any) => {
    loginMutation(body);
    setUser(body);
  };

  if (isSuccess && data?.accessToken) {
    localStorage.setItem("token", data?.accessToken);
    dispatch(userLogin(user));
    navigate("/");
  }

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
        {isError && (
          <span className="text-red-600 text-center">
            Email or Password is incorrect
          </span>
        )}
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
