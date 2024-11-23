import PortfolioTrade from '@/components/PortfolioTrade'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div >
      <div className='h-10 border-b flex justify-center'>
        <Button variant={'outline'} className=''>Active Trades</Button>
        <Button variant={"outline"} className=''>Closed Trades</Button>
      </div>

      <div>
        <PortfolioTrade />
      </div>
    </div>
  )
}

export default page