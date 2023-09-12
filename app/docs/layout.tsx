import Time from 'components/Time';
import Link from 'next/link';
import { generateTitle } from 'utils/helpers';
import { use, useId } from 'react';
import { readdir } from 'fs/promises';

async function getDirectories() {
  const directories = (await readdir('./app/docs/', { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dir) => dir.name);

  return directories;
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  let Navs = use(getDirectories());

  let links = Navs.map((i, index) => (
    <div className="m-5" key={index}>
      <Link href={`/docs/${i}`}> {generateTitle(i)}</Link>
    </div>
  ));

  return (
    <>
      <Time />
      <div className="flex">
        <nav>{links}</nav>
        <main>{children}</main>
      </div>
    </>
  );
}
