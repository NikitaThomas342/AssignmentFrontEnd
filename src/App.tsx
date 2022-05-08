import { InputForm } from 'components/InputForm'
import { useState, useCallback, useEffect } from 'react'
import { getBlogs } from 'service/backend'
import './App.css'

export const App = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [blogs, setBlogs] = useState<[{ title: string }]>()

  const reload = useCallback(() => {
    getBlogs().then((response) => setBlogs(response.data))
  }, [])

  useEffect(() => {
    if (!blogs) reload()
  }, [reload, blogs])

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col items-center justify-center mx-auto text-center p-6 border-1">
        <button className="btn mb-7" onClick={() => setShowForm(!showForm)}>Create a blog</button>
        {showForm && <InputForm reload={reload}/>}
        {blogs && blogs?.map((blog) => (
          <p className="2xl bg-gray-500 rounded text-white p-4 m-4">{blog.title}</p>
        ))}
      </div>
    </div>
  )
}
