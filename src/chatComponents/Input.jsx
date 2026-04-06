import { ArrowUpFromDot, FolderClosed } from 'lucide-react'
import { chatCon } from '../contexts/chat.context'
import { getChatApiHandel } from '../api/api'
import { showError } from '../utils/toaster'

const Input = () => {

    const { setInputValue, setPdfValue, pdfValue, inputValue, setMessage, setLoader } = chatCon()
    

    const sendMessage = async () => {

        if (!inputValue.trim()){
            return showError('Prompt is required')
        } 

        if (!pdfValue){
            return showError('Notes is required')
        } 

        setMessage((prev) => [
            ...prev,
            {
                role: 'user',
                content: inputValue
            }
        ])

        setInputValue('')
        setLoader(true)

        try {
            const formData = new FormData()
            formData.append('file', pdfValue)
            formData.append('prompt', inputValue)
            const res = await getChatApiHandel(formData)


            setMessage((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content: res.createChat.reply
                }
            ])

        }
        catch (err) {
            console.error(err)
        }
        finally {
            setLoader(false)
        }
    }

    const handelKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftkey) {
            e.preventDefault()
            sendMessage()
        }
    }

    return (
        <div className='flex justify-center items-center gap-3'>
            <div className='flex justify-center items-center relative'>
                <button className='px-4  py-2 rounded-lg text-nowrap bg-green-500 text-white text-sm cursor-pointer'>
                    {
                        pdfValue ?
                            pdfValue?.name
                            :
                            <FolderClosed />
                    }
                </button>
                <input type="file" onChange={(e) => setPdfValue(e.target.files[0])} className='absolute top-0 w-[100px] opacity-0' />
            </div>
            <div className='flex justify-center items-center gap-3 relative'>
                <input type="text" className='md:w-[400px] w-[250px] p-3 rounded-full outline-none border-gray-400 focus:border-black border'
                    placeholder='Ask any question...'
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handelKeyDown}
                    value={inputValue}
                />
                <div
                    onClick={sendMessage}
                    className='absolute right-3 bg-gray-300 p-2 rounded-full'>
                    <ArrowUpFromDot size={20} />
                </div>
            </div>
        </div>
    )
}

export default Input