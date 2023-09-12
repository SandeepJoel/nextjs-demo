import './styles/app.scss';

import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  let links = [
    {
      href: '/',
      text: 'Home'
    },
    {
      href: '/products',
      text: 'Products'
    },
    {
      href: '/docs/quick-start',
      text: 'Docs'
    },
    {
      href: '/forms',
      text: 'Forms'
    }
  ].map((i, index) => (
    <div className="m-5" key={index}>
      <Link href={i.href}> {i.text}</Link>
    </div>
  ));
  return (
    <html lang="en">
      <head />
      <body>
        <header className="flex mb-40">{links}</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
