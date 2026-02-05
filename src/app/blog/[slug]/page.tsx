import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import { MDXContent } from '@/components/blog/MDXContent';
import { DATA } from '@/data/resume';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all posts at build time
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Articolo non trovato',
    };
  }

          const ogUrl = new URL(`${DATA.url}/api/og`);
  ogUrl.searchParams.set('title', post.title);
  // Use excerpt as subtitle, truncated
  ogUrl.searchParams.set('subtitle', post.excerpt.slice(0, 100) + '...');
  ogUrl.searchParams.set('badge', 'Blog');

  // Define images array, prioritizing coverImage if available
  const images = post.coverImage 
    ? [`${DATA.url}${post.coverImage}`] 
    : [ogUrl.toString()];

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${DATA.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [DATA.name],
      url: `${DATA.url}/blog/${post.slug}`,
      images: images.map(url => ({
        url,
        width: 1200,
        height: 630,
        alt: post.title,
      })),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: images,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.tags);


  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: DATA.url,
    },
    publisher: {
      '@type': 'Organization',
      name: DATA.name,
      logo: {
        '@type': 'ImageObject',
        url: `${DATA.url}/logo.png`, // Update if you have a specific logo URL
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${DATA.url}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen bg-background pb-24">
        {/* Header */}
        <header className="pt-32 pb-16 px-6 bg-muted/20 border-b border-border">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                {post.tags.map(tag => (
                  <Link 
                    key={tag} 
                    href={`/blog?tag=${tag}`}
                    className="px-3 py-1 bg-background border border-border rounded-full text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {post.coverImage && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10 shadow-lg border border-border/50">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative">
                   {/* Placeholder avatar if image fails */}
                   <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                     {post.author.name.charAt(0)}
                   </div>
                </div>
                <span>{post.author.name}</span>
              </div>
              <span>•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <MDXContent source={post.content} />
          
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="font-bold text-2xl mb-6">Potrebbe interessarti anche</h3>
            {relatedPosts.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {relatedPosts.map(related => (
                  <Link key={related.slug} href={`/blog/${related.slug}`} className="group block">
                    <article className="bg-card border border-border rounded-xl p-5 hover:shadow-lg transition-all h-full flex flex-col">
                      <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {related.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {related.excerpt}
                      </p>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground italic">Nessun articolo correlato al momento.</p>
            )}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:opacity-90 transition-opacity"
            >
              ← Torna al Blog
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
