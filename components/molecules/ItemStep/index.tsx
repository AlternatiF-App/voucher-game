
interface ItemStepProps{
    icon: 'step1' | 'step2' | 'step3';
    title: string;
    desc1: string;
    desc2: string;
}

const ItemStep = ({icon, title, desc1, desc2}:ItemStepProps) => {
    return (
        <div>
            <div className="bg-white px-4 py-6 border-0 rounded-2xl">
                <img src={`/icon/${icon}.svg`} alt="icon/step" width={80} height={80}/>
                <p className="font-semibold text-2xl pt-7 pb-4 text-blue-800">
                    {title}
                </p>
                <p className="text-lg text-blue-800">
                    {desc1}<br/>{desc2}
                </p>
            </div>
        </div>
    )
}

export default ItemStep