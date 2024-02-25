import { Box, Center, Flex, Heading, Text, chakra } from '@chakra-ui/react'
import React from 'react'
import { Button } from '@chakra-ui/react'
import { MdOutlineWifiCalling3 ,MdOutlineMailOutline } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";

export default function Contact() {
    return (
        <Box pt={10} bg={'white'}>
            <Center> <Heading size={'xl'} mt={2}>Get in Touch</Heading></Center>
            <Text
                fontSize={['lg', 'xl', 'xl']}
                textAlign={'center'}
                width={['100%', '80%', '50%']}
                m={'auto'}
                mt={10}
                color={'gray'}
            >I'm looking for new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I’ll be so happy to connect with you!
            </Text>
            <Center><Button colorScheme='teal' variant={'outline'} m={10}>Say Hello!</Button></Center>
            <Flex display={['none','flex','flex'] } justifyContent={'space-around'} 
            flexWrap={'wrap'}
            w={['100%','90%','80%']}
            gap={5}
            m={'auto'}
            >
                <chakra.a href="tel:+917978625865" class="contact-info-card aos-init aos-animate"
                    display={'grid'} gap={2}
                    alignItems={'center'}
                    justifyItems={'center'}
                    border={'2px solid teal'}
                    p={3}
                    w={280}
                    borderRadius={10}
                    color='gray'
                    _hover={{bg:"teal.50",fontWeight:"bold"}}
                    bg={'gray.50'}>
                    <MdOutlineWifiCalling3 size={30} />
                    <span> Call Me</span>
                    {/* <br/> */}
                    <span> +91 7978-625865</span>
                </chakra.a>
                <chakra.a href="mailto:manojkumarpadhyms@gmail.com" class="contact-info-card aos-init aos-animate"
                    display={'grid'} gap={2}
                    alignItems={'center'}
                    justifyItems={'center'}
                    border={'2px solid teal'}
                    p={5}
                    w={280}
                    borderRadius={10}
                    color='gray'
                    _hover={{bg:"teal.50",fontWeight:"bold"}}
                    bg={'gray.50'}>
                    <MdOutlineMailOutline  size={30} />
                    <span>E-Mail Me</span>
                    {/* <br/> */}
                    <span>manojkumarpadhyms@gmail.com</span>
                </chakra.a>
                <chakra.a href="https://github.com/Manojkumar7978" target='_blank' class="contact-info-card aos-init aos-animate"
                    display={'grid'} gap={2}
                    alignItems={'center'}
                    justifyItems={'center'}
                    border={'2px solid teal'}
                    p={5}
                    w={280}
                    borderRadius={10}
                    color='gray'
                    _hover={{bg:"teal.50",fontWeight:"bold"}}
                    bg={'gray.50'}>
                    <LuGithub size={30} />
                    <span>Github</span>
                    {/* <br/> */}
                    <span>manojkumar7978</span>
                </chakra.a>
                <chakra.a href="https://www.linkedin.com/in/manoj-padhy-755b0b1b3/" target='_blank' class="contact-info-card aos-init aos-animate"
                    display={'grid'} gap={2}
                    alignItems={'center'}
                    justifyItems={'center'}
                    border={'2px solid teal'}
                    p={5}
                    w={280}
                    borderRadius={10}
                    color={'GrayText'}
                    _hover={{bg:"teal.50",fontWeight:"bold"}}
                    bg={'gray.50'}>
                    <SlSocialLinkedin size={30} />
                    <span>Ping Me</span>
                    {/* <br/> */}
                    <span>Manoj Padhy</span>
                </chakra.a>
            </Flex>

            <Flex display={['flex','none','none'] } justifyContent={'space-around'} 
            flexWrap={'wrap'}
            w={'100%'}
            pl={20}
            pr={20}
            gap={3}
            m={'auto'}
            >
                <chakra.a href="tel:+917978625865" 
                    display={'grid'} gap={2}
                    alignItems={'center'}
                    justifyItems={'center'}
                    color='gray'
                    _hover={{fontWeight:"bold"}}>
                    <MdOutlineWifiCalling3 size={30} />
                </chakra.a>
                <chakra.a href="mailto:manojkumarpadhyms@gmail.com" class="contact-info-card aos-init aos-animate"
                   display={'grid'} gap={2}
                   alignItems={'center'}
                   justifyItems={'center'}
                   color='gray'
                   _hover={{fontWeight:"bold"}}>
                    <MdOutlineMailOutline  size={30} />
                </chakra.a>
                <chakra.a href="https://github.com/Manojkumar7978" target='_blank' class="contact-info-card aos-init aos-animate"
                    display={'grid'} gap={2}
                    alignItems={'center'}
                    justifyItems={'center'}
                    color='gray'
                    _hover={{fontWeight:"bold"}}>
                    <LuGithub size={30} />
                </chakra.a>
                <chakra.a href="https://www.linkedin.com/in/manoj-padhy-755b0b1b3/" target='_blank' class="contact-info-card aos-init aos-animate"
                    display={'grid'} gap={2}
                    alignItems={'center'}
                    justifyItems={'center'}
                    color='gray'
                    _hover={{fontWeight:"bold"}}>
                    <SlSocialLinkedin size={30} />
                </chakra.a>
            </Flex>

            <Text textAlign={'center'}
            mt={20}
            mb={5}
            fontSize={'14px'}
            >Redesigned & Rebuilt by <chakra.span color={'teal'} fontWeight={'400'}>Manoj Kumar Padhy</chakra.span></Text>
        </Box>
    )
}
