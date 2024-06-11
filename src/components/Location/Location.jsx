const Location =()=>{
    return(
        <div>
            <div>
                <div className='container pb-10'>
                    <h1 className='inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl
                    font-bold sm:text-3xl'
                    >Location to visit </h1>
                    <div className='rounded-xl'>
                        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.0824693632585!2d19.814611309054385!3d45.266343679569886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b11aec1c90e8b%3A0x840235d9dbe34d50!2z0KTQuNC70LjQv9CwINCk0LjQu9C40L_QvtCy0LjRm9CwIDE2Mywg0J3QvtCy0Lgg0KHQsNC0IDIxMDAw!5e0!3m2!1ssr!2srs!4v1717767074788!5m2!1ssr!2srs'
                                width='100%'
                                height='360'
                                allowFullScreen=''
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                                style={{borderRadius: "20px"}}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location