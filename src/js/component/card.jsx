import React from "react";
import "../../styles/index.css"

const Card = () => {
    return (
    <div className="card cardworker">
        <img src="http://www.barleymowhorsley.co.uk/img/office/our-office-8.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
        </div>
    </div>
    )
};

export default Card;