import React from "react";
import { Flex, Image, Box, Text } from "@chakra-ui/react";
import logo from '../../img/logo.svg'



function Header() {
    return (
        <Flex h="110px" w='100%' bg='White'>
            <Box>
                <Image
                    src={logo}
                    w='70px'
                    h='61.08px'
                    ml='53px'
                    mt='24.36px'
                    mr='5px'
                />
            </Box>

            <Box w='200px' h="120px" pt='20px' >
                <Text
                    w='168px'
                    h='35px'
                    top="20px"
                    fontFamily='Roboto Condensed'
                    color='#846219'
                    fontSize="41.2px"
                >
                    zutterman
                </Text>
                <Text
                    w='190px'
                    h='40px'
                    top='0'
                    fontFamily='Open Sans'
                    color='#846219'
                    fontSize="16.2px"
                    lineHeight='19px'
                    letterSpacing="5.4px"
                    d='flex'
                    alignItems='flex-end'
                >
                    Measure Tapes
                </Text>

            </Box>

            <Box>

                <Text>ABOUT US</Text>
                <Text>MODELS</Text>
                <Text>GARANTEE</Text>
            </Box>
        </Flex>
    )
}

export default Header;




