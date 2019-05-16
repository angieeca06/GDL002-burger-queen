import React from "react";
import Menu from "../Components/Menu.json";

const showMenu = props => {
    return(
        
        <div>
            {Menu.map((menuDetail , index) =>
            <div className="card mb-3" key={index}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={menuDetail.Image} className="card-img" alt=""/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{menuDetail.Item}</h5>
                            <p className="card-text">{menuDetail.Price}</p>
                            <button className="btn btn-primary"> Add +</button>                       
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default showMenu;