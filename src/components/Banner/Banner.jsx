import TravelImg from '../../assets/travelbox.png'
import {MdFlight, MdOutlineLocalHotel} from "react-icons/md";
import {IoIosWifi} from "react-icons/io";
import {IoFastFoodSharp} from "react-icons/io5";
const Banner = ()=>{
    return(
      <div className='min-h-[500px] bg-gray-100'>
          <div className='min-h-[500px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0'>
              <div className='container'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                      {/* image section */}
                      <div>
                          <img className='max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover' alt='Travelbox' src={TravelImg} />
                      </div>
                      <div>
                          <h1 className='text-3xl font-bold sm:text-4xl'>Explore all corners of the world with us</h1>
                          {/* eslint-disable-next-line react/no-unescaped-entities */}
                          <p className='text-sm text-gray-500 tracking-wide leading-8'>Embark on a journey of discovery and adventure with our expert guides. Whether you're
                              craving the bustling streets of a vibrant metropolis.</p>
                          <div className='grid grid-cols-2 gap-6'>
                              <div className='space-y-6'>
                                  <div className='flex items-center gap-4'>
                                      <MdFlight
                                          className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                                      <p>Flight</p>
                                  </div>
                                  <div className='flex items-center gap-4'>
                                      <MdOutlineLocalHotel
                                          className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-violet-400'/>
                                      <p>Hotel</p>
                                  </div>
                              </div>
                              <div className='space-y-6'>
                                  <div className='flex items-center gap-4'>
                                      <IoIosWifi
                                          className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-violet-400'/>
                                      <p>Wi-fi</p>
                                  </div>
                                  <div className='flex items-center gap-4'>
                                      <IoFastFoodSharp
                                          className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-violet-400'/>
                                      <p>Foods</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>
    );
}
export default Banner