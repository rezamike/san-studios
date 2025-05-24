import { cn } from "../lib/utils";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      <aside className="w-64 bg-zinc-950 border-r border-zinc-800 p-6">
        <nav className="flex flex-col gap-4">
          <a href="/" className="text-lg font-semibold hover:text-red-400 transition">Home</a>
          <a href="/about" className="text-lg font-semibold hover:text-red-400 transition">About</a>
          <a href="/work" className="text-lg font-semibold hover:text-red-400 transition">Work</a>
          <a href="/submit" className="text-lg font-semibold hover:text-red-400 transition">Submit</a>
          <a href="/contact" className="text-lg font-semibold hover:text-red-400 transition">Contact</a>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-10">
        {children}
      </main>
    </div>
  );
}