import Image from 'next/image'
import Caret from '../img/CaretRight.svg'
import Tree from '../img/tree.png'
import Edit from '../img/edit.svg'
import Delet from '../img/delete.svg'
import Star from '../img/star.svg'
import Currency from '../img/currency.svg'
import Clock from '../img/clock.svg'
import Location from '../img/location.svg'
import QuestInfo from '../questInfo/QuestInfo'
import Reward from '../reward/Reward'

const Quest = () => {
    return (
        <div>
            <div className="flex py-[28px] px-[32px]">
                <div className="text-[16px] font-[500] text-[#2C7D92]">
                    Quest
                </div>
                <div className="px-[10px]">
                    <Image src={Caret} width="16" height="16" />
                </div>
                <div className="text-[16px] font-[500] text-[#7D7D7D]">
                    Botanical Treasure
                </div>
            </div>
            <div>
                <div className="w-max">
                    <Image src={Tree} />
                </div>
            </div>
            <div className="flex items-center justify-between px-[32px] pt-[36px] pb-[24px]">
                <div className="text-[36px] font-[700]">Botanical Treasure</div>
                <div className="flex items-center justify-center">
                    <div>
                        <button className="flex items-center justify-center py-[13px] px-[36px] rounded-[50px] bg-[#2C7D92] text-white text-[16px] font-[700]">
                            Test Quest
                        </button>
                    </div>
                    <div className="px-[16px]">
                        <button className="flex items-center justify-center py-[13px] px-[30px] rounded-[50px] border-2 border-[#2C7D92] text-[#2C7D92] text-[16px] font-[700]">
                            <div className="pr-[10px]">
                                <Image src={Edit} width="15" height="15" />
                            </div>
                            Edit
                        </button>
                    </div>
                    <div>
                        <div className="pl-[16px]">
                            <Image src={Delet} width="18" height="20" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center px-[32px]">
                <div className="flex items-center justify-center pr-[26px] text-[#5A5A60] text-[16px] font-[700]">
                    <div className="pr-[6px] flex items-center justify-center">
                        <Image src={Star} width="20" height="19" />
                    </div>
                    4.8
                </div>
                <div className="flex items-center justify-center pr-[26px] text-[#5A5A60] text-[16px] font-[700]">
                    <div className="pr-[6px] flex items-center justify-center">
                        <Image src={Currency} width="20" height="19" />
                    </div>
                    Free
                </div>
                <div className="flex items-center justify-center pr-[26px] text-[#5A5A60] text-[16px] font-[700]">
                    <div className="pr-[6px] flex items-center justify-center">
                        <Image src={Clock} width="20" height="19" />
                    </div>
                    Timed Quest
                </div>
                <div className="flex items-center justify-center pr-[26px] text-[#5A5A60] text-[16px] font-[700]">
                    <div className="pr-[6px] flex items-center justify-center">
                        <Image src={Location} width="20" height="19" />
                    </div>
                    Singapore, Changi
                </div>
            </div>
            <QuestInfo />
        </div>
    )
}

export default Quest
