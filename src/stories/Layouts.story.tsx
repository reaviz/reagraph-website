'use client';
import React from 'react';
import { GraphCanvas, NodePositionArgs, recommendLayout } from 'reagraph';
import { complexEdges, complexNodes, simpleEdges, simpleNodes } from './demo';

export default {
  title: 'Demos/Layouts',
  component: GraphCanvas
};

export const Recommender = () => {
  const layout = recommendLayout(complexNodes, complexEdges);

  return (
    <GraphCanvas
      layoutType={layout}
      nodes={complexNodes}
      edges={complexEdges}
    />
  );
};

export const Overrides = () => (
  <GraphCanvas
    layoutType="forceDirected2d"
    layoutOverrides={{
      nodeStrength: -50,
      linkDistance: 500
    }}
    nodes={complexNodes}
    edges={complexEdges}
  />
);

export const Custom = () => (
  <GraphCanvas
    layoutType="custom"
    layoutOverrides={{
      getNodePosition: (id: string, { nodes }: NodePositionArgs) => {
        const idx = nodes.findIndex(n => n.id === id);
        const node = nodes[idx];
        return {
          x: 25 * idx,
          y: idx % 2 === 0 ? 0 : 50,
          z: 1
        };
      }
    } as any}
    nodes={simpleNodes}
    edges={simpleEdges}
  />
);
