// Signature element: a small node graph, evoking the graph databases and
// distributed/orchestration systems (Neo4j, MCP tool graphs, multi-node
// pipelines) that run through the actual project work on this page.

const NODES = [
  { id: 0, x: 60, y: 90 },
  { id: 1, x: 180, y: 40 },
  { id: 2, x: 300, y: 100 },
  { id: 3, x: 150, y: 170 },
  { id: 4, x: 340, y: 200 },
  { id: 5, x: 420, y: 70 },
  { id: 6, x: 480, y: 160 },
  { id: 7, x: 250, y: 230 },
];

const EDGES = [
  [0, 1], [1, 2], [1, 3], [2, 4], [2, 5], [5, 6], [4, 6], [3, 7], [4, 7],
];

export default function NodeGraph({ className = "" }) {
  return (
    <svg
      viewBox="0 0 520 260"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {EDGES.map(([a, b], i) => {
        const n1 = NODES[a];
        const n2 = NODES[b];
        return (
          <line
            key={i}
            x1={n1.x}
            y1={n1.y}
            x2={n2.x}
            y2={n2.y}
            stroke="var(--color-line)"
            strokeWidth="1"
            pathLength="1"
            className="edge-draw"
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        );
      })}
      {NODES.map((n, i) => (
        <circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={3}
          fill={i % 3 === 0 ? "var(--color-amber)" : "var(--color-teal)"}
          className="node-pulse"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
    </svg>
  );
}
