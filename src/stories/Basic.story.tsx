'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { GraphEdge, GraphNode } from 'reagraph';

const GraphCanvas = dynamic(
  () => import('reagraph').then((mod) => mod.GraphCanvas),
  { ssr: false }
);

export const simpleNodes: GraphNode[] = Array.from({ length: 5 }, (_, i) => ({
  id: `n-${i}`,
  label: `Node ${i}`,
  data: {
    priority: Math.floor(Math.random() * 10),
  },
}));

export const simpleEdges: GraphEdge[] = [
  {
    id: '0->1',
    source: 'n-0',
    target: 'n-1',
    label: 'Edge 0-1',
  },
  {
    id: '0->2',
    source: 'n-0',
    target: 'n-2',
    label: 'Edge 0-2',
  },
  {
    id: '0->3',
    source: 'n-0',
    target: 'n-3',
    label: 'Edge 0-3',
  },
  {
    id: '0->4',
    source: 'n-0',
    target: 'n-4',
    label: 'Edge 0-4',
  },
];

export default {
  title: 'Demos/Basic',
  // component: GraphCanvas,
};

export const Simple = () => (
  <GraphCanvas nodes={simpleNodes} edges={simpleEdges} />
);

export const CustomLighting = () => (
  <GraphCanvas
    nodes={simpleNodes}
    edges={simpleEdges}
    layoutType="forceDirected3d"
  >
    <directionalLight position={[0, 5, -4]} intensity={1} />
  </GraphCanvas>
);

export const TwoWayLink = () => (
  <GraphCanvas
    nodes={[
      {
        id: '1',
        label: '1',
      },
      {
        id: '2',
        label: '2',
      },
    ]}
    edges={[
      {
        source: '1',
        target: '2',
        id: '1-2',
        label: '1-2',
      },
      {
        source: '2',
        target: '1',
        id: '2-1',
        label: '2-1',
      },
    ]}
  />
);

export const SpecialCharacters = () => (
  <GraphCanvas
    labelType='all'
    labelFontUrl='https://ey2pz3.csb.app/NotoSansSC-Regular.ttf'
    nodes={[
      {
        id: '1',
        label: '牡',
      },
      {
        id: '2',
        label: '牡',
      },
    ]}
    edges={[
      {
        source: '1',
        target: '2',
        id: '1-2',
        label: '牡 - 牡',
      },
      {
        source: '2',
        target: '1',
        id: '2-1',
        label: '牡 - 牡',
      },
    ]}
  />
);
