'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const GraphCanvas = dynamic(
  () => import('reagraph').then((mod) => mod.GraphCanvas),
  { ssr: false }
);
import { complexEdges, complexNodes, simpleEdges, simpleNodes } from './demo';

export default {
  title: 'Demos/Layouts/3D',
  component: GraphCanvas,
};

export const ForceDirected = () => (
  <GraphCanvas
    layoutType='forceDirected3d'
    nodes={complexNodes}
    edges={complexEdges}
  />
);

export const RadialOut = () => (
  <GraphCanvas
    layoutType='radialOut3d'
    nodes={simpleNodes}
    edges={simpleEdges}
  />
);

export const TreeLeftRight = () => (
  <GraphCanvas layoutType='treeLr3d' nodes={simpleNodes} edges={simpleEdges} />
);

export const TreeTopDown = () => (
  <GraphCanvas layoutType='treeTd3d' nodes={simpleNodes} edges={simpleEdges} />
);
