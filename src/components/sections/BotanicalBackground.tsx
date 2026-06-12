import React from 'react';

const Leaf = () => (
  <g>
    <path d="M20 2 C35 4 40 16 36 26 C32 36 20 42 20 42 C20 42 8 36 4 26 C0 16 5 4 20 2Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="20" y1="4" x2="20" y2="40" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M20 14 Q14 10 12 6" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
    <path d="M20 14 Q26 10 28 6" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
    <path d="M20 22 Q12 18 10 13" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
    <path d="M20 22 Q28 18 30 13" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
  </g>
);

const Flower = () => (
  <g>
    <ellipse cx="20" cy="8" rx="5" ry="9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="20" cy="8" rx="5" ry="9" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 20 20)"/>
    <ellipse cx="20" cy="8" rx="5" ry="9" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 20 20)"/>
    <ellipse cx="20" cy="8" rx="5" ry="9" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(180 20 20)"/>
    <ellipse cx="20" cy="8" rx="5" ry="9" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(240 20 20)"/>
    <ellipse cx="20" cy="8" rx="5" ry="9" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(300 20 20)"/>
    <circle cx="20" cy="20" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
  </g>
);

const DNA = () => (
  <g>
    <path d="M8 2 Q16 8 8 14 Q0 20 8 26 Q16 32 8 38 Q0 44 8 50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M22 2 Q14 8 22 14 Q30 20 22 26 Q14 32 22 38 Q30 44 22 50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="8" y1="2" x2="22" y2="2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <line x1="8" y1="14" x2="22" y2="14" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <line x1="8" y1="26" x2="22" y2="26" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <line x1="8" y1="38" x2="22" y2="38" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <line x1="8" y1="50" x2="22" y2="50" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </g>
);

const Flask = () => (
  <g>
    <path d="M14 4 L14 18 L4 34 L4 38 Q4 40 6 40 L34 40 Q36 40 36 38 L36 34 L26 18 L26 4Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="14" y1="4" x2="26" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 32 Q16 28 25 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <circle cx="12" cy="36" r="2" fill="none" stroke="currentColor" strokeWidth="1"/>
    <circle cx="22" cy="34" r="1.5" fill="none" stroke="currentColor" strokeWidth="1"/>
  </g>
);

const Seedling = () => (
  <g>
    <line x1="20" y1="40" x2="20" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 28 C14 22 6 18 8 10 C10 14 14 20 20 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 22 C26 16 34 12 32 4 C30 8 26 14 20 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 34 C15 30 10 28 10 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </g>
);

const Microscope = () => (
  <g>
    <line x1="12" y1="38" x2="28" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="20" y1="38" x2="20" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 22 L28 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="25" y="8" width="8" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="16" y1="30" x2="24" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="18" y1="30" x2="18" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="29" cy="18" r="3" fill="none" stroke="currentColor" strokeWidth="1"/>
  </g>
);

const Wheat = () => (
  <g>
    <line x1="20" y1="44" x2="20" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="20" cy="10" rx="6" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(-30 20 10)"/>
    <ellipse cx="20" cy="10" rx="6" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(30 20 10)"/>
    <ellipse cx="20" cy="18" rx="6" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(-25 20 18)"/>
    <ellipse cx="20" cy="18" rx="6" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(25 20 18)"/>
    <ellipse cx="20" cy="26" rx="6" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(-20 20 26)"/>
    <ellipse cx="20" cy="26" rx="6" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(20 20 26)"/>
    <line x1="20" y1="4" x2="20" y2="1" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </g>
);

const PetriDish = () => (
  <g>
    <ellipse cx="20" cy="22" rx="18" ry="6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="20" cy="18" rx="18" ry="6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="20" cy="18" rx="12" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/>
    <circle cx="14" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="0.8"/>
    <circle cx="22" cy="16" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.8"/>
    <circle cx="24" cy="21" r="1.2" fill="none" stroke="currentColor" strokeWidth="0.8"/>
  </g>
);

const TestTube = () => (
  <g>
    <path d="M14 4 L14 30 Q14 38 20 38 Q26 38 26 30 L26 4Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="6" x2="28" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 28 Q18 24 26 28" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </g>
);

