import nk from '../pics/nkk.png';
import pdf from '../pdf/naRendra_Resume.pdf';
import Typed from 'typed.js';
import React,{ useRef,useEffect } from 'react';


const Home=()=>{
   const typedRef=useRef(null)
    useEffect(()=>{
          const options={
            strings:["Welcome to my profile","My name is Narendra Kumar Chouhan","I am a Web Developer"],
            typeSpeed:50,
            backSpeed:50,
            loop:true
          }

          const typed=new Typed(typedRef.current,options)
          return ()=>{
            typed.destroy()
          };
    },[])
    return(
        <> <div className="container home" id="home">
        <div className="left" data-aos="zoom-in-right" data-aos-duration="1000">
          <h1 className="title my-2" ref={typedRef}></h1>
          <a className="btn btn-outline-light my-5" href={pdf} download="Narendra_Resume.pdf">Download Resume</a>
        </div>
        <div className="right" data-aos="zoom-in-left" data-aos-duration="1000">
            <div className="image">
                <img src={nk} alt="loading error" />
            </div>
        </div>
       </div>
       </>
    );
}
export default Home;