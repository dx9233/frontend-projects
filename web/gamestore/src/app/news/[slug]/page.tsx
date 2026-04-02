import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NewsPost({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content/news", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);

  const contentHtml = processedContent.toString();

  return (
    <article className="article">
      {/* HERO */}
      <div
        className="article-hero"
        style={{
          backgroundImage: `url(${data.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay">
          <div className="container">
            <h1>{data.title}</h1>

            <div className="article-meta">
              <span>{data.date}</span>
              <span>By {data.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="article-body">
        <div className="container-narrow">
          {/* social */}
          <div className="article-share">
            <a href="#">FB</a>
            <a href="#">TW</a>
            <a href="#">IN</a>
          </div>

          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </div>
    </article>
  );
}
