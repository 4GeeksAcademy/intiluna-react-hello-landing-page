import React from "react";
import "../../styles/index.css"

const Card = (props) => {
    return (
    <div className="card cardworker p-2 m-3">
        <img src="http://www.barleymowhorsley.co.uk/img/office/our-office-8.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">{props.cardText}</p>
        </div>
        <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
        </div>
    </div>
    )
};

export default Card;