import React from 'react';
import {
    Flex,
    Text,
    HStack,
    Button,
    Box,
    VStack,
    IconButton,
    CloseButton,
    useDisclosure,
    Avatar
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import '../App.css';
import { Link } from "react-scroll";
import Resume ,{Resume2}from './resume';
import logo from '../assests/logo.avif'

export default function Navbar() {
    const mobileNav = useDisclosure();

    return (
        <Flex justifyContent={'space-between'} 
        border={'1px solid #ccc'}
        position={'sticky'}
        top={0}
        bg={'white'}
        zIndex={1}
        boxShadow={'inset 0 0 10px rgba(0, 0, 0, 0.2);'} p={5} pl={[5,10,20]} pr={[5,10,20]}>
            <Avatar name='Dan Abrahmov' src={logo} size='md' />
            <Box     display={['none','none','flex']} >
                <Link className="nav-link home" activeClass="active" smooth spy to="home">
                    <Button colorScheme='teal' variant="ghost">Home</Button>
                </Link>
                <Link className="nav-link about" activeClass="active" smooth spy to="about">
                    <Button colorScheme='teal' variant="ghost">About</Button>
                </Link>
                <Link className="nav-link skills" activeClass="active" smooth spy to="skills">
                    <Button colorScheme='teal' variant="ghost">Skills</Button>
                </Link>
                <Link className="nav-link projects" activeClass="active" smooth spy to="projects">
                    <Button colorScheme='teal' variant="ghost">Projects</Button>
                </Link>
                <Link className="nav-link activities" activeClass="active" smooth spy to="activities">
                    <Button colorScheme='teal' variant="ghost">Activities</Button>
                </Link>
                <Link className="nav-link contact" activeClass="active" smooth spy to="contact">
                    <Button colorScheme='teal' variant="ghost">Contact</Button>
                </Link>
               
                <Resume />

            </Box   >
            <Box
                        display={{
                            base: "inline-flex",
                            md: "none",
                        }}
                    >
                        <IconButton
                            display={{
                                base: "flex",
                                md: "none",
                            }}
                            aria-label="Open menu"
                            fontSize="20px"
                            color="gray.800"
                            _dark={{
                                color: "inherit",
                            }}
                            variant="ghost"
                            icon={<HamburgerIcon />}
                            onClick={mobileNav.onOpen}
                        />

                        <VStack
                            pos="absolute"
                            top={0}
                            left={0}
                            right={0}
                            display={mobileNav.isOpen ? "flex" : "none"}
                            flexDirection="column"
                            p={2}
                            pb={4}
                            spacing={3}
                            rounded="sm"
                            shadow="sm"
                            bg={'white'}
                        >
                            <CloseButton
                                aria-label="Close menu"
                                onClick={mobileNav.onClose}
                            />

                            <Link activeClass="active" smooth spy to="home">
                                <Button onClick={mobileNav.onClose} w="full" colorScheme='teal' variant="ghost">Home</Button></Link>
                            <Link activeClass="active" smooth spy to="about">
                                <Button onClick={mobileNav.onClose} w="full" colorScheme='teal' variant="ghost">About</Button></Link>
                            <Link activeClass="active" smooth spy to="skills">
                                <Button onClick={mobileNav.onClose} w="full" colorScheme='teal' variant="ghost">Skills</Button></Link>
                            <Link activeClass="active" smooth spy to="projects">
                                <Button onClick={mobileNav.onClose} w="full" colorScheme='teal' variant="ghost">Projects</Button></Link>
                            <Link activeClass="active" smooth spy to="contact">
                                <Button onClick={mobileNav.onClose} w="full" colorScheme='teal' variant="ghost">Contact</Button></Link>
                            <Resume2 close={mobileNav.onClose} />
                        </VStack>
                    </Box>
        </Flex>
    )
}
