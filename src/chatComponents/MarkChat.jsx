import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export default function MarkChat({ content }) {

    const [copiedIndex, setCopiedIndex] = useState(null)

    return (
        <div className="prose prose-invert max-w-none break-words text-gray-900   rounded-2xl">

            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{


                    p({ children }) {
                        return (
                            <p className="mb-4 leading-7 text-gray-900">
                                {children}
                            </p>
                        )
                    },


                    strong({ children }) {
                        return (
                            <strong className="text-yellow-400 font-semibold">
                                {children}
                            </strong>
                        )
                    },


                    h1({ children }) {
                        return (
                            <h1 className="text-3xl font-bold mt-8 mb-4 border-b border-gray-700 pb-2">
                                {children}
                            </h1>
                        )
                    },

                    h2({ children }) {
                        return (
                            <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
                                {children}
                            </h2>
                        )
                    },

                    h3({ children }) {
                        return (
                            <h3 className="text-xl font-medium mt-5 mb-2 text-gray-900">
                                {children}
                            </h3>
                        )
                    },


                    ul({ children }) {
                        return (
                            <ul className="mb-4 pl-6 space-y-1 list-disc marker:text-gray-400">
                                {children}
                            </ul>
                        )
                    },

                    ol({ children }) {
                        return (
                            <ol className="mb-4 pl-6 space-y-1 list-decimal marker:text-gray-400">
                                {children}
                            </ol>
                        )
                    },

                    li({ children }) {
                        return <li className="leading-6">{children}</li>
                    },


                    blockquote({ children }) {
                        return (
                            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4 bg-gray-900/40 py-2 rounded-r-md">
                                {children}
                            </blockquote>
                        )
                    },


                    table({ children }) {
                        return (
                            <div className="overflow-x-auto my-4">
                                <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                                    {children}
                                </table>
                            </div>
                        )
                    },

                    th({ children }) {
                        return (
                            <th className="bg-gray-800 px-4 py-2 text-left text-sm font-semibold border-b border-gray-700">
                                {children}
                            </th>
                        )
                    },

                    td({ children }) {
                        return (
                            <td className="px-4 py-2 text-sm border-b border-gray-700">
                                {children}
                            </td>
                        )
                    },


                    code({ inline, className, children, node }) {

                        const match = /language-(\w+)/.exec(className || "")

                        if (!inline && match) {
                            const code = String(children).replace(/\n$/, "")
                            const index = node?.position?.start?.line

                            return (
                                <div className="relative my-5 rounded-xl overflow-hidden border border-gray-700 shadow-md">


                                    <div className="flex justify-between items-center bg-gray-900 px-4 py-2 text-xs text-gray-400">
                                        <span className="uppercase tracking-wide">
                                            {match[1]}
                                        </span>

                                        <button
                                            className="flex items-center gap-1 hover:text-white transition"
                                            onClick={() => {
                                                navigator.clipboard.writeText(code)
                                                setCopiedIndex(index)
                                                setTimeout(() => setCopiedIndex(null), 2000)
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
                                            background: "#020617"
                                        }}
                                    >
                                        {code}
                                    </SyntaxHighlighter>

                                </div>
                            )
                        }

                        return (
                            <code className="bg-gray-800 text-green-400 px-1.5 py-[2px] rounded text-sm">
                                {children}
                            </code>
                        )
                    }
                }}
            >
                {content}
            </ReactMarkdown>

        </div>
    )
}
