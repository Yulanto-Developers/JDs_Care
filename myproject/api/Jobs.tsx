import { FaUserEdit, FaFileInvoiceDollar, FaClipboardCheck, FaUserTie } from "react-icons/fa";
import { MdNightlight, MdOutlinePayments, MdWork } from "react-icons/md";



 const jobs = [
    {
        id: 1,
        title: "Charge Entry - Day/Mid",
        experience: "Minimum 1 year experience in RCM industry",
        shift: "Day / Mid",
        location: "Avadi, Chennai (WFO)",
        icon: <FaUserEdit size={22} color="#0BA360" />
    },
    {
        id: 2,
        title: "Payment Poster - Day/Mid",
        experience: "Minimum 1 year experience in RCM industry",
        shift: "Day / Mid",
        location: "Avadi, Chennai (WFO)",
        icon: <MdOutlinePayments size={22} color="#0BA360" />
    },
    {
        id: 3,
        title: "EVBV - Night",
        experience: "Minimum 1 year experience in RCM industry",
        shift: "Night",
        location: "Avadi, Chennai (WFO)",
        icon: <MdNightlight size={22} color="#0BA360" />
    },
    {
        id: 4,
        title: "Accounts Receivable (AR) - Night",
        experience: "Minimum 1 year experience in RCM industry",
        shift: "Night",
        location: "Avadi, Chennai (WFO)",
        icon: <FaFileInvoiceDollar size={22} color="#0BA360" />
    },
    {
        id: 5,
        title: "BDE - Night",
        experience: "Minimum 1 year experience in RCM industry",
        shift: "Night",
        location: "Avadi, Chennai (WFO)",
        icon: <FaUserTie size={22} color="#0BA360" />
    },
    {
        id: 6,
        title: "IT Executive - Mid",
        experience: "Minimum 1 year experience in RCM industry",
        shift: "Mid",
        location: "Avadi, Chennai (WFO)",
        icon: <MdWork size={22} color="#0BA360" />
    }
];


export default jobs;