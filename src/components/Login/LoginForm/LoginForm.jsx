"use client";

import FormBtn from "@/components/UI/FormBtn";
import FormInput from "@/components/UI/FormInput";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const router = useRouter();

  const [signUp, setSignUp] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPassChange = (e) => setConfirmPass(e.target.value);

  const handleSignUp = () => setSignUp(true);
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (password === "" || email === "") {
      setError(true);
      return;
    }

    router.push("/");
  };

  return (
    <form
      onSubmit={handleLoginSubmit}
      className="flex flex-col items-center gap-6 mb-10 w-4/5"
      action=""
    >
      {/* NAME INPUT */}
      {signUp && (
        <FormInput
          className={`${
            error ? "border-red-500" : "border-transparent"
          } w-full`}
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        />
      )}

      {/* EMAIL INPUT */}
      <FormInput
        className={`${error ? "border-red-500" : "border-transparent"} w-full`}
        type="email"
        onChange={handleEmailChange}
        value={email}
        placeholder="Email or phone number"
      />

      {/* PASSWORD INPUT */}
      <FormInput
        className={`${error ? "border-red-500" : "border-transparent"} w-full`}
        onChange={handlePasswordChange}
        value={password}
        type="password"
        placeholder="Password"
      />

      {/* CONFIRM PASSWORD INPUT */}
      {signUp && (
        <FormInput
          className={`${
            error ? "border-red-500" : "border-transparent"
          } w-full`}
          onChange={handleConfirmPassChange}
          value={confirmPass}
          type="password"
          placeholder="Confirm password"
        />
      )}

      {!signUp && (
        <p className="flex items-center self-start space-x-4 rounded-m w-full">
          <input id="checkbox" type="checkbox" className="w-6 h-6" />
          <label htmlFor="checkbox" className="text-slate-600 font-semibold">
            Remember me
          </label>
        </p>
      )}

      <FormBtn type="submit">Log in</FormBtn>

      {!signUp && (
        <FormBtn
          onClick={handleSignUp}
          className="bg-gray-200 border border-gray-500 hover:bg-gray-300 text-slate-600"
        >
          sign up
        </FormBtn>
      )}
    </form>
  );
};

export default LoginForm;
