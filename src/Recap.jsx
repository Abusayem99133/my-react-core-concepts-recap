// export default function Sol({ sayem }) {
//   return(
//      <h2>Task: {sayem}</h2>
//   )
// }
// export default function Sol({ sayem, isDone }) {
//   if (isDone === true) {
//     return <li>amr shonar {sayem}</li>;
//   } else {
//     return <h1>ami tomay valobashi {sayem}</h1>;
//   }
// }
// export default function Sol({ sayem, isDone }) {
//   if (isDone) {
//     return <li>finished the {sayem}</li>;
//   }
//   return <li>work on going {sayem}</li>;
// }
export default function Sol({ sayem, isDone }) {
  const story = {
    margin: "20px",
    padding: "15px",
    border: "2px solid brown",
    borderRadius: "20px",
    backgroundColor: "indigo",
  };
  return (
    <h2 style={story}>
      {isDone ? "s" : "Rakib"} : {sayem}
    </h2>
  );
}
