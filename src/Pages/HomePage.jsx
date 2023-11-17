import Homelayout from "../Layouts/Homelayout";
import { Link } from 'react-router-dom'
import homepageimage from "../assets/image/homepageimage.png"
function HomePage(){
return(
    <>
      <Homelayout >
<div className="  pt-10 text-white sm:flex items-center justify-center gap-5 mx-16 h-[90vh]  ">
    <div className="  w-1/2 space-y-4"> 
    <h1 className="text-5xl font-semibold ">find out best
    <span className="text-yellow-500 "> Online courses</span>
    </h1>
    <p className="text-gray-500">We have a large library of courses tought by highly skilled and qualified faculities at affordable rates</p>
    
    <div className="space x-6">

     <Link to="/courses" >
    <button className=" bg-yellow-500 rounded-md hover:bg-yellow-600 hover:-translate-y-1 hover:scale-110 duration-30  px-3 py-3">Explore courses</button>
    </Link>

    <Link to="/contact" >
    <button className="border border-yellow-500 px-3 py-3 rounded ml-3 hover:bg-yellow-600 hover:-translate-y-1 hover:scale-110 duration-30 ">contact us</button>
   </Link> 

    </div>

</div>
<div className="w-1/2 items-center justify-center "><img className="rounded-xl bg-gray-500 opacity-4 h-56" src={homepageimage} alt="homepageimage" /></div>
</div>
      </Homelayout>
    </>
)
}
export default HomePage;