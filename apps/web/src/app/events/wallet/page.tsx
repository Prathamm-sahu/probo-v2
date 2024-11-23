import FinancialDashboard from '@/components/FinancialDashboard'
import { getAuthSession } from '@/lib/auth'
import { notFound } from 'next/navigation'
import { FC, useState } from 'react'

interface WalletPageProps {
  
}

const WalletPage: FC<WalletPageProps> = async ({}) => {

  const session = await getAuthSession()

  if(!session) {
    return notFound()
  }

  return (
    <div>
      <FinancialDashboard session={session} />
    </div>
  )
}

export default WalletPage