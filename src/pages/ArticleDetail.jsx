import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { ChevronRight, Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { getArticleBySlug, getArticles } from '../services/articlesService';
import { ARTICLE_IMAGES } from '../data/articleImages';
import { LoadingBlock, ErrorState, EmptyState } from '../components/common/DataState';
import Seo from '../components/common/Seo';
import JsonLd from '../components/common/JsonLd';
import { buildBreadcrumbSchema, buildArticleSchema } from '../data/structuredData';
import { SITE_URL } from '../lib/seoConfig';

marked.setOptions({ gfm: true, breaks: false });

export default function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [related, setRelated] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error | not-found

  const load = async () => {
    setStatus('loading');
    const [{ article: found, error: articleError }, { articles: all }] = await Promise.all([
      getArticleBySlug(slug),
      getArticles(),
    ]);

    if (articleError) {
      setStatus('error');
      return;
    }
    if (!found) {
      setStatus('not-found');
      return;
    }

    setArticle(found);
    setRelated(all.filter((a) => a.slug !== slug).slice(0, 3));
    setStatus('ready');
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard fetch-on-mount pattern; load() is async and safe to call here.
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const html = useMemo(() => {
    if (!article?.content) return '';
    // Swap our custom ARTICLE_IMG:filename markers for the real bundled asset URLs.
    let content = article.content;
    Object.entries(ARTICLE_IMAGES).forEach(([filename, url]) => {
      content = content.split(`ARTICLE_IMG:${filename}`).join(url);
    });
    // The page already renders `article.title` as the page's single <h1>.
    // Strip a leading "# ..." markdown title line so we don't emit a second,
    // duplicate <h1> into the article body (breaks heading hierarchy / SEO).
    content = content.replace(/^\s*#\s+.+\n+/, '');
    // Sanitize the rendered HTML before it ever reaches the DOM. Article
    // content now lives in the database rather than developer-authored
    // source files, so this is a real (not theoretical) XSS boundary —
    // see the security notes in supabase/schema.sql.
    return DOMPurify.sanitize(marked.parse(content));
  }, [article]);

  if (status === 'loading') {
    return (
      <main className="min-h-screen bg-[#080D16] pt-36">
        <LoadingBlock label="Loading article…" />
      </main>
    );
  }

  if (status === 'not-found') {
    return (
      <main className="min-h-screen bg-[#080D16] pt-36 px-6 pb-24">
        <Seo title="Article Not Found" description="This article may have been moved or unpublished." noindex />
        <div className="max-w-3xl mx-auto">
          <EmptyState
            title="Article not found"
            message="This article may have been moved or unpublished."
          />
          <div className="text-center mt-8">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 text-sm font-bold uppercase tracking-widest transition-colors"
            >
              <ArrowLeft size={15} />
              Back to Resources
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (status === 'error') {
    return (
      <main className="min-h-screen bg-[#080D16] pt-36 px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <ErrorState onRetry={load} />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#080D16]">
      <Seo
        title={article.title}
        description={article.excerpt}
        image={article.image || undefined}
        type="article"
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Resources', path: '/resources' },
          { name: article.title, path: `/resources/${article.slug}` },
        ])}
      />
      <JsonLd data={buildArticleSchema(article, `${SITE_URL}/resources/${article.slug}`)} />
      {/* Hero */}
      <section className="relative pt-36 pb-0 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 text-xs text-gray-500 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/resources" className="hover:text-orange-500 transition-colors">Resources</Link>
            <ChevronRight size={12} />
            <span className="text-gray-300 truncate max-w-[200px]">{article.title}</span>
          </motion.div>

          <motion.span
            className="inline-flex px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {article.category}
          </motion.span>

          <motion.h1
            className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {article.title}
          </motion.h1>

          <motion.div
            className="flex items-center gap-5 text-gray-500 text-xs font-medium mb-10 pb-10 border-b border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <span className="flex items-center gap-1.5"><Calendar size={13} /> {article.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} /> {article.readTime}</span>
          </motion.div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="rounded-3xl overflow-hidden border border-white/10 mb-14"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img src={article.image} alt={article.title} className="w-full h-auto object-cover" />
        </motion.div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 pb-10">
        <div
          className="
            [&>p]:text-gray-200 [&>p]:leading-[1.85] [&>p]:mb-6 [&>p]:text-[17px] md:[&>p]:text-lg
            [&_strong]:text-white [&_strong]:font-semibold
            [&>h2]:text-white [&>h2]:text-2xl md:[&>h2]:text-3xl [&>h2]:font-black [&>h2]:tracking-tight [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:scroll-mt-24 [&>h2]:pb-4 [&>h2]:border-b [&>h2]:border-white/10
            [&>h3]:text-white [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:mb-4
            [&>h4]:text-orange-400 [&>h4]:text-base [&>h4]:font-bold [&>h4]:uppercase [&>h4]:tracking-wide [&>h4]:mt-8 [&>h4]:mb-3
            [&_ul]:mb-6 [&_ul]:space-y-3 [&_ul]:pl-1
            [&_ol]:mb-6 [&_ol]:space-y-3 [&_ol]:pl-5 [&_ol]:list-decimal [&_ol]:text-gray-200
            [&_li]:text-gray-200 [&_li]:leading-[1.8] [&_li]:text-[17px] md:[&_li]:text-lg [&_li]:pl-1
            [&_ul>li]:relative [&_ul>li]:list-none [&_ul>li]:pl-5
            [&_ul>li]:before:content-['—'] [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:text-orange-500
            [&_a]:text-orange-400 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-orange-300
            [&_img]:rounded-2xl [&_img]:border [&_img]:border-white/10 [&_img]:my-8 [&_img]:w-full
            [&_.table-scroll]:overflow-x-auto [&_.table-scroll]:my-8 [&_.table-scroll]:rounded-xl [&_.table-scroll]:border [&_.table-scroll]:border-white/10
            [&_table]:w-full [&_table]:border-collapse [&_table]:text-base
            [&_thead]:bg-white/[0.05]
            [&_th]:text-left [&_th]:text-white [&_th]:font-bold [&_th]:p-4 [&_th]:border-b [&_th]:border-white/10 [&_th]:whitespace-nowrap
            [&_td]:p-4 [&_td]:text-gray-200 [&_td]:border-b [&_td]:border-white/5 [&_td]:align-top
            [&_tbody_tr:hover]:bg-white/[0.03]
          "
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* CTA */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />
          <h3 className="relative z-10 text-white text-2xl md:text-3xl font-black tracking-tight mb-3">
            Ready to start your project?
          </h3>
          <p className="relative z-10 text-gray-400 text-sm md:text-base max-w-lg mx-auto mb-7">
            Talk to our team about fabric, MOQ, and timeline for your exact product.
          </p>
          <Link
            to="/contact"
            className="relative z-10 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-sm uppercase tracking-widest shadow-[0_4px_20px_rgba(255,107,0,0.32)] hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Request Quote
            <ArrowRight size={16} />
          </Link>
        </div>

        <Link
          to="/resources"
          className="mt-10 inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 text-sm font-bold uppercase tracking-widest transition-colors"
        >
          <ArrowLeft size={15} />
          Back to Resources
        </Link>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-24 pt-10">
          <h3 className="text-white text-xl font-black tracking-tight mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((a) => (
              <Link
                key={a.slug}
                to={`/resources/${a.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-orange-500/40 transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">
                    {a.category}
                  </span>
                  <h4 className="text-white font-bold text-sm leading-snug mt-2 group-hover:text-orange-400 transition-colors">
                    {a.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
