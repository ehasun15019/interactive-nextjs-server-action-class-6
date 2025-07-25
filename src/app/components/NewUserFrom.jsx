import React from "react";

const NewUserFrom = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <input
          type="text"
          className="border border-gray-700 rounded px-2 py-3 w-full"
          placeholder="Name"
        />
      </div>

      <div>
        <input
          type="text"
          className="border border-gray-700 rounded px-2 py-3 w-full"
          placeholder="Email"
        />
      </div>

      <div>
        <button className="bg-blue-500 text-white rounded px-3 py-2 w-full">
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewUserFrom;
