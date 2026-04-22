const fs = require('fs');

const PLAYERS_PATH = './src/data/players.ts';
const OUTPUT_PATH = './src/data/players.ts';

const content = fs.readFileSync(PLAYERS_PATH, 'utf-8');

const match = content.match(/export const players: Player\[\] = (\[[\s\S]*?\]);\s*$/);
if (!match) {
  console.error('Could not find players array');
  process.exit(1);
}

const playersData = JSON.parse(match[1]);

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

function getStatRanges(position) {
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

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

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

function getGradientColors(name) {
  const idx = hashString(name) % gradientPairs.length;
  return gradientPairs[idx];
}

function generateAvatarSvg(name) {
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

const seasonHighlightTemplates = {
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

function generateSeasonHighlights(position, rand, goals) {
  const templates = seasonHighlightTemplates[position] ?? seasonHighlightTemplates['Bakspiller'];
  const count = Math.floor(rand() * 3) + 1;
  const highlights = [];
  for (let i = 0; i < count; i++) {
    const tmpl = templates[Math.floor(rand() * templates.length)];
    const team = opponentTeams[Math.floor(rand() * opponentTeams.length)];
    const n = Math.floor(rand() * 8) + 3;
    const week = Math.floor(rand() * 26) + 1;
    const pct = Math.floor(rand() * 20) + 35;
    let h = tmpl.replace(/{team}/g, team).replace(/{n}/g, String(n)).replace(/{week}/g, String(week)).replace(/{pct}/g, String(pct));
    if (goals > 100) {
      h = h.replace(String(n), String(Math.floor(rand() * 5) + 8));
    }
    highlights.push(h);
  }
  return [...new Set(highlights)];
}

function generateFormCurve(position, rand, star) {
  const curve = [];
  for (let i = 0; i < 10; i++) {
    let base = 0;
    if (position === 'Keeper') base = Math.floor(rand() * 3);
    else if (position === 'Bakspiller') base = Math.floor(rand() * 10) + 2;
    else if (position === 'VenstreKant' || position === 'HoyreKant') base = Math.floor(rand() * 8) + 1;
    else base = Math.floor(rand() * 7) + 1;

    if (star) base += Math.floor(rand() * 4) + 2;
    if (rand() > 0.85) base += Math.floor(rand() * 5);
    if (rand() > 0.92) base = 0;
    curve.push(base);
  }
  return curve;
}

const enhancedPlayers = playersData.map(p => {
  const seed = hashString(p.name + p.position + String(p.jerseyNumber));
  const rand = seededRandom(seed);
  const ranges = getStatRanges(p.position);
  const isStar = starPlayers.has(p.name);
  const matchesPlayed = Math.floor(rand() * 10) + 20;

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

  const stats = {
    matchesPlayed,
    goals,
    shots,
    shootingPercent,
    assists,
    yellowCards,
    twoMin,
    redCards,
    mepScore,
  };
  if (saves !== undefined) stats.saves = saves;

  return {
    ...p,
    imageUrl,
    stats,
    formCurve,
    seasonHighlights,
  };
});

function objToString(obj, indent) {
  const pad = ' '.repeat(indent);
  const innerPad = ' '.repeat(indent + 2);
  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';
    if (obj.length > 0 && typeof obj[0] === 'number') {
      return '[ ' + obj.join(', ') + ' ]';
    }
    const items = obj.map(item => objToString(item, indent + 2)).join(',\n' + innerPad);
    return '[\n' + innerPad + items + '\n' + pad + ']';
  }
  if (typeof obj === 'string') {
    return JSON.stringify(obj);
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj);
  }
  if (obj && typeof obj === 'object') {
    const entries = Object.entries(obj).map(([k, v]) => {
      return `${k}: ${objToString(v, indent + 2)}`;
    }).join(',\n' + innerPad);
    return '{\n' + innerPad + entries + '\n' + pad + '}';
  }
  return String(obj);
}

const output = `export interface Player {
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

export const players: Player[] = ${objToString(enhancedPlayers, 0)};
`;

fs.writeFileSync(OUTPUT_PATH, output);
console.log(`Enhanced ${enhancedPlayers.length} players`);
console.log(`Sample: ${enhancedPlayers[0].name} - goals: ${enhancedPlayers[0].stats.goals}, mep: ${enhancedPlayers[0].stats.mepScore}`);
