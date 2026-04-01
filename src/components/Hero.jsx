import React from 'react';
// import { Play } from 'lucide-react';
import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

            {/* Left Content Side */}
            <div className="flex-1 space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#F3E8FF] text-[#7C3AED] px-4 py-1.5 rounded-full text-sm font-semibold">
                    <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse"></span>
                    New: AI-Powered Tools Available
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-extrabold text-[#1E293B] leading-[1.1]">
                    Supercharge Your <br />
                    <span className="text-gray-800">Digital Workflow</span>
                </h1>

                {/* Description */}
                <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-[#7C3AED]">
                        Explore Products
                    </button>

                    <button className="flex items-center gap-2 border-2 border-[#7C3AED] text-[#7C3AED] px-8 py-3 rounded-full font-bold hover:bg-[#7C3AED]  hover:text-white hover:shadow-lg hover:shadow-[#7C3AED] transition-all">
                        <Play />
                        Watch Demo
                    </button>
                </div>
            </div>

            <div>

                <img className='w-150 shadow-xl' src="https://i.ibb.co.com/s4n6bt4/banner.png" alt="Hero Image" /> 
            </div>
        </section>
    );
};

export default Hero;