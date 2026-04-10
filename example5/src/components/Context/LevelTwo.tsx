import LevelThree from "./LevelThree";

export default function LevelTwo() {
  return (
    <div className="p-4 border-2 border-green-500 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Level Two (Context)</h2>
      <LevelThree />
    </div>
  );
// the LevelTwo component is a simple wrapper component that renders the LevelThree component within a styled div,
// this allows us to demonstrate how the context can be accessed 
// and used in a nested component (LevelThree) 
// that is wrapped by another component (LevelTwo)
// the LevelTwo component itself does not directly use the context, 
// but it provides a structure for the LevelThree component to consume the context and display the count and buttons to increment and decrement it

}
