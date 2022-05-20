import { Box } from '@chakra-ui/react'
import {Banner} from '../components/Banner'
import { Header } from '../components/Header'


export default function Home() {
  return (
    <>
      <Header />
      <Banner />


      <Box w={["60px", "90px"]} mx="auto" h="2px" bg="gray.600" my={["9", "20"]} />

    </>
  )
}