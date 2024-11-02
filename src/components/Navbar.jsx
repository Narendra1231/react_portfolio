const Navbar=()=>{
    return(
       <div>
        <div className="container nav-bar" data-aos="fade-down" data-aos-duration="1000">
            <div className="left">
                <span className="sp"><strong><i>P</i></strong></span>ortfo<span className="sp"><strong><i>l</i></strong></span>io
            </div>
            <div className="right">
                <a href="#home" className="nav-items">Home</a>
                <a href="#experience" className="nav-items">Training</a>
                <a href="#skills" className="nav-items">Skills</a>
                <a href="#projects" className="nav-items">Projects</a>
                <a href="#contacts" className="nav-items">Contacts</a>
               
            </div>
        </div>
       </div>
        
    );
}
export default Navbar;