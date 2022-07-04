import Image from 'next/image'
import Bird from '../img/bird.png'
import Li from '../img/highlight_li.svg'
import Treegate from '../img/treegate.png'

const Reward = () => {
    return (
        <div className="pt-[17px] w-[787px]">
            <div className="">
                <div className="text-[18px] font-[700]">Reward</div>
                <div className="text-[18px] font-[700] mt-[16px] flex items-center w-[327px] bg-[#FFCF50] rounded-[24px] py-[20px] px-[24px] bg-opacity-[0.15] ">
                    <Image src={Bird} width="80" height="80" alt="" />
                    <h4 className="text-[14px] font-[700] pl-[16px]">
                        STATUE OF SINGAPORE BOTANICAL GARDEN
                    </h4>
                </div>
                <div className="text-[18px] font-[700] pt-[40px] ">
                    Highlights
                </div>
                <div className="flex items-center pt-[16px] text-[14px] font-[400] text-[#5A5A60]">
                    <div className="pr-[14px] flex items-center">
                        <Image src={Li} width="4" height="4" alt="" />
                    </div>
                    The quests given by Ant Emicheun seem to depend on class
                    somehow
                </div>
                <div className="flex items-center pt-[11px] text-[14px] font-[400] text-[#5A5A60] pb-[40px]">
                    <div className="pr-[14px] flex items-center">
                        <Image src={Li} width="4" height="4" alt="" />
                    </div>
                    Level 1 Iop and Sacrier got tofu under the microscope, while
                    a level 1 Cra got Arachnee
                </div>
                <div className="text-[24px] font-[700] py-[40px] border-t-2">
                    Intro
                </div>
                <div className="flex pb-[40px] border-b-2">
                    <div className="pr-[46px]">
                        <Image src={Treegate} width="300" height="300" alt="" />
                    </div>
                    <div className="w-[348px] ">
                        <div className="text-[14px] font-[400] text-[#5A5A60]">
                            The quests given by Ant Emicheun seem to depend on
                            class somehow. Level 1 Iop and Sacrier got tofu
                            under the microscope, while a level 1 Cra got
                            Arachnee sandwich. Since Ant is the only one giving
                            elevator quests, this irregularity is probably
                            limited to him only. Will need some testing, though.
                        </div>
                        <div className=" pt-[32px]">
                            <h4 className="text-[18px] font-[700]">Facts ⁉️</h4>
                            <p className="text-[14px] font-[400] text-[#5A5A60]">
                                Guys and people there are little blue cloaked
                                monsters in astrub forest, i dont know the qesu
                                i c ppl fioght em not often but when they think
                                its cool or something
                            </p>
                        </div>
                        <div className="pt-[32px]">
                            <h4 className="text-[18px] font-[700]">Tips ✨</h4>
                            <p className="text-[14px] font-[400] text-[#5A5A60]">
                                Guys and people there are little blue cloaked
                                monsters in astrub forest, i dont know the qesu
                                i c ppl fioght em not often but when they think.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-[24px] font-[700] pt-[40px] pb-[24px]">
                    Conclusion
                </div>
                <div className="text-[14px] font-[400] pb-[40px]">
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
            </div>
        </div>
    )
}

export default Reward
