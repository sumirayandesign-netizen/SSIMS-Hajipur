import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'

export const Route = createFileRoute('/blogs/pet-scan')({
  component: PetScanBlogPage,
})

function PetScanBlogPage() {
  return (
    <div className="pt-32 pb-20 bg-slate-50/30">
      <article className="mx-auto max-w-4xl px-6">
        
        {/* Back to Blogs */}
        <Link to="/blogs" className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:underline transition-all">
          <ArrowLeft size={16} /> Back to Blogs
        </Link>
        
        {/* Blog Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Diagnostics</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-deep leading-tight mb-6">
            PET Scan in Cancer: Procedure, Preparation, Results & Cancer Uses
          </h1>
          
          {/* Author & Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-subtle font-medium py-4 border-y border-gray-200 mb-8">
            <div className="flex items-center gap-2"><User size={16} className="text-primary"/> Dr. J.K. Singh</div>
            <div className="flex items-center gap-2"><Calendar size={16} className="text-primary"/> Aug 25, 2026</div>
            <div className="flex items-center gap-2"><Clock size={16} className="text-primary"/> 5 Min Read</div>
          </div>
        </div>

        {/* Featured Image */}
        <img 
          src="/ssims/blogs/pet-scan-hero.jpg" 
          alt="PET Scan Machine at SSIMS Hajipur" 
          className="w-full rounded-[2rem] shadow-md object-cover aspect-video mb-12 border border-white"
          onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x600/e2e8f0/64748b?text=PET+Scan+Machine" }}
        />

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Table of Contents (Left Sidebar) */}
          <div className="lg:col-span-4 hidden lg:block sticky top-32 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-deep text-lg mb-4 border-b pb-2">Table of Contents</h3>
            <ul className="space-y-3 text-sm font-medium text-subtle">
              <li><a href="#what-is" className="hover:text-primary transition-colors">What is a PET Scan?</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How Does a PET Scan Work?</a></li>
              <li><a href="#vs-ct" className="hover:text-primary transition-colors">PET Scan vs CT Scan</a></li>
              <li><a href="#preparation" className="hover:text-primary transition-colors">PET Scan Preparation Instructions</a></li>
              <li><a href="#results" className="hover:text-primary transition-colors">PET Scan Results and What They Mean</a></li>
              <li><a href="#ssims-support" className="hover:text-primary transition-colors">How SSIMS Hajipur Supports Patients</a></li>
            </ul>
          </div>

          {/* Main Article Content (Right Side) */}
          <div className="lg:col-span-8 prose prose-lg prose-blue max-w-none text-subtle leading-relaxed">
            <p>
              Many cancers begin to change the way cells function long before a tumor can be seen on a routine scan. A <strong>Positron Emission Tomography (PET) scan</strong> is a highly advanced imaging test that helps doctors reveal the metabolic or biochemical function of your tissues and organs. 
            </p>

            <h2 id="what-is" className="text-2xl font-bold text-deep mt-10 mb-4">What is a PET Scan?</h2>
            <p>
              A PET scan is a nuclear medicine imaging test that uses a radioactive substance (radiotracer) to look for disease in the body. It is widely used in oncology imaging for cancer diagnosis, evaluating the effectiveness of a treatment plan, and checking for cancer recurrence.
            </p>

            <h2 id="how-it-works" className="text-2xl font-bold text-deep mt-10 mb-4">How Does a PET Scan Work?</h2>
            <p>
              A tiny amount of radioactive material is injected into your bloodstream. This tracer travels through your body and is absorbed by the organs and tissues. Because cancer cells grow faster than normal cells, they take up more of the radiotracer. 
            </p>
            <p>
              The PET scanner detects this radiation and creates highly detailed 3D images. Areas where a large amount of the tracer has collected show up as bright spots, often indicating the presence of cancer.
            </p>

            <h2 id="vs-ct" className="text-2xl font-bold text-deep mt-10 mb-4">PET Scan vs CT Scan</h2>
            <p>
              While a CT scan shows detailed pictures of the organs and tissues inside your body (anatomy), a PET scan finds abnormal activity (biology/metabolism). Today, at advanced centers like SSIMS Hajipur, we perform <strong>PET-CT scans</strong>, which combine both images into one highly accurate diagnostic report.
            </p>

            <h2 id="preparation" className="text-2xl font-bold text-deep mt-10 mb-4">PET Scan Preparation Instructions</h2>
            <p>Getting accurate results depends heavily on proper preparation. Here is what you need to do:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
              <li><strong>Fasting:</strong> You will need to fast for 4 to 6 hours before the scan so normal blood sugar doesn't interfere.</li>
              <li><strong>Avoid Exercise:</strong> Avoid strenuous physical exercise for 24 hours beforehand, as muscle activity can absorb the tracer.</li>
              <li><strong>Diabetic Patients:</strong> Let your doctor know if you are diabetic, as blood sugar levels directly affect image quality.</li>
            </ul>

            <h2 id="results" className="text-2xl font-bold text-deep mt-10 mb-4">PET Scan Results and What They Mean</h2>
            <p>
              The radiologist will look for areas of increased radiotracer uptake, often called "hot spots." While hot spots usually suggest cancer, they can also be caused by infections or inflammation. Your oncologist will correlate these findings with your biopsy and blood tests to make a final staging decision.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl my-10">
              <h4 className="font-bold text-deep text-lg mb-2">Disclaimer:</h4>
              <p className="text-sm m-0">This article is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Please consult a qualified healthcare provider for any questions regarding a medical condition.</p>
            </div>

            <h2 id="ssims-support" className="text-2xl font-bold text-deep mt-10 mb-4">How SSIMS Hajipur Supports Patients</h2>
            <p>
              At SSIMS Hajipur, our dedicated Department of Nuclear Medicine offers world-class PET-CT imaging under one roof. Our tumor board reviews every scan meticulously to ensure that you receive the most precise staging and targeted cancer treatment possible without having to travel to metro cities.
            </p>

            {/* Share & Call to Action */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="font-bold text-deep">Share this article:</span>
                <div className="flex gap-2">
                  <button className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Facebook size={18}/></button>
                  <button className="h-10 w-10 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"><Twitter size={18}/></button>
                  <button className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center hover:bg-indigo-700 hover:text-white transition-colors"><Linkedin size={18}/></button>
                </div>
              </div>
              <Link to="/appointment" className="px-8 py-3 rounded-full bg-deep text-white font-bold hover:bg-primary transition-colors shadow-lg">
                Book a Consultation
              </Link>
            </div>

          </div>
        </div>
      </article>
    </div>
  )
}
