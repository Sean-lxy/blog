import Image from 'next/image';

import { allBlogs } from 'contentlayer/generated';

import CoverSection from '@/src/components/Home/CoverSection';

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center ">
      <CoverSection blogs={allBlogs} />
    </main>
  )
}
