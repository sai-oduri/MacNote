
export default function App() {
  return (
    <div className="p-8">

      <div className="bg-[rgb(30,30,30)] min-h-[calc(100vh-70px)] rounded-lg shadow-md">
        <div className="bg-[rgb(56,56,56)] h-10 rounded-t-lg flex items-center">
          <div className="flex items-center ml-2">
            <div className="bg-[rgb(237,106,94)] h-3 w-3 rounded-full m-1"></div>
            <div className="bg-[rgb(244,191,79)] h-3 w-3 rounded-full m-1"></div>
            <div className="bg-[rgb(97,197,84)] h-3 w-3 rounded-full m-1"></div>
          </div>
        </div>

        <div className="min-h-[calc(100vh-110px)] text-sm text-white font-mono font-thin caret-white outline-none p-1" contentEditable={true}>
        </div>
      </div>

    </div>
  )
}