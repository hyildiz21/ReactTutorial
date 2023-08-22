// birden fazla parametre göndererek map içinde kullanma

//buton içine id gönderiyoruz o da blogsların içindeki item olan blog un idsi.

const BlogList = ({ blogs, title}) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title} </h2>
                    <p>
                        {blog.author} Adli Kişi Bunu Yapti.
                    </p>
                    {/* !--! */}

                </div>

            ))}
    
        </div>
        


    );
}

export default BlogList
