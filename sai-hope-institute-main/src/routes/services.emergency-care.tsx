import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services.emergency-care')({
  component: ComingSoonPage,
})

function ComingSoonPage() {
  return (
    <div className="py-32 text-center">
      <h1 className="text-4xl font-bold text-deep">Medical Oncology</h1>
      <p className="mt-4 text-gray-500 text-lg">Detailed information is coming soon...</p>
    </div>
  )
}
