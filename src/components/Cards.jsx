
import Card from './card';
import React, { use } from 'react';


const Cards = ({ fetchCards, addVisit, visitCount }) => {


    const cardsData = use(fetchCards);


    return (
        <div className='max-w-11/12 lg:max-w-9/12 mx-auto '>
            <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5  '>
                {
                    cardsData.map(card => < Card
                        visitCount={visitCount}
                        addVisit={addVisit}
                        key={card.id} card={card} ></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;