export default function About() {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="text-slate-300">
        This is a minimal mobile-first PWA scaffold. It deploys to Vercel for free and you can extend it step by step.
      </p>
      <ul className="list-disc list-inside text-slate-300">
        <li>Next.js App Router</li>
        <li>Tailwind CSS</li>
        <li>Installable PWA (manifest + icons)</li>
      </ul>
    </div>
  );
}
