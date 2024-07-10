/* eslint-disable @typescript-eslint/no-explicit-any */
import MyForm from "@/components/custom/my-form/MyForm";
import MyInput from "@/components/custom/my-form/MyInput";
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/redux/features//auth/auth.api";
import { setToken } from "@/redux/features/auth/auth.slice";
import { useAppDispatch } from "@/redux/hooks";
import { TLoginData } from "@/redux/types/types.global";
import { loginSchema } from "@/schemas/login.schema";
import { TResponseFromAPI } from "@/types/types.global";
import { zodResolver } from "@hookform/resolvers/zod";
import { jwtDecode } from "jwt-decode";
import { FieldValues } from "react-hook-form";

interface TData {
  token: string;
}

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  async function onSubmit(data: FieldValues) {
    try {
      const res: TResponseFromAPI<TData> = await login(
        data as TLoginData
      ).unwrap();
      const token = res?.data?.token;
      if (res.success && token) {
        const decoded = jwtDecode(res.data.token);
        console.log(decoded);
        dispatch(setToken(token));
      }
    } catch (error: any) {
      console.log(error?.data?.message || "Something went wrong!");
    }
  }
  return (
    <div className="h-screen bg-[#262626] w-full flex justify-center items-center home text-white">
      <div className="w-[35%] px-12 py-16 rounded-lg shadow-[1px_1px_10px_2px] shadow-white/10 border border-gray-700">
        <MyForm onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
          <div className="w-full space-y-6">
            <MyInput
              type="email"
              name="email"
              placeholder="Email"
              className="bg-transparent rounded-full border border-gray-700 p-4 w-full  outline-none focus:outline-none focus:border-gray-300 duration-300"
            />
            <MyInput
              type="password"
              name="password"
              placeholder="Password"
              className="bg-transparent rounded-full border border-gray-700 p-4 w-full  outline-none focus:outline-none focus:border-gray-300 duration-300"
            />
          </div>
          <div className="mt-10">
            <Button
              type="submit"
              variant={"secondary"}
              className="bg-[#585858] rounded-full border border-gray-700 p-4 w-full hover:bg-transparent duration-300"
            >
              Submit
            </Button>
          </div>
        </MyForm>
      </div>
    </div>
  );
};

export default Login;
