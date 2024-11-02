const Projects=()=>{
  const data=[
    {
      key:1,
      title:"Hotel Reservation System",
      image:"projects/hotel.jpg",
      description:"In this project used technology Java,Jdbc ",
      source:"https://github.com/Narendra1231/Hotel-Management-System"
    },
    {
      key:2,
      title:"Digital Clock",
      image:"projects/clock.jpg",
      description:"In this project used Java GUI interface. ",
      source:"https://github.com/Narendra1231/Digital_Clock"
    },
    {
      key:3,
      title:"Portfolio Website",
      image:"projects/portfolio.jpg",
      description:"Technology used HTML, CSS, JavaScript and ReactJS. ",
      source:""
    },
    {
      key:4,
      title:"News APP",
      image:"projects/news.jpg",
      description:"Technology used HTML, CSS,News API and ReactJS. ",
      source:"https://github.com/Narendra1231/News-App"
    },
    {
      key:5,
      title:"Age Calculator",
      image:"projects/age.jpg",
      description:"Technology used HTML, CSS, JavaScript. ",
      source:"https://github.com/Narendra1231/Age-Calculator"
    },
    {
      key:6,
      title:"Quiz App",
      image:"projects/quiz.png",
      description:"Technology used HTML, CSS,Java Script and ReactJS. ",
      source:"https://github.com/Narendra1231/Quiz-App"
    }
  ]
    return(
     <div className="proj">
        <div className="container projects" id="projects">
        <h1 className="ptitle" data-aos="fade-right" data-aos-duration="1000">Projects</h1>
        <div className="project">
          {data.map(data=>{
           return(
            <>
            <div className="work" key={data.id} data-aos="flip-left" data-aos-duration="1000" >
             <div className="card cardd text-light" style={{width: "18rem"}} data-aos="zoom-in-left" data-aos-duration="1000">
              <div className="im">
              <img src={`/assests/${data.image}`} className="card-img-top " alt="..."/>
              </div>
                  <div className="card-body text-center">
                     <h5 className="card-title">{data.title}</h5>
                     <p className="card-text">{data.description}</p>
                     <a href={data.source} className="btn btn-outline-light">Code</a>
                  </div>
             </div>
          </div>
          </>
        )
       })}
        </div>
       </div>
     </div>
    );
}
export default Projects;
