import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
const Contacts=()=>{
    return(
        <div>
     <div className="container contact" id="contacts">
     <h1 className="ctitle" data-aos="fade-right" data-aos-duration="1000">Contact me</h1>
        <div className="react-items" >
            <a href="mailto:chouhannarendra329@gmail.com" target="_blank" className="react-icons" data-aos="zoom-in-up" data-aos-duration="1000">
             <MdOutlineEmail/>
            </a>
            <a href="https://www.linkedin.com/in/narendra-kumar-chouhan1/" target="_blank" className="react-icons" data-aos="zoom-in-up" data-aos-duration="1000">
             <CiLinkedin/>
            </a>
            <a href="https://www.instagram.com/_n4rendr4_/profilecard/?igsh=dDl4bnRqNDE0NDE3" target="_blank" className="react-icons" data-aos="zoom-in-up" data-aos-duration="1000">
             <FaInstagram/>
            </a>
            <a href="https://www.facebook.com/share/MU3NeZvrwZnoV5EX/" target="_blank" className="react-icons" data-aos="zoom-in-up" data-aos-duration="1000">
             <RiFacebookCircleLine/>
            </a>
            <a href="https://x.com/N4r3ndr4_?t=puA7oq757Va40o2TkxB6mQ&s=09" target="_blank" className="react-icons" data-aos="zoom-in-up" data-aos-duration="1000">
             <RiTwitterXLine/>
            </a>
            <a href="https://github.com/Narendra1231" target="_blank" className="react-icons" data-aos="zoom-in-up" data-aos-duration="1000">
             <VscGithub/>
            </a>
        </div>
        </div>
        </div>
    );
}
export default Contacts;