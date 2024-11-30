import React from 'react';

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 relative">
      <div className="absolute top-0 left-0 size-full flex flex-col -z-10">
        <div className="bg-gradient-to-r from-cyan-900 to-cyan-500 w-full h-[400px]"></div>
      </div>
      {children}
    </div>
  );
}

export default MainLayout;
