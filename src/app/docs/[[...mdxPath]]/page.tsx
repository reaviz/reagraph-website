import { generateStaticParamsFor, importPage } from 'nextra/pages';
import { useMDXComponents } from '@/mdx-components';
import { notFound } from 'next/navigation';

export const generateStaticParams = generateStaticParamsFor('mdxPath');

export async function generateMetadata(props: any) {
  const params = await props.params;

  try {
    const { metadata } = await importPage(params.mdxPath);
    metadata.title = `${metadata?.title} - Reagraph`;
    return metadata;
  } catch (error) {
    return {
      title: 'Not Found - Reagraph',
      description: 'Page not found'
    };
  }
}

const Wrapper = useMDXComponents().wrapper;

export default async function Page(props: any) {
  const params = await props.params;

  try {
    const result = await importPage(params.mdxPath);
    const { default: MDXContent, toc, metadata } = result;

    return (
      <Wrapper toc={toc} metadata={metadata}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    );
  } catch (error) {
    notFound();
  }
}
