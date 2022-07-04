import Image from 'next/image'
import Logo from '../img/logoquesteon.svg'
import Smile from '../img/smile.svg'
import Discovery from '../img/Discovery.svg'
import User3 from '../img/3user.svg'
import Earnings from '../img/Wallet.svg'
import Folder from '../img/Folder.svg'
import Setting from '../img/Setting.svg'
import Logout from '../img/Logout.svg'

const Sidebar = () => {
    return (
        <div className="w-[300px] bg-[#F7F8FA] h-[1024px]">
            <div className="py-[24px] flex items-center justify-center border-b-2">
                <Image src={Logo} width="117" height="32" alt="" />
            </div>
            <div className="py-[40px] flex items-center justify-center ">
                <div className="text-center">
                    <Image src={Smile} width="100px" height="100px" alt="" />
                    <h4 className="text-[18px] font-[700] pt-[24px]">
                        NEA Singapore
                    </h4>
                    <p className="text-[14px] font-[400] text-[#7D7D7D] pt-[4px]">
                        neasg@mail.com
                    </p>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center  w-[252px] h-[55px]">
                        <Image
                            src={Discovery}
                            width="20"
                            height="20"
                            className=""
                            alt=""
                        />
                        <p className="text-[16px] font-[500] text-[#7D7D7D] pl-[12px]">
                            My Quest
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center w-[252px] h-[55px]">
                        <Image
                            src={User3}
                            width="20"
                            height="20"
                            className=""
                            alt=""
                        />
                        <p className="text-[16px] font-[500] text-[#7D7D7D] pl-[12px]">
                            User Base
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center w-[252px] h-[55px]">
                        <Image
                            src={Earnings}
                            width="20"
                            height="20"
                            className=""
                            alt=""
                        />
                        <p className="text-[16px] font-[500] text-[#7D7D7D] pl-[12px]">
                            Earnings
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center  w-[252px] h-[55px]">
                        <Image
                            src={Folder}
                            width="20"
                            height="20"
                            className=""
                            alt=""
                        />
                        <p className="text-[16px] font-[500] text-[#7D7D7D] pl-[12px]">
                            Reports
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center w-[252px] h-[55px]">
                        <Image
                            src={Setting}
                            width="20"
                            height="20"
                            className=""
                            alt=""
                        />
                        <p className="text-[16px] font-[500] text-[#7D7D7D] pl-[12px]">
                            Settings
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center pt-[318px]">
                    <div className="flex items-center w-[252px] h-[55px]">
                        <Image
                            src={Logout}
                            width="20"
                            height="20"
                            className=""
                            alt=""
                        />
                        <p className="text-[16px] font-[500] text-[#F15A5B] pl-[12px]">
                            Sign out
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
