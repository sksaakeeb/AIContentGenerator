import Templates from '@/app/(data)/Templates';
import PromptForm from './PromptForm';

export default async function ToolPage({ params }) {
  const { slug } = params;
  const tool = Templates.find((t) => t.slug === slug);

  if (!tool) return <div className="p-6 text-red-600">404: Tool Not Found</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{tool.name}</h1>
      <p className="mb-6 text-gray-700">{tool.desc}</p>

      <PromptForm prompt={tool.aiPrompt} />
    </div>
  );
}
