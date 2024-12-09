"use client"

import { SessionProvider } from 'next-auth/react'
import { FC } from 'react'
import { Session } from 'next-auth'

interface ProvidersProps {
  children: React.ReactNode
  session: Session | null
}

const Providers: FC<ProvidersProps> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Providers