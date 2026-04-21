export interface Player {
  id: number;
  name: string;
  slug: string;
  teamId: number;
  position: string;
  jerseyNumber: number;
}

export interface Team {
  id: number;
  name: string;
  slug: string;
}
