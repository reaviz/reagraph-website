import { importPage, generateStaticParamsFor } from "nextra/pages";
import { useMDXComponents } from "@/mdx-components";

const getMdxPaths = generateStaticParamsFor("mdxPath");

// This required catch-all handles `/docs/<segments>`. The `/docs` index itself
// is served by `../page.tsx`, so drop the empty-path entry — a required
// catch-all can't match zero segments, and emitting it would fail the build.
export const generateStaticParams = async () => {
  const params = await getMdxPaths();
  return params.filter(
    (p: any) => Array.isArray(p.mdxPath) && p.mdxPath.filter(Boolean).length > 0
  );
};

export async function generateMetadata(props: any) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  metadata.title = `${metadata?.title} - Reagraph`;

  return metadata;
}

const Wrapper = useMDXComponents().wrapper!;

export default async function Page(props: any) {
  const params = await props.params;
  const result = await importPage(params.mdxPath);
  const { default: MDXContent, toc, metadata, sourceCode } = result;
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
