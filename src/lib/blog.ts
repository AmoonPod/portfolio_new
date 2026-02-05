import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
  author: {
    name: string;
    picture: string;
  };
  tags: string[];
  content: string;
  readingTime: string;
  published: boolean;
}

export function getAllPosts(): BlogPost[] {
  // Check if directory exists to avoid crashes
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date, // ISO string YYYY-MM-DD
        coverImage: data.coverImage,
        author: data.author,
        tags: data.tags || [],
        content,
        readingTime: `${Math.ceil(readingTime(content).minutes)} min lettura`,
        published: data.published ?? true,
      } as BlogPost;
    })
    .filter((post) => post.published) // Only return published posts
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1)); // Sort by date desc

  return allPosts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      coverImage: data.coverImage,
      author: data.author,
      tags: data.tags || [],
      content,
      readingTime: readingTime(content).text,
      published: data.published ?? true,
    } as BlogPost;
  } catch (e) {
    return null;
  }
}

export function getRelatedPosts(currentSlug: string, tags: string[], count = 3): BlogPost[] {
  const allPosts = getAllPosts();
  
  return allPosts
    .filter(post => post.slug !== currentSlug) // Exclude current
    .map(post => ({
      post,
      score: post.tags.filter(tag => tags.includes(tag)).length // Calculate relevance score
    }))
    .sort((a, b) => b.score - a.score) // Sort by relevance
    .slice(0, count)
    .map(item => item.post);
}
