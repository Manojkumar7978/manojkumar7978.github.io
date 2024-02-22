import React from 'react';
import { Box, Text, Heading, Image, SimpleGrid } from '@chakra-ui/react';

const Skills = ({techstack,heading}) => {
    return (
        <div>
            <Box pt={20} bg={'white'}>
                <Heading size={'xl'} textAlign={'center'} >{heading}</Heading>

                <Box width={'100%'} mt={20}>

                    <Box p={10} maxW={'85%'} m={'auto'} borderRadius={20} boxShadow={'md'} bg={'blue.100'} pt={10} pb={10}>
                        <SimpleGrid minChildWidth='130px' spacing='40px'>
                            {
                                techstack.map((el, ind) => {
                                    return <Box className="skills-card" cursor={'pointer'}
                                    key={el.img}
                                     _hover={{ boxShadow: 'xl', bg: 'whiteAlpha.800', transition: 'transform 0.5s', transform: 'scale(1.1)' }}
                                      height={'190px'} borderRadius={10} boxShadow={'md'} bg={'white'} p={3} maxW={'160px'} >
                                        <Box h={'130px'}
                                        // boxSize={'border-box'}
                                        overflow={'hidden'}
                                        >
                                        <Image className="skills-card-img" width={'full'}
                                        objectFit={'contain'}
                                        src={el.img} h={'100%'} />
                                        </Box>
                                        <Text className="skills-card-name" textAlign={'center'} fontWeight={'bold'} mt={2}>{el.name}</Text>

                                    </Box>
                                })
                            }

                        </SimpleGrid>
                    </Box>



                </Box>


            </Box>
        </div>
    );
}

export default Skills;