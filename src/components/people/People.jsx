import React, { useState, useEffect } from "react";
import "./People.scss";

const People = () => {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("people")) || []
  );

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(data));
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let human = {
      fname,
      lname,
      age: Number(age),
      job,
      image,
      id: Date.now(),
    };
    setData((prev) => [...prev, human]);
    setFirstName("");
    setLastName("");
    setAge("");
    setJob("");
    setImage("");
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((i) => i.id !== id));
  };

  const getInitials = (first, last) => {
    const f = first ? first[0].toUpperCase() : "";
    const l = last ? last[0].toUpperCase() : "";
    return f + l;
  };

  return (
    <div className="container">
      <div className="form-section">
        <form onSubmit={handleSubmit} className="form">
          <input
            required
            value={fname}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="First Name"
          />
          <input
            required
            value={lname}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Last Name"
          />
          <input
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="Age"
          />
          <input
            required
            value={job}
            onChange={(e) => setJob(e.target.value)}
            type="text"
            placeholder="Job"
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="cards-section">
        {data.length ? (
          data.map((item) => (
            <div className="card" key={item.id}>
              {item.image ? (
                <img className="card-img" src={item.image} alt="person" />
              ) : (
                <div className="avatar">
                  {getInitials(item.fname, item.lname)}
                </div>
              )}
              <h3>
                {item.fname} {item.lname}
              </h3>
              <p>Age: {item.age}</p>
              <p>Job: {item.job}</p>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))
        ) : (
          <div>empty</div>
        )}
      </div>
    </div>
  );
};

export default People;
