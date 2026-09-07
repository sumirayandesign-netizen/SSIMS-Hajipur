import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/research-and-trials')({
  component: ComingSoonPage,
})

function ComingSoonPage() {
  return (
    <div className="py-32 text-center">
      <h1 className="text-4xl font-bold text-deep">research-and-trials</h1>
      <p className="mt-4 text-gray-500 text-lg">Detailed information is coming soon...</p>
    </div>
  )
}
