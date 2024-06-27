import { use } from 'react';
import PageLayout from '../components/PageLayout';

const fetchServerTime = async () => {
  return new Date().toISOString();
};

const SSRExample: React.FC = () => {
  const serverTime = use(fetchServerTime());

  return (
    <PageLayout>
      <h1 className='text-3xl font-bold mb-4 text-center '>
        Server-Side Rendering Example
      </h1>
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
          <li>The server fetches all necessary data for the page.</li>
          <li>
            The server generates the complete HTML for the page with the fetched data.
          </li>
          <li>The fully rendered HTML is sent to the client.</li>
          <li>The client receives the HTML and displays it immediately.</li>
          <li>
            React then "hydrates" the HTML, attaching event listeners and making the page
            interactive.
          </li>
        </ul>

        <p className='text-center text-blue-500 mb-4'>Server time: {serverTime}</p>
      </div>
    </PageLayout>
  );
};

export default SSRExample;
