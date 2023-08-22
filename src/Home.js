import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setPending] = useState(true);

    // en sonunda [] kullanmazsam sonsuz döngüye girer
    // [parametre] parametre verirsem de koşula bağlı çalışır
    // [] sadece böyle de çalışır ama sayfa ilk render olduğunda 

        //bir duruma bağlı olmaksızın hep çalışır.
    // useEffect(()=>{
    //         console.log("use effect hep");
    //         console.log(name);
    //     }) 

    useEffect(() => {
        setTimeout(() => {
            
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setPending(false);
            })

        }, 1000);
    }, [])




    return (
        <div className="home">
            {isPending && <div>Yükleniyor...</div>}
            {/* ilk başta null gönderdiğimiz için useState(null) o yüzden başta kontrol? blog && ... */}
            {blogs && <BlogList blogs={blogs} title="Bütün Blog Listesi" />}
            

        </div>
    );
}

export default Home;
