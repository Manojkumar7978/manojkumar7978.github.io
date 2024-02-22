import React from 'react';
import { Box, Flex, Heading, Image, Button, Link, ButtonGroup } from '@chakra-ui/react'
import TypeWriter from './typewriter';
import { ViewIcon } from '@chakra-ui/icons';
import MANOJ_PADHY_RESUME from '../assests/MANOJ_PADHY_RESUME.pdf'
import pic from '../assests/image.jpg'
import { FaRegMessage } from "react-icons/fa6";


const onClickhandler = () => {
    return window.open(
        "https://drive.google.com/file/d/1i7o3gjhndVvxqyHPW3uRTIwjWshnUipP/view",
    );
};

const Home = () => {
    return (
        <Box bg={'gray.100'} pt={20} pl={[0,30,60]} >
            <Flex pt={10} pb={20} flexDirection={['column', 'row', 'row']}
             justifyContent={'left'} gap={[10, 10, 20]} alignItems={'center'}>
                <Box>
                    <Image
                        className="home-img"
                        borderRadius='full'
                        maxW={['150px', '250px', '250px']}
                        src={pic}
                        alt='manoj'
                    />
                </Box>
                <Box>
                    <Heading display={'flex'} textAlign={'left'} size={'lg'}> Hi There! <span ><img width="40px"
                        src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" alt="👋" /></span> </Heading>
                    <Heading textAlign={'left'} mt={2} size={'lg'} id="user-detail-name">I'm Manoj Kumar Padhy </Heading>
                    <TypeWriter />
                    <Flex mt={2}>
                        {/* this one */}

                        <ButtonGroup gap={10} mt={5}>
                        <Button
                            id="resume-button-2"
                            colorScheme='teal' variant="solid"
                            _hover={{ textDecoration: 'none', bg: 'teal' }}
                            as={Link}
                            href={MANOJ_PADHY_RESUME}
                            download={true}
                            rightIcon={<ViewIcon />}
                            onClick={onClickhandler} pl={4} pr={4} size={'sm'}>
                            Resume
                        </Button>
                        <Button
                            id="contactme_button_1"
                            colorScheme='teal' variant="solid"
                            _hover={{ textDecoration: 'none', bg: 'teal' }}
                            rightIcon={<FaRegMessage  />}
                            pl={4} pr={4} size={'sm'}>
                            Contact Me
                        </Button>

                        </ButtonGroup>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}

export default Home;