import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { HeartHandshake } from 'lucide-react'

type Donation = {
  id: string
  date: string
  amount: number
  cause: string
}

type DonationHistoryProps = {
  donations: Donation[]
}

export function DonationHistory({ donations }: DonationHistoryProps) {
  const totalDonated = donations.reduce((sum, donation) => sum + donation.amount, 0)

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold flex items-center">
            <HeartHandshake className="mr-2 h-6 w-6" />
            Donation History
          </CardTitle>
          <div className="text-right">
            <p className="text-sm opacity-90">Total Donated</p>
            <p className="text-2xl font-bold">${totalDonated.toFixed(2)}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Cause</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {donations.map((donation) => (
              <TableRow key={donation.id} className="hover:bg-muted/50 transition-colors">
                <TableCell className="font-medium">{donation.date}</TableCell>
                <TableCell className="text-right">
                  <Badge variant="secondary" className="font-mono">
                    ${donation.amount.toFixed(2)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize">
                    {donation.cause}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

