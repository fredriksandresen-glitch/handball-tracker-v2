import * as fs from 'fs';

const PLAYERS_PATH = './src/data/players.ts';
const OUTPUT_PATH = './src/data/players.ts';

// Read existing players file
const content = fs.readFileSync(PLAYERS_PATH, 'utf-8');

// Extract the players array using a more robust approach
const match = content.match(/export const players: Player\[\] = ([\s\S]+);$/);
if (!match) {
  console.error('Could not parse players array');
  process.exit(1);
}

const playersData = eval(match[1]) as Array<{
  id: number;
  name: string;
  slug: string;
  teamId: number;
  position: string;
  jerseyNumber: number;
}>;

// Star players with higher stats
const starPlayers = new Set([
  'Camilla Herrem',
  'Nora Mørk',
  'Stine Bredal Oftedal',
  'Kari Brattset Dale',
  'Henny Reistad',
  'Silje Solberg-Østhassel',
  'Sanna Solberg-Isaksen',
  'Jana Knedlíková',
  'Emilie Hovden',
  'Maja Furu Sæteren',
  'Malin Aune',
  'Kristina Novak',
  'Emilie Arntzen',
  'Maren Nyland Aardahl',
  'Thale Rushfeldt Deila',
  'Vilde Ingstad',
  'Katrine Lunde',
  'Marit Røsberg Jacobsen',
  'Veronica Kristiansen',
  'Malin Holta',
  'Rikke Marie Granlund',
  'Moa Högdahl',
  'Maja Magnussen',
  'Tina Abdulla',
  'Live Rushfeldt Deila',
]);

// Position-based stat ranges
function getStatRanges(position: string) {
  switch (position) {
    case 'Keeper':
      return { goalsMin: 0, goalsMax: 8, shotsMin: 0, shotsMax: 12, assistsMin: 1, assistsMax: 15, savesMin: 120, savesMax: 350, mepMin: 5.0, mepMax: 9.0 };
    case 'Bakspiller':
      return { goalsMin: 40, goalsMax: 200, shotsMin: 80, shotsMax: 400, assistsMin: 20, assistsMax: 120, savesMin: 0, savesMax: 0, mepMin: 6.0, mepMax: 9.5 };
    case 'VenstreKant':
    case 'HoyreKant':
      return { goalsMin: 35, goalsMax: 160, shotsMin: 60, shotsMax: 280, assistsMin: 15, assistsMax: 80, savesMin: 0, savesMax: 0, mepMin: 5.0, mepMax: 8.0 };
    case 'Linje':
      return { goalsMin: 30, goalsMax: 140, shotsMin: 50, shotsMax: 240, assistsMin: 10, assistsMax: 70, savesMin: 0, savesMax: 0, mepMin: 5.0, mepMax: 8.0 };
    default:
      return { goalsMin: 20, goalsMax: 100, shotsMin: 40, shotsMax: 200, assistsMin: 10, assistsMax: 60, savesMin: 0, savesMax: 0, mepMin: 5.0, mepMax: 8.0 };
  }
}

// Simple deterministic hash from string
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

// Seeded random number generator
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// Generate gradient colors deterministically
const gradientPairs = [
  ['#00d4ff', '#0066ff'],
  ['#ff6b6b', '#ee5a24'],
  ['#2ed573', '#1e90ff'],
  ['#ffa502', '#ff6348'],
  ['#3742fa', '#2f3542'],
  ['#ff4757', '#ff6b81'],
  ['#7bed9f', '#70a1ff'],
  ['#5352ed', '#3742fa'],
  ['#ff9ff3', '#f368e0'],
  ['#54a0ff', '#5f27cd'],
  ['#48dbfb', '#0abde3'],
  ['#1dd1a1', '#10ac84'],
  ['#feca57', '#ff9f43'],
  ['#ff6b6b', '#c44569'],
  ['#00d2d3', '#01a3a4'],
  ['#5f27cd', '#341f97'],
  ['#ff9ff3', '#f368e0'],
  ['#54a0ff', '#2e86de'],
  ['#feca57', '#f39c12'],
  ['#ff6348', '#e74c3c'],
];

