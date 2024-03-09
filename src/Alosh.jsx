export default function Learns({ learn }) {
  const styleSheet = {
    margin: "15px",
    border: "2px solid black",
    borderRadius: "15px",
    backgroundColor: "green",
  };
  return (
    <div style={styleSheet}>
      <li>Id:{learn.id}</li>
      <li>Name : {learn.name}</li>
      <li>Age: {learn.age}</li>
    </div>
  );
}
