import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/docs/quick-start">
        <button>Return Quick start</button>
      </Link>
    </div>
  );
}
