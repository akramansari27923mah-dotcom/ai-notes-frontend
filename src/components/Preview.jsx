import { Copy, MoveLeft, Sparkles } from "lucide-react"
import { aiContext } from "../contexts/ai.context"
import { Link } from 'react-router-dom'
import { useState } from "react"
import ChatMarkdown from "./MarkDown";
import { useNavigate } from "react-router-dom";

const Preview = () => {

    const { data, loader, previewDitact, setPreviewDitact } = aiContext()
    const [copy, setCopy] = useState(false)
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
        setPreviewDitact('')
        navigate('/create')
    }

    return (
        <div className='p-4 shadow-md bg-white rounded-lg md:w-5/12 w-full h-screen md:h-[610px]'>
            <h1 className='text-2xl font-semibold mb-3'>
                {
                    previewDitact === 'View' ? 'View Note' : 'AI Generated Notes'
                }
            </h1>

            {
                data ? (
                    <div className="prose prose-blue max-w-none whitespace-pre-wrap md:h-[500px] h-[550px] bg-gray-900 text-white text-wrap overflow-scroll hide-scroll rounded-lg p-2 mb-2">
                        <ChatMarkdown content={data} />
                    </div>
                ) : (
                    <div className="prose prose-blue max-w-none whitespace-pre-wrap h-[500px] bg-gray-900 text-white text-wrap overflow-scroll hide-scroll rounded-lg p-2 mb-2 flex justify-center items-center text-2xl font-bold">
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
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded text-sm">
                    <Sparkles size={18} />
                    Generate Notes
                </button>

                <button onClick={clipBoard} className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded text-sm">
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
            </div>

            <Link to={'/'} className='fixed md:bottom-5 bottom-[620px] right-5 px-4 py-2 rounded-lg bg-green-500 hover:scale-105 transition-all duration-300 active:scale-75 text-white font-semibold flex text-sm justify-center items-center gap-3'>
                <MoveLeft />
                Home
            </Link>

        </div>
    )
}

export default Preview