export function parseMarkdown(markdown: string): string {
  let html = markdown

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
  html = html.replace(
    /^## (.*$)/gim,
    '<h2 class="text-2xl font-bold mt-8 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">$1</h2>',
  )
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-6">$1</h1>')

  // Bold
  html = html.replace(/\*\*(.*)\*\*/gim, '<strong class="font-bold">$1</strong>')

  // Italic
  html = html.replace(/\*(.*)\*/gim, '<em class="italic">$1</em>')

  // Code blocks
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/gim, (match, lang, code) => {
    return `<pre class="bg-slate-100 dark:bg-slate-800 p-4 rounded-md overflow-x-auto my-4"><code class="text-sm">${code.trim()}</code></pre>`
  })

  // Inline code
  html = html.replace(
    /`([^`]+)`/gim,
    '<code class="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">$1</code>',
  )

  // Links
  html = html.replace(
    /\[([^\]]+)\]$$([^)]+)$$/gim,
    '<a href="$2" class="text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300 underline">$1</a>',
  )

  // Lists
  html = html.replace(/^- (.*$)/gim, '<li class="mb-1">$1</li>')
  html = html.replace(/(<li.*<\/li>)/s, '<ul class="list-disc pl-6 my-4">$1</ul>')

  // Numbered lists
  html = html.replace(/^\d+\. (.*$)/gim, '<li class="mb-1">$1</li>')

  // Paragraphs
  html = html.replace(/\n\n/gim, '</p><p class="my-4">')
  html = `<p class="my-4">${html}</p>`

  // Line breaks
  html = html.replace(/\n/gim, "<br>")

  return html
}
