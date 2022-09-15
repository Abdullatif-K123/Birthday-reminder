import React, { useState } from "react";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [id, setId] = useState(6);
  const [name, setName] = useState("");
  const [days, setDays] = useState();
  const [img, setImg] = useState();
  const addFriend = () => {
    const btn = document.getElementById("globleBtn");
    btn.style.display = "none";
    const frm = document.getElementById("form");
    frm.style.display = "block";
  };
  const newFriend = () => {
    const friend = {
      id: id,
      name: name,
      age: days,
      image: img,
    };
    const newPeoples = [...people, friend];
    newPeoples.sort((a, b) => {
      return parseFloat(a.age) - parseFloat(b.age);
    });
    setPeople(newPeoples);
    setId(id + 1);
    const firstInput = document.getElementById("input1");
    firstInput.value = "";
    document.getElementById("input2").value = "";
    document.getElementById("avatar").value = "";
    document.getElementById("form").style.display = "none";
    document.getElementById("globleBtn").style.display = "block";
  };
  const removePerson = (id) => {
    const newPeoples = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeoples);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays this month</h3>
        {people.map((person) => {
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
        <form id="form" style={{ display: "none" }}>
          <input
            type="text"
            placeholder="Enter your friends name"
            id="input1"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            id="input2"
            placeholder="Enter the days remain before his birthday"
            onChange={(event) => setDays(event.target.value)}
          />
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={(event) => setImg(event.target.value)}
          />
          <button type="button" onClick={newFriend}>
            Submit
          </button>
        </form>
        <button id="globleBtn" onClick={addFriend}>
          Add friend's birthday
        </button>
      </section>
    </main>
  );
}

export default App;
