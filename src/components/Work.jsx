import work from '../data/works'

const Work = () => {
    return (
        <div id='Works' className='p-5 flex flex-col justify-center gap-5 mt-5 items-center'>
            <div className='flex justify-center items-center gap-5'>
                <div className='w-[400px] border-b border-gray-400'></div>
                <h1 className='md:text-4xl text-nowrap text-xl font-bold text-gray-800'>How it Works</h1>
                <div className='w-[400px] border-b border-gray-400'></div>

            </div>
            <div className='grid md:grid-cols-3 gap-10 items-center '>
                {
                    work.map((items, ind) => {
                        const Icon = items?.icon
                        return (

                            <div key={ind} className={`bg-white shadow-lg active:scale-75 p-4 shadow-gray-400 rounded-lg hover:scale-105 transition-all duration-300 bg-gradient-to-r ${items.gradient} text-white`}>
                                <Icon className={` mx-auto mb-4`} size={50} />
                                <div className='text-center space-y-1'>
                                    <h1 className='font-bold text-2xl'>{items.title}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Work