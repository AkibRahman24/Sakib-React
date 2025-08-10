import React from 'react'
import Container from '../Container'
import Images from '../Images'
import Logo from '/src/assets/logo.png'
import Flex from '../Flex'
import Button from '../Button'
import { CiMail } from "react-icons/ci";


const Heading = () => {
  return (
    <>
      <div className="bg-[#F9F9FC] p-7">
        <Container>
          <Flex className={`justify-between`}>
            <div className="">
              <Images imgSrc={Logo}/>
            </div>
            <div className="">
              
            <ul className='flex gap-x-7 font-Poppins font-normal text-xl '>
              <li>
                  HOME
                  
              </li>
              <li>
                  ABOUT US
                  
              </li>
              <li>
                  SERVICES
                  
              </li>
              <li>
                 WORKS
                  
              </li>
            </ul>
          
            </div>
            <div className="">
             <Button className={` px-6 py-4 flex items-center font-Poppins text-xl text-white gap-x-2`}>Hire Me <CiMail /></Button>
            </div>

            



          </Flex>

        </Container>

      </div>



    </>
  )
}

export default Heading




