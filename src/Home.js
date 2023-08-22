import { useState , useEffect} from "react";
import BlogList from "./BlogList";


const Home = () => {

    const [blogs, setBlogs] = useState(
        [
            { title: "Exepix 2023", body: "21 Ağustos 2023, Pazartesi sabahi ofise geldim", author: "Hamza", id: 1 },
            { title: "Exepix 2023", body: "21 Ağustos 2023, Sali sabahi ofise geldim", author: "Engin", id: 2 },
            { title: "Exepix 2023", body: "21 Ağustos 2023, Cuma sabahi ofise geldim", author: "Oğuzhan", id: 3 }
        ] 
    );

    const [name, setName] = useState("Kerem");    

    //silmek istediğimiz datanın idsini buraya gönderip bunu da aşağıda prop olarak gönderiyoruz
    const handleDelete = (id) =>{
        const newBlog= blogs.filter(x=>x.id!==id);
        setBlogs(newBlog);
    }

    useEffect(()=>{
        console.log("use effect ran");
        console.log(name);
    }, [name]) 

    //bir duruma bağlı olmaksızın hep çalışır.
    // useEffect(()=>{
    //         console.log("use effect hep");
    //         console.log(name);
    //     }) 

return (
    <div className="home">
        
        <BlogList blogs={blogs} title="Bütün Blog Listesi"  handleDeleteFunction={handleDelete}/>
        <BlogList blogs={blogs.filter((x)=>x.author=="Hamza")} title="Hamza'nin Blog Listesi" handleDeleteFunction={handleDelete}/>
        <br />
        <p> {name} </p>
        <button onClick={()=>setName("Deniz")}>isim değiştir - useEffect </button>
    </div>
);
}

export default Home;
