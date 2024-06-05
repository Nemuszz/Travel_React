import HomeImg from '../assets/hometravel.jpg'
import Poster from '../assets/bannerimage.jpg'
import Hero from "../Hero/Hero.jsx";
import Places from "../components/Places/Places.jsx";
import BannerImg from "../components/BannerImg/BannerImg.jsx";


const Home = () =>{
    return(
        <>
            <div className='mt-[93px]'>
                <div className='relative h-[700px]'>
                    <img className='w-full absolute h-full ' alt='travel' src={HomeImg}/>
                    <Hero/>
                </div>
                <Places/>
                <BannerImg img={Poster}/>
            </div>
        </>
    )
}
export default Home