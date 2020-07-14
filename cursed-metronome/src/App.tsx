import { type ChangeEventHandler, useEffect, useState } from 'react'
import './App.css'
import { videos } from "./videos.ts";

const MIN_BPM = 1;
const MAX_BPM = 400;

function App() {
    const [bpm, setBpm] = useState(1);
    const [videoId, setVideoId] = useState(videos[1]);

    useEffect(() => {
        setVideoId(videos[bpm]);
    }, [bpm, setVideoId]);


    const handleBpmChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const tempo = Math.min(Math.max(event.target.valueAsNumber, MIN_BPM), MAX_BPM);

        setBpm(tempo);
    };

    return (
        <>
            <h1>Cursed metronome</h1>
            <input type="range" min={MIN_BPM} max={MAX_BPM} onChange={handleBpmChange}/>

            <div>{bpm} BPM</div>

            <div style={{ position: "relative", width: "680px", height: "480px" }}>
                <iframe
                    style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%" }}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                />
            </div>
        </>
    )
}

export default App;
