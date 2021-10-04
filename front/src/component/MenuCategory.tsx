import React from 'react';
import { Link } from "react-router-dom";
import "./MenuCategory.css";

type Iprops = {
    names:string[];
    path:string
};

const MenuCategory = ({names,path}:Iprops) => {
    return(
        <div className="category">
            <div className="category-btns">
                {
                    names.map((name,i)=>{
                        return (
                            <Link to={`${path}/${name}`}>
                                <button className="category-btn" key={i} >
                                    <img src={`/images/icons/${name}.png`} alt={name} />
                                    <h3>{name}</h3>
                                </button>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default MenuCategory;