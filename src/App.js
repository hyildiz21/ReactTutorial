
import './App.css';

function App() {
  const title="Welcome Back Agent 47";
  const likes=70;
  const link="http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title} </h1>
        <p>Liked {likes} times </p>

        <p>{"Hell No"}</p>
        <p>{10}</p>
        <p>{Math.random() * 5}</p>
        
        <a href={link}>Google</a>

      </div>
    </div>
  );
}

export default App;
