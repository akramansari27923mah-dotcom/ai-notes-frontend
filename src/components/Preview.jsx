import { Copy, MoveLeft, Sparkles } from "lucide-react"
import { aiContext } from "../contexts/ai.context"
import { Link } from 'react-router-dom'
import { useState } from "react"
import ChatMarkdown from "./MarkDown";
import { useNavigate } from "react-router-dom";
import { AuthCon } from "../contexts/auth.context";

const Preview = () => {

    const { data, loader, previewDitact, setPreviewDitact, prev, setData } = aiContext()
    const [copy, setCopy] = useState(false)
    const { user } = AuthCon()
    const navigate = useNavigate()

    const clipBoard = () => {
        setCopy(true)
        const copyText = data
        if (copyText) {
            navigator.clipboard.writeText(copyText)
        } else {
            alert('Notes is empty')
        }
        return setTimeout(() => setCopy(false), 1000)
    }

    const navigater = () => {
        localStorage.removeItem('view')
        localStorage.removeItem('Prev')
        setPreviewDitact('')
        navigate('/create')
    }

    const handelQuiz = () => {
        const quiz = localStorage.getItem(`quiz_${user?._id}`)
        
        if (quiz) {
            setData(JSON.parse(quiz));
        }
    }

    const handelPrev = () => {
        
        const prevQuiz = localStorage.getItem('Prev')
        
        if (prevQuiz) {
            setData(prevQuiz)
        }
    }

    const handelNotes = () => {
        if (user?._id) {
            const res = localStorage.getItem(`data_${user._id}`);

            if (res) {
                setData(JSON.parse(res));
            }
        }
    }

    const handelHome = () => {
        localStorage.removeItem('view')
        localStorage.removeItem('Prev')
    }

    return (
        <div className='p-4 shadow-md bg-white rounded-lg md:w-5/12 w-full h-screen md:h-[615px]'>
            <h1 className='text-2xl font-semibold mb-3'>
                {
                    previewDitact === 'View' ? 'View Note' : 'AI Generated Notes'
                }
            </h1>

            <div className="my-2 flex justify-between items-center">
                <button
                    onClick={handelNotes}
                    className="px-6   text-sm py-2 rounded-sm bg-indigo-500 text-white font-semibold">
                    Notes
                </button>
                <button
                    onClick={previewDitact === 'View' ? handelPrev : handelQuiz}
                    className="px-6   text-sm py-2 rounded-sm bg-indigo-500 text-white font-semibold">
                    Quiz
                </button>
                {/* <button className="px-6   text-sm py-2 rounded-sm bg-indigo-500 text-white font-semibold">
                    Chat
                </button> */}
            </div>

            {
                data ? (
                    <div className="prose prose-blue max-w-none whitespace-pre-wrap md:h-[460px] h-[520px] bg-gray-900 text-white text-wrap overflow-scroll hide-scroll rounded-lg p-2 mb-2">
                        <ChatMarkdown content={data} />
                    </div>
                ) : (
                    <div className="prose prose-blue max-w-none whitespace-pre-wrap h-[430px] bg-gray-900 text-white text-wrap overflow-scroll hide-scroll rounded-lg p-2 mb-2 flex justify-center items-center text-2xl font-bold">
                        Not Notes Yet
                    </div>
                )
            }



            {
                loader && (
                    <div>
                        Loading...
                    </div>
                )
            }

            <div
                className="flex justify-center items-center gap-5">
                <button
                    onClick={navigater}
                    className="flex items-center gap-2 text-nowrap bg-blue-600 text-white px-5 py-2  rounded text-sm">
                    <Sparkles size={18} />
                    Generate Notes
                </button>

                <button onClick={clipBoard} className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 text-nowrap  rounded text-sm">
                    {
                        !copy ? (
                            <>
                                <Copy size={18} />
                                Copy Notes
                            </>
                        ) : (
                            <>
                                <Copy size={18} />
                                Copied
                            </>
                        )
                    }
                </button>

                {/* <button
                    onClick={navigater}
                    className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded text-sm">
                    <Download size={18} />
                    Download
                </button> */}

            </div>

            <Link to={'/'} 
            onClick={handelHome}
            className='fixed md:bottom-5 bottom-[620px] right-5 px-4 py-2 rounded-lg bg-green-500 hover:scale-105 transition-all duration-300 active:scale-75 text-white font-semibold flex text-sm justify-center items-center gap-3'>
                <MoveLeft />
                Home
            </Link>

        </div>
    )
}

export default Preview