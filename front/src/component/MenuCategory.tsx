import React from 'react';
import "./MenuCategory.css";

type Iprops = {
    names:string[];
};

const MenuCategory = ({names}:Iprops) => {

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

export default MenuCategory;