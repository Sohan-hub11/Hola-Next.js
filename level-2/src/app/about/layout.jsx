

export default function RootLayout({ children }) {
  return (
    
      <main>
        <h1>About</h1>
        <div className="p-4 outline outline-red-700">
          {children}
        </div>
      </main>
    
  );
}
