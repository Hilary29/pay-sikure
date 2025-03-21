import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    title: "",
    excerpt:
      "Pourquoi nous prenons plus de 72 heures à vous répondre,et sans réponse automatique.",
    date: "Janvier 8, 2025",
    category: "Info",
    readTime: "4 min",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "",
    excerpt:
      "5 Astuces pour survivre sans votre argent bloqué chez PaySikure.",
    date: "Mars 5, 2024",
    category: "Tips",
    readTime: "6 min",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "",
    excerpt:
      "Pourquoi nous ne vous faisons pas connaitre les montants des frais des transactions.",
    date: "Fevrier 1, 2025",
    category: "Info",
    readTime: "3 min",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="w-full py-12 md:py-24 bg-white">
      <div className="max-w-[1183px] px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center ">
          <div className="text-center mb-12">
            <p className="text-secondary-600 font-bold text-lg p-2.5 mb-2.5">
              BLOG
            </p>
            <p className="font-medium text-xl text-gray-500 justify-center px-2.5 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
              Dernières informations sur PaySikure.
            </p>
          </div>
        </div>

        {/* Featured Post */}
        {/*         <div className="mb-12 rounded-xl overflow-hidden  shadow-sm">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-video md:aspect-auto md:h-full">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Featured blog post"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-[#43c759]/10 text-[#43c759] hover:bg-[#43c759]/20 border-none">Featured</Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> March 10, 2025
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">The Future of Digital Payments in 2025</h3>
              <p className="text-muted-foreground mb-4">
                Explore how digital payment technologies are evolving and what businesses can expect in the coming
                years. Learn about the latest innovations that are shaping the future of financial transactions.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 5 min read
                </span>
                <Link href="#" className="text-[#06a5db] font-medium flex items-center gap-1 hover:underline">
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div> */}

        {/* Blog Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg overflow-hidden shadow-md"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    className={
                      post.category === "Info"
                        ? "bg-[#06a5db]/10 text-[#06a5db] hover:bg-[#06a5db]/20 border-none"
                        : "bg-[#43c759]/10 text-[#43c759] hover:bg-[#43c759]/20 border-none"
                    }
                  >
                    {post.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-700 font-medium text-lg mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.readTime} 
                  </span>
                  <Link
                    href="#blog"
                    className="text-[#06a5db] font-medium flex items-center gap-1 hover:underline"
                  >
                    Lire plus <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center ">
          <Link
            href="/blog"
            className=" bg-primary-500 hover:bg-primary-600 px-3 py-2 font-medium text-white rounded-lg"
          >
            Voir plus
          </Link>
        </div>
      </div>
    </section>
  );
}
