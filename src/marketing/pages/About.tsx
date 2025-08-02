// This component is kept for consistency, but About page is served via SSG
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        <p>This page is served via Server-Side Generation (SSG) for SEO optimization.</p>
      </div>
    </div>
  );
}