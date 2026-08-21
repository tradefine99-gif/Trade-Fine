import React from 'react';
import { AlertTriangle, RotateCw, Inbox } from 'lucide-react';

/**
 * Shared loading / error / empty presentational states, used everywhere
 * data now comes from Supabase instead of a static import. Keeping these
 * in one place means every page's "something went wrong" or "nothing
 * here yet" moment looks and behaves the same way.
 */

export function LoadingGrid({ count = 8, className = '' }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden animate-pulse">
          <div className="aspect-[4/5] bg-white/[0.05]" />
          <div className="p-4 space-y-2">
            <div className="h-3 w-1/3 bg-white/10 rounded-full" />
            <div className="h-4 w-2/3 bg-white/10 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function LoadingBlock({ label = 'Loading…' }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-gray-500">
      <div className="w-8 h-8 border-2 border-white/10 border-t-orange-500 rounded-full animate-spin mb-4" />
      <p className="text-sm font-semibold uppercase tracking-widest">{label}</p>
    </div>
  );
}

export function ErrorState({
  title = 'Something went wrong',
  message = "We couldn't load this content. Please check your connection and try again.",
  onRetry,
}) {
  return (
    <div className="rounded-3xl border border-red-500/20 bg-red-500/[0.03] p-12 md:p-16 text-center">
      <div className="w-14 h-14 mx-auto rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
        <AlertTriangle className="text-red-400" size={26} />
      </div>
      <h3 className="text-white text-xl font-bold tracking-tight mb-3">{title}</h3>
      <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mb-8">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-xs uppercase tracking-widest border border-white/15 bg-white/[0.04] hover:border-orange-500/40 hover:bg-white/[0.08] transition-all cursor-pointer"
        >
          <RotateCw size={14} />
          Try Again
        </button>
      )}
    </div>
  );
}

export function EmptyState({ title = 'Nothing here yet', message = '', icon: Icon = Inbox }) {
  return (
    <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-12 md:p-16 text-center">
      <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
        <Icon className="text-orange-500" size={26} />
      </div>
      <h3 className="text-white text-2xl font-bold tracking-tight mb-3">{title}</h3>
      {message && <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">{message}</p>}
    </div>
  );
}
