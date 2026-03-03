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

            {/* main hero section */}
            <DeptHeroSection />

            {/* departmentof cardiac technology */}
            <DeptSection2 />

            {/*   4 cards rendering  */}
            <DeptSection3 />
            {/* vision and mission cards  */}
            <DeptSection4 />
            {/* program offered section */}
            <DeptSection6 />

            {/* career oppurtunity card  */}
            <DeptSection5 />

            {/* POs PSOs PEOs */}
            <DeptSection7 />

            {/* Principle Section */}
            <DeptSection8 />

            {/* faculty section  */}
            <DeptFacultySection />

            {/* student award section  */}
            <DeptSection9 />





            {/* insights from lerner section */}
            <DeptSection11 />
            {/* section: call to action  */}

            <DeptCTABanner/>
            
        </div>
    )
}

export default DepartmentPage;
