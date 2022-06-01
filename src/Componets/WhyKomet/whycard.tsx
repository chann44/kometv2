interface Props {
    title: String
    text: String
}

const WhyKOmetCard = ({ title, text }: Props) => {
    return (
        <>
            <div className="h-[80vh] flex bg-black flex-col justify-start px-11 ">
                <h1 className="text-5xl font-bold counter">{title}</h1>
                <p className="text-xl py-7">{text}</p>
            </div>
        </>
    )
}

export default WhyKOmetCard;