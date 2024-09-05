import { Link } from "react-router-dom";
import "./Components.css";

const Navbar=()=>{
    return(
        <>
        <section className="flex justify-between items-center px-10 py-4 bg-secondary">
            <div>
                <p>Kishor T</p>
            </div>
            <div className="flex justify-evenly items-center w-1/2">
                <Link to="/">Home</Link>
                <Link>About</Link>
                <Link>Skills</Link>
                <Link>Projects</Link>
                <Link>Blogs</Link>
                <Link>Contact</Link>
            </div>
        </section>
        </>
    )
}
export default Navbar