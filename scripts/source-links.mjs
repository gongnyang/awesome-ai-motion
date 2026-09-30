// Source identifiers are citations, not local paths. Public URLs stay clickable.
export const sourceUrl = value => /^https?:\/\//i.test(String(value || '')) ? String(value) : null;
export const repositoryReference = value => /^[\w.-]+\/[\w.-]+:.+/.test(String(value || ''));
export const markdownAnchor = value => String(value).toLowerCase()
  .replace(/[^\p{L}\p{N}\p{M}_\-\s]/gu, '').replace(/\s/g, '-');
export function sourceMarkdown(s) {
  const label = String(s.title || s.url || '').replace(/([\[\]])/g, '\\$1');
  const url = sourceUrl(s.url);
  return url ? `[${label}](${url})` : s.url ? `${label} (\`${s.url}\`)` : label;
}
