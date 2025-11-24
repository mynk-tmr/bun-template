import { useRef, useState, useTransition } from 'react';
import { cn } from '../utils/cn';
import { rpc } from '../utils/rpc';

export function Quote() {
  const [loading, start] = useTransition();
  const [text, setText] = useState('');
  const mounted = useRef(false);
  async function handleClick() {
    const res = await rpc.quote[':id'].$get({
      param: { id: 'random' },
    });
    const { quote } = await res.json();
    setText(quote);
  }
  return (
    <article
      ref={() => {
        if (!mounted.current) {
          mounted.current = true;
          handleClick();
        }
      }}
      className="mt-8 space-y-4 w-xl"
    >
      <blockquote
        className={cn(
          'pl-4 border-l-2 font-semibold text-pink-400',
          loading && 'opacity-50',
        )}
      >
        {text}
      </blockquote>
      <button
        type="button"
        disabled={loading}
        onClick={() => {
          start(handleClick);
        }}
      >
        Fetch Quote
      </button>
    </article>
  );
}
