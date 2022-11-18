// import CSS file

export default function ({handleChange, handleClick}){

return(

    <div> 
        <input type="text" placeholder="Search here..." onChange={handleChange}> </input>
        <button onClick={handleClick}> GO </button>
    </div>

)} 