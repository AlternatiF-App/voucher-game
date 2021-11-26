import Sidebar from "../../../components/organisms/Sidebar"
import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent"

const DetailTransition = () => {
    return (
        <>
            <section className="transactions-detail overflow-auto">
                <Sidebar activeMenu={'transactions'}/>
                <TransactionDetailContent/>
            </section>   
        </>
    )
}

export default DetailTransition