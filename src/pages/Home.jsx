import HomeImg from '../assets/hometravel.jpg'
import Hero from "../Hero/Hero.jsx";
import Places from "../components/Places/Places.jsx";
const Home = () =>{
    return(
        <>
            <div className='mt-[93px]'>
                <div className='relative h-[700px]'>
                    <img className='w-full absolute h-full ' alt='travel' src={HomeImg}/>
                    <Hero/>
                </div>
                <Places/>
            </div>
        </>
    )
}
export default Home