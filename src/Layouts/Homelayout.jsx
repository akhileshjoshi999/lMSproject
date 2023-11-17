
import {FiMenu} from 'react-icons/fi'
import{AiFillCloseCircle} from 'react-icons/ai'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Homelayout({children}){

    function changwidth(){
const drawerside=document.getElementsByClassName("drawer-side")
drawerside[0].style.width='auto';
    }
    function hidedrawer(){
        const element=document.getElementsByClassName("drawer-toggle")
        element[0].checked=false;
        const drawerside=document.getElementsByClassName("drawer-side")
drawerside[0].style.width=0;
        
    }

    return(
    <>
    <div className=" m-h-[90vh]">
    <div className="drawer   w-fit">
    <input  id="my-drawer" type="checkbox" className="drawer-toggle "  />
    <div className="drawer-content">
    <label htmlFor="my-drawer" className="cursor-pointer ">
    <FiMenu onClick={changwidth} className='font-bold text-white '/></label>
    </div>
    <div className="drawer-side ">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className=' menu p-4 w-48  bg-base-100 text-base-content'>
        <li className='w-fit absolute right-4 z-50'>
            <button onClick={hidedrawer}>
                <AiFillCloseCircle size={24}/>
            </button>
        </li>
        <li ><Link to="Home"> Home</Link></li>
        <li><Link to="All courses"> All courses </Link></li>
        <li><Link to="Contact us"> Contact us</Link></li>
        <li><Link to="about">About us</Link> </li>
        <li><Link to="signup">Sign up</Link> </li>
    </ul>
    </div>
    </div>
    {children}
    <Footer/>
    </div>

    </>
    )
}
export default Homelayout;
