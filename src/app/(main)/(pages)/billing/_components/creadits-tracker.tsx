import React from 'react'
import { Progress } from '@/components/ui/progress'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

type Props = {
  credits: number
  tier: string
}

const CreditTracker = ({ credits, tier }: Props) => {
  const displayCredits = isNaN(credits) ? 'Unlimited' : credits
  const progressValue = isNaN(credits)
    ? 100
    : tier == 'Free'
    ? credits * 10
    : tier == 'Unlimited'
    ? 100
    : credits

  return (
    <div className="p-6">
      <Card className="p-6">
        <CardContent className="flex flex-col gap-6">
          <CardTitle className="font-light">Credit Tracker</CardTitle>
          <Progress
            value={progressValue}
            className="w-full"
          />
          <div className="flex justify-end">
            <p>
              {displayCredits}/
              {tier == 'Free' ? 10 : tier == 'Pro' ? 100 : 'Unlimited'}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreditTracker
