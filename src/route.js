import User from "./svg/user.svg";
import Loan from "./svg/loan.svg";
import Karma from './svg/karma.svg';
import LoanRequest from './svg/loanRequest.svg';
import WhiteList from './svg/whiteList.svg';
import Decision from './svg/decision.svg';
import savings from './svg/savings.svg';
import guarantor from './svg/guarantor.svg';
import organization from './svg/organization.svg';
import LoanProduct from './svg/loanProduct.svg';
import savingsProduct from './svg/savingsProduct.svg';
import fees from './svg/fees.svg';
import transaction from './svg/transaction.svg';
import services from './svg/services.svg';
import serviceAccount from './svg/serviceAccount.svg';
import settlement from './svg/settlement.svg';
import reports from './svg/reports.svg';
import preferences from './svg/preferences.svg';
import feesPricing from './svg/fees.svg';
import auditLog from './svg/fees.svg';
import home from './svg/home.svg';
import switchOrg from './svg/switch.svg';


    const menuItems = [
    {
        title: "Switch Organization",
        exact: true,
        to: "/",
        icon:switchOrg,
    },
    {
        title: "Dashboard",
        exact: true,
        to: "/",
        icon: home,
    },
    {
        heading: "CUSTOMERS",
        exact: true,
        subMenus: [{
                name: "Users",
                to: "/users",
                icon: User
            },
            {
                name: "Guarantors",
                to: "/guarantors",
                icon: guarantor
            },
            {
                name: "Loans",
                to: "/loan",
                icon: Loan
            },
            {
                name: "Decision Models",
                to: "/decision",
                icon: Decision
            },
            {
                name: "Savings",
                to: "/savings",
                icon: savings
            },
            {
                name: "Loan Requests",
                to: "/",
                icon: LoanRequest
            },
            {
                name: "Whitelist",
                to: "/",
                icon: WhiteList
            },
            {
                name: "Karma",
                to: "/",
                icon: Karma
            },
        ],
    },
    {
        heading: "BUSINESSES",
        exact: true,
        icon: "",
        subMenus: [{
                name: "Organization",
                to: "/",
                icon: organization
            },
            {
                name: "Loan Products",
                to: "/",
                icon: LoanProduct
            },
            {
                name: "Savings Products",
                to: "/",
                icon: savingsProduct
            },
            {
                name: "Fees and Charges",
                to: "/",
                icon: fees
            },
            {
                name: "Transactions",
                to: "/",
                icon: transaction
            },
            {
                name: "Services",
                to: "/",
                icon: services
            },
            {
                name: "Service Account",
                to: "/",
                icon: serviceAccount
            },
            {
                name: "Settlements",
                to: "/",
                icon: settlement
            },
            {
                name: "Reports",
                to: "/",
                icon: reports
            },
        ],
    }, {
        heading: "SETTINGS",
        exact: true,
        icon: "",
        subMenus: [{
                name: "Preferences",
                to: "/",
                icon: preferences
            },
            {
                name: "Fees and Pricing",
                to: "/",
                icon: feesPricing
            },
            {
                name: "Audit Logs",
                to: "/",
                icon: auditLog
            },

        ],
    }
];

export { menuItems }