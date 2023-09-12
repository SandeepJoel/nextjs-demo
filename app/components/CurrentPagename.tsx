'use client';

import { usePathname } from 'next/navigation';
import { generateTitle } from 'utils/helpers';

export default function CurrentPageName() {
  const pathname = usePathname();
  const arr = pathname?.split('/') || [];
  const pathName = arr[arr?.length - 1];
  return <h1>{generateTitle(pathName)}</h1>;
}
