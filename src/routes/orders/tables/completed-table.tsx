import samplePDF from "../../../assets/sample-pdf.pdf";
import OrdersTable from './orders-table';

const items = [
    { id: 1, number: "CCORD000001", status: "Completed", date: "2024-10-11", user: "Wile E. Coyote", total: "$15,200.00", track: "CCTRK000001", src: samplePDF  },
    { id: 2, number: "CCORD000002", status: "Completed", date: "2024-10-12", user: "Wile E. Coyote", total: "$15,300.00", track: "CCTRK000002", src: samplePDF  },
    { id: 3, number: "CCORD000003", status: "Completed", date: "2024-10-14", user: "Wile E. Coyote", total: "$15,400.00", track: "CCTRK000003", src: samplePDF  },
    { id: 4, number: "CCORD000004", status: "Completed", date: "2024-10-18", user: "Wile E. Coyote", total: "$15,500.00", track: "CCTRK000004", src: samplePDF  },
    { id: 5, number: "CCORD000005", status: "Completed", date: "2024-10-22", user: "Wile E. Coyote", total: "$15,600.00", track: "CCTRK000005", src: samplePDF  },
    { id: 6, number: "CCORD000006", status: "Completed", date: "2024-10-24", user: "Wile E. Coyote", total: "$15,700.00", track:"CCTRK000006", src: samplePDF  },
    { id: 7, number: "CCORD000007", status: "Completed", date: "2024-10-27", user: "Wile E. Coyote", total: "$15,800.00", track: "CCTRK000007", src: samplePDF  },
    { id: 8, number: "CCORD000008", status: "Completed", date: "2024-10-28", user: "Wile E. Coyote", total: "$15,900.00", track: "CCTRK000008", src: samplePDF  },
    { id: 9, number: "CCORD000009", status: "Completed", date: "2024-11-17", user: "Wile E. Coyote", total: "$16,000.00", track: "CCTRK000009", src: samplePDF  },
    { id: 10, number: "CCORD000010", status: "Completed", date: "2024-11-23", user: "Wile E. Coyote", total: "$16,100.00", track: "CCTRK000010", src: samplePDF  },
    { id: 11, number: "CCORD000011", status: "Completed", date: "2024-10-11", user: "Wile E. Coyote", total: "$15,200.00", track: "CCTRK000011", src: samplePDF  },
    { id: 12, number: "CCORD000012", status: "Completed", date: "2024-10-12", user: "Wile E. Coyote", total: "$15,300.00", track: "CCTRK000012", src: samplePDF  },
    { id: 13, number: "CCORD000013", status: "Completed", date: "2024-10-14", user: "Wile E. Coyote", total: "$15,400.00", track: "CCTRK000013", src: samplePDF  },
]

function CompletedTable() {
    return (
        <div className="">
            <OrdersTable items={items} />
        </div>
    )
}

export default CompletedTable;