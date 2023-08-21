import { useState , useEffect} from "react";
import BlogList from "./BlogList";


const Home = () => {

    // const [name, setName] = useState('Hamza');
    // const [age, setAge]= useState(20);

    // const handleClick= (e)=>{
    //     console.log("Hey, dude",e);
    // }

    // const handleClickAgain = (name, e) =>{
    //     console.log("Hey " + name, e.target);
    // }

    // const handleClick = () => {
    //     setName("Engin");
    //     setAge(24);
    // }

    const [blogs, setBlogs] = useState(
        [
            { title: "Exepix 2023", body: "21 Ağustos 2023, Pazartesi sabahi ofise geldim", author: "Hamza", id: 1 },
            { title: "Exepix 2023", body: "21 Ağustos 2023, Sali sabahi ofise geldim", author: "Engin", id: 2 },
            { title: "Exepix 2023", body: "21 Ağustos 2023, Cuma sabahi ofise geldim", author: "Oğuzhan", id: 3 }
        ] 
    );

    //silmek istediğimiz datanın idsini buraya gönderip bunu da aşağıda prop olarak gönderiyoruz
    const handleDelete = (id) =>{
        const newBlog= blogs.filter(x=>x.id!==id);
        setBlogs(newBlog);
    }

    useEffect(()=>{
        console.log("use effect çalıştı");
        alert("use effect");
    }) 

return (
    <div className="home">
        
        <BlogList blogs={blogs} title="Bütün Blog Listesi"  handleDeleteFunction={handleDelete}/>
        <BlogList blogs={blogs.filter((x)=>x.author=="Hamza")} title="Hamza'nin Blog Listesi" handleDeleteFunction={handleDelete}/>












        {/* <p className="parag">
            {name} , {age} yasinda. 
            </p> */}

        {/* <button onClick={handleClick}>Click me</button> */}
        {/* <button onClick={(e)=> handleClickAgain("Hamza",e)}>Click Me Again</button> */}
    </div>
);
}

export default Home;
