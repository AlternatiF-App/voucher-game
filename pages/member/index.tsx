import OverviewContent from "../../components/organisms/OverviewContent"
import Sidebar from "../../components/organisms/Sidebar"

const Member = () => {
    return (
        <>
            <section className="w-full flex overflow-auto">
                <Sidebar activeMenu={'overview'}/>
                <OverviewContent/>
            </section>
        </>
    )
}

export default Member