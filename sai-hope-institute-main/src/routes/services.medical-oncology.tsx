import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/services/medical-oncology')({
  component: MedicalOncologyPage,
})

function MedicalOncologyPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:underline">
        <ArrowLeft size={16} /> Back to Services
      </Link>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Medical Oncology</h1>
      <img src="/ssims/services/1.png" alt="Medical Oncology" className="w-full rounded-2xl mb-8 shadow-md" />
      
      <div className="prose prose-lg text-gray-700">
        <p>
          Yahan aap Medical Oncology ke baare mein apna lamba detail content likh sakte hain. Jaise ki chemotherapy, targeted therapy, aur immunotherapy kaise kaam karti hai.
        </p>
        <p>
          Aap yahan doctors ki list, treatment ke steps aur baaki saari jankari add kar sakte hain.
        </p>
      </div>
    </div>
  )
}
