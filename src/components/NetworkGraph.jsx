const NODES = [
  { id: 'algo', x: 320, y: 60, label: 'Algorithms & Data Structures', short: 'Algorithms' },
  { id: 'net', x: 467, y: 145, label: 'Networking', short: 'Networking' },
  { id: 'sec', x: 467, y: 315, label: 'Digital Marketing', short: 'Marketing' },
  { id: 'cloud', x: 320, y: 400, label: 'Docker & Deployment', short: 'Deploy' },
  { id: 'js', x: 173, y: 315, label: 'JavaScript', short: 'JavaScript' },
  { id: 'py', x: 173, y: 145, label: 'Python', short: 'Python' },
]

const HUB = { x: 320, y: 230 }

export default function NetworkGraph() {
  return (
    <div className="graph">
      <svg viewBox="0 0 640 460" role="img" aria-label="Diagram showing Dudley's core domains — algorithms, networking, Digital marketing, deployment, JavaScript and Python — connected to a central full-stack hub">
        {NODES.map((n, i) => (
          <line
            key={`edge-${n.id}`}
            className="graph__edge"
            x1={HUB.x}
            y1={HUB.y}
            x2={n.x}
            y2={n.y}
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        ))}

        <circle className="graph__hub-ring" cx={HUB.x} cy={HUB.y} r="46" />
        <circle className="graph__hub" cx={HUB.x} cy={HUB.y} r="34" />
        <text x={HUB.x} y={HUB.y + 5} textAnchor="middle" className="graph__hub-text">
          DK
        </text>

        {NODES.map((n) => (
          <g key={n.id} className="graph__node-group">
            <circle className="graph__node" cx={n.x} cy={n.y} r="6" />
            <text
              x={n.x}
              y={n.y + (n.y < HUB.y ? -18 : 26)}
              textAnchor="middle"
              className="graph__label"
            >
              {n.short}
            </text>
          </g>
        ))}
      </svg>

      <style>{`
        .graph {
          width: 100%;
          max-width: 460px;
        }
        .graph svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }
        .graph__edge {
          stroke: var(--line-bright);
          stroke-width: 1.5;
          stroke-dasharray: 6 10;
          animation: graph-pulse 3.6s linear infinite;
        }
        @keyframes graph-pulse {
          to { stroke-dashoffset: -160; }
        }
        .graph__hub-ring {
          fill: none;
          stroke: var(--teal-dim);
          stroke-width: 1;
        }
        .graph__hub {
          fill: var(--bg-panel-raised);
          stroke: var(--amber);
          stroke-width: 1.5;
        }
        .graph__hub-text {
          font-family: var(--font-mono);
          font-size: 15px;
          fill: var(--amber);
          letter-spacing: 0.05em;
        }
        .graph__node {
          fill: var(--bg-deep);
          stroke: var(--teal);
          stroke-width: 2;
        }
        .graph__label {
          font-family: var(--font-mono);
          font-size: 11.5px;
          fill: var(--muted);
        }
      `}</style>
    </div>
  )
}
