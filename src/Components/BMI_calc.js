import React from "react";
import { useState } from "react";
function BMI_input(props) {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [gender,setGender] = useState();
  const [BMI, setBmi] = useState(0);

  const handleAge = (event) => {
    setAge(event.target.value);
  };
  const handleHeight = (event) => {
    setHeight(event.target.value);
  };
  const handleWeight = (event) => {
    setWeight(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  const calculate = (event) => {
    setBmi(weight / height ** 2);
    event.preventDefault();
  };

  return (
    <div>
      <div class="title">
        <h2> BMI CALCULATOR</h2>
      </div>
      <form>
        <p>
          <div class="input-container">
            {/* <label>NAME: </label> */}
            <input
              id="name"
              class="input"
              type="text"
              name="Name"
              placeholder="NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </p>
        <p>
          {/* <label>AGE: </label> */}
          <input
            id="age"
            class="input"
            type="text"
            name="age"
            placeholder="AGE"
            value={age}
            onChange={handleAge}
          />
        </p>
        <p>
          {/* <label>HEIGHT: </label> */}
          <input
            id="height"
            class="input"
            type="text"
            name="height"
            placeholder="HEIGHT"
            value={height}
            onChange={handleHeight}
          />
        </p>
        <p>
          {/* <label>WEIGHT: </label> */}
          <input
            id="weight"
            class="input"
            type="text"
            name="weight"
            placeholder="WEIGHT"
            value={weight}
            onChange={handleWeight}
          />
        </p>
        <p class="gender">
          <label style={{ color: "white" }}>GENDER: </label>
          <input
            type="radio"
            value="Male"
            name="gender"
            onChange={handleGender}
          />{" "}
          MALE
          <input
            type="radio"
            value="Female"
            name="gender"
            onChange={handleGender}
          />{" "}
          FEMALE
        </p>
        <button class="submit" onClick={calculate}>
          Calculate
        </button>
        <div class="nul"></div>
        <div>
          <label class="output">
            {" "}
            Your BMI is {Math.round(BMI * 100) / 100} Kg/m
            <sup>3</sup>
          </label>
        </div>
      </form>
    </div>
  );
}
export default BMI_input;
