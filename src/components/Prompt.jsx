import { Eye, FileText, LoaderCircle, MoveLeft, Sparkles, Trash, X } from 'lucide-react'
import { useState } from 'react'
import { aiContext } from '../contexts/ai.context'
import { getDataApiHandel } from '../api/api'
import { AuthCon } from '../contexts/auth.context'
import { Link } from 'react-router-dom'
import { showError } from '../utils/toaster'

const Prompt = () => {

    const [pdf, SetPdf] = useState(null)
    const [prompt, setPrompt] = useState('')
    const [title, setTitle] = useState('')
    const { setLoader, loader, setData, setPreviewDitact } = aiContext()
    const { user } = AuthCon()



    const getData = async () => {

        if (!pdf && !prompt.trim()) {
            return showError('One fields is required')
        }

        if (!title) {
            return showError('Title is required')
        }

        try {
            setLoader(true)
            localStorage.removeItem('view')
            const formData = new FormData();
            formData.append("file", pdf);
            formData.append("prompt", prompt);
            formData.append("title", title);

            const res = await getDataApiHandel(formData)
            setData(res?.data?.notes)
            console.log(res);

            localStorage.setItem(`data_${user._id}`, JSON.stringify(res?.data?.notes))
            setTimeout(() => {
                window.location.href = '/result'
            }, 1000)

        } catch (err) {
            console.error(err)
        } finally {
            setLoader(false)
        }
    }

    const clean = () => {
        setLoader(false)
        SetPdf(null)
        setPrompt('')
    }

    const changePdf = () => {
        SetPdf(null)
    }

    const handelKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftkey) {
            e.preventDefault()
            getData()
        }
    }


    return (
        <div className='md:w-5/12 w-[90vw] p-4 rounded-xl bg-white shadow-md flex flex-col gap-3'>

            <div className=" flex justify-end gap-2">
                <div className="p-2 rounded-full bg-gray-300"></div>
                <div className="p-2 rounded-full bg-green-500"></div>
                <div className="p-2 rounded-full bg-yellow-500"></div>
                <div className="p-2 rounded-full bg-red-500"></div>
            </div>

            <h1 className='font-semibold'>Prompt</h1>

            <textarea
                rows={1}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handelKeyPress}
                placeholder='Enter your prompt here...'
                className='outline-none bg-gray-300 rounded-lg p-3 hide-scroll'>

            </textarea>

            <h1 className='font-semibold'>Title</h1>
            <textarea
                rows={1}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={handelKeyPress}
                placeholder='Enter your title here...'
                className='outline-none bg-gray-300 rounded-lg p-3 hide-scroll'>

            </textarea>

            <div className='flex justify-between items-center flex-col md:flex-row gap-y-5'>
                <div className='flex justify-center items-center gap-3'>
                    <button
                        onClick={clean}
                        className='px-4 py-2 rounded-2xl bg-red-500 text-white text-sm text-nowrap flex justify-center items-center gap-2'>
                        <Trash />
                        Clear All
                    </button>
                    <div className='h-[30px] border border-gray-400'></div>
                    <div className='px-4 py-2 rounded-2xl bg-green-500 text-white  relative overflow-hidden cursor-pointer'>
                        <div className='flex justify-center items-center gap-2 text-nowrap'>
                            <FileText />
                            <h1>{pdf ? pdf.name : 'Select Notes'}</h1>
                        </div>
                        <input
                            accept='application/pdf'
                            onChange={(e) => SetPdf(e.target.files[0])}
                            type="file" className='absolute top-0 w-full h-screen opacity-0 cursor-pointer' />
                    </div>
                    {
                        pdf && (
                            <div
                                onClick={changePdf}
                                className='p-1 rounded-full bg-red-500 hover:scale-105 transition-all duration-300 cursor-pointer '>
                                <X color='white' size={15} />
                            </div>
                        )
                    }
                </div>
                <div>
                    <button
                        disabled={loader || (!pdf && !prompt)}
                        onClick={getData}
                        className='flex disabled:opacity-80 disabled:cursor-not-allowed justify-center items-center px-6 py-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 gap-2 to-blue-400 text-white transition-all duration-300 active:scale-75'>
                        {
                            loader ? (
                                <>
                                    <LoaderCircle className='animate-spin' />
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <Sparkles />
                                    Generate
                                </>
                            )
                        }

                    </button>
                </div>
            </div>

            <Link to={'/'} className='fixed bottom-5 right-5 px-4 py-2 rounded-lg bg-green-500 hover:scale-105 transition-all duration-300 active:scale-75 text-white font-semibold flex justify-center items-center gap-3'>
                <MoveLeft />
                Home
            </Link>

            <Link
                onClick={() => setPreviewDitact('')}
                to={'/result'}
                className='fixed md:bottom-20 bottom-[590px] md:text-base right-5 px-4 py-2 rounded-lg bg-green-500 hover:scale-105 transition-all duration-300 active:scale-75 text-white font-semibold flex text-sm justify-center items-center gap-3'>
                <Eye />
                Preview
            </Link>
        </div>
    )
}

export default Prompt