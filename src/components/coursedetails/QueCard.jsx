import React from "react";

function QueCard(props) {
  return (
    <>
      <div className="mt-4 pt-4 px-2 ">
        <h3 className="font-bold text-lg">Q.{props.question}</h3>
        <p className="text-sm px-4 py-1">{props.answer}</p>
        <hr class="h-px bg-black border-0 mt-3 "></hr>
      </div>
    </>
  );
}

export default QueCard;
