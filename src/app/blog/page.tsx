import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Manuel De Ceglie',
  description: 'Articoli su sviluppo web, SEO, performance e strategie digitali per attività locali.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-background py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            Blog & Risorse
          </h1>
          <p className="text-xl text-muted-foreground">
            Guide tecniche, strategie SEO e consigli pratici per far crescere la tua attività online.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="h-full flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image Placeholder or Actual Image */}
                <div className="aspect-video w-full bg-muted/50 relative overflow-hidden">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 font-mono">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-muted rounded-md text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Ancora nessun articolo pubblicato. Torna presto!</p>
          </div>
        )}
      </div>
    </main>
  );
}
