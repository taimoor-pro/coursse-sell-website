import "../styles/form.css";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputField, DropDown } from "../components/elements/TextField";
import { BrandPoster } from "../components/elements/BrandPoster";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addRegisterUser } from "../store/slices/RegistrationSlice";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const registrationData = useSelector((state) => state.addRegisterUser);
  const dispatch = useDispatch();
  const history = useNavigate();

  const onSubmit = (data) => {
    dispatch(addRegisterUser(data));
    reset();
    history("/");
    toast.success("User Registration Successfully!!");
  };

  // Registration Schema
  const schema = yup.object().shape({
    roles: yup.string().required("Select a Role"),
    userName: yup.string().required("Enter Username"),

    email: yup.string().required("Enter Email"),
    password: yup
      .string()
      .required("Enter Password")
      .min(8, "minimum 8 character"),

    cpassword: yup
      .string()
      .required("Enter Confirm Password")
      .min(8, "minimum 8 character"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      roles: "",
      userName: "",
      email: "",
      password: "",
      cpassword: "",
    },
  });

  return (
    <div className="container">
      <h3 className="text-center mt-5">
        Register & Check Free Courses & Much More .🤳🏼
      </h3>
      <section id="formHolder">
        <div className="row">
          {/* <!-- Brand Box --> */}
          <div className="col-sm-6 brand">
            <BrandPoster />
          </div>

          {/* <!-- Form Box --> */}
          <div className="col-sm-6 form">
            {/* <!-- Signup Form --> */}
            <div className="signup form-peice">
              <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <Controller
                    name="roles"
                    control={control}
                    render={({ field }) => (
                      <DropDown
                        {...field}
                        style={{
                          borderColor: errors.userName ? "red" : "green",
                          borderWidth: "1px",
                        }}
                      />
                    )}
                  />
                  {errors.roles && (
                    <p style={{ color: "red" }}>{errors.roles.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <Controller
                    name="userName"
                    control={control}
                    render={({ field }) => (
                      <InputField
                        type="text"
                        className="name"
                        placeholder="Enter username"
                        {...field}
                        style={{
                          borderColor: errors.roles ? "red" : "green",
                          borderWidth: "1px",
                        }}
                      />
                    )}
                  />
                  {errors.userName && (
                    <p style={{ color: "red" }}>{errors.userName.message}</p>
                  )}
                </div>

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

                <div className="form-group">
                  <Controller
                    name="cpassword"
                    control={control}
                    render={({ field }) => (
                      <InputField
                        type="password"
                        className="name"
                        placeholder="Confirm Password"
                        {...field}
                        style={{
                          borderColor: errors.cpassword ? "red" : "green",
                        }}
                      />
                    )}
                  />
                  {errors.cpassword && (
                    <p style={{ color: "red" }}>{errors.cpassword.message}</p>
                  )}
                </div>

                <div className="CTA">
                  <button
                    variant="primary"
                    type="submit"
                    value="Signup Now"
                    className="btn"
                    id="submit"
                  >
                    Submit
                  </button>

                  <div className="CTA">
                    {/* <InputField type="submit" value="Sign Up" /> */}
                    <a href="/" className="switch">
                      Already have an account?
                    </a>
                  </div>
                </div>
              </form>
            </div>
            {/* <!-- End Signup Form --> */}
          </div>
        </div>
      </section>
    </div>
  );
};
