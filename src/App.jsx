import "./App.css";
import Recap from "./Practices";
import Sol from "./Recap";
import Learns from "./Alosh";
import Relative from "./Students";
function App() {
  function Counter() {}
  const singers = [
    {
      id: 1,
      name: "Md Belal",
      age: 35,
    },
    {
      id: 2,
      name: "Md Imran",
      age: 29,
    },
    {
      id: 3,
      name: "Md Arifin Shuvo",
      age: 33,
    },
    {
      id: 4,
      name: "Md Kazi Shovo",
      age: 36,
    },
  ];
  const Students = [
    {
      id: 1,
      name: "Abu Hasib",
      age: "Twenty Nine",
      address: "Sirajganj",
      institute: "Tangla Hata",
    },
    {
      id: 2,
      name: "Abu Sayem",
      age: "twenty three",
      address: "Sirajganj",
      institute: "BMDC",
    },
    {
      id: 3,
      name: "Mst Shapla",
      age: "Thirty Two",
      address: "Sirajganj",
      institute: "Kazipur Mohila Govt Collage",
    },
    {
      id: 4,
      name: "Md. Hamza",
      age: "Twelve",
      address: "Sirajganj",
      institute: "Madrasha",
    },
    {
      id: 5,
      name: "Md. Hasan",
      age: "Forty one",
      address: "Sirajganj",
      institute: "Saraytiol scl",
    },
  ];
  return (
    <>
      <h1>React Practice </h1>
      {Students.map((student) => (
        <Relative student={student}></Relative>
      ))}
      {singers.map((singer) => (
        <Learns learn={singer}></Learns>
      ))}
      <Sol sayem="Learn React" isDone={true}></Sol>
      <Sol sayem="Learn With jsx" isDone={false}></Sol>
      <Sol sayem="Learn With Props" isDone={true}></Sol>

      <Calender land="01-02-2024" job="Production" location="Dhaka"></Calender>
      <Recap></Recap>
      <Practice
        name="Laptop"
        price="75k"
        brand="Dell"
        made="turkish"
      ></Practice>
    </>
  );
}
const { name, price, brand, made } = {
  name: "Laptop",
  price: "75k",
  brand: "Dell",
  made: "turkish",
};
function Practice({ name, price, brand, made }) {
  // console.log(props);

  return (
    <div className="device">
      <h2>This is Device Name: {name}</h2>
      <p>This is Device Price: {price}</p>
      <p>This is Device Brand: {brand}</p>
      <p>Made By: {made}</p>
    </div>
  );
}
const { job, land, location } = {
  job: "Production",
  land: "01-02-2024",
  location: "Dhaka",
};
function Calender({ job, land, location }) {
  // console.log(props);
  const developStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid black",
    borderRadius: "60px",
    backgroundColor: "purple",
  };

  return (
    <div style={developStyle}>
      <h2>
        I Am In Back. <br /> My Motherland: {land}
      </h2>
      <h3>My Work is: {job}</h3>
      <h3>Time Tech BD Location: {location}</h3>
    </div>
  );
}

export default App;
