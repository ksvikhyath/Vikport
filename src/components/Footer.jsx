export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 font-mono text-xs text-text-faint sm:flex-row">
        <span>© {new Date().getFullYear()} Vikhyath Reddy</span>
        <span>built with react · vite · tailwind</span>
      </div>
    </footer>
  );
}
