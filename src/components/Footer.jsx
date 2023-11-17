import{BsFacebook,BsInstagram,BsLinkedin,BsTwitter} from 'react-icons/bs'
const date=new Date()
const year=date.getFullYear()

function Footer(){
return(
<>
<footer className='flex justify-between items-center bg-gray-700 h-20 mt-[88vh] '>

<section className=' ml-5 text-2xl'>Copyright {year} | All rights resevered</section>

<section className=' gap-5 text-2xl text-white  flex items-center mr-5'>
    <a className='hover:text-yellow-500 hover:-translate-y-1 hover:scale-110 duration-300 '><BsFacebook/></a>
    <a className='hover:text-yellow-500 transition-all ease-in-out delay-500'><BsInstagram/></a>
    <a className='hover:text-yellow-500 transition-all ease-in-out '><BsLinkedin/></a>
    <a className='hover:text-yellow-500 transition-all ease-in-out '><BsTwitter/></a>



</section>
</footer>
</>

)

}
export default Footer;