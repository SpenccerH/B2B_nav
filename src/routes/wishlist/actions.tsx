const Actions = () => {
    return (
        <div className="flex flex-row items-center">
            <select
                className="bg-transparent text-oxford-blue font-semibold ml-6 border-b border-oxford-blue pr-7 focus:outline-none"
            >
                <option className="font-semibold" value="cart">Add to Cart</option>
                <option className="font-semibold" value="promo">Notify when on Promotion</option>
                <option className="font-semibold" value="remove">Remove Item</option>
            </select>
            <button className=" ml-5 text-white bg-blue-700 hover:bg-blue-800 rounded-md text-center text-sm font-medium py-1.5 px-4">Apply</button>
        </div>
    );
};

export default Actions;
