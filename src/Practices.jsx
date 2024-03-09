export default function Recap() {
  const Students = {
    name: "sayem",
    age: 23,
  };
  const year = 2024;
  return (
    <div className="box">
      <h2>I am In Class Undergraduate</h2>
      <h4>My Name is {Students.name}</h4>
      <h4>My Age is {Students.age}</h4>
      <h4>Year of {year}</h4>
    </div>
  );
}
