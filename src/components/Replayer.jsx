import { useState, useEffect, useRef } from 'react'
import defaultImage from '../assets/replayer-background.png'
import song1Image from '../assets/DSC02046.jpg'
import song2Image from '../assets/DSC02066.jpg'
import song3Image from '../assets/DSC02074.jpg'
import song1Audio from '../assets/songs/song1.mp3'
import song2Audio from '../assets/songs/song2.mp3'
import song3Audio from '../assets/songs/song3.mp3'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

const songs = [
    { title: 'En algún lugar', artist: 'Fase Alterna', audio: song1Audio, image: song1Image },
    { title: 'Quiero hablar de mí', artist: 'Fase Alterna', audio: song2Audio, image: song2Image },
    { title: 'Canción 3', artist: 'Fase Alterna', audio: song3Audio, image: song3Image }
]

export function Replayer() {
    const [currentSongIndex, setCurrentSongIndex] = useState(null)
    const [audio] = useState(new Audio())
    const [isPlaying, setIsPlaying] = useState(false)
    const imageRef = useRef(null)

    useEffect(() => {
        const handleEnded = () => {
            setIsPlaying(false)
            setCurrentSongIndex(null)
        }

        audio.addEventListener('ended', handleEnded)

        return () => {
            audio.pause()
            audio.removeEventListener('ended', handleEnded)
        }
    }, [audio])

    useEffect(() => {
        if (imageRef.current) {
            imageRef.current.classList.add('fade')
            const timer = setTimeout(() => {
                imageRef.current.classList.remove('fade')
            }, 500)
            return () => clearTimeout(timer)
        }
    }, [currentSongIndex])

    const playSong = () => {
        audio.volume = 0.35
        audio.play().then(() => {
            setIsPlaying(true)
        }).catch((error) => {
            console.error("Error playing the audio:", error)
        })
    }

    const pauseSong = () => {
        audio.pause()
        setIsPlaying(false)
    }

    const selectSong = (index) => {
        if (currentSongIndex !== null) {
            audio.pause()
        }

        setCurrentSongIndex(index)
        audio.src = songs[index].audio
        audio.load()
        playSong()
    }

    return (
        <section className='replayer'>
            <div className='song-list'>
                <strong>Escucha algunos de mis trabajos</strong>
                {songs.map((song, index) => (
                    <div key={index} className='song-item'>
                        <div className='controls'>
                            {currentSongIndex === index && isPlaying ? (
                                <PauseIcon onClick={pauseSong} className='controlIcon' />
                            ) : (
                                <PlayArrowIcon onClick={() => selectSong(index)} className='controlIcon' />
                            )}
                        </div>
                        <div className='songInfo' onClick={() => {
                            if (currentSongIndex === index && isPlaying) {
                                pauseSong()
                            } else {
                                selectSong(index)
                            }
                        }}>
                            <span>{`${song.title} - ${song.artist}`}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='current-song'>
                <img
                    ref={imageRef}
                    src={currentSongIndex !== null ? songs[currentSongIndex].image : defaultImage}
                    alt={currentSongIndex !== null ? songs[currentSongIndex].title : "Imagen por defecto"}
                    className='current-image'
                />
                {currentSongIndex !== null && (
                <div className='songInfo-overImage'>
                    <strong className='song-title'>{`${songs[currentSongIndex].title} - ${songs[currentSongIndex].artist}`}</strong>
                </div>
                )}
            </div>
        </section>
    )
}
