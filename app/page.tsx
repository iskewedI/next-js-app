import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <h1 className='text-3xl font-bold mb-4 text-center'>Next.js Examples</h1>
        <p className='mb-4 text-center'>
          Explore examples of hydration and server-side rendering (SSR) in Next.js. Click
          on the links below to see these examples in action.
        </p>
        <ul className='list-disc list-inside text-center'>
          <li className='mb-2'>
            <Link
              href='/hydration'
              className='text-blue-500 hover:underline
text-blue-500 hover:underline'
            >
              Hydration Example
            </Link>
          </li>
          <li>
            <Link
              href='/ssr'
              className='text-blue-500 hover:underline
text-blue-500 hover:underline'
            >
              SSR Example
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
