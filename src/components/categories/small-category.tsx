function SmallCategory({ image, title } : { image: string, title: string }) {
    return (
        <div className="flex flex-col bg-white rounded-sm h-40 shrink-0 justify-between p-4 cursor-pointer">
            <div className="text-sm font-semibold">{title}</div>
            <div className="flex items-center justify-center">
                <img src={image} className="h-24 hover:scale-110 duration-300" />
            </div>
        </div>
    )
}

export default SmallCategory;