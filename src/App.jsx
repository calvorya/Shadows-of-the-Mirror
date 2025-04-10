import { useState } from 'react'
import './App.css'
import Story from './components/Story'

function App() {
  const [showStory, setShowStory] = useState(false)

  return (
    <>
      {showStory && <Story />}
      {!showStory && (
        <div className="fixed inset-x-0 top-0 text-center py-8 transition-transform duration-500 ease-in-out">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-100">Midnight Mirage</h1>
          <div className="flex flex-col items-center justify-center gap-4 mb-8 px-4">
            <p className="text-lg md:text-xl text-gray-300 w-full mb-8 leading-relaxed">
              در یک شب بارانی و مرموز، به عمارت اسرارآمیز «سایه‌های آینه» نزدیک می‌شوید. در این ماجراجویی تعاملی، تصمیمات شما مسیر داستان را تعیین می‌کند و سرنوشت عمارت و ساکنان آن را رقم می‌زند.
            </p>
            <button
              onClick={() => setShowStory(true)}
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out transform hover:-translate-y-1"
            >
              شروع بازی
            </button>
            <a
              href="https://github.com/calvorya/midnight-mirage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gray-700 hover:bg-gray-800 active:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              گیت‌هاب
            </a>
            <p className="text-sm text-gray-400 mt-4">by calvorya</p>
          </div>
        </div>
      )}
    </>
  )
}

export default App
