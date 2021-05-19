import React from "react";
import Card from "../Card/card.component";
import './card-list.styles.css';

const CardList = (props) => {
  return (
    <>
      <div className="card-list">
        {props.people.map((person) => {
          return <Card key={person.id} person={person}/>;
        })}
      </div>
      ;
    </>
  );
};

export default CardList;
