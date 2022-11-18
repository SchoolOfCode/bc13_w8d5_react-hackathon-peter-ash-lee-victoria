import "./Search.css";
import logo from "./logo.png"

export default function Search({ handleChange, handleClick }) {
  return (
    <div className="Search">
      <img className="logo" src={logo} alt="logo"/>
      <input type="text" placeholder="search here" onChange={handleChange} />
      <button onClick={handleClick}> GO </button>
    </div>
  );
}
