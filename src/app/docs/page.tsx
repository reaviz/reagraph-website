import { importPage } from "nextra/pages";
import { useMDXComponents } from "@/mdx-components";

// The `/docs` index (content/index.mdx). The sibling required catch-all only
// matches `/docs/<segments>`, so the base path is served here explicitly.
export async function generateMetadata() {
  const { metadata } = await importPage([]);
  metadata.title = `${metadata?.title} - Reagraph`;

  return metadata;
}

const Wrapper = useMDXComponents().wrapper!;

export default async function Page(props: any) {
  const result = await importPage([]);
  const { default: MDXContent, toc, metadata, sourceCode } = result;
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} />
    </Wrapper>
  );
}
