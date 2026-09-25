import React from "react";
import ICard from './Icard';
import pic from './images/pic.jpeg'

function ICardGallery(){
    const student=
    [
        {
            pic:pic,
            roll:'45',
            name:'ravi',
            branch:'AIML'
        }
    ]
    return(
        <div style={{display:'flex'}}>
            {/* <ICard pic='https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/NissanIntelligentChoice/4-Website-Page-1500x664-241224.jpg.ximg.l_full_m.smart.jpg' roll="234" name="Ram" branch="AIML"/> */}
            {/* <ICard pic={pic} roll="235" name="Rabiya" branch="CSE"/>
            <ICard/>
            <ICard/>
            <ICard/> */}
            {
                student.map((ele)=>(
                    <ICard data={ele}/>
                ))
            }

        </div>
    )
}
export default ICardGallery