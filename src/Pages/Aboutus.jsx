import Homelayout from "../Layouts/Homelayout";
import aboutus1 from '../assets/image/aboutus1.png'
import { celebrities } from "../Constant/celebrities";

import CarousalSlide from '../components/CarousalSlide'

function Aboutus(){
   
    return(
<>
<Homelayout>
<div className="flex flex-col pl-20 pt-20 ">

<div className=" flex itmes-center  gap-30">
  
<section className=" w-1/2 space-y-5 m-auto">
    <h1 className="text-3xl text-yellow-500 font-semibold"> Quality and affordable education</h1>


<p className="mt-2 text-xl text-gray-200 gap-20">Our goal is to provide the affordable and quality educaton to the world.<br/> We are providing the platform for the aspiring teachers and students to share their skils ,creativity and knowledge to each other to empower and contributes in the growth and wellness of mankind. </p>
</section> 

<div className="  mr-[30vh]">
    <img className="drop-shadow-2xl h-80  " src={aboutus1} alt="" />
    
</div>
<div/>

</div>
<div className="carousel w-1/2 m-auto my-16">
  {  celebrities.map(i=> (<CarousalSlide sno={i.sno} title={i.title} image={i.image} discription={i.discription} />))}
  
 
</div>





</div>

</Homelayout>
</>
    )
}
export default Aboutus;