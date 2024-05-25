'use client'
import React, { useEffect } from 'react'
import { Book, Headphones, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { UserButton } from '@clerk/nextjs'
import { useBilling } from '@/providers/billing-provider'
import { onPaymentDetails } from '@/app/(main)/(pages)/billing/_actions/payment-connecetions'

type Props = {}

const InfoBar = (props: Props) => {
  const { credits, tier, setCredits, setTier } = useBilling()

  const onGetPayment = async () => {
    const response = await onPaymentDetails()
    if (response) {
      setTier(response.tier!)
      setCredits(response.credits!)
    }
  }

  useEffect(() => {
    onGetPayment()
  }, [])

  return (
    <div className="flex flex-col md:flex-row justify-end gap-4 md:gap-6 items-center px-4 py-4 w-full dark:bg-black">
      <div className="w-full md:w-auto mb-2 ml-4 md:mb-0">
        <span className="flex items-center rounded-full bg-muted px-2 md:px-4 w-full md:w-auto">
          <Search />
          <Input
            placeholder="Quick Search"
            className="border-none bg-transparent w-full md:w-auto"
          />
        </span>
      </div>
      <div className=" ml-2 flex flex-wrap justify-end gap-4 md:gap-6 items-center w-full md:w-auto">
        <span className="flex items-center gap-2 font-bold">
          <p className="text-sm font-light text-gray-300">Credits</p>
          {tier == 'Unlimited' ? (
            <span>Unlimited</span>
          ) : (
            <span>
              {credits}/{tier == 'Free' ? '10' : tier == 'Pro' && '100'}
            </span>
          )}
        </span>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Headphones className="w-5 h-5 md:w-6 md:h-6" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Contact Support</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Book className="w-5 h-5 md:w-6 md:h-6" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Guide</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <UserButton />
      </div>
    </div>
  )
}

export default InfoBar
