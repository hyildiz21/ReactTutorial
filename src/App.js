import Navbar from './Navbar';
import Home from './Home';


function App() {
  const title="Welcome Back Agent 47";
  const likes=70;
  //bu çalışmaz aşağıda parametre olarak boolean da aynı zamanda
  // const person= {name:'hamza', age:20};

  const link="http://195.175.208.98:14533";

  return (
    
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
      </div>
    </div>

  );
}


export default App;
