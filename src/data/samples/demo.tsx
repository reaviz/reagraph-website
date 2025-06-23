'use client';
import React, { useState, useCallback } from 'react';
import { GraphCanvas } from 'reagraph';
import { complexEdges, complexNodes, simpleEdges, simpleNodes, treeEdges } from './data';
import { NodePositionArgs } from 'reagraph';

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


export const ClusterSimple = () => {
  const [nodes, setNodes] = useState([
    {
      id: 'n-0',
      label: 'MD5 0',
      fill: '#075985',
      data: {
        type: 'MD5',
        segment: 'A'
      }
    },
    {
      id: 'n-1',
      label: 'Email 1',
      fill: '#166534',
      data: {
        type: 'Email'
      }
    },
    {
      id: 'n-2',
      label: 'MD5 2',
      fill: '#075985',
      data: {
        type: 'MD5',
        segment: 'A'
      }
    },
    {
      id: 'n-3',
      label: 'URL 3',
      fill: '#c2410c',
      data: {
        type: 'URL'
      }
    },
    {
      id: 'n-4',
      label: 'MD5 4',
      fill: '#075985',
      data: {
        type: 'MD5',
        segment: 'A'
      }
    },
    {
      id: 'n-5',
      label: 'MD5 5',
      fill: '#075985',
      data: {
        type: 'MD5'
      }
    },
    {
      id: 'n-6',
      label: 'IP 6',
      fill: '#3730a3',
      data: {
        type: 'IP',
        segment: 'A'
      }
    },
    {
      id: 'n-7',
      label: 'IP 7',
      fill: '#3730a3',
      data: {
        type: 'IP'
      }
    },
    {
      id: 'n-8',
      label: 'URL 8',
      fill: '#c2410c',
      data: {
        type: 'URL',
        segment: 'A'
      }
    },
    {
      id: 'n-9',
      label: 'MD5 9',
      fill: '#075985',
      data: {
        type: 'MD5'
      }
    },
    {
      id: 'n-10',
      label: 'URL 10',
      fill: '#c2410c',
      data: {
        type: 'URL',
        segment: 'A'
      }
    },
    {
      id: 'n-11',
      label: 'URL 11',
      fill: '#c2410c',
      data: {
        type: 'URL'
      }
    },
    {
      id: 'n-12',
      label: 'URL 12',
      fill: '#c2410c',
      data: {
        type: 'URL',
        segment: 'A'
      }
    },
    {
      id: 'n-13',
      label: 'Email 13',
      fill: '#166534',
      data: {
        type: 'Email'
      }
    },
    {
      id: 'n-14',
      label: 'URL 14',
      fill: '#c2410c',
      data: {
        type: 'URL',
        segment: 'A'
      }
    },
    {
      id: 'n-15',
      label: 'IP 15',
      fill: '#3730a3',
      data: {
        type: 'IP'
      }
    },
    {
      id: 'n-16',
      label: 'Email 16',
      fill: '#166534',
      data: {
        type: 'Email',
        segment: 'A'
      }
    },
    {
      id: 'n-17',
      label: 'Email 17',
      fill: '#166534',
      data: {
        type: 'Email'
      }
    },
    {
      id: 'n-18',
      label: 'URL 18',
      fill: '#c2410c',
      data: {
        type: 'URL',
        segment: 'A'
      }
    },
    {
      id: 'n-19',
      label: 'Email 19',
      fill: '#166534',
      data: {
        type: 'Email'
      }
    },
    {
      id: 'n-20',
      label: 'Email 20',
      fill: '#166534',
      data: {
        type: 'Email',
        segment: 'A'
      }
    },
    {
      id: 'n-21',
      label: 'Email 21',
      fill: '#166534',
      data: {
        type: 'Email'
      }
    },
    {
      id: 'n-22',
      label: 'Email 22',
      fill: '#166534',
      data: {
        type: 'Email',
        segment: 'A'
      }
    },
    {
      id: 'n-23',
      label: 'URL 23',
      fill: '#c2410c',
      data: {
        type: 'URL'
      }
    },
    {
      id: 'n-24',
      label: 'Email 24',
      fill: '#166534',
      data: {
        type: 'Email',
        segment: 'A'
      }
    }
  ] as any);

  const addNode = useCallback(() => {
    const next = nodes.length + 2;
    setNodes((prev: any) => [
      ...prev,
      {
        id: `${next}`,
        label: `Node ${next}`,
        fill: '#3730a3',
        data: {
          type: 'IP',
          segment: next % 2 === 0 ? 'A' : undefined
        }
      }
    ]);
  }, [nodes]);

  return (
    <>
      <GraphCanvas
        nodes={nodes}
        draggable
        edges={[
          {
            source: 'n-6',
            target: 'n-1',
            id: 'n-6-n-1',
            label: 'n-6-n-1'
          }
        ]}
        clusterAttribute="type"
        constrainDragging={false}
      />
      <div style={{ zIndex: 9, position: 'absolute', top: 15, right: 15 }}>
        <button type="button" onClick={addNode}>
          Add node
        </button>
      </div>
    </>
  );
};

export const CustomLayout = () => (
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

export const CustomLighting = () => (
  <GraphCanvas
    nodes={simpleNodes}
    edges={simpleEdges}
    layoutType="forceDirected3d"
  >
    <directionalLight position={[0, 5, -4]} intensity={1} />
  </GraphCanvas>
);

export const CentralitySizing = () => (
  <GraphCanvas sizingType="centrality" nodes={simpleNodes} edges={simpleEdges} />
);

export const PageRankSizing = () => (
  <GraphCanvas sizingType="pagerank" nodes={simpleNodes} edges={simpleEdges} />
);

export const AttributeSizing = () => (
  <GraphCanvas
    sizingType="attribute"
    sizingAttribute="priority"
    minNodeSize={2}
    maxNodeSize={25}
    nodes={simpleNodes}
    edges={simpleEdges}
  />
);

export const ForceDirected2D = () => (
  <GraphCanvas layoutType="forceDirected2d" nodes={complexNodes} edges={complexEdges} />
);

export const Circular2D = () => (
  <GraphCanvas layoutType="circular2d" nodes={complexNodes} edges={complexEdges} />
);

export const TreeTopDown2D = () => (
  <GraphCanvas layoutType="treeTd2d" nodes={simpleNodes} edges={treeEdges} />
);

export const ForceAtlas2D = () => (
  <GraphCanvas layoutType="forceatlas2" nodes={complexNodes} edges={complexEdges} />
);

export const RadialOut2D = () => (
  <GraphCanvas layoutType="radialOut2d" nodes={simpleNodes} edges={simpleEdges} />
);

export const NoOverlap2D = () => (
  <GraphCanvas layoutType="nooverlap" nodes={simpleNodes} edges={simpleEdges} />
);

export const HierarchicalLeftRight2D = () => (
  <GraphCanvas layoutType="hierarchicalLr" nodes={simpleNodes} edges={treeEdges} />
);

export const HierarchicalTopDown2D = () => (
  <GraphCanvas layoutType="hierarchicalTd" nodes={simpleNodes} edges={treeEdges} />
);


export const ForceDirected3D = () => (
  <GraphCanvas
    layoutType='forceDirected3d'
    nodes={complexNodes}
    edges={complexEdges}
  />
);

export const RadialOut3D = () => (
  <GraphCanvas
    layoutType='radialOut3d'
    nodes={simpleNodes}
    edges={simpleEdges}
  />
);

export const TreeTopDown3D = () => (
  <GraphCanvas layoutType='treeTd3d' nodes={simpleNodes} edges={simpleEdges} />
);