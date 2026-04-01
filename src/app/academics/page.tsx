'use client'
import React, { useEffect, useState } from "react";
import AcademicsHero from "./components/AcademicsHero";
import ProgramsList from "./components/ProgramsList";
import FeeStructure from "./components/FeeStructure";
import Department from "./components/Department";
import Faq from "./components/Faq";

const Academics = () => {
    const [coursesData, setCoursesData] = useState<any[]>([]);
    const [newsEventsData, setNewsEventsData] = useState<any[]>([]);

    useEffect(() => {
        async function fetchdata() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/`);
                const res1 = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/news-events/`);
                const data = await res.json();
                const data1 = await res1.json();

                if (data?.results) setCoursesData(data.results);
                if (data1?.results) setNewsEventsData(data1.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchdata();
    }, []);

    return (
        <div className="flex flex-col w-full font-sans bg-white overflow-x-hidden min-h-screen">
            {/* Hero Section */}
            <AcademicsHero />

            {/* Programs List Section */}
            <ProgramsList coursesData={coursesData} />

            {/* Fee Structure Section */}
            <FeeStructure />

            {/* Department Section */}
            <Department />

            {/* FAQ Section */}
            <Faq />
        </div>
    );
};

export default Academics;