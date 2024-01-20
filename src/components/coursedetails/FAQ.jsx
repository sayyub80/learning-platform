import React from "react";
import QueCard from "./QueCard";

function FAQ(props) {
  return (
    <>
      <h1 className="text-2xl font-semibold lg:font-bold px-2">FAQ's</h1>
      <div className="bg-[#F0F4FA] pb-5 rounded-2xl md:w-[35rem]  lg:w-[50rem]">
        <QueCard question={props.question} answer={props.answer} />
        <QueCard
          question="How to make payment?"
          answer="Check the payment procedure video on the homepage of the PW App."
        />
        <QueCard
          question="Is this batch FREE or PAID?"
          answer="This is a Paid Batch."
        />
        <QueCard
          question="Classes will be live or recorded?"
          answer="This is a live class. Although if a student misses the live class the student can still access the class in recorded format on the PW app."
        />
        <QueCard
          question="Is the mentioned price a yearly fee or a monthly fee?"
          answer="Mentioned Price: Entire duration of the batch."
        />
        <QueCard
          question="Classes will stream on which channel?"
          answer="This will stream on the PW app."
        />
        <QueCard question="Is Refund available?" answer="NO" />
      </div>
    </>
  );
}

export default FAQ;
