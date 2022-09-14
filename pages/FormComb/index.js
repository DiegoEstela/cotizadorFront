import React from "react";

function FormComb() {
  return (
    <>
      <h1> COT COMBUSTIBLE</h1>
      <div class="flex items-center justify-center">
        <div class="datepicker relative form-floating mb-3 xl:w-96">
          <input
            type="date"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Select a date"
          />
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <select
                class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Cliente</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormComb;
