import React from "react";
import "../styles/form.css";

import { InputField, DropDown } from "../components/elements/TextField";
import { BrandPoster } from "../components/elements/BrandPoster";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addLoginUser } from "../store/slices/LoginSlice";
import { addRegisterUser } from "../store/slices/RegistrationSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// Inside your component
export const LoginForm = () => {
  const history = useNavigate();
  const registerData = useSelector((state) => state.addRegisterUser);
  const lginData = useSelector((state) => state.addLoginUser);

  const dispatch = useDispatch();
  console.log(registerData);
  console.log(lginData);

  const loginData = (data) => {
    console.log("Login Data:", data);
    dispatch(addLoginUser(data));
    reset();
    if (
      registerData.some(
        (user) => data.email == user.email && data.password == user.password
      )
    ) {
      console.log("Successfully Login User");
      history("/home");
      toast.success("Successfully Login User");
    } else {
      toast.error("Incorrect Login");
    }
  };

  // Registration Schema
  const schema = yup.object().shape({
    email: yup.string().required("Enter Email"),
    password: yup
      .string()
      .required("Enter Password")
      .min(8, "minimum 8 characters"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="container">
      <h3 className="text-center mt-5">Login</h3>
      <section id="formHolder">
        <div className="row">
          {/* Brand Box */}
          <div className="col-sm-6 brand">
            <BrandPoster />
          </div>

          {/* Form Box */}
          <div className="col-sm-6 form">
            {/* Signup Form */}
            <div className="signup form-peice">
              <form className="signup-form" onSubmit={handleSubmit(loginData)}>
                <div className="form-group">
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <InputField
                        type="email"
                        className="name"
                        placeholder="Enter Email"
                        {...field}
                        style={{ borderColor: errors.email ? "red" : "green" }}
                      />
                    )}
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <InputField
                        type="password"
                        className="name"
                        placeholder="Password"
                        {...field}
                        style={{
                          borderColor: errors.password ? "red" : "green",
                        }}
                      />
                    )}
                  />
                  {errors.password && (
                    <p style={{ color: "red" }}>{errors.password.message}</p>
                  )}
                </div>

                <div className="CTA">
                  <button type="submit" className="btn" id="login">
                    Submit
                  </button>

                  <div className="CTA">
                    <a href="/registration" className="switch">
                      Don't have an account?
                    </a>
                  </div>
                </div>
              </form>
            </div>
            {/* End Signup Form */}
          </div>
        </div>
      </section>
    </div>
  );
};
