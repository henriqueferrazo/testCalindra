import React from "react";
import { Flex, Image, Box, Text } from "@chakra-ui/react";
import logo from './img/logo.svg'
function Header() {
    return (
        <Flex h="110px" p="absolute" bg='White'>
            <Box>
                <Image
                    src={logo}
                    w='70px'
                    h='61.08px'
                    ml='53px'
                    mt='24.36px'
                    p='absolute'
                />
            </Box>
            <Box>
                <Text
                    w='168px'
                    h='48px'
                    l='147px'
                    top='20px'
                    fontFamily='RobotoCondensed'
                    color='#846219'
                    fontSize="41.2px"
                    p='absolute'
                >
                    zutterman
                </Text>
            </Box>
        </Flex>
    )
}

export default Header;


/* zutterman */

// position: absolute;
// width: 168px;
// height: 48px;
// left: 147px;
// top: 20px;

// font-family: 'RobotoCondensed';
// font-size: 41.2px;
// line-height: 48px;
// display: flex;
// align-items: flex-end;

// color: #846219;

/* zutterman */


