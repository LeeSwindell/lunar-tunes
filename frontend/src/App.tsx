import { useState } from "react"
import AudioPlayer from "./AudioPlayer";

function App() {
  const [currentSong, setCurrentSong] = useState<string>('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/play'); // Replace with your API endpoint URL
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text();
      setCurrentSong(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
    <div className='flex flex-col w-full h-screen justify-center place-items-center'>
      <div className='text-center p-4 border' >Currently Playing: {currentSong}</div>
      <div className='text-center p-4 text-violet-400 border' >ahhhhdsfdsafdsafdsafakdsajd</div>
      <button className='text-center p-4 rounded-lg border border-violet-400 hover:shadow hover:shadow-sky-50' onClick={fetchData}>
        Play
      </button>
      {currentSong &&
        <AudioPlayer />
      }
    </div>
    </>
  )
}

export default App
