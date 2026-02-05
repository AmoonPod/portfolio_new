import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Image from 'next/image';
import Link from 'next/link';

const components = {
  h1: (props: any) => <h1 className="text-3xl font-black mt-10 mb-4 tracking-tight" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-12 mb-4 scroll-mt-20 border-b pb-2" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold mt-8 mb-3 scroll-mt-20" {...props} />,
  p: (props: any) => <p className="text-lg leading-relaxed text-gray-700 mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-700" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-700" {...props} />,
  li: (props: any) => <li className="pl-1" {...props} />,
  a: (props: any) => <Link className="text-primary font-medium hover:underline underline-offset-2" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary bg-muted/30 pl-6 py-4 my-8 rounded-r-lg italic text-gray-700" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary font-medium" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-[#1a1a1a] text-gray-100 p-6 rounded-xl overflow-x-auto my-8 text-sm font-mono border border-gray-800" {...props} />
  ),
  // Custom component for images in MDX
  img: (props: any) => (
    <div className="my-8 rounded-xl overflow-hidden border border-gray-200">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="w-full h-auto" {...props} alt={props.alt || ''} />
    </div>
  ),
};

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-lg prose-slate max-w-none">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [],
          },
        }}
      />
    </div>
  );
}
