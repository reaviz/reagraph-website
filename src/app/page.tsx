import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nextra 4',
  description: 'Nextra 4 is here.',
};
export default function Home() {
  return (
    <div className='w-full flex flex-1 items-center justify-center'>
      <h1 className='text-4xl font-bold'>Home page</h1>
    </div>
  );
}
