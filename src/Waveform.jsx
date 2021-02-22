import React, {useEffect, useRef, useState} from "react";
import WaveSurfer from "wavesurfer.js";
import {IconContext} from "react-icons";
import {FaPlayCircle} from 'react-icons/fa';

const waveSurferOptions = ref => ({
    container: ref,
    waveColor: "lightgray",
    progressColor: "#08080888",
    cursorColor: "#080808",
    barWidth: 1,
    barHeight: 4,
    maxCanvasWidth: 200,
    responsive: true,
    height: 50,
    // Use the PeakCache to improve rendering speed of large waveforms.
    partialRender: false
});

export default function Waveform({url}) {
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [playing, setPlay] = useState(false);

    // create new WaveSurfer instance
    // On component mount and when url changes
    useEffect(() => {
        setPlay(false);

        const options = waveSurferOptions(waveformRef.current);
        wavesurfer.current = WaveSurfer.create(options);

        wavesurfer.current.load(url);

        wavesurfer.current.on("ready", function () {
            if (wavesurfer.current) {
                wavesurfer.current.setVolume(0.5);
            }
        wavesurfer.current.on("seek", () => {
            setPlay(true);
            wavesurfer.current.play()
        });
        });
        // Removes events, elements and disconnects Web Audio nodes.
        // when component unmount
        return () => wavesurfer.current.destroy();
    }, [url]);

    const handlePlayPause = () => {
        setPlay(!playing);
        wavesurfer.current.playPause();
    };

    return (
        // the container
        <div className={"waveform-element"}>
            {/* the header */}
            <div style={{position: "relative", width: 0, height: 0}}>
            <IconContext.Provider value={{size: 40}}>
                <span onClick={() => handlePlayPause()} id={"play-span"}>
                    <FaPlayCircle/></span>
            </IconContext.Provider>
            </div>
            {/* the waveform (ui kit must be turned off for it to display correctly) */}
            <div className={"waveform"}
                 ref={waveformRef}>
            </div>
        </div>
    );
}