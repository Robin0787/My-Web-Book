/* eslint-disable @typescript-eslint/no-explicit-any */
import MyButton from "@/components/custom/my-button/MyButton";
import MyForm from "@/components/custom/my-form/MyForm";
import MyInput from "@/components/custom/my-form/MyInput";
import { cn } from "@/lib/utils";
import { useLoginMutation } from "@/redux/features//auth/auth.api";
import { setToken } from "@/redux/features/auth/auth.slice";
import { useAppDispatch } from "@/redux/hooks";
import { TLoginData } from "@/redux/types/types.global";
import { loginSchema } from "@/schemas/login.schema";
import { TResponseFromAPI } from "@/types/types.global";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface TData {
  token: string;
}

const Login = () => {
  const [login] = useLoginMutation();
  const [loginError, setLoginError] = useState<string | undefined>(undefined);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  async function onSubmit(data: FieldValues) {
    setLoginError("");
    setLoginLoading(true);
    try {
      const res: TResponseFromAPI<TData> = await login(
        data as TLoginData
      ).unwrap();
      const token = res?.data?.token;
      if (res.success && token) {
        dispatch(setToken(token));
        toast.success("Login Successful.");
        navigate("/");
      }
      setLoginLoading(false);
    } catch (error: any) {
      const errorMessage = error?.data?.message;
      setLoginError(errorMessage);
      setLoginLoading(false);
    }
  }
  const defaultValues = {
    email: "user@gmail.com",
    password: "user123",
  };
  return (
    <div className="h-screen bg-[#262626] w-full flex justify-center items-center home text-white overflow-hidden">
      <div className="w-[35%] px-12 py-16 rounded-lg shadow-[1px_1px_10px_2px] shadow-white/10 border border-gray-500">
        <MyForm
          onSubmit={onSubmit}
          defaultValues={defaultValues}
          resolver={zodResolver(loginSchema)}
        >
          <div className="w-full space-y-6">
            <MyInput
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={defaultValues.email}
              className="bg-transparent rounded-full border border-gray-500 p-4 w-full outline-none focus:outline-none focus:border-gray-300 duration-300 placeholder:text-gray-300"
            />
            <MyInput
              type="password"
              name="password"
              placeholder="Password"
              defaultValue={defaultValues.password}
              className="bg-transparent rounded-full border border-gray-500 p-4 w-full outline-none focus:outline-none focus:border-gray-300 duration-300 placeholder:text-gray-300"
            />
          </div>
          <div className="mt-10 relative">
            <MyButton
              type="submit"
              variant={"secondary"}
              className="bg-[#585858] rounded-full border border-gray-700 p-4 w-full hover:bg-[#757575] duration-300"
              loading={loginLoading}
            >
              Login
            </MyButton>

            <div className={cn("absolute w-full -bottom-7 left-0")}>
              <p
                className={cn(
                  "text-sm text-red-500 font-semibold tracking-[0.5px] text-center"
                )}
              >
                {loginError}
              </p>
            </div>
          </div>
        </MyForm>
      </div>
    </div>
  );
};

export default Login;
