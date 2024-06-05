import Img1 from "../../assets/Places/boat.jpg";
import Img2 from "../../assets/Places/tajmahal.jpg";
import Img3 from "../../assets/Places/water.jpg";
import Img4 from "../../assets/Places/place4.jpg";
import Img5 from "../../assets/Places/place5.jpg";
import Img6 from "../../assets/Places/place6.jpg";
import BlogCard from "./BlogsCard.jsx";
const BlogsData = [
    {
        id: 1,
        image: Img1,
        title: 'The 10 best places to vidis in India',
        description: 'The 1st places to vidis in India',
        author: 'John Doe',
    },
    {
        id: 2,
        image: Img2,
        title: 'The 10 best places to vidis in India',
        description: 'The 1st places to vidis in India',
        author: 'John Doe',
    },
    {
        id: 3,
        image: Img3,
        title: 'The 10 best places to vidis in India',
        description: 'The 1st places to vidis in India',
        author: 'John Doe',
    },
    {
        id: 4,
        image: Img4,
        title: 'The 10 best places to vidis in India',
        description: 'The 1st places to vidis in India',
        author: 'John Doe',
    },
    {
        id: 5,
        image: Img5,
        title: 'The 10 best places to vidis in India',
        description: 'The 1st places to vidis in India',
        author: 'John Doe',
    },
    {
        id: 6,
        image: Img6,
        title: 'The 10 best places to vidis in India',
        description: 'The 1st places to vidis in India',
        author: 'John Doe',
    },
]
const BlogsComp = () => {
    return(
        <div>
            <div className="container">
                <h1 className='my-8 border-l-8 border-primary-50 py-2 pl-2 text-3xl font-bold'
                >Our Latest Blogs
                </h1>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                    {
                        BlogsData.map((item, index)=>(
                            <BlogCard key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default BlogsComp