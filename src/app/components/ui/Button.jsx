"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <div>
      <button
        type="submit"
        className="bg-blue-500 text-white rounded px-3 py-2 w-full cursor-pointer disabled:opacity-10"
        disabled={pending}
      >
        Submit
      </button>
    </div>
  );
};

export default Button;
