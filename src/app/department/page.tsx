import DeptHeroSection from "./components/DeptHeroSection";
import DeptSection2 from "./components/DeptSection2";
import DeptSection3 from "./components/DeptSection3";
import DeptSection4 from "./components/DeptSection4";
import DeptSection5 from "./components/DeptSection5";
import DeptSection6 from "./components/DeptSection6";
import DeptSection7 from "./components/DeptSection7";
import DeptSection8 from "./components/DeptSection8";
import DeptFacultySection from "./components/DeptFacultySection";
import DeptSection9 from "./components/DeptSection9";

import DeptSection11 from "./components/DeptSection11";
import DeptCTABanner from "./components/DeptCTABanner";


const DepartmentPage = () => {
    return (
        <div className="flex flex-col w-full font-sans bg-white overflow-x-hidden">

            {/* Hero Section - Banner with breadcrumbs */}
            <DeptHeroSection />

            {/* Department Introduction - Overview of Cardiac Care Technology */}
            <DeptSection2 />

            {/* Department Stats - Key figures like programs, publications, and labs */}
            <DeptSection3 />

            {/* Vision & Mission - Goals and values of the department */}
            <DeptSection4 />

            {/* Programs Offered - Details about B.Sc. Cardiac Care Technology */}
            <DeptSection6 />

            {/* Career Opportunities - Mentorship and internship highlights */}
            <DeptSection5 />

            {/* POs, PSOs, PEOs - Academic outcomes and objectives accordion */}
            <DeptSection7 />

            {/* Principal's Note - Message from the Professor & Principal */}
            <DeptSection8 />

            {/* Our Faculty - Profiles of dedicated academic staff */}
            <DeptFacultySection />

            {/* Student Achievements - Awards and achievements in healthcare */}
            <DeptSection9 />

            {/* Insights From Learners - Student testimonials and success stories */}
            <DeptSection11 />

            {/* Final CTA Banner - Application and enquiry call to action */}
            <DeptCTABanner/>

            
        </div>
    )
}

export default DepartmentPage;
