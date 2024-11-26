import { DonationHistory } from '@/components/donation-history'

const mockDonations = [
  { id: '1', date: '2023-05-01', amount: 50, cause: 'Education' },
  { id: '2', date: '2023-05-15', amount: 75, cause: 'Healthcare' },
  { id: '3', date: '2023-06-01', amount: 100, cause: 'Environment' },
  { id: '4', date: '2023-06-15', amount: 25, cause: 'Animal Welfare' },
  { id: '5', date: '2023-07-01', amount: 200, cause: 'Disaster Relief' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Donations</h1>
      </header>
      <main className="container mx-auto py-8">
        <DonationHistory donations={mockDonations} />
      </main>
    </div>
  )
}

