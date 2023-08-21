const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Navbar Component</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/Create" style={{
                    color:"white",
                    backgroundColor:'#a70977',
                    borderRadius:'8px'
                }}
                >New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;