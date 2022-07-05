import Clock from "./Clock";

const Nav = () =>{

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand">Home</a>
                    <div className="text-white"><Clock date = {new Date()} /></div>
                </div>
                
            </nav>
        </div>
    )
}
export default Nav;