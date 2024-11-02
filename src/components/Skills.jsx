const Skills=()=>{
    const data=[
        {
            title:"HTML",
            image:"skills/html.png"
        },
        {
            title:"CSS",
            image:"skills/css.png"
        },
        {
            title:"JAVA SCRIPT",
            image:"skills/js.png"
        },
        {
            title:"BOOTSTRAP",
            image:"skills/bootstrap.png"
        },
        {
            title:"REACTJS",
            image:"skills/reactjs.png"
        },
        {
            title:"MYSQL",
            image:"skills/mysql.png"
        },
        {
            title:"OPERATING SYSTEM",
            image:"skills/os.jpg"
        },
        {
            title:"CORE JAVA",
            image:"skills/java.png"
        },
        {
            title:"C++",
            image:"skills/c++.png"
        }
    ]
    return(
        <div className="skillset" id="skills" >
             <div className="container skill"  >
        <h1 className="title" data-aos="fade-right" data-aos-duration="1000">Skills</h1>
        <div className="items" >
        {data.map(data=>{
            return(
                <>
                    <div className="item" key={data.id} data-aos="flip-left" data-aos-duration="1000">
                        <img src={`/assests/${data.image}`} alt="" />
                        <h5>{data.title}</h5>
                    </div>
                </>
            );
        })}
         </div>
        </div>
        </div>
    );
}
export default Skills;