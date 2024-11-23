"use client"

import { FC, useEffect, useState } from 'react'
import { ChevronDown, Gift, Trophy, Wallet } from 'lucide-react'
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Session } from 'next-auth'
import axios from "axios"

interface FinancialDashboardProps {
  session: Session
}

const FinancialDashboard: FC<FinancialDashboardProps> = ({ session }) => {
  const [balance, setBalance] = useState({
    available: 1500,
    locked: 0
  })

  const fetchBalance = async () => {
    try {
      const { data } = await axios.get(`/balance/inr/${session.user?.id || ""}`)

      if(data.msg === "success") {
        setBalance({
          available: data.payload.available,
          locked: data.payload.locked
        })
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBalance()
  }, [])

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-600">Total balance</h2>
        <p className="text-5xl font-bold">₹ 143.01</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="flex flex-col">
          <CardHeader className="flex-grow">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Wallet className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">Deposit</h3>
            <p className="text-3xl font-bold">₹{balance.available}</p>
          </CardHeader>
          <CardContent>
            <Link href={"/recharge"} className={cn(buttonVariants({ variant: 'default'}), "w-full bg-gray-900 text-white hover:bg-gray-800")}>Recharge</Link>
          </CardContent>
          <CardFooter className="pt-2">
            <Button variant="link" className="p-0 h-auto text-gray-600">
              View breakdown <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="flex-grow">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">Winnings</h3>
            <p className="text-3xl font-bold text-gray-400">₹108</p>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gray-200 text-gray-400 cursor-not-allowed" disabled>Withdraw</Button>
          </CardContent>
          <CardFooter className="pt-2">
            <p className="text-sm text-red-600">Complete KYC to withdraw funds</p>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="flex-grow">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <Gift className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">Locked</h3>
            <p className="text-3xl font-bold">₹{balance.locked}</p>
          </CardHeader>
          <CardContent>
            <Button className="w-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-50">Invite and Earn</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default FinancialDashboard