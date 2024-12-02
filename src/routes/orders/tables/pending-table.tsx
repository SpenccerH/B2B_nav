import samplePDF from "../../../assets/sample-pdf.pdf";
import OrdersTable from './orders-table';

const items = [
    { id: 1, number: "CCORD000017", status: "Pending", date: "2024-10-27", user: "Wile E. Coyote", total: "$15,800.00", track: "CCTRK000017", src: samplePDF  },
    { id: 2, number: "CCORD000018", status: "Pending", date: "2024-10-28", user: "Wile E. Coyote", total: "$15,900.00", track: "CCTRK000018", src: samplePDF  },
    { id: 3, number: "CCORD000019", status: "Pending", date: "2024-11-17", user: "Wile E. Coyote", total: "$16,000.00", track: "CCTRK000019", src: samplePDF  },
]

function PendingTable() {
    return (
        <div className="">
            <OrdersTable items={items} />
        </div>
    )
}

export default PendingTable;