import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const REAGRAPH_DIR = path.join(__dirname, '../reagraph-temp');
const OUTPUT_DIR = path.join(__dirname, '../public');
const DOCGEN_PATH = path.join(REAGRAPH_DIR, 'dist/docs/docgen.json');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Check if reagraph directory exists
if (!fs.existsSync(REAGRAPH_DIR)) {
  console.error('❌ Reagraph directory not found at:', REAGRAPH_DIR);
  console.error('Make sure to clone reagraph repository first or run this through GitHub Actions');
  process.exit(1);
}

// Check if docgen.json exists
if (!fs.existsSync(DOCGEN_PATH)) {
  console.error('❌ Documentation not found at:', DOCGEN_PATH);
  console.error('Run "npm run build:docs" in reagraph directory first');
  process.exit(1);
}

console.log('📚 Reading reagraph documentation...');

// Read the generated documentation
const docgen = JSON.parse(fs.readFileSync(DOCGEN_PATH, 'utf8'));

// Read package.json from reagraph
const packageJson = JSON.parse(fs.readFileSync(path.join(REAGRAPH_DIR, 'package.json'), 'utf8'));

// Helper to format prop types
function formatPropType(type) {
  if (!type) return 'any';
  if (type.raw) return type.raw;
  if (type.name === 'union' && type.value) {
    return type.value.map(v => v.value || v.name).join(' | ');
  }
  if (type.name === 'enum' && type.value) {
    return type.value.map(v => v.value).join(' | ');
  }
  if (type.name === 'func') {
    return 'Function';
  }
  if (type.name === 'shape' || type.name === 'object') {
    return 'Object';
  }
  if (type.name === 'arrayOf' && type.value) {
    return `${formatPropType(type.value)}[]`;
  }
  return type.name || 'any';
}

// Generate props documentation
function generatePropsDoc(component) {
  if (!component.props || Object.keys(component.props).length === 0) {
    return '';
  }

  let propsDoc = '\n**Props:**\n';
  Object.entries(component.props).forEach(([propName, prop]) => {
    const required = prop.required ? ' (required)' : '';
    const defaultValue = prop.defaultValue ? ` = ${prop.defaultValue.value}` : '';
    propsDoc += `- \`${propName}\`${required}: ${prop.description || 'No description'}`;
    propsDoc += ` - Type: \`${formatPropType(prop.type)}\`${defaultValue}\n`;
  });
  return propsDoc;
}

// Generate detailed props documentation for llms-full.txt
function generateDetailedPropsDoc(component) {
  if (!component.props || Object.keys(component.props).length === 0) {
    return '\n*No props*\n';
  }

  let propsDoc = '\n';
  const sortedProps = Object.entries(component.props).sort(([a], [b]) => {
    const aReq = component.props[a].required;
    const bReq = component.props[b].required;
    if (aReq && !bReq) return -1;
    if (!aReq && bReq) return 1;
    return a.localeCompare(b);
  });

  sortedProps.forEach(([propName, prop]) => {
    const required = prop.required ? ' *(required)*' : '';
    const defaultValue = prop.defaultValue ? ` (default: \`${prop.defaultValue.value}\`)` : '';
    propsDoc += `#### \`${propName}\`${required}\n\n`;
    propsDoc += `Type: \`${formatPropType(prop.type)}\`${defaultValue}\n\n`;
    if (prop.description) {
      propsDoc += `${prop.description}\n\n`;
    }
  });
  return propsDoc;
}

console.log('✍️  Generating llms.txt...');

