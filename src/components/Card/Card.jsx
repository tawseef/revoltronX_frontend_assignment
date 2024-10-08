import React from "react";
import "./Card.style.css";

function Card({ item }) {
    const formattedDate = new Date(item.publishedAt).toDateString(); 

  return (

    <div className="cardWrapper">
      <div className="cardTitle">{item.description}</div>
      <div className="infoSection">
        <div>
          <span className="heading">Source:</span>
          <a href={item.url}>{item.source.name}</a>
        </div>
        <div><span className="heading">Published On:</span> {formattedDate}</div>
      </div>
    </div>
  );
}

export default Card;
