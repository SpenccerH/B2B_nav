import samplePDF from "../../../assets/sample-pdf.pdf";
import Invoices from "./invoices";

const items = [
    { id: 1, number: "ARNO00327084", status: "Paid", date: "2024-08-14", due: "2024-09-13", user: "Wile E. Coyote", total: "$65.97", payable: "0.00", src: samplePDF },
    { id: 2, number: "ARVA00449496", status: "Paid", date: "2024-08-21", due: "2024-09-20", user: "Wile E. Coyote", total: "$20.50", payable: "0.00", src: samplePDF },
    { id: 3, number: "ARTD00486227", status: "Paid", date: "2024-08-23", due: "2024-09-22", user: "Wile E. Coyote", total: "$47.12", payable: "0.00", src: samplePDF },
    { id: 4, number: "ARRH00374644", status: "Paid", date: "2024-08-28", due: "2024-09-27", user: "Wile E. Coyote", total: "$160.27", payable: "0.00", src: samplePDF },
    { id: 5, number: "ARRH00376715", status: "Paid", date: "2024-09-19", due: "2024-10-19", user: "Wile E. Coyote", total: "$203.39", payable: "0.00", src: samplePDF },
    { id: 6, number: "ARRH00376912", status: "Paid", date: "2024-09-21", due: "2024-10-21", user: "Wile E. Coyote", total: "$64.06", payable: "0.00", src: samplePDF },
    { id: 7, number: "ARNO00335769", status: "Paid", date: "2024-09-30", due: "2024-10-30", user: "Wile E. Coyote", total: "$177.87", payable: "0.00", src: samplePDF },
    { id: 8, number: "ARVA00453736", status: "Paid", date: "2024-10-04", due: "2024-11-03", user: "Wile E. Coyote", total: "$953.58", payable: "$0.00", src: samplePDF },
    { id: 9, number: "ARRH00378410", status: "Paid", date: "2024-10-07", due: "2024-11-06", user: "Wile E. Coyote", total: "$166.55", payable: "$0.00", src: samplePDF },
    { id: 10, number: "ARRH00378681", status: "Paid", date: "2024-10-10", due: "2024-11-09", user: "Wile E. Coyote", total: "$997.08", payable: "$0.00", src: samplePDF },
    { id: 11, number: "ARHD00867687", status: "Paid", date: "2024-10-11", due: "2024-11-10", user: "Wile E. Coyote", total: "$530.02", payable: "$0.00", src: samplePDF },
    { id: 12, number: "ARVA00454922", status: "Overdue", date: "2024-10-16", due: "2024-11-15", user: "Wile E. Coyote", total: "$116.82", payable: "$116.82", src: samplePDF },
    { id: 13, number: "ARVA00455622", status: "Current", date: "2024-10-23", due: "2024-11-22", user: "Wile E. Coyote", total: "$1,017.40", payable: "$1,017.40", src: samplePDF },
    { id: 14, number: "ARVA00455623", status: "Current", date: "2024-10-23", due: "2024-11-22", user: "Wile E. Coyote", total: "$133.61", payable: "$133.61", src: samplePDF },
    { id: 15, number: "ARMU00643333", status: "Current", date: "2024-10-25", due: "2024-11-24", user: "Wile E. Coyote", total: "$15.03", payable: "$15.03", src: samplePDF },
    { id: 16, number: "ARMU00643335", status: "Current", date: "2024-10-25", due: "2024-11-24", user: "Wile E. Coyote", total: "$719.79", payable: "$719.79", src: samplePDF },
    { id: 17, number: "ARVA00456240", status: "Current", date: "2024-10-30", due: "2024-11-29", user: "Wile E. Coyote", total: "$115.07", payable: "$115.07", src: samplePDF },
    { id: 18, number: "ARRH00381106", status: "Current", date: "2024-11-07", due: "2024-12-07", user: "Wile E. Coyote", total: "$1,015.73", payable: "$1,015.73", src: samplePDF },
    { id: 19, number: "ARVA00457526", status: "Current", date: "2024-11-13", due: "2024-12-13", user: "Wile E. Coyote", total: "$1,055.61", payable: "$1,055.61", src: samplePDF },
    { id: 20, number: "ARHD00873620", status: "Current", date: "2024-11-15", due: "2024-12-15", user: "Wile E. Coyote", total: "$1,109.63", payable: "$1,109.63", src: samplePDF }
]

function AllTable() {
    return (
        <div className="">
            <Invoices items={items} />
        </div>
    )
}

export default AllTable;