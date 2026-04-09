import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MarkChat({ content }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  return (
    <div className="max-w-none break-words text-sm leading-6">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          strong({ children }) {
            return (
              <strong className="font-semibold text-blue-500">
                {children}
              </strong>
            );
          },

          a({ href, children }) {
            return (
              <Link
                to={href}
                className="text-blue-500 underline hover:text-blue-600"
              >
                {children}
              </Link>
            );
          },
          h1({ children }) {
            return (
              <h1 className="text-xl font-semibold mt-4 mb-2">{children}</h1>
            );
          },

          h2({ children }) {
            return (
              <h2 className="text-lg font-semibold mt-3 mb-1">{children}</h2>
            );
          },

          h3({ children }) {
            return (
              <h3 className="text-base font-medium mt-2 mb-1">{children}</h3>
            );
          },

          ul({ children }) {
            return (
              <ul className="mb-2 pl-5 space-y-0.5 list-disc">{children}</ul>
            );
          },

          ol({ children }) {
            return (
              <ol className="mb-2 pl-5 space-y-0.5 list-decimal">{children}</ol>
            );
          },

          li({ children }) {
            return <li className="leading-6">{children}</li>;
          },

          blockquote({ children }) {
            return (
              <blockquote className="border-l-4 border-blue-500 pl-3 italic text-gray-600 my-2">
                {children}
              </blockquote>
            );
          },

          table({ children }) {
            return (
              <div className="overflow-x-auto my-4">
                <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                  {children}
                </table>
              </div>
            );
          },

          th({ children }) {
            return (
              <th className="bg-gray-800 px-4 py-2 text-left text-sm font-semibold border-b border-gray-700">
                {children}
              </th>
            );
          },

          td({ children }) {
            return (
              <td className="px-4 py-2 text-sm border-b border-gray-700">
                {children}
              </td>
            );
          },

          code({ inline, className, children, node }) {
            const match = /language-(\w+)/.exec(className || "");

            if (!inline && match) {
              const code = String(children).replace(/\n$/, "");
              const index = node?.position?.start?.line;

              return (
                <div className="relative my-5 rounded-xl overflow-hidden border border-gray-700 shadow-md">
                  <div className="flex justify-between items-center bg-gray-900 px-4 py-2 text-xs text-gray-400">
                    <span className="uppercase tracking-wide">{match[1]}</span>

                    <button
                      className="flex items-center gap-1 hover:text-white transition"
                      onClick={() => {
                        navigator.clipboard.writeText(code);
                        setCopiedIndex(index);
                        setTimeout(() => setCopiedIndex(null), 2000);
                      }}
                    >
                      {copiedIndex === index ? (
                        <>
                          <Check size={14} /> Copied
                        </>
                      ) : (
                        <>
                          <Copy size={14} /> Copy
                        </>
                      )}
                    </button>
                  </div>

                  {/* Code */}
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{
                      margin: 0,
                      padding: "16px",
                      background: "#020617",
                    }}
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              );
            }

            return (
              <code className="bg-gray-800 text-green-400 px-1.5 py-[2px] rounded text-sm">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
