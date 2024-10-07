import { ILoginForm } from "@/interfaces";
import { Box, Button, Typography } from "@mui/material";
import Cookies from "js-cookie";
import _ from "lodash";
import { useRouter } from "next-nprogress-bar";
import { enqueueSnackbar } from "notistack";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import TextFieldComponent from "../common/TextFieldComponent";
const LoginForm = () => {
  const { handleSubmit, register, setValue } = useForm<ILoginForm>({});
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    try {
      const res = await fetch("http://localhost:5000/user");
      const dataResponse: { id: string; userId: string; password: string }[] =
        await res.json();
      console.log(
        dataResponse.some(
          (user: { userId: string; password: string }) =>
            user.userId === data.userId && user.password === data.password
        )
      );
      if (
        dataResponse.some(
          (user: { userId: string; password: string }) =>
            user.userId === data.userId && user.password === data.password
        )
      ) {
        enqueueSnackbar("Sign in successfully!", {
          variant: "success",
        });
        Cookies.set("USER", JSON.stringify(data));
        router.push("/dashboard");
      } else {
        enqueueSnackbar("User ID or password is not correct!", {
          variant: "error",
        });
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Sign in failed! Please turn on server!", {
        variant: "error",
      });
    }
  };
  return (
    <Box width={384}>
      <Typography fontWeight={700} fontSize={30} textAlign={"center"}>
        Sign In
      </Typography>
      <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
        <Box display={"flex"} flexDirection={"column"} gap={"20px"} mt={"20px"}>
          <TextFieldComponent
            label="User ID"
            placeholder="Enter your ID"
            vertical
            name="userId"
            register={register}
            defaultValue={"admin"}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              setValue("userId", e.target.value);
            }}
          />
          <TextFieldComponent
            label="Password"
            placeholder="Enter your password"
            vertical
            name="password"
            type={showPassword ? "text" : "password"}
            register={register}
            defaultValue={"admin"}
            endAdornment={
              showPassword ? (
                <BsEye
                  color="#808080"
                  size={20}
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <BsEyeSlash
                  color="#808080"
                  size={20}
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(!showPassword)}
                />
              )
            }
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              setValue("password", e.target.value);
            }}
          />
        </Box>
        <Button
          sx={{
            width: "100%",
            height: "fit-content",
            bgcolor: "#DFA128",
            color: "white",
            boxShadow: "0px 4px 4px 0px #00000040 inset",
            borderRadius: "20px",
            fontWeight: 700,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "0.12em",
            textAlign: "center",
            p: "8px 20px",
            "&:hover": {
              bgcolor: "#DFA128",
              color: "white",
            },
            mt: "30px",
          }}
          type="submit"
        >
          SIGN IN
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
