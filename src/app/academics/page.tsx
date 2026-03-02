import React from "react";
import AcademicsHero from "./components/AcademicsHero";
import ProgramsList from "./components/ProgramsList";
import FeeStructure from "./components/FeeStructure";
import Department from "./components/Department";
import Faq from "./components/Faq";

const Academics = () => {
    return (
        <div className="flex flex-col w-full font-sans bg-white overflow-x-hidden min-h-screen">
            <AcademicsHero />
            <ProgramsList />
            <FeeStructure />
            <Department />
            <Faq />
        </div>
    );
};

export default Academics;