import React from 'react';
import { useHistory } from 'react-router-dom';

const Event = () => {
    let history = useHistory();
    return(
        <>
            <header className="App-header">
                <button onClick={()=>{history.push('/')}}>뒤로</button>
            </header>
        </>
    )
};

export default Event;