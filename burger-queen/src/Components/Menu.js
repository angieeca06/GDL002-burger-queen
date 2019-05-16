import React from "react";
import Menu from "../Components/MenuBreakfast.json";

const showMenu = props => {
    return(
        
        <div className="all-card card col-md-6">
            {Menu.map((menuDetail , index) =>
            <div className="card mb-4 card" key={index}>
                <div className="row no-gutters">
                    <div className="col-md-5">
                        <img src={menuDetail.Image} className="card-img" alt=""/>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body col-md-20">
                            <h5 className="card-title">{menuDetail.Item}</h5>
                            <p className="card-text">{"$" + menuDetail.Price}</p>
                            <button className="btn btn-block btn-outline-primary"> Add +</button>                       
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default showMenu;