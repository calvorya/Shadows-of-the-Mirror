import { useState, useEffect } from 'react'
import storyData from './story.json'

function Story() {
    const [currentScene, setCurrentScene] = useState('start')
    const [sceneData, setSceneData] = useState(storyData.start)
    const [bgObjects, setBgObjects] = useState([])
    const [hoveredObject, setHoveredObject] = useState(null)

    const objects = ['🕯️', '📜', '🗝️', '⚰️', '🦇', '🕸️', '🌙', '⚡', '🏰', '👻', '🎭', '📖', '🔮', '⌛']

    useEffect(() => {
        const generateObjects = () => {
            const newObjects = Array.from({ length: 20 }, () => ({
                icon: objects[Math.floor(Math.random() * objects.length)],
                top: Math.random() * 100,
                left: Math.random() * 100,
                rotation: Math.random() * 360,
                scale: 0.5 + Math.random() * 1.5,
                animationDuration: 15 + Math.random() * 20,
                hue: Math.random() * 360
            }))
            setBgObjects(newObjects)
        }

        generateObjects()
        const interval = setInterval(generateObjects, 30000)
        return () => clearInterval(interval)
    }, [])

    const handleOptionClick = (nextScene) => {
        setCurrentScene(nextScene)
        setSceneData(storyData[nextScene])
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="story-container relative min-h-screen w-screen overflow-hidden bg-gradient-to-b from-[#1a0f2e] to-[#000000] p-4 md:p-8 animate-gradient">
                {bgObjects.map((obj, i) => (
                    <span
                        key={i}
                        className={`absolute text-3xl transition-all duration-500 ease-in-out cursor-pointer hover:text-glow ${hoveredObject === i ? 'opacity-80 scale-150 rotate-12' : 'opacity-[0.15]'}`}
                        style={{
                            top: `${obj.top}%`,
                            left: `${obj.left}%`,
                            transform: `rotate(${obj.rotation}deg) scale(${obj.scale})`,
                            animation: `float ${obj.animationDuration}s infinite ease-in-out, glow ${obj.animationDuration * 0.5}s infinite alternate`,
                            filter: hoveredObject === i ? `hue-rotate(${obj.hue}deg) drop-shadow(0 0 8px rgba(255,255,255,0.8))` : 'none'
                        }}
                        onMouseEnter={() => setHoveredObject(i)}
                        onMouseLeave={() => setHoveredObject(null)}
                    >
                        {obj.icon}
                    </span>
                ))}

                <div className="scene relative mx-auto mt-8 backdrop-blur-md bg-black/30 rounded-2xl shadow-[0_0_50px_rgba(128,0,255,0.1)] p-6 md:p-8 border border-purple-900/30 max-h-[80vh] w-full max-w-4xl flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-indigo-900/10 to-black/30 rounded-2xl pointer-events-none animate-pulse" />

                    <h2 className="relative text-2xl md:text-3xl font-bold mb-6 text-center text-white/90 font-serif">
                        {sceneData.title}
                    </h2>

                    <p className="relative scene-text text-base md:text-lg mb-8 text-gray-200/90 leading-relaxed font-light overflow-y-auto flex-grow custom-scrollbar">
                        {sceneData.text}
                    </p>

                    <div className="relative options grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-stretch mt-auto">
                        {sceneData.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionClick(option.next)}
                                className="option-button bg-purple-900/20 hover:bg-purple-800/40 text-white/90 font-medium py-4 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30 text-base border border-purple-700/30 hover:border-purple-500/50 backdrop-blur-sm"
                            >
                                {option.text}
                            </button>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                    @keyframes float {
                        0% { transform: translateY(0) rotate(${Math.random() * 360}deg); }
                        33% { transform: translateX(10px) translateY(-15px) rotate(${Math.random() * 360 + 180}deg); }
                        66% { transform: translateX(-10px) translateY(-25px) rotate(${Math.random() * 360 - 180}deg); }
                        100% { transform: translateY(0) rotate(${Math.random() * 360}deg); }
                    }
                    @keyframes glow {
                        0% { filter: brightness(1) drop-shadow(0 0 5px rgba(255,255,255,0.3)); }
                        100% { filter: brightness(1.5) drop-shadow(0 0 15px rgba(255,255,255,0.6)); }
                    }
                    @keyframes gradient {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    .animate-gradient {
                        background-size: 200% 200%;
                        animation: gradient 15s ease infinite;
                    }
                    .text-glow {
                        text-shadow: 0 0 10px rgba(255,255,255,0.8);
                    }
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 8px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: rgba(0, 0, 0, 0.2);
                        border-radius: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: rgba(147, 51, 234, 0.3);
                        border-radius: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: rgba(147, 51, 234, 0.5);
                    }
                `}</style>
            </div>
        </div>
    )
}

export default Story
