import React, { useEffect, useState } from 'react'
import "./home.css"

function Home() {

    const [rendomSentence, setSentence] = useState("")
    const [inputValue, setInputValue] = useState("")
    const [keyCount, setKeyCount] = useState(0)
    const [keyCounted, setKeyCounted] = useState(false)
    const [accuracy, setAccuracy] = useState(0)

    const sentence = [
        "ladj asfj dlflka sd",
        "adf jkl asd fjkl",
        "jlad fsjla sd",
        "dkfj sadfj kl",
        "kasd fjk las",
    ]

    function getRandomSentence() {
        const randomIndex = Math.floor(Math.random() * sentence.length)
        setSentence(sentence[randomIndex])
    }

    useEffect(() => {
        getRandomSentence()
    }, [])

    const isCorrect = inputValue === rendomSentence.slice(0, inputValue.length);

    function hendleKeyCount() {
        if (isCorrect && inputValue.length === rendomSentence.length) {
            setKeyCounted(true)
            setAccuracy(Math.floor((rendomSentence.length/(keyCount + 1))*100))
        }
        setKeyCount(keyCount + 1);
    }

    function hendleRetry() {
        setKeyCount(0)
        setKeyCounted(false)
        setInputValue("")
        setAccuracy(0)
        getRandomSentence()
    }

    return (
        <>

            <div className='wrapper'>
                <div className='box'>
                    <h2>Touch Typing Project</h2>
                    <p>Type the sentence below:</p>
                    <h1 style={{ color: isCorrect ? "#1F8A70" : "#F96666" }}>{rendomSentence}</h1>
                    <input type='text' placeholder='Enter the above words' id='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyUp={hendleKeyCount} />



                    {
                        keyCounted ?
                            <div className='result'>
                                <p>Key Count: {keyCount}</p>
                                <p>Accuracy: {accuracy}%</p>
                                <button type='submit' className='btn' onClick={hendleRetry} >Retry</button>
                            </div>
                            : ""
                    }
                </div>

            </div>

        </>
    )
}

export default Home