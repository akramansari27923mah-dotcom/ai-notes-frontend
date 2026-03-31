import perfect from '../data/perfect'

const PerfectFor = () => {
    return (
        <div id='Perfect' className='p-5 flex flex-col justify-center gap-5 items-center'>
            <div className='flex justify-center items-center gap-5'>
                <div className='w-[420px] border-b border-gray-400'></div>
                <h1 className='md:text-4xl text-xl text-nowrap font-bold text-gray-800'>Perfect For</h1>
                <div className='w-[420px] border-b border-gray-400'></div>

            </div>
            <div className='grid md:grid-cols-3 gap-10 items-center '>
                {
                    perfect.map((items, ind) => {
                        const Icon = items?.icon
                        return (
                            <div key={ind} className='bg-white active:scale-75 shadow-lg p-4 shadow-gray-400 rounded-lg hover:scale-105 transition-all duration-300 space-y-2'>
                                <div className='text-center flex items-center justify-start gap-2 border-b border-gray-300 '>
                                    <Icon className={`${items.color}`} size={30} />
                                    <h1 className='font-bold text-2xl text-gray-800'>{items.title}</h1>
                                </div>
                                <p className='text-sm text-gray-500'>{items.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PerfectFor