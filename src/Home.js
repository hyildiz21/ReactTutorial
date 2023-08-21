const Home = () => {

    const handleClick= (e)=>{
        console.log("Hey, dude",e);
    }

    const handleClickAgain = (name, e) =>{
        console.log("Hey " + name, e.target);
    }

    return (  
        <div className="home">
            <h2>HomePage Component</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=> handleClickAgain("Hamza",e)}>Click Me Again</button>
        </div>
    );
}
 
export default Home;
