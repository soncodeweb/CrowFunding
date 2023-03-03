import { Button } from "../components/button";
import { IconEyeToggle } from "../components/icons";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Checkbox from "../components/checkbox/Checkbox";
import FormGroup from "../components/common/FormGroup";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import React from "react";
import useToggle from "../hooks/useToggle";

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("The field is required"),
  password: yup
    .string()
    .required("The field is required")
    .min(8, "Password must be 8 character"),
});
const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const handleSignUp = (values) => {
    console.log(values);
  };

  const { toggle: acceptTerm, handleToggle: handleToggleTerm } =
    useToggle(false);
  const { toggle: showPassword, handleToggle: handleToggleEye } =
    useToggle(false);

  return (
    <div>
      <div>
        <LayoutAuthentication heading="Sign Up">
          <p className="mb-[25px] text-xs font-normal text-center lg:text-sm text-text3 lg:mb-6">
            Already have an account?{" "}
            <Link
              to={"/sign-in"}
              className="font-medium underline text-primary"
            >
              Sign in
            </Link>
          </p>
          <button className="flex items-center justify-center w-full gap-x-[10px] py-[13px] border rounded-[10px] border-strock mb-5">
            <img srcSet="/icon-google.png 2x" alt="icon-google" />
            <span className="text-base font-semibold text-text2 ">
              Sign up with google
            </span>
          </button>
          <p className="mb-[15px] lg:mb-[30px] text-xs font-normal text-center text-text2 lg:text-sm">
            Or sign up with email
          </p>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <FormGroup>
              <Label htmlFor={"name"}>Full Name *</Label>
              <Input
                control={control}
                name="name"
                error={errors?.name?.message}
                placeholder="John Doe"
              ></Input>
            </FormGroup>
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
            <div className="flex items-start mb-6 lg:mb-5 gap-x-5 ">
              <Checkbox
                name="term"
                checked={acceptTerm}
                onClick={handleToggleTerm}
              >
                <p className="flex-1 text-xs lg:text-sm text-text2">
                  I agree to the{" "}
                  <span className="underline text-seconday">Terms of Use</span>{" "}
                  and have read and understand the{" "}
                  <span className="underline text-seconday">
                    Privacy policy
                  </span>
                  .
                </p>
              </Checkbox>
            </div>
            <Button type="submit" className={"bg-primary w-full"}>
              Create my account
            </Button>
          </form>
        </LayoutAuthentication>
      </div>
    </div>
  );
};

export default SignUpPage;
