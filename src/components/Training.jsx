
const Training=()=>{
    const data=[
        {
            id:1,
            course:"c++ and Data Structures",
            organisation:"Extellon Pvt Ltd",
            date:"May'2022",
            platform:"Online",
            experience:"Worked on C++ and DS from basics to advanced level",
            image:"company/extellon.jpg"
        },
        {
            id:2,
            course:"ReactJS",
            organisation:"LamiCons",
            date:"Jun'2023 - July'2023",
            platform:"Online",
            experience:"Learned how React provides an inbuilt testing library that facilitates. the base for testing the react components. ",
            image:"company/lamicons.jpg"
        }
    ]
    return(
        <div id="experience">
         <div className="con d-flex justify-content-center" >
        <div className="container ex" >
            <h1 className="tr-title" data-aos="fade-right" data-aos-duration="1000">Training Program</h1>
            {
               data.map(data=>{
                return(
                    <>
                    <div className="ex-items text-center" key={data.id} data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="left">
                        <img src={`/assests/${data.image}`} alt="" />
                    </div>
                    <div className="right">
                        <h3>{data.course} | {data.organisation}</h3>
                        <h4>{data.date}</h4>
                        <h4>{data.platform}</h4>
                        <h4>{data.experience}</h4>
                    </div>
                    </div>
                    </>
                )
               })
            }
        </div>
        </div>
        </div>
       
    );
}
export default Training;