import React from 'react';
import './Rank.css'

const Rank = () => {
    return (
       <div className='rank'>
            <div className='rank f3 white tc'>
                {'Mario, din rank är: '}
            </div><br />
            <div className='bg-gold white tc w-7 pa3 ml3 f1'>
                {'#1'}
            </div>
        </div>    
    );
}

export default Rank;