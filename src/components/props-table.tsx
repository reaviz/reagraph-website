'use client';
import metadata from '../data/reagraph-docgen.json';
import { useState } from 'react';

/**
 * Collapsible text component
 * @param text - Text to display
 * @param maxLength - Maximum length of text to display
 * @returns Collapsible text component
 */
const CollapsibleText = ({
  text,
  maxLength = 40,
}: {
  text: string;
  maxLength?: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  return (
    <span>
      {isExpanded ? text : `${text.slice(0, maxLength)}...`}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='ml-2 text-blue-500 hover:text-blue-700 text-sm underline'
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </span>
  );
};

/**
 * Props table component
 * @param name - Name of the component to display props for
 * @returns Props table component
 */
export const PropsTable = ({ name }: { name: string }) => {
  const data: any = metadata?.find((m) => m.displayName === name);

  if (!data) {
    return <div>Component "{name}" not found in documentation.</div>;
  }

  const keys = Object.keys(data.props ?? {});

  return (
    <div className='relative flex flex-col rounded-xs bg-panel border border-panel-accent text-text-primary mt-5 p-3 light:bg-gray-100 light:border-gray-300 light:text-gray-700'>
      <table className='w-full text-base'>
        <thead className='border-b-[1px] border-[rgba(241,245,249,0.2)]'>
          <tr className='opacity-60'>
            <th className='w-1/4 py-[5px] text-left'>Prop</th>
            <th className='w-2/4 py-[5px] text-left'>Description</th>
            <th className='w-1/4 py-[5px] text-left'>Default</th>
          </tr>
        </thead>
        <tbody>
          {keys.map((prop) => (
            <tr
              key={prop}
              className='border-[rgba(241,245,249,0.1)] [&:not(:last-child)]:border-b-[1px]'
            >
              <td className='p-[5px]'>
                <strong>
                  <code>{prop}</code>
                </strong>
                {data.props[prop].required && <i> *</i>}
              </td>
              <td className='p-[5px]'>
                {data.props[prop].description}
                {data.props[prop].type && (
                  <>
                    <br />
                    <code className='light:border-black/10 border-opacity-[0.04] bg-opacity-[0.03] bg-gray-200 break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10 rb-code'>
                      {data.props[prop].type.name}
                    </code>
                  </>
                )}
              </td>
              <td className='p-[5px]'>
                {data.props[prop].defaultValue && (
                  <code className='light:border-black/10 border-opacity-[0.04] bg-opacity-[0.03] bg-gray-200 break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10'>
                    <CollapsibleText
                      text={data.props[prop].defaultValue.value}
                    />
                  </code>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
