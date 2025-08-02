// This component is kept for consistency, but Pricing page is served via SSG
export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Pricing</h1>
        <p>This page is served via Server-Side Generation (SSG) for SEO optimization.</p>
      </div>
    </div>
  );
}