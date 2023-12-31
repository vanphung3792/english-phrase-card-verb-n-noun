import Button from "./Button"

type WordCardProps = {
    wordType: string
    onChange: () => void
    primary?: boolean
}

const WordCard = ({ wordType, onChange, primary } : WordCardProps) => {
  return (
    <div
        className={`
            flex 
            flex-col 
            gap-20
            justify-center 
            items-center
            font-semibold
            text-[80px]
            ${primary ? "text-red-600" : ""}
        `}
    >
        <div>{wordType}</div>
        <Button label="Từ khác" onClick={onChange} />
    </div>
  )
}
export default WordCard