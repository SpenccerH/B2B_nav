import SmallWidget from "../../components/sam/small-widget";

const overview = [
    { id: 1, title: "Total Orders (Past 30 Days)", body: "10" },
    { id: 2, title: "Total Amount Spent (Past 30 Days)", body: "$156,500" },
    { id: 3, title: "Orders In Progress", body: "3" },
]

function OrdersOverview() {
    return (
        <div className="grid grid-cols-3 gap-x-4 mb-10">
            {overview.map(item => (
                <div>
                    <SmallWidget title={item.title} value={item.body} />
                </div>
            ))}
        </div>
    )
}

export default OrdersOverview;