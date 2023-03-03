import { Button } from "../components/button";
import { IconEyeToggle } from "../components/icons";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormGroup from "../components/common/FormGroup";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import React from "react";
import useToggle from "../hooks/useToggle";

const schema = yup.object({
  email: yup.string().email(" ").required("The field is required"),
  password: yup
    .string()
    .required("The field is required")
    .min(8, "Password must be 8 character"),
});

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const handleSignIn = (values) => {
    console.log(values);
  };

  const { toggle: showPassword, handleToggle: handleToggleEye } =
    useToggle(false);
  return (
    <div>
      <LayoutAuthentication heading="Welcome Back!">
        <p className="mb-[25px] text-xs font-normal text-center lg:text-sm text-text3 lg:mb-6">
          Dont have an account?{" "}
          <Link to={"/sign-up"} className="font-medium underline text-primary">
            Sign uo
          </Link>
        </p>
        <button className="flex items-center justify-center w-full gap-x-[10px] py-[13px] border rounded-[10px] border-strock mb-5">
          <img srcSet="/icon-google.png 2x" alt="icon-google" />
          <span className="text-base font-semibold text-text2 ">
            Sign up with google
          </span>
        </button>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <FormGroup>
            <Label htmlFor={"email"}>Email *</Label>
            <Input
              control={control}
              name="email"
              error={errors?.email?.message}
              placeholder="johndoe@gmail.com"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor={"password"}>Password *</Label>
            <Input
              type="password"
              control={control}
              name="password"
              error={errors?.password?.message}
              placeholder="Create a password"
              showPassword={showPassword}
            >
              <IconEyeToggle
                open={showPassword}
                onClick={handleToggleEye}
              ></IconEyeToggle>
            </Input>
          </FormGroup>
          <span className="inline-block w-full mb-5 text-sm font-medium cursor-pointer text-end text-primary">
            Forgot password
          </span>
          <Button type="submit" className={"bg-primary w-full"}>
            Sign in
          </Button>
        </form>
      </LayoutAuthentication>
    </div>
  );
};

export default SignInPage;
