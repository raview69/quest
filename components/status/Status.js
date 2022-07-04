import Image from 'next/image'
import Li from '../img/li_status.svg'
import Logouts from '../img/logout_status.svg'
import Person1 from '../img/person_1.png'
import Person2 from '../img/person_2.png'
import Person3 from '../img/person_3.png'

const Status = () => {
    return (
        <div className="ml-[24px]">
            <div className="">
                <div className="w-[255px] p-[24px] bg-[#F7F8FA] rounded-[24px]">
                    <p className="text-[14px] font-[700] text-[#7D7D7D] pb-[8px]">
                        Status
                    </p>
                    <div className="flex items-center justify-between px-[24px] py-[15px] bg-white rounded-[24px]">
                        <p className="text-[14px] font-[400] ">Draft</p>
                        <Image src={Li} width="12" height="6" />
                    </div>
                </div>
            </div>
            <div className="text-[18px] font-[700] flex items-center pt-[43px]">
                <Image src={Logouts} width="18" height="20" />
                <h4 className="pl-[10px]">Recent User Join</h4>
            </div>
            <div className="pt-[24px]">
                <div className="flex items-center bg-[#F7F8FA] rounded-[24px] p-[20px]">
                    <Image src={Person1} width="50" height="50" />
                    <div className="pl-[20px]">
                        <h4 className="text-[14px] font-[700] text-[#7D7D7D]">
                            Lee_JiEun
                        </h4>
                        <p className="text-[12px] font-[400] text-[#7D7D7D]">
                            joined this quest
                        </p>
                        <p className="text-[12px] font-[400] text-[#7D7D7D] pt-[8px]">
                            14 Jan . 15:30
                        </p>
                    </div>
                </div>
            </div>
            <div className="pt-[12px]">
                <div className="flex items-center bg-[#F7F8FA] rounded-[24px] p-[20px]">
                    <Image src={Person2} width="50" height="50" />
                    <div className="pl-[20px]">
                        <h4 className="text-[14px] font-[700] text-[#7D7D7D]">
                            Dennies_2
                        </h4>
                        <p className="text-[12px] font-[400] text-[#7D7D7D]">
                            joined this quest
                        </p>
                        <p className="text-[12px] font-[400] text-[#7D7D7D] pt-[8px]">
                            14 Jan . 15:30
                        </p>
                    </div>
                </div>
            </div>
            <div className="pt-[12px]">
                <div className="flex items-center bg-[#F7F8FA] rounded-[24px] p-[20px]">
                    <Image src={Person3} width="50" height="50" />
                    <div className="pl-[20px]">
                        <h4 className="text-[14px] font-[700] text-[#7D7D7D]">
                            Amanda_
                        </h4>
                        <p className="text-[12px] font-[400] text-[#7D7D7D]">
                            joined this quest
                        </p>
                        <p className="text-[12px] font-[400] text-[#7D7D7D] pt-[8px]">
                            14 Jan . 15:30
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Status
