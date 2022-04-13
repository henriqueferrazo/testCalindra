import React from "react";
import { Flex, Text, Box, Image, Center } from "@chakra-ui/react";
import Fita from '../../img/fita1.png'
import FitaDois from '../../img/fita2.png'

function Home() {
    return (
        <>
            <Flex w='100%' bgColor="#E9E9E9">
                <Box w='348px' h='192px'>
                    <Text
                        color='#716565'
                        pos='absolute'
                        ml='150px'
                        w='250px'
                        h='192px'
                        l='231px'
                        top='425px'
                        fontFamily='Roboto Condensed'
                        fontSize='82.2px'
                        d='flex'
                        alignItems='flex-end'
                    >
                        Measuring
                        everything
                    </Text>
                </Box>
                <Box ml='200px' mt='200px'>
                    <Image
                        src={Fita}
                        w='682px'
                        h='335px'
                        l='606px'
                        top='345px'
                    />
                </Box>
            </Flex>
            <Flex w='100%' bgColor="#506FA9">
                <Box w='348px' h='192px' ml="100px" mb="800px">
                    <Text
                        pos='absolute'
                        w='484px'
                        h='162px'
                        l='159px'
                        top='1473px'
                        fontFamily='Roboto Condensed'
                        fontSize='69.2px'
                        lineHeight='81px'
                        d='flex'
                        alignItems='flex-end'
                        color='#FFFFFF'
                    >
                        We are Leader
                        in Measure Tapes
                    </Text>
                </Box>
                <Center>
                    <Box ml='400px' mt='200px'>
                        <Image
                            src={FitaDois}
                            w='1038px'
                            h='800px'
                            l='402px'
                            top='1107px'
                        />
                    </Box>
                </Center>
            </Flex>
        </>
    )
}

export default Home;





