import React from "react";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="pic" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="_netflix">
              <button>Watch now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
