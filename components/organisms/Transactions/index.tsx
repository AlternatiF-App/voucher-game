import ItemStep from '../../molecules/ItemStep'

const TransactionStep = () => {
    return (
        <section className="container mx-auto py-14 mt-4 lg:mt-28">
            <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-blue-800 text-center mb-20">
                    It’s Really That<br/> Easy to Win the Game
                </h2>
                <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0 lg:space-x-0">
                    <ItemStep icon={"step1"} title={'1. Start'} desc1={'Pilih salah satu game'} desc2={'yang ingin kamu top up'}/>
                    <ItemStep icon={"step2"} title={'2. Fill Up'} desc1={'Top up sesuai dengan'} desc2={'nominal yang sudah tersedia'}/>
                    <ItemStep icon={"step3"} title={'3. Be a Winner'} desc1={'Siap digunakan untuk'} desc2={'improve permainan kamu'}/>
                </div>
            </div>
        </section>
    )
}

export default TransactionStep