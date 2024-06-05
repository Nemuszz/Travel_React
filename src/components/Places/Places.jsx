
import PlacesCard from "./PlacesCard.jsx";
import Img1 from "../../assets/Places/boat.jpg";
import Img2 from "../../assets/Places/tajmahal.jpg";
import Img3 from "../../assets/Places/water.jpg";
import Img4 from "../../assets/Places/place4.jpg";
import Img5 from "../../assets/Places/place5.jpg";
import Img6 from "../../assets/Places/place6.jpg";

const PlacesData = [
    {
        img:Img1,
        title:"Boat tour",
        location: "USA",
        description: 'lorem ipsum dolor sit amet consectutre adipsio',
        price: 100,
        type: "Cultural Relax",
    },
    {
        img:Img2,
        title:"Taj Mahal",
        location: "India",
        description: 'lorem ipsum dolor sit amet consectutre adipsio',
        price: 6700,
        type: "Cultural Relax",
    },
    {
        img:Img3,
        title:"Underwater",
        location: "US",
        description: 'lorem ipsum dolor sit amet consectutre adipsio',
        price: 100,
        type: "Cultural Relax",
    },
    {
        img:Img4,
        title:"Boat tour",
        location: "USA",
        description: 'lorem ipsum dolor sit amet consectutre adipsio',
        price: 100,
        type: "Cultural Relax",
    },
    {
        img:Img5,
        title:"Boat tour",
        location: "USA",
        description: 'lorem ipsum dolor sit amet consectutre adipsio',
        price: 100,
        type: "Cultural Relax",
    },
    {
        img:Img6,
        title:"Boat tour",
        location: "USA",
        description: 'lorem ipsum dolor sit amet consectutre adipsio',
        price: 100,
        type: "Cultural Relax",
    },
]
const Places = () => {
    return(
    <div className='bg-grey-50 py-10'>
        <div className='container'>
            <h1 className='my-8 border-l-8 border-primary/50
            py-2 pl-2 text-3xl font-bold '>Best Places to visit
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    PlacesData.map((item, index)=>(
                        <PlacesCard key={index} {...item}/>
                    ))
                }
            </div>
        </div>
    </div>
);
};

export default Places;
