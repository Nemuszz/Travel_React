import HomeImg from '../assets/hometravel.jpg'
import Poster from '../assets/bannerimage.jpg'
import Banner2 from '../../src/assets/travel-cover2.jpg'
import Hero from "../Hero/Hero.jsx";
import Places from "../components/Places/Places.jsx";
import BannerImg from "../components/BannerImg/BannerImg.jsx";
import Blogs from "./Blogs.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Testimonial from '../components/Testimonial/Testimonial.jsx'


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
                <Blogs/>
                <Banner/>
                <BannerImg img={Banner2}/>
                <Testimonial/>
            </div>
        </>
    )
}
export default Home