import Client1 from "./images/client-1.png";
import Client2 from './images/client-2.png';
import Client3 from './images/client-3.png';
import Client4 from './images/client-4.png';
import Client5 from './images/client-5.png';
import Client6 from './images/client-6.png';
import Client7 from './images/client-7.png';
import Client8 from './images/client-8.png';


export const SecondSocialProof=()=>{
    const imgLinks=[{
        id:1,
        links:Client1,
    },
    {
        id:2,
        links:Client2,
    }
    ,
    {
        id:3,
        links:Client3,
    },
    {
        id:4,
        links:Client4,
    },
    {
        id:5,
        links:Client5,
    }
    ,
    {
        id:6,
        links:Client6,
    } ,
    {
        id:7,
        links:Client7,
    }
    ,
    {
        id:8,
        links:Client8,
    }

]
    return(
        <div className="w-[100vw] p-8 flex bg-white flex-col border-t-[1px] gap-10 justify-center items-center">
           <h3 className="text-[3rem] text-indigo-600 font-headingFont">Our Happy Customers</h3>
            <div className="w-[80%] rounded-lg flex gap-5 flex-wrap justify-evenly items-center">
               {
                imgLinks.map((image)=>(
                    <img className="w-[200px] bg-transparent cursor-pointer" src={image.links} key={image.id} alt="" />
                ))
               }
            </div>
        </div>
    )
}