import React, { useState } from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {
    
};

function Counter(props) {
    const [conut,setCount] = useState(0)
    return (
       
        <div>
             {conut}
            <button onClick={()=>setCount(x=>x+1)}>plus</button>
        </div>
    );
}

export default Counter;