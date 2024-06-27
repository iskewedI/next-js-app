import Link from 'next/link';
import React from 'react';

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center py-6'>
      <main
        className='w-full max-w-3xl p-6 rounded-lg shadow-md'
        style={{ background: '#5e5e5e78' }}
      >
        {children}
        <div className='mt-6 text-center'>
          <Link
            href='/'
            className='inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300'
          >
            Go back
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PageLayout;
