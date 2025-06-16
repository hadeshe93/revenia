import markdownit from 'markdown-it';
import hljs from 'highlight.js/lib/core'; 
import typescript from 'highlight.js/lib/languages/typescript';
import bash from 'highlight.js/lib/languages/bash';
import 'highlight.js/styles/github.css';
import loadOrderedListPlugin from './plugin-ordered-list';
import loadInternalLinkPlugin from './plugin-internal-link';
import loadExternalLinkPlugin from './plugin-external-link';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('bash', bash);

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  },
});

loadOrderedListPlugin(md);
loadInternalLinkPlugin(md);
loadExternalLinkPlugin(md);

export function renderMarkdown(rawMarkdown: string, env?: any) {
  return md.render(rawMarkdown, env);
}