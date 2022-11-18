import "./Search.css";

export default function Search({ handleChange, handleClick }) {
  return (
    <div className="Search">
      <input type="text" placeholder="search here" onChange={handleChange} />
      <button onClick={handleClick}> GO </button>
    </div>
  );
}
