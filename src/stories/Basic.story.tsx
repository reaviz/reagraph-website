'use client';
import React from 'react';
// import dynamic from 'next/dynamic';

// const GraphCanvas = dynamic(
//   () => import('reagraph').then((mod) => mod.GraphCanvas),
//   { ssr: false }
// );

export default {
  title: 'Demos/Basic',
  // component: GraphCanvas,
};

export const TwoWayLink = () => (
  <div>test</div>
)

// export const TwoWayLink = () => (
//   <GraphCanvas
//     nodes={[
//       {
//         id: '1',
//         label: '1',
//       },
//       {
//         id: '2',
//         label: '2',
//       },
//     ]}
//     edges={[
//       {
//         source: '1',
//         target: '2',
//         id: '1-2',
//         label: '1-2',
//       },
//       {
//         source: '2',
//         target: '1',
//         id: '2-1',
//         label: '2-1',
//       },
//     ]}
//   />
// );

// export const SpecialCharacters = () => (
//   <GraphCanvas
//     labelType='all'
//     labelFontUrl='https://ey2pz3.csb.app/NotoSansSC-Regular.ttf'
//     nodes={[
//       {
//         id: '1',
//         label: '牡',
//       },
//       {
//         id: '2',
//         label: '牡',
//       },
//     ]}
//     edges={[
//       {
//         source: '1',
//         target: '2',
//         id: '1-2',
//         label: '牡 - 牡',
//       },
//       {
//         source: '2',
//         target: '1',
//         id: '2-1',
//         label: '牡 - 牡',
//       },
//     ]}
//   />
// );
