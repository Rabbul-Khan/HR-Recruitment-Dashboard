import './index.css';
function App() {
  return (
    <div className="grid grid-cols-[2fr_9fr_3fr] min-h-screen font-barlow ">
      <aside className="bg-red-300 ">Aside</aside>
      <main className="bg-green-300">Main</main>
      <aside className=" bg-sky-300">Aside</aside>
    </div>
  );
}

export default App;
