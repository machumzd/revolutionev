import BlogGridClient from "@/components/ui/blogGridComponent";
import { getBlogPostsByProject } from "@/sanity/lib/blogs";

  
export const metadata = {
  title: "EV News & Insights | Revolution EV Malaysia Blog",
  description: "Explore industry insights, EV policy updates, and expert opinions in the Revolution EV Malaysia blog. Stay informed and ahead of the curve.",
};


export default async function NewsBlogGrid() {
  const posts = await getBlogPostsByProject("rev");


  return (
    <section className="bg-white">
      <BlogGridClient posts={posts} />
    </section>
  );
}
