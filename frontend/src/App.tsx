import { useState } from "react"
import AudioPlayer from "./AudioPlayer";
import logo from "/logo.svg";
import tallSpeakerSVG from "/speaker-tall.svg";
import turntableSVG from "/turntable.svg";
import TurntableSVG from "./turntable/turntable";
import BackgroundSVG from "./turntable/backgrounds";
import TitleText from "./SongTitle/TitleText.tsx";

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
    <div className="absolute w-[90vw] h-[90vh] bottom-0 right-[5vw]">
      <BackgroundSVG />
    </div>
    <div className="flex flex-col w-screen min-h-screen">
      <div className="flex flex-row w-screen h-[10vh] justify-between">
        <img src={logo} className="p-2 w-24 h-24" />
        <AudioPlayer/>
      </div>
      <div className="ml-auto mr-auto">
        <div id="TitleTextContainer" className="overflow-visible">
          {TitleText("Clair de Lune")}
        </div>
      </div>
      {/* <div className="flex flex-row w-screen h-[80vh] my-8">
        <img src={tallSpeakerSVG} className="w-1/4 object-fit" alt="Tall Speaker" />
        <TurntableSVG />
        <img src={tallSpeakerSVG} className="w-1/4 object-fit" alt="Tall Speaker" />
      </div> */}
    </div>
    {/* <div className="absolute top-[82vh] right-1/2">
      <AudioPlayer/>
    </div> */}
    {/* <div className='flex flex-col w-full h-screen justify-center place-items-center'>
      <div className='text-center p-4 border' >Currently Playing: {currentSong}</div>
      <div className='text-center p-4 text-violet-400 border' >ahhhhdsfdsafdsafdsafakdsajd</div>
      <button className='text-center p-4 rounded-lg border border-violet-400 hover:shadow hover:shadow-sky-50' onClick={fetchData}>
        Play
      </button>
      {currentSong &&
        <AudioPlayer />
      }
    </div> */}
    </>
  )
}

export default App
