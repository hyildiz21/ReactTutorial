import { useState } from "react";

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

return (
    <div className="home">
        <h2>HomePage Component</h2>

        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2 className="h2">{ blog.title } </h2>
                <p>
                    {blog.author} Adli Kişi Bunu Yapti.
                </p>
            </div>

        ))}












        {/* <p className="parag">
            {name} , {age} yasinda. 
            </p> */}

        {/* <button onClick={handleClick}>Click me</button> */}
        {/* <button onClick={(e)=> handleClickAgain("Hamza",e)}>Click Me Again</button> */}
    </div>
);
}

export default Home;
