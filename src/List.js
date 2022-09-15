import React, { useState } from "react";
var newspeople = 5;
const List = ({ people }) => {
  const [newpeople, setPeople] = useState(people);
  console.log(newpeople);
  const removePerson = (id) => {
    const newPeoples = newpeople.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeoples);
    newspeople = newpeople;
  };
  return (
    <>
      {newpeople.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} days remain</p>
              <button
                className="btn"
                onClick={() => {
                  removePerson(id);
                }}
              >
                Remove
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
