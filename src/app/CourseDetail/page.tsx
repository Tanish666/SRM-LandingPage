'use client'
import DeptHeroSection from "@/components/CourseDetail/Hero";
import DeptSection2 from "@/components/CourseDetail/AboutUs";
import DeptSection3 from "@/components/CourseDetail/ImpactsAndStats";
import DeptSection4 from "@/components/CourseDetail/VisionAndMission";
import DeptSection5 from "@/components/CourseDetail/CareerOppourtunities";
import DeptSection6 from "@/components/CourseDetail/ProgramOffered";
import DeptSection7 from "@/components/CourseDetail/POs,PSOs,PEOs";
import DeptSection8 from "@/components/CourseDetail/Professor";
import DeptFacultySection from "@/components/CourseDetail/OurFaculty";
import DeptSection9 from "@/components/CourseDetail/Achievements";

import DeptSection11 from "@/components/CourseDetail/Testimonials";
import DeptCTABanner from "@/components/CourseDetail/CTABanner";
import { useEffect, useState } from "react";


const DepartmentPage = () => {
    const id = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('id') : null;
    const [courseData, setCourseData] = useState<any>(null);

    useEffect(() => {
        async function fetchdata() {
            if (!id) return;
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/${id}`)
                const data = await res.json()
                setCourseData(data)
            } catch (error) {
                console.error("Error fetching course data:", error)
            }
        }
        fetchdata();
    }, [id]);

    return (

        <div className="flex flex-col w-full font-sans bg-white overflow-x-hidden">

            {/* Hero Section - Banner with breadcrumbs */}
            <DeptHeroSection courseData={courseData} />

            {/* Department Introduction - Overview of Cardiac Care Technology */}
            <DeptSection2 courseData={courseData} />

            {/* Department Stats - Key figures like programs, publications, and labs */}
            <DeptSection3 courseData={courseData} />

            {/* Vision & Mission - Goals and values of the department */}
            <DeptSection4 courseData={courseData} />

            {/* Programs Offered - Details about B.Sc. Cardiac Care Technology */}
            <DeptSection6 courseData={courseData} />

            {/* Career Opportunities - Mentorship and internship highlights */}
            <DeptSection5 courseData={courseData} />

            {/* POs, PSOs, PEOs - Academic outcomes and objectives accordion */}
            <DeptSection7 courseData={courseData} />

            {/* Principal's Note - Message from the Professor & Principal */}
            <DeptSection8 courseData={courseData} />

            {/* Our Faculty - Profiles of dedicated academic staff */}
            <DeptFacultySection courseData={courseData} />

            {/* Student Achievements - Awards and achievements in healthcare */}
            <DeptSection9 courseData={courseData} />

            {/* Insights From Learners - Student testimonials and success stories */}
            <DeptSection11 courseData={courseData} />

            {/* Final CTA Banner - Application and enquiry call to action */}
            <DeptCTABanner courseData={courseData} />

        </div>
    )
}

export default DepartmentPage;
