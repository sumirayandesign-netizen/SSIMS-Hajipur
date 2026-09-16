import { createFileRoute, Link } from '@tanstack/react-router'
import { PageHero } from "@/components/site/page-hero"
import { Calendar, Clock, ChevronRight } from 'lucide-react'

export const Route = createFileRoute('/blogs/')({
  component: BlogsIndexPage,
})

const blogPosts = [
  {
    slug: "pet-scan",
    title: "PET Scan in Cancer: Imaging, Detection & Staging",
    excerpt: "Understand how a PET-CT scan works for tumor detection, cancer staging, and monitoring treatment response.",
    category: "Diagnostics",
    date: "Aug 25, 2026",
    readTime: "5 min read",
    image: "/ssims/blogs/pet-scan.jpg" 
  },
  {
    slug: "mammography-guide",
    title: "Mammography: Breast Cancer Screening & Imaging Guide",
    excerpt: "Learn about the procedure, types, results, and the right screening age for mammography.",
    category: "Women's Health",
    date: "Aug 20, 2026",
    readTime: "4 min read",
    image: "/ssims/blogs/mammography.jpg"
  },
  {
    slug: "hpv-test-cervical-cancer",
    title: "HPV Test: Procedure, Results & Cervical Cancer Screening",
    excerpt: "Everything you need to know about HPV testing and how it helps in preventing cervical cancer.",
    category: "Prevention",
    date: "Aug 15, 2026",
    readTime: "6 min read",
    image: "/ssims/blogs/hpv-test.jpg"
  },
  {
    slug: "skin-cancer-women",
    title: "Skin Cancer Symptoms in Women: Early Signs & Risks",
    excerpt: "Identify early warning signs, mole changes, and risk factors of skin cancer specifically in women.",
    category: "Awareness",
    date: "Aug 10, 2026",
    readTime: "4 min read",
    image: "/ssims/blogs/skin-cancer.jpg"
  }
];

function BlogsIndexPage() {
  return (
    <>
      <PageHero 
        eyebrow="Knowledge & Insights" 
        title="SSIMS Cancer Care Blog" 
        subtitle="Expert articles, cancer awareness, and treatment guides from our top oncologists." 
        crumbs={[{ label: "Blogs" }]} 
      />
      
      <section className="py-24 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="flex flex-wrap gap-3 mb-12 border-b border-gray-200 pb-6">
            <button className="px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-md">All Blogs</button>
            <button className="px-5 py-2 rounded-full bg-white text-deep border border-gray-200 hover:bg-gray-50 text-sm font-semibold transition-all">Diagnostics</button>
            <button className="px-5 py-2 rounded-full bg-white text-deep border border-gray-200 hover:bg-gray-50 text-sm font-semibold transition-all">Prevention</button>
            <button className="px-5 py-2 rounded-full bg-white text-deep border border-gray-200 hover:bg-gray-50 text-sm font-semibold transition-all">Awareness</button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-100 group flex flex-col hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
                
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
                    {post.category}
                  </div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Blog+Image" }}
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-deep mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {/* Yahan 'as any' lagana zaroori tha TanStack router me dynamic links ke liye */}
                    <Link to={`/blogs/${post.slug}` as any}>{post.title}</Link>
                  </h3>
                  <p className="text-subtle text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-xs text-subtle font-medium">
                        <Calendar size={13} /> {post.date}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-subtle font-medium">
                        <Clock size={13} /> {post.readTime}
                      </div>
                    </div>
                    {/* Yahan bhi 'as any' lagaya gaya hai */}
                    <Link 
                      to={`/blogs/${post.slug}` as any} 
                      className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors"
                    >
                      <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
