

export default function RootLayout({ children }) {
  return (
    
      <body className="min-h-full flex flex-col">
       <h1>About</h1>
        <div className="p-4 outline outline-red-700">
          {children}
        </div>
      </body>
    
  );
}
