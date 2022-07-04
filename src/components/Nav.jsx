import Clock from "./Clock";

const Nav = () =>{

    const date = new Date();

    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand">Home</a>
                    <div className="text-white"><Clock date = {date}/></div>
                </div>
                
            </nav>
        </>
    )
}
export default Nav;