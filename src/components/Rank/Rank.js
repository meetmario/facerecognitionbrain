import React from 'react';
import './Rank.css'

const Rank = ({ name, entries }) => {
    return (
       <div className='rank'>
            <div className='rank f3 white tc'>
                {`${name}, dina antal sökningar är:`}
            </div><br />
            <div className='bg-gold white tc w-7 pa3 ml3 f1'>
                {entries}
            </div>
        </div>    
    );
}

export default Rank;