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
    <div className="absolute w-[90vw] h-[90vh] bottom-0 right-[5vw] -z-10">
      <BackgroundSVG />
    </div>
    <div className="flex flex-col w-screen min-h-screen">
      <div className="flex flex-row w-screen h-[10vh] justify-between">
        <img src={logo} className="p-2 w-24 h-24" />
        <AudioPlayer currentSong={currentSong} setCurrentSong={setCurrentSong}/>
      </div>
      <div className="ml-auto mr-auto">
        <div id="TitleTextContainer" className="overflow-visible">
          {TitleText(currentSong)}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
