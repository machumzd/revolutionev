export const revalidate = 60;

import PortableTextRenderer from "@/app/components/utils/PortableTextRenderer";
import { buildMetadata } from "@/lib/seo/metadataBuilder";
import { getBlogPostBySlug } from "@/sanity/lib/blogs"; // Update this to your actual fetch function
import { Metadata } from "next";
import { notFound } from "next/navigation";


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = await getBlogPostBySlug(params.slug);

  if (!blog) return {};

  return buildMetadata({
    title: blog.title,
    description: blog.excerpt || "A blog post about electric mobility.",
    slug: params.slug,
    basePath: "blog",
    image: blog.mainImage || "/og-image.png",
  });
}

export default async function BlogPostPage({ params }: { params: { blogId: string } }) {
  const blog = await getBlogPostBySlug(params.blogId); // or by ID

  if (!blog) {
    return notFound();
  }

  return (
    <section className="px-4 md:px-16 lg:px-28 py-12 max-w-5xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-6">{blog.title}</h1>

      {/* Author & Date */}
      <p className="text-gray-500 text-sm mb-8">
        By {blog.author?.name || "Unknown Author"} • {new Date(blog.publishedAt).toDateString()}
      </p>

      {/* Main Image */}
      {blog.mainImage && (
        <img
          src={blog.mainImage}
          alt={blog.title}
          className="w-full h-auto mb-10 rounded-md object-cover"
        />
      )}

      {/* Body Content */}
      <PortableTextRenderer value={blog.body} />
    </section>
  );
}
