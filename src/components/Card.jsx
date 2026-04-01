import React from 'react';

const Card = ({ card, addVisit, visitCount }) => {


    const isAdded = visitCount.find(item => item.id === card.id);
    return (

        <div className="  bg-white border border-gray-100 rounded-4xl p-8 shadow-sm relative group hover:shadow-xl transition-all duration-300">

            <div className="absolute top-6 right-6 bg-[#DCFCE7] text-[#166534] px-4 py-1 rounded-full text-sm font-semibold">
                {card.tag}
            </div>

            <div className="w-16 h-16 bg-white border border-gray-50 shadow-sm rounded-2xl flex items-center justify-center mb-6">
                <img src={card.icon} alt="image icons" />
            </div>

            <h3 className="text-2xl font-bold text-[#111827] mb-3">
                {card.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {card.description}
            </p>

            <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-[#111827]">${card.price}</span>
                <span className="text-gray-400 text-sm">/{card.period}</span>
            </div>

            <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-600 text-[15px]">
                    <span className="text-green-500 font-bold">✓</span> 100+ templates
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-[15px]">
                    <span className="text-green-500 font-bold">✓</span> ATS optimization
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-[15px]">
                    <span className="text-green-500 font-bold">✓</span> Export to PDF
                </li>
            </ul>

            <button
                onClick={() => !isAdded && addVisit(card)}
                className={`w-full font-bold py-4 rounded-3xl transition-all ${isAdded
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-[#7C3AED] hover:bg-[#6D28D9] active:scale-95"
                    }`}
            >

                {isAdded ? "Card Added!" : "Buy Now"}
            </button>

        </div>



    );
};

export default Card;