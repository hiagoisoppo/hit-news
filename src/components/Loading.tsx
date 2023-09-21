function Loading() {
  return (
    <div className="bg-slate-300 rounded-lg shadow-lg w-96 h-80 overflow-hidden flex flex-col items-start">
      <div className="w-full h-36 bg-opacity-60 bg-zinc-400"/>
      <div className="bg-zinc-400 mx-auto bg-opacity-60 p-2 rounded-lg w-11/12 mt-4"/>
      <div className="bg-zinc-400 mx-auto p-2 bg-opacity-60 rounded-lg w-10/12 mt-1"/>
      <div className="bg-zinc-400 ml-3 p-1 bg-opacity-60 rounded-lg w-11/12 mt-4"/>
      <div className="bg-zinc-400 ml-3 p-1 bg-opacity-60 rounded-lg w-9/12 mt-1"/>
      <div className="bg-zinc-400 ml-3 p-1 bg-opacity-60 rounded-lg w-10/12 mt-1"/>
      <div className="bg-zinc-400 ml-3 p-1 bg-opacity-60 rounded-lg w-11/12 mt-1"/>
      <div className="bg-zinc-400 ml-3 p-1 bg-opacity-60 rounded-lg w-7/12 mt-1"/>
      <div className="bg-zinc-400 ml-3 h-0.5 bg-opacity-60 w-11/12 mt-4"/>
      <div className="w-full flex justify-between items-center p-3">
        <div className="bg-zinc-400 p-1 bg-opacity-60 rounded-lg w-4/12"/>
        <div className="flex gap-2">
          <div className="bg-zinc-400 bg-opacity-60 rounded-full w-5 h-5"/>
          <div className="bg-zinc-400 bg-opacity-60 rounded-full w-5 h-5"/>
        </div>
      </div>
    </div>
  )
}

export default Loading;