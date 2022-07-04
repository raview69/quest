import Image from 'next/image'
import Places from '../img/map-marker-check-outline.svg'
import Task from '../img/clipboard-check-outline.svg'
import Route from '../img/go-kart-track.svg'
import Time from '../img/est_time.svg'
import Age from '../img/user2.svg'

const QuestInfo = () => {
    return (
        <div className="flex py-[28px] px-[32px]">
            <div className="w-[787px]">
                <div className="flex items-center border-b-2">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center px-[40px] py-[18px] text-[#2C7D92] border-b-2 border-[#2C7D92] text-[16px] font-[700]">
                            Quest Info
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center px-[40px] py-[18px] text-[16px] font-[500] ">
                            Places
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center px-[40px] py-[18px] text-[16px] font-[500]">
                            Users
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center px-[40px] py-[18px] text-[16px] font-[500]">
                            Reviews
                        </div>
                    </div>
                </div>
                <div className="pt-[40px] w-[694px] text-[#5A5A60]">
                    <p>
                        The quests given by Ant Emicheun seem to depend on class
                        somehow. Level 1 Iop and Sacrier got tofu under the
                        microscope, while a level 1 Cra got Arachnee sandwich.
                        Since Ant is the only one giving elevator quests, this
                        irregularity is probably limited to him only. Will need
                        some testing, though. - Dashiva 23:37, 7 March 2006
                        (UTC)
                    </p>
                    &nbsp;
                    <p>
                        Guys and people there are little blue cloaked monsters
                        in astrub forest, i dont know the qesu i c ppl fioght em
                        not often but when they think its cool or something, its
                        not a quest yet but u fight em for something, u start
                        quest by talking with a lady named sweetness at dofus
                        nighttime. RingWarior
                    </p>
                </div>
                <div className="flex items-center pt-[24px]">
                    <div className="pr-[8px]">
                        <button className="text-[14px] font-[400] text-[#5A5A60] px-[20px] py-[9px] bg-[#F7F8FA] rounded-[40px] border-2 border-[#EDEDED]">
                            botanical
                        </button>
                    </div>
                    <div className="pr-[8px]">
                        <button className="text-[14px] font-[400] text-[#5A5A60] px-[20px] py-[9px] bg-[#F7F8FA] rounded-[40px] border-2 border-[#EDEDED]">
                            treasure
                        </button>
                    </div>
                    <div className="pr-[8px]">
                        <button className="text-[14px] font-[400] text-[#5A5A60] px-[20px] py-[9px] bg-[#F7F8FA] rounded-[40px] border-2 border-[#EDEDED]">
                            singapore
                        </button>
                    </div>
                    <div className="pr-[8px]">
                        <button className="text-[14px] font-[400] text-[#5A5A60] px-[20px] py-[9px] bg-[#F7F8FA] rounded-[40px] border-2 border-[#EDEDED]">
                            fun
                        </button>
                    </div>
                    <div className="">
                        <button className="text-[14px] font-[400] text-[#5A5A60] px-[20px] py-[9px] bg-[#F7F8FA] rounded-[40px] border-2 border-[#EDEDED]">
                            beginner
                        </button>
                    </div>
                </div>
                <div className="flex items-center pt-[40px]">
                    <div className="w-[109px] pr-[24px]">
                        <Image src={Places} width="22" height="20" />
                        <p className="text-[14px] font-[400] text-[#7D7D7D]">
                            Places
                        </p>
                        <h4 className="text-[18px] font-[700]">2</h4>
                        <p>&nbsp;</p>
                    </div>
                    <div className="w-[109px] pr-[24px]">
                        <Image src={Task} width="22" height="20" />
                        <p className="text-[14px] font-[400] text-[#7D7D7D]">
                            Tasks
                        </p>
                        <h4 className="text-[18px] font-[700]">4</h4>
                        <p>&nbsp;</p>
                    </div>
                    <div className="w-[109px] pr-[24px]">
                        <Image src={Route} width="22" height="20" />
                        <p className="text-[14px] font-[400] text-[#7D7D7D]">
                            Route
                        </p>
                        <h4 className="text-[18px] font-[700]">3.5km</h4>
                        <p>&nbsp;</p>
                    </div>
                    <div className="w-[109px] pr-[24px]">
                        <Image src={Time} width="22" height="20" />
                        <p className="text-[14px] font-[400] text-[#7D7D7D]">
                            Est. Time
                        </p>
                        <h4 className="text-[18px] font-[700]">1 Day</h4>
                        <p>&nbsp;</p>
                    </div>
                    <div className="">
                        <Image src={Age} width="22" height="20" />
                        <p className="text-[14px] font-[400] text-[#7D7D7D]">
                            Min. Age
                        </p>
                        <h4 className="text-[18px] font-[700]">Child</h4>
                        <p className="text-[14px] font-[400]">0-12 years old</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestInfo
