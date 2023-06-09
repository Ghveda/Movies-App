import { Button, Input } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "store/api/authApi";
import { userLogin } from "store/slice/userSlice";
import { IRegister } from "./Register.config";
import { IError } from "store/api/authApi/authApi.config";

const Register = () => {
  const [user, setUser] = useState<IRegister>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IRegister>();

  const [registerMutation, { data, isSuccess, error, isError }] =
    useRegisterMutation();
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    navigate("/auth/login");
  };

  const onSubmit = (body: IRegister) => {
    setUser(body);
    registerMutation(body);
  };

  useEffect(() => {
    if (isSuccess && data?.accessToken) {
      localStorage.setItem("token", data?.accessToken);
      dispatch(userLogin(user));
      navigate("/");
    }
  }, [dispatch, navigate, data?.accessToken, isSuccess, user]);

  useEffect(() => {
    if (isError && error) {
      const newError = error as IError;
      setErrorMessage(newError.data);
    }
  }, [isError, error]);

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
        {isError && (
          <span className="text-red-600 text-center">{errorMessage}</span>
        )}
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
