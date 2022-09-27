import React from "react";

export default function IndexLayout({ children }) {
  return (
    <>
      <header className="navbar bg-light display-6 px-5">
        <div className="container-fluid">
          <p>This is a header. It appears on every page.</p>
        </div>
      </header>
      {children}
    </>
  );
}
