import { Box } from '@chakra-ui/react'
import Header from 'components/Header/Header'
import { ReactNode } from 'react'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box>
      <Header />
      <br />
      {children}
    </Box>
  )
}
