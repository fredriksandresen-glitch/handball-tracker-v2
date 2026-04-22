import { players, teams } from './data';
import type { Player, Team } from './types';

export const teamById = new Map<number, Team>(teams.map(t => [t.id, t]));
export const playersByTeam = new Map<number, Player[]>();
for (const p of players) {
  const list = playersByTeam.get(p.teamId) ?? [];
  list.push(p);
  playersByTeam.set(p.teamId, list);
}

export function getTeamName(teamId: number): string {
  return teamById.get(teamId)?.name ?? 'Ukjent lag';
}

export function getTeamPlayers(teamId: number): Player[] {
  return playersByTeam.get(teamId) ?? [];
}

const positionLabels: Record<string, string> = {
  Keeper: 'Målvakt',
  Bakspiller: 'Bakspiller',
  VenstreKant: 'Venstre kant',
  HoyreKant: 'Høyre kant',
  Linje: 'Linjespiller',
};

export function getPositionLabel(position: string): string {
  return positionLabels[position] ?? position;
}

const positionColors: Record<string, string> = {
  Keeper: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  Bakspiller: 'bg-red-500/20 text-red-300 border-red-500/30',
  VenstreKant: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  HoyreKant: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Linje: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
};

export function getPositionColorClass(position: string): string {
  return positionColors[position] ?? 'bg-gray-500/20 text-gray-300 border-gray-500/30';
}

export function getPositionColorHex(position: string): string {
  const map: Record<string, string> = {
    Keeper: '#facc15',
    Bakspiller: '#f87171',
    VenstreKant: '#34d399',
    HoyreKant: '#60a5fa',
    Linje: '#c084fc',
  };
  return map[position] ?? '#94a3b8';
}

export function getFeaturedPlayers(): Player[] {
  // Return top 6 players by MEP score
  return [...players]
    .sort((a, b) => b.stats.mepScore - a.stats.mepScore)
    .slice(0, 6);
}

export function getTopPlayersByGoals(count = 10): Player[] {
  return [...players]
    .sort((a, b) => b.stats.goals - a.stats.goals)
    .slice(0, count);
}

export function getTopPlayersByMEP(count = 10): Player[] {
  return [...players]
    .sort((a, b) => b.stats.mepScore - a.stats.mepScore)
    .slice(0, count);
}
