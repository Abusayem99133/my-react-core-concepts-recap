export default function Relative({ student }) {
  const relativeStyle = {
    margin: "15px",
    border: "2px solid skyblue",
    borderRadius: "20px",
    backgroundColor: "steelblue",
    color: "white",
    padding: "20px",
  };
  return (
    <div style={relativeStyle}>
      <h2>Id: {student.id}</h2>
      <h2>Name: {student.name}</h2>
      <h2>Age: {student.age}</h2>
      <h2>Address: {student.address}</h2>
      <h2>Institute: {student.institute}</h2>
    </div>
  );
}
