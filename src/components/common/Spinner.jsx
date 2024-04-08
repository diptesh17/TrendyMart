import React from "react";

export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center mt-[200px] text-center">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      <p className="text-[#008080]">Loading Products...</p>
    </div>
  );
}
