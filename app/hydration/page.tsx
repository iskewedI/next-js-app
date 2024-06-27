'use client';

import { useState, useEffect } from 'react';
import PageLayout from '../components/PageLayout';

const HydrationExample: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Hydration complete');
  }, []);

  return (
    <PageLayout>
      <h1 className='text-3xl font-bold mb-4 text-center '>Hydration Example</h1>
      <div className='flex flex-col gap-4 m-10'>
        <p className='mb-4 text-center'>
          Hydration is the process where a JavaScript framework like React attaches event
          listeners and makes a server-rendered HTML page interactive on the client side.
          In the context of Next.js, hydration occurs after SSR or static site generation
          (SSG), ensuring that the static HTML sent from the server becomes a fully
          interactive web page.
        </p>
        <h3 className='text-center'>How it works: </h3>
        <ul className='list-disc '>
          <li>The server sends fully rendered HTML to the client.</li>
          <li>
            The client receives the HTML and displays it immediately, providing a quick
            initial render.
          </li>
          <li>
            React (or another JavaScript framework) runs on the client, "hydrating" the
            HTML by attaching event listeners and converting the static HTML into a
            dynamic, interactive web page.
          </li>
          <li>
            Any client-side JavaScript needed for the page to become interactive is
            executed during this process.
          </li>
        </ul>
      </div>
      <div className='text-center'>
        <button
          className='px-4 py-2 bg-blue-500 text-white rounded mb-4'
          onClick={() => setCount(count + 1)}
        >
          Click Me: {count}
        </button>
      </div>
    </PageLayout>
  );
};

export default HydrationExample;
