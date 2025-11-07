import React, {useState, useContext, useEffect} from 'react';

export default function NoteForm({onSubmit, initialData}) {

  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
    }
  }, [initialData]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({title, content});
    setTitle("");
    setContent("");
  }
  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8 mt-6">
  <form onSubmit={handleSubmit} className="space-y-6">
    <input
      type="text"
      value={title}
      placeholder="Enter a title..."
      onChange={(e) => setTitle(e.target.value)}
      className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
    />

    <textarea
      name="content"
      value={content}
      placeholder="Enter your content..."
      onChange={(e) => setContent(e.target.value)}
      rows="6"
      className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 resize-none"
    ></textarea>

    <button
      type="submit"
      className={`w-full py-3 rounded-xl text-white font-semibold transition duration-300 ${
        initialData
          ? "bg-yellow-500 hover:bg-yellow-600"
          : "bg-indigo-600 hover:bg-indigo-700"
      }`}
    >
      {initialData ? "Update Note" : "Add Note"}
    </button>
  </form>
</div>
  )
}
