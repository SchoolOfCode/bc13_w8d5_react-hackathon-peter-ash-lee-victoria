import "./Search.css";

export default function Search({ handleChange, handleClick }) {
  return (
    <div>
      <input type="text" placeholder="Search here..." onChange={handleChange} />
      <button onClick={handleClick}> GO </button>
    </div>
  );
}
