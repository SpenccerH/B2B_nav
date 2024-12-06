function LargeCategory({ image, title } : { image: string, title: string }) {
    return (
        <div className="flex flex-col bg-white rounded-sm h-84 shrink-0 justify-between p-8 cursor-pointer">
            <div className="text-sm text-center font-semibold">{title}</div>
            <div className="flex items-center justify-center">
                <img src={image} className="w-48 hover:scale-110 duration-300" />
            </div>
        </div>
    )
}

export default LargeCategory;