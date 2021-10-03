import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import "./MainTabs.css"

const Stores = () => {
    let {menu} = useParams<{ menu: string }>();
    let history = useHistory();
    return(
        <>
            <header className="App-header">
                <button onClick={()=>{history.push('/')}}>뒤로</button>
                {menu}
            </header>
        </>
    )
};

export default Stores;