/**
 * Splits on **bold** markers only — the dictionary content mirrors the
 * emphasis spans from the source HTML/brand book, kept as plain markdown-lite
 * so copy stays in the dictionaries instead of JSX.
 */
export function RichText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className={className ?? "text-text-secondary font-semibold"}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