function getGradientColors(name: string): [string, string] {
  const idx = hashString(name) % gradientPairs.length;
  return gradientPairs[idx] as [string, string];
}

function generateAvatarSvg(name: string): string {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  const [c1, c2] = getGradientColors(name);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${c1}"/><stop offset="100%" style="stop-color:${c2}"/></linearGradient></defs><circle cx="100" cy="100" r="100" fill="url(#g)"/><text x="100" y="115" font-family="system-ui,sans-serif" font-size="72" font-weight="700" fill="white" text-anchor="middle" dominant-baseline="middle">${initials}</text></svg>`;
  return 'data:image/svg+xml;base64,' + Buffer.from(svg).toString('base64');
}

// Star player real-ish images (using Wikipedia/commons style URLs that might work, but fallback to avatars)
// Since we can't guarantee external images load forever, we'll use high-quality generated SVGs for stars too,
// but with a special golden border indicator instead.
// Actually, let's just use deterministic gradient avatars for everyone - they look great and will always work.

const seasonHighlightTemplates: Record<string, string[]> = {
  Keeper: [
    '{n} redninger mot {team}',
    'Beste keeper i {team}-kampen',
    'Kampens spiller mot {team}',
    'Nullet {team} i 10 minutter',
    'Redningsprosent {pct}% mot {team}',
  ],
  Bakspiller: [
    '{n} mål mot {team}',
    'Toppscorer uke {week}',
    '{n} målgivende mot {team}',
    'Kampens spiller mot {team}',
    'Hattrick mot {team}',
    '7-meter spesialist: {n} mål',
  ],
  VenstreKant: [
    '{n} mål på kontring mot {team}',
    'Lynrask kontring mot {team}',
    'Toppscorer uke {week}',
    '{n} mål mot {team}',
    'Kampens spiller mot {team}',
  ],
  HoyreKant: [
    '{n} mål på kontring mot {team}',
    'Lynrask kontring mot {team}',
    'Toppscorer uke {week}',
    '{n} mål mot {team}',
    'Kampens spiller mot {team}',
  ],
  Linje: [
    '{n} mål fra linja mot {team}',
    'Dominerende forsvarsspiller mot {team}',
    '{n} målgivende mot {team}',
    'Kampens spiller mot {team}',
    'Sterk duellspiller mot {team}',
  ],
};

const opponentTeams = ['Larvik', 'Storhamar', 'Molde', 'Sola', 'Vipers', 'Byåsen', 'Tertnes', 'Fana', 'Fredrikstad'];

function generateSeasonHighlights(position: string, rand: () => number, goals: number): string[] {
  const templates = seasonHighlightTemplates[position] ?? seasonHighlightTemplates['Bakspiller'];
  const count = Math.floor(rand() * 3) + 1;
  const highlights: string[] = [];
  for (let i = 0; i < count; i++) {
    const tmpl = templates[Math.floor(rand() * templates.length)];
    const team = opponentTeams[Math.floor(rand() * opponentTeams.length)];
    const n = Math.floor(rand() * 8) + 3;
    const week = Math.floor(rand() * 26) + 1;
    const pct = Math.floor(rand() * 20) + 35;
    let h = tmpl.replace('{team}', team).replace('{n}', String(n)).replace('{week}', String(week)).replace('{pct}', String(pct));
    if (h.includes('{n}') && goals > 100) {
      h = h.replace(String(n), String(Math.floor(rand() * 5) + 8));
    }
    highlights.push(h);
  }
  return [...new Set(highlights)];
}

function generateFormCurve(position: string, rand: () => number, star: boolean): number[] {
  const curve: number[] = [];
  for (let i = 0; i < 10; i++) {
    let base = 0;
    if (position === 'Keeper') base = Math.floor(rand() * 3);
    else if (position === 'Bakspiller') base = Math.floor(rand() * 10) + 2;
    else if (position === 'VenstreKant' || position === 'HoyreKant') base = Math.floor(rand() * 8) + 1;
    else base = Math.floor(rand() * 7) + 1;

    if (star) base += Math.floor(rand() * 4) + 2;
    if (rand() > 0.85) base += Math.floor(rand() * 5); // occasional great match
    if (rand() > 0.92) base = 0; // occasional quiet match
    curve.push(base);
  }
  return curve;
}

const enhancedPlayers = playersData.map(p => {
  const seed = hashString(p.name + p.position + String(p.jerseyNumber));
  const rand = seededRandom(seed);
  const ranges = getStatRanges(p.position);
  const isStar = starPlayers.has(p.name);
  const matchesPlayed = Math.floor(rand() * 10) + 20; // 20-30 matches

  let goals = Math.floor(rand() * (ranges.goalsMax - ranges.goalsMin) + ranges.goalsMin);
  let shots = Math.floor(rand() * (ranges.shotsMax - ranges.shotsMin) + ranges.shotsMin);
  if (shots < goals) shots = goals + Math.floor(rand() * 20) + 5;
  let shootingPercent = Math.round((goals / shots) * 100);
  if (p.position === 'Keeper') shootingPercent = 0;

  let assists = Math.floor(rand() * (ranges.assistsMax - ranges.assistsMin) + ranges.assistsMin);
  let saves = p.position === 'Keeper' ? Math.floor(rand() * (ranges.savesMax - ranges.savesMin) + ranges.savesMin) : undefined;

  let yellowCards = Math.floor(rand() * 6);
  let twoMin = Math.floor(rand() * 8);
  let redCards = rand() > 0.9 ? 1 : 0;

  let mepScore = parseFloat((rand() * (ranges.mepMax - ranges.mepMin) + ranges.mepMin).toFixed(1));

  if (isStar) {
    goals = Math.floor(goals * 1.3);
    shots = Math.floor(shots * 1.2);
    if (saves !== undefined) saves = Math.floor(saves * 1.15);
    mepScore = Math.min(10, parseFloat((mepScore + 0.8).toFixed(1)));
    assists = Math.floor(assists * 1.2);
  }

  const formCurve = generateFormCurve(p.position, rand, isStar);
  const seasonHighlights = generateSeasonHighlights(p.position, rand, goals);
  const imageUrl = generateAvatarSvg(p.name);

  return {
    ...p,
    imageUrl,
    stats: {
      matchesPlayed,
      goals,
      shots,
      shootingPercent,
      assists,
      yellowCards,
      twoMin,
      redCards,
      ...(saves !== undefined ? { saves } : {}),
      mepScore,
    },
    formCurve,
    seasonHighlights,
  };
});

// Generate the output file
let output = `export interface Player {
  id: number;
  name: string;
  slug: string;
  teamId: number;
  position: string;
  jerseyNumber: number;
  imageUrl: string;
  stats: {
    matchesPlayed: number;
    goals: number;
    shots: number;
    shootingPercent: number;
    assists: number;
    yellowCards: number;
    twoMin: number;
    redCards: number;
    saves?: number;
    mepScore: number;
  };
  formCurve: number[];
  seasonHighlights: string[];
}

export const players: Player[] = ${JSON.stringify(enhancedPlayers, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/\"/g, '"')};
`;

// Fix the quoting: JSON.stringify uses double quotes, we need to convert property names
output = output.replace(/"imageUrl":/g, 'imageUrl:')
  .replace(/"stats":/g, 'stats:')
  .replace(/"matchesPlayed":/g, 'matchesPlayed:')
  .replace(/"goals":/g, 'goals:')
  .replace(/"shots":/g, 'shots:')
  .replace(/"shootingPercent":/g, 'shootingPercent:')
  .replace(/"assists":/g, 'assists:')
  .replace(/"yellowCards":/g, 'yellowCards:')
  .replace(/"twoMin":/g, 'twoMin:')
  .replace(/"redCards":/g, 'redCards:')
  .replace(/"saves":/g, 'saves:')
  .replace(/"mepScore":/g, 'mepScore:')
  .replace(/"formCurve":/g, 'formCurve:')
  .replace(/"seasonHighlights":/g, 'seasonHighlights:');

fs.writeFileSync(OUTPUT_PATH, output);
console.log(`Enhanced ${enhancedPlayers.length} players`);
console.log(`Sample: ${enhancedPlayers[0].name} - goals: ${enhancedPlayers[0].stats.goals}, mep: ${enhancedPlayers[0].stats.mepScore}`);
