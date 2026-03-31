
import key from '../data/keyFutures'

const KeyFeatures = () => {
    return (
        <div id='Features' className='p-5 flex flex-col justify-center gap-5 items-center'>
            <h1 className='text-4xl font-bold text-gray-800'>Key Features</h1>
            <div className='grid md:grid-cols-3 gap-10 items-center '>
                {
                    key.map((items, ind) => {
                        const Icon = items?.icon
                        return (
                            <div key={ind} className='bg-white active:scale-75 shadow-lg p-4 shadow-gray-400 rounded-lg hover:scale-105 transition-all duration-300'>
                                <Icon className={`${items.color} mx-auto mb-4`} size={50} />
                                <div className='text-center space-y-1'>
                                    <h1 className='font-bold text-2xl text-gray-800'>{items.title}</h1>
                                    <p className='text-sm text-gray-500'>{items.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default KeyFeatures