// Generate llms.txt (concise version)
let llmsContent = `# Reagraph

> ${packageJson.description}

## Documentation
- [Getting Started](https://reagraph.dev/docs/getting-started): Installation and basic usage guide
- [API Reference](https://reagraph.dev/docs/api): Complete API documentation
- [Advanced Usage](https://reagraph.dev/docs/advanced): Advanced patterns and customization

## Examples
- [Basic Examples](https://reagraph.dev/docs/examples): Simple graph visualizations
- [Interactive Demos](https://reagraph.dev/): Live interactive demos on the homepage

## Community
- [GitHub Repository](${packageJson.repository.url.replace('git+', '').replace('.git', '')}): Source code and issue tracking
- [NPM Package](https://www.npmjs.com/package/${packageJson.name}): Package distribution
- [Discord](https://discord.gg/tt8wGExq35): Community support and discussions

## Optional
- [Changelog](https://github.com/reaviz/reagraph/releases): Release notes and version history
- [Contributing](https://github.com/reaviz/reagraph/blob/master/CONTRIBUTING.md): Guidelines for contributors
`;

// Write llms.txt
fs.writeFileSync(path.join(OUTPUT_DIR, 'llms.txt'), llmsContent);
console.log('✅ Generated llms.txt');

// Now generate llms-full.txt with complete documentation
console.log('✍️  Generating llms-full.txt...');

// Use the same generation logic as before for llms-full.txt
let fullContent = `# Reagraph

> ${packageJson.description}

## Quick Start

To get started with Reagraph, you'll need to install the package and set up a basic graph visualization.

### Installation

\`\`\`bash
npm install reagraph
# or
yarn add reagraph
# or  
pnpm add reagraph
\`\`\`

### Basic Usage

\`\`\`tsx
import { GraphCanvas } from 'reagraph';

const MyGraph = () => {
  const nodes = [
    { id: '1', label: 'Node 1' },
    { id: '2', label: 'Node 2' }
  ];
  
  const edges = [
    { id: '1-2', source: '1', target: '2', label: 'Edge 1-2' }
  ];

  return (
    <GraphCanvas
      nodes={nodes}
      edges={edges}
      layoutType="forceDirected2d"
    />
  );
};
\`\`\`

## API Reference

### Core Components

`;

// Add all components with detailed documentation
const componentOrder = [
  'GraphCanvas',
  'GraphScene',
  'CameraControls',
  'Node',
  'Edge',
  'Edges',
  'Label',
  'Cluster',
  'Ring',
  'Arrow',
  'Line',
  'Icon',
  'Sphere',
  'SphereWithIcon',
  'SphereWithSvg',
  'Svg',
  'RadialMenu',
  'RadialSlice',
  'Lasso'
];

componentOrder.forEach(componentName => {
  const component = docgen.find(c => c.displayName === componentName);
  if (component) {
    fullContent += `#### ${component.displayName}\n\n`;
    const desc = component.description || `Component for ${component.displayName}`;
    fullContent += `${desc}\n\n`;
    
    fullContent += '**Props:**\n';
    fullContent += generateDetailedPropsDoc(component);
    fullContent += '\n';
  }
});

