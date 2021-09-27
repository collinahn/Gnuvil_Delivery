import React from 'react';
import "./MenuTabs.css";

type Iprops = {
    names:string[];
};

const MenuTabs = ({names}:Iprops) => {

    return(
        <div className="container">
            <div className="menus">
                {
                    names.map((name,i)=>{
                        return (
                            <button className="menu" key={i}>
                                <img src={`/images/icons/${name}.png`} alt={name} />
                                <h3>{name}</h3>
                            </button>
                        );
                    })
                }

            </div>
        </div>
    );
};

export default MenuTabs;