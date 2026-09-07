import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/medical-oncology')({
  component: MedicalOncologyPage,
})

function MedicalOncologyPage() {
  return (
    <div className="p-10 mt-20">
      <h1 className="text-4xl font-bold">Medical Oncology</h1>
      <p className="mt-4">Yahan aapka poora lamba detail content aayega...</p>
    </div>
  )
}
