
import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt={2}>
      &copy; {new Date().getFullYear()} Yale Araújo. All Rights Reserved.
    </Box>
  )
}

export default Footer