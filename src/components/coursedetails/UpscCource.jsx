import React from "react";
import Heading from "./Heading";
import CourseCard from "./CourseCard";
import FAQ from "./FAQ";
function UpscCource() {
  return (
    <>
      <div className="bg-[#f8f9fa]">
        <Heading />
        <CourseCard />

        <div className="lg:px-[6rem] px-4  bg-[#f8f9fa] relative mt-2 md:mt-0">
          <div className="pl-2 font-[400]  pb-8 md:w-[38rem] lg:w-[50rem] ">
            <h2 className="text-2xl font-semibold lg:font-bold py-5">
              Batch Details
            </h2>
            <p>
              01. This batch includes basic coverage of all the topics for all
              the NCERTs for UPSC CSE.
            </p>
            <p>
              02. COURSE START DATE - 06 Nov 2023 , COURSE END DATE - 09 feb
              2024
            </p>
            <p>
              03. Class Duration - 2 to 2:30 Hrs, 2 Lectures a day, Mon-Friday.
            </p>
            <p>
              04. This is a live classes course for Aspirants & Recorded
              lectures are available till 31 May 2024.
            </p>
            <p>
              05. LIVE lectures delivered in Hindi Language by India's best
              faculties.
            </p>
            <p>
              06. Daily Class notes curated by experts on the topics discussed
              in the Live Lecture.
            </p>
            <p>
              07. DPPs (Upto 10 MCQs, 1 Mains question & Model Answer) for daily
              practice & Weekly tests.
            </p>
            <p>08. Regular Doubt Sessions in daily live lectures</p>
            <p>
              09. Study material by experts (E-Books) - Summarized NCERT E-Books
            </p>
            <p>
              10. Special emphasis on conceptual clarity and answer writing
              skills in classes. Practice and discussion of questions asked in
              the previous years and probable questions in upcoming exams.
            </p>
            <p>11. There is NO REFUND policy</p>
          </div>

          <FAQ
            question="Who should join this batch?"
            answer="This batch is for UPSC aspirants to prepare them for the civil service examination."
          />
        </div>
      </div>
    </>
  );
}

export default UpscCource;
