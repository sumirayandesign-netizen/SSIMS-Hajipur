<section className="py-20 bg-slate-50/50">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 sticky top-28">
          <h2 className="text-3xl md:text-4xl font-bold text-deep leading-tight">
            Empowering communities through active healthcare outreach.
          </h2>
          <div className="mt-6 h-1.5 w-20 gradient-brand rounded-full"></div>
        </div>
        
        <div className="lg:col-span-7 prose prose-lg text-subtle leading-relaxed">
          <p>
            Our vision of a healthier society extends far beyond clinical treatments. We actively organize comprehensive health awareness campaigns, regular screening camps, and preventive care programs across remote and underserved areas. 
          </p>
          <p>
            Through free medicine distribution, continuous blood donation drives, and vital training for local healthcare workers, our community initiatives are designed to make early detection and quality medical consultations accessible to everyone, regardless of their geographic location.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="py-20">
    <div className="mx-auto max-w-7xl px-6">
      <h3 className="text-2xl font-bold text-deep mb-10 text-center">Community Gallery</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((img, index) => (
          <div key={index} className="group rounded-[28px] overflow-hidden bg-white shadow-soft ring-1 ring-border/50 aspect-[4/3] relative">
            <img 
              src={img} 
              alt={`Community activity ${index + 1}`} 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-deep/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
</>
