import samplePDF from "../../../assets/sample-pdf.pdf";
import Invoices from "./invoices";

const items = [
    { id: 1, number: "ARVA00454922", status: "Overdue", date: "2024-10-16", due: "2024-11-15", user: "Wile E. Coyote", total: "$116.82", payable: "$116.82", src: samplePDF },
    { id: 2, number: "ARVA00455622", status: "Current", date: "2024-10-23", due: "2024-11-22", user: "Wile E. Coyote", total: "$1,017.40", payable: "$1,017.40", src: samplePDF },
    { id: 3, number: "ARVA00455623", status: "Current", date: "2024-10-23", due: "2024-11-22", user: "Wile E. Coyote", total: "$133.61", payable: "$133.61", src: samplePDF },
    { id: 4, number: "ARMU00643333", status: "Current", date: "2024-10-25", due: "2024-11-24", user: "Wile E. Coyote", total: "$15.03", payable: "$15.03", src: samplePDF },
    { id: 5, number: "ARMU00643335", status: "Current", date: "2024-10-25", due: "2024-11-24", user: "Wile E. Coyote", total: "$719.79", payable: "$719.79", src: samplePDF },
    { id: 6, number: "ARVA00456240", status: "Current", date: "2024-10-30", due: "2024-11-29", user: "Wile E. Coyote", total: "$115.07", payable: "$115.07", src: samplePDF },
    { id: 7, number: "ARRH00381106", status: "Current", date: "2024-11-07", due: "2024-12-07", user: "Wile E. Coyote", total: "$1,015.73", payable: "$1,015.73", src: samplePDF },
    { id: 8, number: "ARVA00457526", status: "Current", date: "2024-11-13", due: "2024-12-13", user: "Wile E. Coyote", total: "$1,055.61", payable: "$1,055.61", src: samplePDF },
    { id: 9, number: "ARHD00873620", status: "Current", date: "2024-11-15", due: "2024-12-15", user: "Wile E. Coyote", total: "$1,109.63", payable: "$1,109.63", src: samplePDF }
]

function OutstandingTable() {
    return (
        <div className="">
            <Invoices items={items} />
        </div>
    )
}

export default OutstandingTable;