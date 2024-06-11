import Location from "../components/Location/Location.jsx";
const About = () =>{
    return(
    <div className='container pt-14'>
        <div className='py-10'>
            <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2
            text-3xl font-bold'>About us
            </h1>
            <p>
                Welcome to Travello go, your gateway to unforgettable journeys and extraordinary experiences. We are a passionate team of travel enthusiasts
                dedicated to curating unique and personalized travel adventures for every type of explorer.
            </p>
                <br/>
            <p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                At Travello go, we understand that travel is not just about reaching a destination; it's about immersing yourself in new cultures,
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                savoring local cuisines, and creating cherished memories that last a lifetime. Whether you're seeking a relaxing beach getaway,
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                an adrenaline-fueled adventure, or a culturally enriching expedition, we're here to make your travel dreams a reality.
            </p>
        </div>
        <Location/>

    </div>
    )
}
export default About