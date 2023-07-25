import * as Slider from "@radix-ui/react-slider";
import React, { useEffect, useState } from "react";
import SongDetails from '../lib/spotify-song-timer-data.json';
import { cn } from "../scripts/cn";
import { FaPause, FaPlay } from "react-icons/fa";

export default function SpotifyLyricsSlider() {
  // creating a time tracking manager to change and manage time stamps for lyrics render
  const [currentTime, setCurrentTime] = useState(0);
  // toggle manager to check if the song is ON
  const [isPlaying, setIsPlaying] = useState(false);
  // value manager for handle the bias according to string length -- lyrics line
  const [lyricDelay, setLyricDelay] = useState(10);

  // methods to constantly change the lyrics when song is getting played -- only if the player is ON
  useEffect(() => {
    if (isPlaying) {
      // setting a reseter check, when song ends, the player will be reset
      if (currentTime === SongDetails.songLength) {
        setCurrentTime(0);
        setIsPlaying(false);
        return;
      }
      setTimeout(() => {
        manageCurrentTime();
      }, 100*lyricDelay);
    }
  }, [currentTime, isPlaying]);

  const manageCurrentTime = () => {
    setCurrentTime(currentTime + 1);
    // fetching the current line from the lyrics which is getting pointed
    // and getting it's length for adding custom delay, on every line switch
    const CURRENT_POINTED_LYRICS_STRING = SongDetails.songLyrics[currentTime];
    const CURRENT_POINTED_LYRICS_STRING_LENGTH = CURRENT_POINTED_LYRICS_STRING.length;
    setLyricDelay(CURRENT_POINTED_LYRICS_STRING_LENGTH);

    // scrolling if the slider time is more than 2
    if (currentTime >= 1 || currentTime % 2 === 0) {
      document.querySelector("#lyrics-container").scroll({ 
        top: 100 * currentTime,
        left: 100,
        behavior: "smooth"
      });
      console.log("[INFO] Triggered at point", currentTime);
    }
  };

  const renderLyrics = ({ lyrics, songLength }) => {
    let lines = [];
    for (let count = 0; count < songLength; count++) {
      lines.push(lyrics[count]);
    }
    return lines;
  };
  return (
    <div className="spotify-lyrics-slider-component-container">
      <h1 className="leading-snug tracking-tighter text-3xl font-medium mb-6">
        spotify kinda lyrics control.
      </h1>
      <div className="spotify-lyrics-slider-component">
        <div className="song-lyrics-wrapper my-12 min-w-[240px] max-w-[420px] w-fit h-[240px] bg-gray-200 rounded-md shadow-inner p-3 overflow-y-scroll"
          id="lyrics-container"
        >
          {renderLyrics({ 
            lyrics: SongDetails.songLyrics, 
            songLength: SongDetails.songLength 
          })?.map((songLine, songLineIndex) => {
            return (
              <button 
                className={cn(
                  "song-lyric-line font-semibold text-3xl text-left p-3 bg-transparent hover:bg-gray-300 mb-2 rounded-lg", 
                  songLineIndex === currentTime ? "text-gray-800" : "text-gray-400")} 
                key={songLineIndex}
                onClick={() => setCurrentTime(songLineIndex)}
                >
                {songLine}
              </button>
            )
          })}
        </div>
        <div className="slider-wrapper">
          <Slider.Root
            className="SliderRoot"
            max={100}
            value={[(currentTime / SongDetails.songLength) * 100]}
          >
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" aria-label="SongTimer" />
          </Slider.Root>
        </div>
        <div className="music-details-wrapper mt-4">
          <h3 className="music-name leading-snug font-medium text-xl">
            {SongDetails?.songName}
          </h3>
          <p className="music-artist leading-snug font-medium text-base text-gray-500">
            by, {SongDetails?.artistName}
          </p>
        </div>
        <div className="song-player-actions-wrapper my-6 flex flex-row items-center justify-center">
          <button className={cn("text-3xl w-fit p-4 bg-white shadow-md rounded-2xl cursor-pointer select-none transition-all text-gray-800 hover:scale-125 z-10")}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {!isPlaying ? <FaPlay /> : <FaPause />}
          </button>
        </div>
      </div>
    </div>
  );
}


// I've been on my own for long enough
// words: 8
// on: 2
// enough: 6
// 2+6/2 = 4
// 8*4 time delay