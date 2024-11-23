'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FC, useState } from 'react'
import axios from "axios"
import { getAuthSession } from '@/lib/auth'
import { useRouter } from 'next/navigation'

interface pageProps {
  
}

const Page: FC<pageProps> = ({}) => {
  const [amount, setAmount] = useState(0)
  const router = useRouter()

  const setBalance = async () => {
    try {
      const session = await getAuthSession()
      await axios.post(`onramp/inr`, { userId: session?.user.id, amount })

      router.push(`/events/wallet`)
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div>
        <h2 className='text-lg font-medium text-gray-600'>Deposit</h2>
      </div>

      <div>
        <Card>
          <CardContent>
            <Label>Deposit Amount</Label>
            <Input type='number' onChange={(e) => setAmount(parseInt(e.target.value))} />
          </CardContent>
          <CardFooter>
            <Button className='w-full' onClick={setBalance}>
              Recharge
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Page