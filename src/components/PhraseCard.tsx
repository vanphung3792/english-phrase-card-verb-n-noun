import WordCard from "./WordCard"
import verbs from "../data/verbs.json"
import nouns from "../data/nouns.json"
import { useState } from "react"

const PhraseCard = () => {

    const [verb, setVerb] = useState(verbs[0])
    const [noun, setNoun] = useState(nouns[0])

    const changeVerb = () => {
        const randomVerb = verbs[Math.floor(Math.random() * verbs.length)]
        setVerb(randomVerb)
    }

    const changeNoun = () => {
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]
        setNoun(randomNoun)
    }

  return (
    <div
        className="
            flex 
            gap-20
            justify-center 
            items-center
            h-screen
            pb-40
        "
    >
        <WordCard wordType={verb} onChange={changeVerb} primary />
        <WordCard wordType={`${noun.article} ${noun.noun}`} onChange={changeNoun} />
    </div>
  )
}
export default PhraseCard