const CellIcon = () => (
  <g>
    <ellipse cx="20" cy="20" rx="18" ry="15" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="20" cy="20" r="2" fill="none" stroke="currentColor" strokeWidth="1"/>
    <ellipse cx="10" cy="15" rx="3" ry="2" fill="none" stroke="currentColor" strokeWidth="0.8"/>
    <ellipse cx="28" cy="24" rx="3" ry="2" fill="none" stroke="currentColor" strokeWidth="0.8"/>
    <ellipse cx="14" cy="28" rx="2.5" ry="1.5" fill="none" stroke="currentColor" strokeWidth="0.8"/>
  </g>
);

type IconType = 'leaf' | 'flower' | 'dna' | 'flask' | 'seedling' | 'microscope' | 'wheat' | 'petri' | 'testtube' | 'cell';

const iconMap: Record<IconType, React.ReactElement> = {
  leaf: <Leaf />,
  flower: <Flower />,
  dna: <DNA />,
  flask: <Flask />,
  seedling: <Seedling />,
  microscope: <Microscope />,
  wheat: <Wheat />,
  petri: <PetriDish />,
  testtube: <TestTube />,
  cell: <CellIcon />,
};

interface IconPlacement {
  type: IconType;
  x: number;
  y: number;
  rot: number;
  size: number;
  vb: string;
}

const placements: IconPlacement[] = [
  { type: 'leaf',        x: 3,   y: 280,  rot: -20, size: 56, vb: '0 0 40 44' },
  { type: 'flower',      x: 91,  y: 120,  rot:  15, size: 52, vb: '0 0 40 40' },
  { type: 'dna',         x: 5,   y: 820,  rot:   5, size: 44, vb: '0 0 30 52' },
  { type: 'flask',       x: 92,  y: 650,  rot: -12, size: 50, vb: '0 0 40 44' },
  { type: 'seedling',    x: 4,   y: 1450, rot:  10, size: 54, vb: '0 0 40 44' },
  { type: 'microscope',  x: 90,  y: 1300, rot:  -8, size: 50, vb: '0 0 40 42' },
  { type: 'wheat',       x: 7,   y: 2000, rot:   8, size: 56, vb: '0 0 40 46' },
  { type: 'petri',       x: 89,  y: 1900, rot:   0, size: 54, vb: '0 0 40 30' },
  { type: 'testtube',    x: 5,   y: 2600, rot: -15, size: 46, vb: '0 0 40 42' },
  { type: 'cell',        x: 91,  y: 2500, rot:  20, size: 54, vb: '0 0 40 36' },
  { type: 'leaf',        x: 88,  y: 3100, rot:  25, size: 50, vb: '0 0 40 44' },
  { type: 'dna',         x: 4,   y: 3200, rot: -18, size: 48, vb: '0 0 30 52' },
  { type: 'flower',      x: 90,  y: 3800, rot: -10, size: 52, vb: '0 0 40 40' },
  { type: 'flask',       x: 6,   y: 3850, rot:  12, size: 46, vb: '0 0 40 44' },
  { type: 'seedling',    x: 88,  y: 4500, rot:  -5, size: 56, vb: '0 0 40 44' },
  { type: 'wheat',       x: 5,   y: 4600, rot: -12, size: 52, vb: '0 0 40 46' },
  { type: 'microscope',  x: 91,  y: 5100, rot:  10, size: 50, vb: '0 0 40 42' },
  { type: 'testtube',    x: 4,   y: 5200, rot:  18, size: 46, vb: '0 0 40 42' },
  { type: 'cell',        x: 89,  y: 5800, rot: -22, size: 54, vb: '0 0 40 36' },
  { type: 'petri',       x: 5,   y: 5900, rot:   5, size: 52, vb: '0 0 40 30' },
  { type: 'leaf',        x: 90,  y: 6500, rot: -18, size: 56, vb: '0 0 40 44' },
  { type: 'dna',         x: 3,   y: 6600, rot:   0, size: 48, vb: '0 0 30 52' },
  { type: 'flower',      x: 87,  y: 7200, rot:  30, size: 50, vb: '0 0 40 40' },
  { type: 'seedling',    x: 6,   y: 7300, rot: -10, size: 54, vb: '0 0 40 44' },
];

export function BotanicalBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {placements.map((p, i) => (
        <div
          key={i}
          className="absolute text-foreground/[0.055]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}px`,
            transform: `rotate(${p.rot}deg)`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        >
          <svg
            viewBox={p.vb}
            width={p.size}
            height={p.size}
            fill="none"
            stroke="currentColor"
          >
            {iconMap[p.type]}
          </svg>
        </div>
      ))}
    </div>
  );
}
