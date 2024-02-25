import { Avatar, Box, Button, Flex, Img } from '@chakra-ui/react'
import React from 'react'
import logo from '../assests/logo.avif';
import { Link } from 'react-scroll';
import Resume from './resume';

export default function Navbar() {
    return (
        <Flex justifyContent={'space-between'} 
        border={'1px solid #ccc'}
        position={'sticky'}
        top={0}
        bg={'white'}
        zIndex={1}
        boxShadow={'inset 0 0 10px rgba(0, 0, 0, 0.2);'} p={5} pl={20} pr={20}>
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
        </Flex>
    )
}
