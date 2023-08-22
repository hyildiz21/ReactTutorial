import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

    const [blogs, setBlogs] = useState(null);


    //silmek istediğimiz datanın idsini buraya gönderip bunu da aşağıda prop olarak gönderiyoruz
    // const handleDelete = (id) =>{
    //     const newBlog= blogs.filter(x=>x.id!==id);
    //     setBlogs(newBlog);
    // }

    // en sonunda [] kullanmazsam sonsuz döngüye girer
    // [parametre] parametre verirsem de koşula bağlı çalışır
    // [] sadece böyle de çalışır ama sayfa ilk render olduğunda 
    
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            })
    }, [])

    //bir duruma bağlı olmaksızın hep çalışır.
    // useEffect(()=>{
    //         console.log("use effect hep");
    //         console.log(name);
    //     }) 

    return (
        <div className="home">

            {/* ilk başta null gönderdiğimiz için useState(null) o yüzden başta kontrol? blog && ... */}
            {blogs && <BlogList blogs={blogs} title="Bütün Blog Listesi" />}
            

        </div>
    );
}

export default Home;
