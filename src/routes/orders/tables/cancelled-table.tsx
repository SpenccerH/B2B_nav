import samplePDF from "../../../assets/sample-pdf.pdf";
import OrdersTable from './orders-table';

const items = [
    { id: 1, number: "CCORD000014", status: "Cancelled", date: "2024-10-18", user: "Wile E. Coyote", total: "$15,500.00", track: "CCTRK000014", src: samplePDF  },
    { id: 2, number: "CCORD000015", status: "Cancelled", date: "2024-10-22", user: "Wile E. Coyote", total: "$15,600.00", track: "CCTRK000015", src: samplePDF  },
    { id: 3, number: "CCORD000016", status: "Cancelled", date: "2024-10-24", user: "Wile E. Coyote", total: "$15,700.00", track:"CCTRK000016", src: samplePDF  },
]

function CancelledTable() {
    return (
        <div className="">
            <OrdersTable items={items} />
        </div>
    )
}

export default CancelledTable;