// Add the rest of the comprehensive documentation
fullContent += `### Data Types

#### GraphNode

\`\`\`typescript
interface GraphNode {
  // Required
  id: string;                    // Unique identifier for the node
  
  // Display
  label?: string;                // Primary label text
  subLabel?: string;             // Secondary label text
  labelVisible?: boolean;        // Force label visibility
  
  // Styling
  size?: number;                 // Node size (overrides sizing strategy)
  fill?: string;                 // Fill color (CSS color string)
  icon?: string;                 // URL to icon image
  
  // Hierarchy
  parents?: string[];            // Parent node IDs for hierarchical layouts
  cluster?: string;              // Cluster group ID
  
  // Custom data
  data?: any;                    // Custom data attached to node
}
\`\`\`

#### GraphEdge

\`\`\`typescript
interface GraphEdge {
  // Required
  id: string;                    // Unique identifier for the edge
  source: string;                // Source node ID
  target: string;                // Target node ID
  
  // Display
  label?: string;                // Primary label text
  subLabel?: string;             // Secondary label text
  labelVisible?: boolean;        // Force label visibility
  subLabelPlacement?: 'below' | 'above';  // SubLabel position
  
  // Styling
  size?: number;                 // Edge width
  fill?: string;                 // Edge color (CSS color string)
  
  // Custom data
  data?: any;                    // Custom data attached to edge
}
\`\`\`

#### Layout Types

\`\`\`typescript
type LayoutTypes =
  | 'forceDirected2d'    // 2D force-directed (D3-force)
  | 'forceDirected3d'    // 3D force-directed (D3-force-3d)
  | 'circular2d'         // 2D circular layout
  | 'circular3d'         // 3D circular layout
  | 'treeTd2d'          // Tree top-down 2D (deprecated, use hierarchicalTd)
  | 'treeTd3d'          // Tree top-down 3D (deprecated)
  | 'treeLr2d'          // Tree left-right 2D (deprecated, use hierarchicalLr)
  | 'treeLr3d'          // Tree left-right 3D (deprecated)
  | 'radialOut2d'       // Radial outward 2D
  | 'radialOut3d'       // Radial outward 3D
  | 'hierarchicalTd'    // Hierarchical top-down
  | 'hierarchicalLr'    // Hierarchical left-right
  | 'nooverlap'         // No overlap (Graphology)
  | 'forceatlas2'       // ForceAtlas2 algorithm
  | 'custom';           // Custom layout function
\`\`\`

#### Sizing Types

\`\`\`typescript
type SizingType = 'none' | 'attribute' | 'centrality' | 'pagerank';

interface SizingStrategyInputs {
  graph: Graph;
  defaultSize?: number;  // Default: 7
  minSize?: number;      // Default: 5
  maxSize?: number;      // Default: 15
  attribute?: string;    // For 'attribute' type
}
\`\`\`

#### Camera Modes

\`\`\`typescript
type CameraMode = 'pan' | 'rotate' | 'orbit';
\`\`\`

#### Theme Interface

\`\`\`typescript
interface Theme {
  canvas?: {
    background?: ColorRepresentation;
    fog?: ColorRepresentation | null;
  };
  node: {
    fill: ColorRepresentation;
    activeFill: ColorRepresentation;
    opacity: number;
    selectedOpacity: number;
    inactiveOpacity: number;
    label: {
      color: ColorRepresentation;
      stroke?: ColorRepresentation;
      activeColor: ColorRepresentation;
    };
    subLabel?: {
      color: ColorRepresentation;
      stroke?: ColorRepresentation;
      activeColor: ColorRepresentation;
    };
  };
  ring: {
    fill: ColorRepresentation;
    activeFill: ColorRepresentation;
  };
  edge: {
    fill: ColorRepresentation;
    activeFill: ColorRepresentation;
    opacity: number;
    selectedOpacity: number;
    inactiveOpacity: number;
    label: {
      color: ColorRepresentation;
      stroke?: ColorRepresentation;
      activeColor: ColorRepresentation;
      fontSize?: number;
    };
    subLabel?: {
      color: ColorRepresentation;
      stroke?: ColorRepresentation;
      activeColor: ColorRepresentation;
      fontSize?: number;
    };
  };
  arrow: {
    fill: ColorRepresentation;
    activeFill: ColorRepresentation;
  };
  lasso: {
    background: string;
    border: string;
  };
  cluster?: {
    stroke?: ColorRepresentation;
    fill?: ColorRepresentation;
    opacity?: number;
    selectedOpacity?: number;
    inactiveOpacity?: number;
    label?: {
      stroke?: ColorRepresentation;
      color: ColorRepresentation;
      fontSize?: number;
      offset?: [number, number, number];
    };
  };
}
\`\`\`

### Event System

#### Node Events

\`\`\`typescript
<GraphCanvas
  // Click events
  onNodeClick={(node: GraphNode, event: MouseEvent) => {
    console.log('Clicked node:', node.id);
  }}
  
  onNodeDoubleClick={(node: GraphNode, event: MouseEvent) => {
    console.log('Double clicked node:', node.id);
  }}
  
  onNodeRightClick={(node: GraphNode, event: MouseEvent) => {
    console.log('Right clicked node:', node.id);
  }}
  
  // Hover events
  onNodePointerOver={(node: GraphNode, event: PointerEvent) => {
    console.log('Hovering node:', node.id);
  }}
  
  onNodePointerOut={(node: GraphNode, event: PointerEvent) => {
    console.log('Left node:', node.id);
  }}
  
  // Drag events
  onNodeDragStart={(node: GraphNode, event: PointerEvent) => {
    console.log('Started dragging:', node.id);
  }}
  
  onNodeDrag={(node: GraphNode, offset: Vector3, event: PointerEvent) => {
    console.log('Dragging:', node.id, offset);
  }}
  
  onNodeDragEnd={(node: GraphNode, event: PointerEvent) => {
    console.log('Stopped dragging:', node.id);
  }}
/>
\`\`\`

### Advanced Usage

#### Custom Node Renderers

\`\`\`typescript
import { NodeRendererProps } from 'reagraph';

const CustomNode: FC<NodeRendererProps> = ({
  node,
  color,
  size,
  active,
  selected,
  opacity,
  animated
}) => {
  return (
    <group position={[node.position.x, node.position.y, node.position.z]}>
      <mesh>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial
          color={color}
          opacity={opacity}
          transparent
        />
      </mesh>
    </group>
  );
};

<GraphCanvas
  renderNode={CustomNode}
  nodes={nodes}
  edges={edges}
/>
\`\`\`

#### State Management Integration

**With Redux:**

\`\`\`typescript
import { useSelector, useDispatch } from 'react-redux';

const GraphVisualization = () => {
  const dispatch = useDispatch();
  const { nodes, edges, selections } = useSelector(state => state.graph);
  
  return (
    <GraphCanvas
      nodes={nodes}
      edges={edges}
      selections={selections}
      onNodeClick={(node) => {
        dispatch({ type: 'SELECT_NODE', payload: node.id });
      }}
    />
  );
};
\`\`\`

### Best Practices

**Performance Optimization for large graphs:**

1. Use appropriate layout algorithms (forceAtlas2 for large graphs)
2. Implement node/edge filtering
3. Use clustering to group related nodes
4. Limit label visibility with labelType
5. Disable animations for very large datasets
6. Use sizingType='none' for uniform node sizes

### Troubleshooting

**Common Issues:**

**Issue:** Graph not rendering
**Solution:** Ensure the parent container has a defined height

**Issue:** Performance issues with large graphs
**Solution:** Use forceAtlas2 layout and implement node filtering

**Issue:** Labels not visible
**Solution:** Check labelType prop and theme configuration

## Resources

- [GitHub Repository](${packageJson.repository.url.replace('git+', '').replace('.git', '')}): Source code and issues
- [Documentation](https://reagraph.dev): Official documentation
- [NPM Package](https://www.npmjs.com/package/${packageJson.name}): Package distribution
- [Discord](https://discord.gg/tt8wGExq35): Community support
`;

// Write llms-full.txt
fs.writeFileSync(path.join(OUTPUT_DIR, 'llms-full.txt'), fullContent);
console.log('✅ Generated llms-full.txt');

// Output statistics
console.log('\n📊 Generation Statistics:');
console.log(`- llms.txt: ${(llmsContent.length / 1024).toFixed(2)} KB (${llmsContent.split('\n').length} lines)`);
console.log(`- llms-full.txt: ${(fullContent.length / 1024).toFixed(2)} KB (${fullContent.split('\n').length} lines)`);
console.log(`- Components documented: ${docgen.length}`);
console.log(`- Output directory: ${OUTPUT_DIR}`);

console.log('\n✨ LLM documentation generation complete!');