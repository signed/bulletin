import * as React from 'react'
import { Flex } from '@chakra-ui/core'

export const Key: React.FC = (props) => {
  return <Flex as={'div'}
               justifyContent={'space-around'}
               alignItems={'center'}
               flexBasis={'5.5em'}
               height={'3.3333333333em'}
               width={'3.3333333333em'}
               margin={'5px'}
               borderRadius={'10px'}
               backgroundColor={'#f5f5f5'}
               opacity={0.5}
               border={'1px solid #3c3c3c'}
               fontSize={'1em'}
               fontFamily={'Roboto'}
               fontWeight={'300'}
  >
    {props.children}
  </Flex>
}
