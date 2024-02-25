import React from 'react';
import { Box, Heading, Flex, Image, Center } from '@chakra-ui/react';
import GithubCalendar from "react-github-calendar";


const Activities = () => {
    return (
        <Box pt={10} bg={'white'}>
           <Center> <Heading size={'xl'} mt={2}>Days i Worked</Heading></Center>

            {/* <Box width={''} border={'2px solid teal'} */}
             {/* borderRadius={'0 40px 0 40px'} p={4} H={'250px'} m={'auto'} marginTop={10} className='calendar'> */}
                <GithubCalendar
                    className="react-activity-calendar"
                    username="manojkumar7978"
                    year={new Date().getFullYear()}
                    style={{ margin:'auto',border:'2px solid teal',padding:'40px',marginTop:'20px',
                    borderRadius:'0 40px 0 40px'
                }}
                />
            {/* </Box> */}
           <Center><Heading size={'xl'} mt={10}>Statistics</Heading></Center> 
            <Flex mt={10} overflow={'hidden'} alignItems={'center'} justifyContent={'center'} gap={10} flexDirection={['column', 'column', 'row']}>

                <Image
                    id="github-streak-stats"
                    align="center"
                    src="https://github-readme-streak-stats.herokuapp.com?user=Manojkumar7978&exclude_days=Sun%2CMon%2CTue%2CWed%2CThu%2CFri%2CSat"
                    alt="streak"
                />
                <Image
                    id="github-stats-card"
                    align="center"
                    src="https://github-readme-stats.vercel.app/api?username=Manojkumar7978&show_icons=true&theme=transparent"
                    alt="stats"
                />

            </Flex>
            <Image
                w={['450px', '450px', '450px']}
                m={'auto'}
                mt={10}
                id="github-top-langs"
                align="center"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Manojkumar7978&layout=compact&theme=transparent"
                alt="langs"
            />

        </Box>
    );
}

export default Activities;