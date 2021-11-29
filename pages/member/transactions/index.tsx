import Sidebar from "../../../components/organisms/Sidebar"
import TransactionContent from "../../../components/organisms/TransactionContent"

const Transactions = () => {
    return (
        <>
            <section className="w-full flex overflow-auto">
                <Sidebar activeMenu={'transactions'}/>
                <TransactionContent/>
            </section>
        </>
    )
}

export default Transactions