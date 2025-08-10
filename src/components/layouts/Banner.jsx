import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import avatar from '/Creative It projects/sakib-react/src/assets/banner.png'
import Button from '../Button'
import { CiMail } from "react-icons/ci";
import { FaCloudDownloadAlt } from "react-icons/fa";


const Banner = () => {
    return (
        <div className="bg-[#F9F9FC] pt-5 pb-5">
            <Container>
                <Flex className={`justify-between `}>

                    <div className="">
                        <h1 className='font-Poppins text-xl text-[#5E3BEE]'>SAKIB AL HASAN</h1>
                        <h4 className='font-Poppins text-6xl text-black  pt-4 pb-3.5'>Hello, my
                            name’s Sakib.
                            I’m MERN Stack Developer.</h4>
                        <div className="flex gap-x-5">
                            <Button className={` px-6 py-4 flex items-center font-Poppins text-xl text-white gap-x-2`}>Hire Me <CiMail /></Button>
                       
                            <Button className={` px-6 py-4 flex items-center font-Poppins text-xl gap-x-2 bg-transparent text-[#333333]`}> <FaCloudDownloadAlt />Download Cv </Button>
                        </div>


                    </div>
                    <div className="">
                        <Images ClassName={`w-[1950px]`} imgSrc={avatar} />

                    </div>






                </Flex>
            </Container>

        </div>
    )
}

export default Banner