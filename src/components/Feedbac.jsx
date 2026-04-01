import React from 'react';

const Feedbac = () => {
    return (
        <section className=" my-12">
  <div className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7]  py-12 px-8 flex flex-col md:flex-row items-center justify-around text-white shadow-xl">
    
    <div className="text-center flex-1">
      <h2 className="text-4xl md:text-5xl font-bold mb-2">50K+</h2>
      <p className="text-purple-100 text-sm md:text-base font-medium opacity-90">Active Users</p>
    </div>

    <div className="hidden md:block w-[1px] h-16 bg-white/30"></div>
    <div className="md:hidden w-24 h-[1px] bg-white/20 my-6"></div>

    <div className="text-center flex-1">
      <h2 className="text-4xl md:text-5xl font-bold mb-2">200+</h2>
      <p className="text-purple-100 text-sm md:text-base font-medium opacity-90">Premium Tools</p>
    </div>

    <div className="hidden md:block w-[1px] h-16 bg-white/30"></div>
    <div className="md:hidden w-24 h-[1px] bg-white/20 my-6"></div>

    <div className="text-center flex-1">
      <h2 className="text-4xl md:text-5xl font-bold mb-2">4.9</h2>
      <p className="text-purple-100 text-sm md:text-base font-medium opacity-90">Rating</p>
    </div>

  </div>
</section>
    );
};

export default Feedbac;