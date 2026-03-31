/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { getNotesApiHandel } from "../api/api"
import formateData from "../utils/formateDate"
import { aiContext } from "../contexts/ai.context"
import { useNavigate } from "react-router-dom"
import { LoaderCircle } from "lucide-react"

const Card = () => {

  const [notes, setNotes] = useState([])
  const { setData, setPreviewDitact, setLoader, loader } = aiContext()
  const navigate = useNavigate()

  console.log(notes);
  

  useEffect(() => {
    const checkNotes = async () => {
      try {

        const note = await getNotesApiHandel()
        setNotes(note.notes)
      }
      catch (err) {
        console.error(err)
      }
      finally {
        setLoader(false)
      }
    }

    checkNotes()
  }, [])


  const previewNote = (note) => {
    setData(note)
    localStorage.setItem('view', 'View')
    setPreviewDitact('View')

    setTimeout(() => {
      navigate('/result')
    }, 1000)
  }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">

      {
        notes.length === 0 && (
          <div className="text-2xl font-semibold">
            Notes Not Create Yet !
          </div>
        )
      }

      {
        loader && (
          <div className=" font-semibold flex items-center gap-2 text-sm">
            <LoaderCircle className="animate-spin" size={15} />
            Fetching Notes...
          </div>
        )
      }

      {notes.map((items, ind) => (
        <div
          key={items.userId}
          className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300 flex flex-col justify-between"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-md text-nowrap font-semibold text-gray-800 mb-2">
              {ind + 1} : 📄 {items.title}
            </h1>
          </div>


          <p className="text-gray-600 text-sm line-clamp-4 break-words">
            {items.notes.slice(0, 100)}
          </p>

          <div className="mt-4 flex justify-between items-center">
             <label className="text-sm font-semibold text-nowrap">
              {formateData(items.createdAt)}
            </label>

            <button
              onClick={() => previewNote(items.notes)}
              className="text-blue-500 text-sm hover:underline">
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card