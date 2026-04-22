export interface Player {
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

export const players: Player[] = [
  {
    id: 1,
    name: "Ine Skartveit Bergsvik",
    slug: "ine-skartveit-bergsvik",
    teamId: 1,
    position: "Keeper",
    jerseyNumber: 1,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 0,
      shots: 0,
      shootingPercent: 0,
      assists: 8,
      yellowCards: 0,
      twoMin: 7,
      redCards: 0,
      mepScore: 5.2,
      saves: 157
    },
    formCurve: [ 0, 2, 0, 0, 2, 2, 4, 1, 2, 2 ],
    seasonHighlights: [
      "Nullet Tertnes i 10 minutter",
      "6 redninger mot Tertnes",
      "Kampens spiller mot Fana"
    ]
  },
  {
    id: 2,
    name: "Frida Brandbu Andersen",
    slug: "frida-brandbu-andersen",
    teamId: 1,
    position: "Bakspiller",
    jerseyNumber: 3,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RkI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 86,
      shots: 282,
      shootingPercent: 30,
      assists: 118,
      yellowCards: 5,
      twoMin: 2,
      redCards: 0,
      mepScore: 6.4
    },
    formCurve: [ 9, 8, 8, 10, 7, 6, 12, 11, 7, 3 ],
    seasonHighlights: [
      "Hattrick mot Tertnes",
      "Kampens spiller mot Fana",
      "7-meter spesialist: 5 mål"
    ]
  },
  {
    id: 3,
    name: "Malin Holta",
    slug: "malin-holta",
    teamId: 1,
    position: "VenstreKant",
    jerseyNumber: 5,
    imageUrl: "/players/malin-holta.jpg",
    stats: {
      matchesPlayed: 24,
      goals: 174,
      shots: 189,
      shootingPercent: 85,
      assists: 64,
      yellowCards: 2,
      twoMin: 3,
      redCards: 0,
      mepScore: 8.8
    },
    formCurve: [ 6, 13, 11, 5, 10, 0, 12, 7, 12, 11 ],
    seasonHighlights: [
      "Kampens spiller mot Fredrikstad",
      "11 mål på kontring mot Fredrikstad"
    ]
  },
  {
    id: 4,
    name: "Selma Helén Henriksen",
    slug: "selma-helen-henriksen",
    teamId: 1,
    position: "Linje",
    jerseyNumber: 6,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0g8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 49,
      shots: 71,
      shootingPercent: 69,
      assists: 64,
      yellowCards: 3,
      twoMin: 6,
      redCards: 0,
      mepScore: 6.4
    },
    formCurve: [ 7, 4, 7, 4, 4, 7, 5, 3, 5, 5 ],
    seasonHighlights: [
      "Sterk duellspiller mot Vipers"
    ]
  },
  {
    id: 5,
    name: "Synne With",
    slug: "synne-with",
    teamId: 1,
    position: "HoyreKant",
    jerseyNumber: 7,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTc0YzNjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U1c8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 122,
      shots: 231,
      shootingPercent: 53,
      assists: 64,
      yellowCards: 5,
      twoMin: 0,
      redCards: 0,
      mepScore: 5.2
    },
    formCurve: [ 5, 8, 5, 3, 4, 5, 5, 2, 1, 7 ],
    seasonHighlights: [
      "Lynrask kontring mot Fana",
      "Toppscorer uke 8",
      "9 mål på kontring mot Byåsen"
    ]
  },
  {
    id: 6,
    name: "Kaja Horst Haugseng",
    slug: "kaja-horst-haugseng",
    teamId: 1,
    position: "Linje",
    jerseyNumber: 9,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzQ0NTY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+S0g8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 30,
      shots: 108,
      shootingPercent: 28,
      assists: 11,
      yellowCards: 4,
      twoMin: 2,
      redCards: 1,
      mepScore: 5.4
    },
    formCurve: [ 4, 1, 1, 7, 7, 9, 7, 7, 9, 1 ],
    seasonHighlights: [
      "Kampens spiller mot Molde",
      "Kampens spiller mot Fana",
      "Sterk duellspiller mot Fana"
    ]
  },
  {
    id: 7,
    name: "Hanna Stormyr Ræstad",
    slug: "hanna-stormyr-raestad",
    teamId: 1,
    position: "HoyreKant",
    jerseyNumber: 11,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkMmQzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDFhM2E0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SFM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 74,
      shots: 183,
      shootingPercent: 40,
      assists: 35,
      yellowCards: 4,
      twoMin: 1,
      redCards: 0,
      mepScore: 5.6
    },
    formCurve: [ 3, 4, 8, 8, 12, 6, 5, 0, 8, 4 ],
    seasonHighlights: [
      "4 mål mot Fredrikstad",
      "Lynrask kontring mot Vipers"
    ]
  },
  {
    id: 8,
    name: "Rikke Marie Granlund",
    slug: "rikke-marie-granlund",
    teamId: 1,
    position: "Keeper",
    jerseyNumber: 12,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZhNTAyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Uk08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 3,
      shots: 10,
      shootingPercent: 0,
      assists: 3,
      yellowCards: 4,
      twoMin: 5,
      redCards: 0,
      mepScore: 5.9,
      saves: 289
    },
    formCurve: [ 6, 0, 3, 5, 5, 6, 6, 6, 4, 3 ],
    seasonHighlights: [
      "Redningsprosent 44% mot Fana",
      "Beste keeper i Storhamar-kampen"
    ]
  },
  {
    id: 9,
    name: "Ine Erlandsen Grimsrud",
    slug: "ine-erlandsen-grimsrud",
    teamId: 1,
    position: "HoyreKant",
    jerseyNumber: 14,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTc0YzNjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SUU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 138,
      shots: 162,
      shootingPercent: 85,
      assists: 44,
      yellowCards: 2,
      twoMin: 6,
      redCards: 0,
      mepScore: 7.6
    },
    formCurve: [ 4, 8, 2, 4, 2, 3, 7, 5, 6, 6 ],
    seasonHighlights: [
      "Toppscorer uke 16"
    ]
  },
  {
    id: 10,
    name: "Maria Khan",
    slug: "maria-khan",
    teamId: 1,
    position: "HoyreKant",
    jerseyNumber: 15,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 99,
      shots: 150,
      shootingPercent: 66,
      assists: 18,
      yellowCards: 1,
      twoMin: 7,
      redCards: 0,
      mepScore: 6.4
    },
    formCurve: [ 4, 1, 8, 3, 7, 2, 2, 4, 5, 6 ],
    seasonHighlights: [
      "4 mål mot Storhamar"
    ]
  },
  {
    id: 11,
    name: "Hedda Eggen Granli",
    slug: "hedda-eggen-granli",
    teamId: 1,
    position: "Keeper",
    jerseyNumber: 16,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTM1MmVkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SEU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 4,
      shots: 5,
      shootingPercent: 0,
      assists: 14,
      yellowCards: 3,
      twoMin: 2,
      redCards: 0,
      mepScore: 8,
      saves: 243
    },
    formCurve: [ 0, 2, 0, 0, 0, 0, 2, 0, 1, 2 ],
    seasonHighlights: [
      "Redningsprosent 54% mot Larvik"
    ]
  },
  {
    id: 12,
    name: "Kristiane Knutsen",
    slug: "kristiane-knutsen",
    teamId: 1,
    position: "Bakspiller",
    jerseyNumber: 17,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+S0s8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 150,
      shots: 378,
      shootingPercent: 40,
      assists: 104,
      yellowCards: 0,
      twoMin: 6,
      redCards: 0,
      mepScore: 7
    },
    formCurve: [ 5, 2, 3, 5, 9, 4, 9, 2, 8, 10 ],
    seasonHighlights: [
      "Kampens spiller mot Larvik",
      "7-meter spesialist: 11 mål"
    ]
  },
  {
    id: 13,
    name: "Dina Klungtveit Olufsen",
    slug: "dina-klungtveit-olufsen",
    teamId: 1,
    position: "HoyreKant",
    jerseyNumber: 21,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZWU1YTI0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+REs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 42,
      shots: 241,
      shootingPercent: 17,
      assists: 21,
      yellowCards: 2,
      twoMin: 2,
      redCards: 0,
      mepScore: 5.6
    },
    formCurve: [ 6, 2, 1, 4, 4, 10, 4, 7, 7, 4 ],
    seasonHighlights: [
      "Kampens spiller mot Tertnes",
      "Toppscorer uke 24"
    ]
  },
  {
    id: 14,
    name: "Pia Grønstad",
    slug: "pia-gronstad",
    teamId: 1,
    position: "HoyreKant",
    jerseyNumber: 22,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWRkMWExIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTBhYzg0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+UEc8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 137,
      shots: 251,
      shootingPercent: 55,
      assists: 28,
      yellowCards: 1,
      twoMin: 6,
      redCards: 0,
      mepScore: 6.2
    },
    formCurve: [ 8, 5, 8, 8, 8, 7, 8, 1, 5, 7 ],
    seasonHighlights: [
      "Lynrask kontring mot Tertnes",
      "9 mål mot Fredrikstad"
    ]
  },
  {
    id: 15,
    name: "Vilde Refsland",
    slug: "vilde-refsland",
    teamId: 1,
    position: "VenstreKant",
    jerseyNumber: 23,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTM1MmVkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VlI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 37,
      shots: 208,
      shootingPercent: 18,
      assists: 71,
      yellowCards: 4,
      twoMin: 6,
      redCards: 1,
      mepScore: 5.1
    },
    formCurve: [ 5, 8, 5, 6, 4, 9, 4, 5, 12, 4 ],
    seasonHighlights: [
      "3 mål på kontring mot Fredrikstad"
    ]
  },
  {
    id: 16,
    name: "Elise Utsola",
    slug: "elise-utsola",
    teamId: 1,
    position: "Bakspiller",
    jerseyNumber: 23,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RVU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 136,
      shots: 218,
      shootingPercent: 62,
      assists: 59,
      yellowCards: 1,
      twoMin: 2,
      redCards: 0,
      mepScore: 8.9
    },
    formCurve: [ 2, 3, 11, 7, 5, 11, 6, 8, 0, 6 ],
    seasonHighlights: [
      "Hattrick mot Larvik"
    ]
  },
  {
    id: 17,
    name: "Martha Barka",
    slug: "martha-barka",
    teamId: 1,
    position: "HoyreKant",
    jerseyNumber: 24,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 70,
      shots: 101,
      shootingPercent: 69,
      assists: 24,
      yellowCards: 2,
      twoMin: 3,
      redCards: 0,
      mepScore: 7.2
    },
    formCurve: [ 8, 5, 2, 1, 8, 0, 5, 1, 7, 3 ],
    seasonHighlights: [
      "Lynrask kontring mot Storhamar",
      "Lynrask kontring mot Tertnes"
    ]
  },
  {
    id: 18,
    name: "Merlinda Qorraj",
    slug: "merlinda-qorraj",
    teamId: 1,
    position: "VenstreKant",
    jerseyNumber: 25,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWRkMWExIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTBhYzg0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TVE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 92,
      shots: 124,
      shootingPercent: 74,
      assists: 61,
      yellowCards: 4,
      twoMin: 7,
      redCards: 0,
      mepScore: 6.1
    },
    formCurve: [ 0, 5, 4, 3, 4, 7, 2, 7, 3, 7 ],
    seasonHighlights: [
      "Lynrask kontring mot Molde",
      "5 mål mot Fredrikstad"
    ]
  },
  {
    id: 19,
    name: "Thea Kristensen",
    slug: "thea-kristensen",
    teamId: 1,
    position: "VenstreKant",
    jerseyNumber: 29,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VEs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 126,
      shots: 170,
      shootingPercent: 74,
      assists: 69,
      yellowCards: 0,
      twoMin: 2,
      redCards: 0,
      mepScore: 6.9
    },
    formCurve: [ 8, 10, 4, 6, 1, 2, 6, 8, 3, 2 ],
    seasonHighlights: [
      "Toppscorer uke 6"
    ]
  },
  {
    id: 20,
    name: "Sara Todireanu Thorsen",
    slug: "sara-todireanu-thorsen",
    teamId: 1,
    position: "Bakspiller",
    jerseyNumber: 31,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzQ0NTY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U1Q8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 97,
      shots: 320,
      shootingPercent: 30,
      assists: 70,
      yellowCards: 0,
      twoMin: 4,
      redCards: 0,
      mepScore: 6.7
    },
    formCurve: [ 2, 5, 7, 6, 4, 2, 3, 12, 2, 9 ],
    seasonHighlights: [
      "6 målgivende mot Larvik"
    ]
  },
  {
    id: 21,
    name: "Melanie Mie Bak",
    slug: "melanie-mie-bak",
    teamId: 1,
    position: "VenstreKant",
    jerseyNumber: 39,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNDhkYmZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGFiZGUzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TU08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 65,
      shots: 247,
      shootingPercent: 26,
      assists: 29,
      yellowCards: 1,
      twoMin: 6,
      redCards: 1,
      mepScore: 7.2
    },
    formCurve: [ 4, 8, 7, 8, 4, 1, 7, 7, 8, 4 ],
    seasonHighlights: [
      "Lynrask kontring mot Fredrikstad",
      "Kampens spiller mot Fana",
      "Toppscorer uke 11"
    ]
  },
  {
    id: 22,
    name: "Hege Holgersen Danielsen",
    slug: "hege-holgersen-danielsen",
    teamId: 1,
    position: "Linje",
    jerseyNumber: 49,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTM1MmVkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SEg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 91,
      shots: 228,
      shootingPercent: 40,
      assists: 58,
      yellowCards: 5,
      twoMin: 4,
      redCards: 1,
      mepScore: 7.3
    },
    formCurve: [ 0, 1, 7, 8, 6, 10, 5, 4, 0, 1 ],
    seasonHighlights: [
      "8 målgivende mot Tertnes",
      "Kampens spiller mot Molde"
    ]
  },
  {
    id: 23,
    name: "Camilla Herrem",
    slug: "camilla-herrem",
    teamId: 1,
    position: "VenstreKant",
    jerseyNumber: 77,
    imageUrl: "/players/camilla-herrem.jpg",
    stats: {
      matchesPlayed: 23,
      goals: 178,
      shots: 170,
      shootingPercent: 96,
      assists: 79,
      yellowCards: 5,
      twoMin: 1,
      redCards: 0,
      mepScore: 8.3
    },
    formCurve: [ 6, 6, 5, 9, 11, 10, 7, 6, 0, 14 ],
    seasonHighlights: [
      "Kampens spiller mot Byåsen",
      "Toppscorer uke 11",
      "Lynrask kontring mot Molde"
    ]
  },
  {
    id: 24,
    name: "Malin Larsen Aune",
    slug: "malin-larsen-aune",
    teamId: 2,
    position: "HoyreKant",
    jerseyNumber: 6,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWRkMWExIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTBhYzg0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUw8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 57,
      shots: 169,
      shootingPercent: 34,
      assists: 53,
      yellowCards: 0,
      twoMin: 7,
      redCards: 0,
      mepScore: 5.4
    },
    formCurve: [ 5, 5, 1, 0, 1, 6, 1, 1, 9, 0 ],
    seasonHighlights: [
      "Kampens spiller mot Byåsen",
      "4 mål på kontring mot Storhamar"
    ]
  },
  {
    id: 25,
    name: "Ingeborg Storbæk Monné",
    slug: "ingeborg-storbaek-monne",
    teamId: 2,
    position: "VenstreKant",
    jerseyNumber: 7,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 142,
      shots: 149,
      shootingPercent: 95,
      assists: 36,
      yellowCards: 3,
      twoMin: 3,
      redCards: 0,
      mepScore: 7.9
    },
    formCurve: [ 8, 3, 8, 7, 7, 4, 4, 6, 4, 0 ],
    seasonHighlights: [
      "11 mål på kontring mot Fana"
    ]
  },
  {
    id: 26,
    name: "Mathilde Rivas-Toft",
    slug: "mathilde-rivas-toft",
    teamId: 2,
    position: "HoyreKant",
    jerseyNumber: 9,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzQ0NTY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TVI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 62,
      shots: 117,
      shootingPercent: 53,
      assists: 29,
      yellowCards: 3,
      twoMin: 7,
      redCards: 0,
      mepScore: 6
    },
    formCurve: [ 3, 2, 3, 0, 1, 7, 8, 2, 7, 4 ],
    seasonHighlights: [
      "Kampens spiller mot Byåsen"
    ]
  },
  {
    id: 27,
    name: "Kristin Venn",
    slug: "kristin-venn",
    teamId: 2,
    position: "VenstreKant",
    jerseyNumber: 10,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzQ0NTY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+S1Y8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 104,
      shots: 191,
      shootingPercent: 54,
      assists: 69,
      yellowCards: 5,
      twoMin: 2,
      redCards: 0,
      mepScore: 6
    },
    formCurve: [ 3, 12, 6, 4, 3, 1, 10, 8, 6, 10 ],
    seasonHighlights: [
      "Lynrask kontring mot Vipers",
      "Toppscorer uke 24",
      "10 mål på kontring mot Vipers"
    ]
  },
  {
    id: 28,
    name: "Tonje Enkerud",
    slug: "tonje-enkerud",
    teamId: 2,
    position: "VenstreKant",
    jerseyNumber: 11,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VEU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 47,
      shots: 226,
      shootingPercent: 21,
      assists: 66,
      yellowCards: 0,
      twoMin: 1,
      redCards: 0,
      mepScore: 6.2
    },
    formCurve: [ 5, 0, 7, 4, 6, 11, 4, 1, 1, 5 ],
    seasonHighlights: [
      "Toppscorer uke 12",
      "6 mål mot Tertnes"
    ]
  },
  {
    id: 29,
    name: "Monika Høistad Bruce",
    slug: "monika-hoistad-bruce",
    teamId: 2,
    position: "Linje",
    jerseyNumber: 14,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 131,
      shots: 147,
      shootingPercent: 89,
      assists: 14,
      yellowCards: 2,
      twoMin: 0,
      redCards: 0,
      mepScore: 5.5
    },
    formCurve: [ 0, 2, 8, 5, 7, 1, 3, 6, 4, 4 ],
    seasonHighlights: [
      "Dominerende forsvarsspiller mot Sola",
      "10 mål fra linja mot Tertnes",
      "Sterk duellspiller mot Storhamar"
    ]
  },
  {
    id: 30,
    name: "Elise Skinnehaugen",
    slug: "elise-skinnehaugen",
    teamId: 2,
    position: "HoyreKant",
    jerseyNumber: 15,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 112,
      shots: 262,
      shootingPercent: 43,
      assists: 71,
      yellowCards: 2,
      twoMin: 7,
      redCards: 1,
      mepScore: 6
    },
    formCurve: [ 3, 6, 8, 1, 0, 2, 7, 9, 4, 7 ],
    seasonHighlights: [
      "Lynrask kontring mot Tertnes",
      "12 mål på kontring mot Molde"
    ]
  },
  {
    id: 31,
    name: "Julie Victoria Nordevall",
    slug: "julie-victoria-nordevall",
    teamId: 2,
    position: "Keeper",
    jerseyNumber: 16,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY0NzU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjgxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SlY8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 3,
      shots: 4,
      shootingPercent: 0,
      assists: 10,
      yellowCards: 3,
      twoMin: 1,
      redCards: 0,
      mepScore: 5.7,
      saves: 225
    },
    formCurve: [ 0, 2, 2, 0, 3, 0, 1, 2, 1, 3 ],
    seasonHighlights: [
      "5 redninger mot Sola"
    ]
  },
  {
    id: 32,
    name: "Pernille Brandenborg",
    slug: "pernille-brandenborg",
    teamId: 2,
    position: "Linje",
    jerseyNumber: 18,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzQ0NTY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+UEI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 84,
      shots: 87,
      shootingPercent: 97,
      assists: 48,
      yellowCards: 0,
      twoMin: 0,
      redCards: 0,
      mepScore: 5.8
    },
    formCurve: [ 2, 1, 3, 4, 3, 6, 0, 6, 4, 4 ],
    seasonHighlights: [
      "Dominerende forsvarsspiller mot Storhamar",
      "Kampens spiller mot Byåsen",
      "9 målgivende mot Fredrikstad"
    ]
  },
  {
    id: 33,
    name: "Celina Vatne",
    slug: "celina-vatne",
    teamId: 2,
    position: "VenstreKant",
    jerseyNumber: 19,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM5YzEyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Q1Y8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 62,
      shots: 134,
      shootingPercent: 46,
      assists: 26,
      yellowCards: 5,
      twoMin: 5,
      redCards: 0,
      mepScore: 5
    },
    formCurve: [ 2, 7, 4, 6, 1, 0, 3, 2, 2, 7 ],
    seasonHighlights: [
      "Lynrask kontring mot Sola",
      "Lynrask kontring mot Storhamar"
    ]
  },
  {
    id: 34,
    name: "Nora Isabell Husom Nordstrand",
    slug: "nora-isabell-husom-nordstrand",
    teamId: 2,
    position: "HoyreKant",
    jerseyNumber: 20,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZWU1YTI0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Tkk8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 124,
      shots: 182,
      shootingPercent: 68,
      assists: 68,
      yellowCards: 5,
      twoMin: 5,
      redCards: 0,
      mepScore: 6.6
    },
    formCurve: [ 5, 6, 5, 0, 1, 6, 4, 6, 7, 3 ],
    seasonHighlights: [
      "8 mål mot Tertnes"
    ]
  },
  {
    id: 35,
    name: "Anniken Obaidli",
    slug: "anniken-obaidli",
    teamId: 2,
    position: "Bakspiller",
    jerseyNumber: 25,
    imageUrl: "/players/anniken-obaidli.jpg",
    stats: {
      matchesPlayed: 25,
      goals: 162,
      shots: 304,
      shootingPercent: 53,
      assists: 58,
      yellowCards: 0,
      twoMin: 1,
      redCards: 1,
      mepScore: 6.2
    },
    formCurve: [ 6, 11, 10, 7, 2, 11, 2, 11, 2, 2 ],
    seasonHighlights: [
      "Kampens spiller mot Sola",
      "7-meter spesialist: 11 mål",
      "7-meter spesialist: 8 mål"
    ]
  },
  {
    id: 36,
    name: "Ada Aalstad",
    slug: "ada-aalstad",
    teamId: 2,
    position: "Bakspiller",
    jerseyNumber: 29,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM5YzEyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QUE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 82,
      shots: 374,
      shootingPercent: 22,
      assists: 119,
      yellowCards: 1,
      twoMin: 5,
      redCards: 0,
      mepScore: 8.1
    },
    formCurve: [ 6, 2, 8, 11, 8, 3, 11, 6, 9, 8 ],
    seasonHighlights: [
      "5 mål mot Vipers"
    ]
  },
  {
    id: 37,
    name: "Eli Marie Raasok",
    slug: "eli-marie-raasok",
    teamId: 2,
    position: "Keeper",
    jerseyNumber: 30,
    imageUrl: "/players/eli-marie-raasok.jpg",
    stats: {
      matchesPlayed: 28,
      goals: 6,
      shots: 29,
      shootingPercent: 0,
      assists: 3,
      yellowCards: 1,
      twoMin: 5,
      redCards: 0,
      mepScore: 8.2,
      saves: 228
    },
    formCurve: [ 2, 0, 2, 0, 1, 1, 1, 4, 0, 0 ],
    seasonHighlights: [
      "Nullet Fredrikstad i 10 minutter"
    ]
  },
  {
    id: 38,
    name: "Kjerstin Boge Solås",
    slug: "kjerstin-boge-solas",
    teamId: 2,
    position: "VenstreKant",
    jerseyNumber: 31,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzQ0NTY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+S0I8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 81,
      shots: 188,
      shootingPercent: 43,
      assists: 31,
      yellowCards: 1,
      twoMin: 7,
      redCards: 0,
      mepScore: 5.2
    },
    formCurve: [ 3, 8, 5, 1, 8, 1, 6, 6, 6, 3 ],
    seasonHighlights: [
      "Kampens spiller mot Molde",
      "Toppscorer uke 3",
      "Lynrask kontring mot Fredrikstad"
    ]
  },
  {
    id: 39,
    name: "Sanne Løkka Hagen",
    slug: "sanne-lokka-hagen",
    teamId: 2,
    position: "HoyreKant",
    jerseyNumber: 33,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY0NzU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjgxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0w8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 113,
      shots: 125,
      shootingPercent: 90,
      assists: 61,
      yellowCards: 2,
      twoMin: 6,
      redCards: 0,
      mepScore: 6.9
    },
    formCurve: [ 3, 2, 3, 6, 8, 4, 7, 2, 1, 5 ],
    seasonHighlights: [
      "Lynrask kontring mot Molde",
      "12 mål på kontring mot Tertnes"
    ]
  },
  {
    id: 40,
    name: "Oda Cathrine Lunne Mastad",
    slug: "oda-cathrine-lunne-mastad",
    teamId: 2,
    position: "Linje",
    jerseyNumber: 37,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+T0M8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 82,
      shots: 137,
      shootingPercent: 60,
      assists: 16,
      yellowCards: 5,
      twoMin: 2,
      redCards: 0,
      mepScore: 7.7
    },
    formCurve: [ 6, 5, 5, 5, 1, 7, 1, 0, 7, 4 ],
    seasonHighlights: [
      "7 målgivende mot Storhamar",
      "Sterk duellspiller mot Fredrikstad"
    ]
  },
  {
    id: 41,
    name: "June Cecilie Krogh",
    slug: "june-cecilie-krogh",
    teamId: 2,
    position: "Keeper",
    jerseyNumber: 55,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzQ0NTY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SkM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 2,
      shots: 26,
      shootingPercent: 0,
      assists: 8,
      yellowCards: 3,
      twoMin: 3,
      redCards: 0,
      mepScore: 5.9,
      saves: 333
    },
    formCurve: [ 1, 0, 2, 4, 0, 0, 1, 0, 1, 1 ],
    seasonHighlights: [
      "Kampens spiller mot Larvik",
      "Redningsprosent 53% mot Fana",
      "Redningsprosent 46% mot Byåsen"
    ]
  },
  {
    id: 42,
    name: "Veronika Kafka Malá",
    slug: "veronika-kafka-mal",
    teamId: 2,
    position: "VenstreKant",
    jerseyNumber: 67,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN2JlZDlmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzBhMWZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Vks8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 154,
      shots: 180,
      shootingPercent: 86,
      assists: 35,
      yellowCards: 1,
      twoMin: 7,
      redCards: 0,
      mepScore: 8
    },
    formCurve: [ 3, 4, 4, 12, 1, 2, 4, 0, 5, 1 ],
    seasonHighlights: [
      "Kampens spiller mot Storhamar",
      "9 mål mot Sola",
      "Lynrask kontring mot Vipers"
    ]
  },
  {
    id: 43,
    name: "Eli Smørgrav Skogstrand",
    slug: "eli-smorgrav-skogstrand",
    teamId: 3,
    position: "Keeper",
    jerseyNumber: 1,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 0,
      shots: 6,
      shootingPercent: 0,
      assists: 14,
      yellowCards: 3,
      twoMin: 4,
      redCards: 0,
      mepScore: 7.2,
      saves: 284
    },
    formCurve: [ 1, 2, 2, 1, 1, 0, 2, 1, 1, 2 ],
    seasonHighlights: [
      "Beste keeper i Tertnes-kampen"
    ]
  },
  {
    id: 44,
    name: "Mia Kristine Strand",
    slug: "mia-kristine-strand",
    teamId: 3,
    position: "HoyreKant",
    jerseyNumber: 2,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkMmQzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDFhM2E0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 69,
      shots: 159,
      shootingPercent: 43,
      assists: 16,
      yellowCards: 5,
      twoMin: 1,
      redCards: 0,
      mepScore: 6
    },
    formCurve: [ 1, 7, 5, 7, 6, 0, 9, 1, 9, 3 ],
    seasonHighlights: [
      "Lynrask kontring mot Vipers",
      "6 mål mot Vipers"
    ]
  },
  {
    id: 45,
    name: "Johanne Halseth Nypan",
    slug: "johanne-halseth-nypan",
    teamId: 3,
    position: "HoyreKant",
    jerseyNumber: 7,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmVkNTczIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU5MGZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Skg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 42,
      shots: 174,
      shootingPercent: 24,
      assists: 19,
      yellowCards: 1,
      twoMin: 0,
      redCards: 0,
      mepScore: 6.3
    },
    formCurve: [ 8, 5, 3, 6, 7, 3, 7, 2, 4, 8 ],
    seasonHighlights: [
      "Kampens spiller mot Sola",
      "Kampens spiller mot Fana"
    ]
  },
  {
    id: 46,
    name: "Runa Heimsjø Sand",
    slug: "runa-heimsjo-sand",
    teamId: 3,
    position: "VenstreKant",
    jerseyNumber: 9,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM5YzEyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Ukg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 125,
      shots: 227,
      shootingPercent: 55,
      assists: 21,
      yellowCards: 1,
      twoMin: 6,
      redCards: 0,
      mepScore: 7.7
    },
    formCurve: [ 0, 3, 5, 3, 6, 4, 2, 2, 6, 1 ],
    seasonHighlights: [
      "Toppscorer uke 11"
    ]
  },
  {
    id: 47,
    name: "Lene Kristiansen Tveiten",
    slug: "lene-kristiansen-tveiten",
    teamId: 3,
    position: "Bakspiller",
    jerseyNumber: 10,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TEs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 48,
      shots: 205,
      shootingPercent: 23,
      assists: 96,
      yellowCards: 1,
      twoMin: 2,
      redCards: 0,
      mepScore: 9.3
    },
    formCurve: [ 0, 5, 7, 3, 7, 4, 3, 13, 9, 7 ],
    seasonHighlights: [
      "7-meter spesialist: 4 mål",
      "Kampens spiller mot Fana",
      "8 mål mot Vipers"
    ]
  },
  {
    id: 48,
    name: "Fanny Alma Elovson",
    slug: "fanny-alma-elovson",
    teamId: 3,
    position: "VenstreKant",
    jerseyNumber: 11,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmU4NmRlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RkE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 156,
      shots: 226,
      shootingPercent: 69,
      assists: 34,
      yellowCards: 1,
      twoMin: 6,
      redCards: 0,
      mepScore: 7.3
    },
    formCurve: [ 7, 1, 7, 3, 4, 6, 4, 8, 5, 8 ],
    seasonHighlights: [
      "9 mål mot Larvik",
      "12 mål mot Molde"
    ]
  },
  {
    id: 49,
    name: "Henrikke Hauge Kjølholdt",
    slug: "henrikke-hauge-kjolholdt",
    teamId: 3,
    position: "HoyreKant",
    jerseyNumber: 15,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmU4NmRlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SEg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 140,
      shots: 143,
      shootingPercent: 98,
      assists: 64,
      yellowCards: 4,
      twoMin: 2,
      redCards: 0,
      mepScore: 6.6
    },
    formCurve: [ 4, 3, 8, 7, 4, 3, 8, 7, 6, 1 ],
    seasonHighlights: [
      "Kampens spiller mot Sola",
      "12 mål mot Larvik",
      "11 mål på kontring mot Tertnes"
    ]
  },
  {
    id: 50,
    name: "Torine Hjelme Dalen",
    slug: "torine-hjelme-dalen",
    teamId: 3,
    position: "VenstreKant",
    jerseyNumber: 18,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VEg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 109,
      shots: 127,
      shootingPercent: 86,
      assists: 71,
      yellowCards: 2,
      twoMin: 0,
      redCards: 0,
      mepScore: 6.6
    },
    formCurve: [ 8, 5, 7, 1, 0, 4, 6, 6, 4, 8 ],
    seasonHighlights: [
      "Toppscorer uke 21",
      "8 mål mot Larvik"
    ]
  },
  {
    id: 51,
    name: "Maja Sofie Muri",
    slug: "maja-sofie-muri",
    teamId: 3,
    position: "Linje",
    jerseyNumber: 20,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM5YzEyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 91,
      shots: 94,
      shootingPercent: 97,
      assists: 28,
      yellowCards: 2,
      twoMin: 4,
      redCards: 0,
      mepScore: 7.9
    },
    formCurve: [ 4, 4, 7, 5, 6, 1, 1, 7, 0, 1 ],
    seasonHighlights: [
      "Dominerende forsvarsspiller mot Vipers",
      "6 målgivende mot Sola"
    ]
  },
  {
    id: 52,
    name: "Lise Slemmen Gussiås",
    slug: "lise-slemmen-gussias",
    teamId: 3,
    position: "Keeper",
    jerseyNumber: 24,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmU4NmRlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TFM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 0,
      shots: 2,
      shootingPercent: 0,
      assists: 1,
      yellowCards: 4,
      twoMin: 0,
      redCards: 0,
      mepScore: 6.9,
      saves: 174
    },
    formCurve: [ 3, 1, 2, 2, 0, 0, 0, 4, 1, 1 ],
    seasonHighlights: [
      "Beste keeper i Byåsen-kampen"
    ]
  },
  {
    id: 53,
    name: "Tonje Løseth",
    slug: "tonje-loseth",
    teamId: 3,
    position: "VenstreKant",
    jerseyNumber: 25,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VEw8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 98,
      shots: 266,
      shootingPercent: 37,
      assists: 77,
      yellowCards: 3,
      twoMin: 0,
      redCards: 0,
      mepScore: 6.5
    },
    formCurve: [ 0, 6, 5, 6, 1, 0, 5, 4, 3, 6 ],
    seasonHighlights: [
      "Kampens spiller mot Larvik",
      "Kampens spiller mot Tertnes"
    ]
  },
  {
    id: 54,
    name: "Kaja Røhne",
    slug: "kaja-rohne",
    teamId: 3,
    position: "Linje",
    jerseyNumber: 26,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkMmQzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDFhM2E0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+S1I8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 109,
      shots: 129,
      shootingPercent: 84,
      assists: 48,
      yellowCards: 5,
      twoMin: 1,
      redCards: 0,
      mepScore: 7.9
    },
    formCurve: [ 7, 7, 7, 3, 4, 4, 4, 0, 2, 0 ],
    seasonHighlights: [
      "Kampens spiller mot Tertnes",
      "12 mål fra linja mot Vipers"
    ]
  },
  {
    id: 55,
    name: "Julia Hessen",
    slug: "julia-hessen",
    teamId: 3,
    position: "Bakspiller",
    jerseyNumber: 30,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTM1MmVkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Skg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 190,
      shots: 202,
      shootingPercent: 94,
      assists: 74,
      yellowCards: 3,
      twoMin: 7,
      redCards: 0,
      mepScore: 6.9
    },
    formCurve: [ 3, 8, 0, 5, 8, 8, 0, 11, 3, 0 ],
    seasonHighlights: [
      "11 målgivende mot Sola",
      "8 målgivende mot Sola",
      "Hattrick mot Molde"
    ]
  },
  {
    id: 56,
    name: "Julie Bøe Jacobsen",
    slug: "julie-boe-jacobsen",
    teamId: 3,
    position: "Bakspiller",
    jerseyNumber: 33,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTM1MmVkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SkI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 123,
      shots: 143,
      shootingPercent: 86,
      assists: 104,
      yellowCards: 0,
      twoMin: 2,
      redCards: 0,
      mepScore: 9.2
    },
    formCurve: [ 11, 11, 9, 0, 3, 4, 10, 0, 5, 4 ],
    seasonHighlights: [
      "Kampens spiller mot Vipers"
    ]
  },
  {
    id: 57,
    name: "Yazmin Yamundow Marie Ceesay",
    slug: "yazmin-yamundow-marie-ceesay",
    teamId: 3,
    position: "HoyreKant",
    jerseyNumber: 34,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+WVk8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 145,
      shots: 159,
      shootingPercent: 91,
      assists: 24,
      yellowCards: 3,
      twoMin: 3,
      redCards: 0,
      mepScore: 7.1
    },
    formCurve: [ 7, 1, 4, 6, 4, 1, 3, 6, 2, 7 ],
    seasonHighlights: [
      "8 mål på kontring mot Storhamar",
      "Lynrask kontring mot Byåsen"
    ]
  },
  {
    id: 58,
    name: "Ingeborg Johanne Nyborg Tømmervåg",
    slug: "ingeborg-johanne-nyborg-tommervag",
    teamId: 3,
    position: "Linje",
    jerseyNumber: 39,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SUo8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 98,
      shots: 133,
      shootingPercent: 74,
      assists: 23,
      yellowCards: 5,
      twoMin: 6,
      redCards: 0,
      mepScore: 5.3
    },
    formCurve: [ 6, 7, 7, 7, 7, 11, 2, 9, 0, 1 ],
    seasonHighlights: [
      "10 mål fra linja mot Fredrikstad",
      "4 mål fra linja mot Fredrikstad",
      "Kampens spiller mot Byåsen"
    ]
  },
  {
    id: 59,
    name: "Jenny Carlsson",
    slug: "jenny-carlsson",
    teamId: 3,
    position: "VenstreKant",
    jerseyNumber: 42,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTc0YzNjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SkM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 145,
      shots: 242,
      shootingPercent: 60,
      assists: 36,
      yellowCards: 3,
      twoMin: 0,
      redCards: 0,
      mepScore: 7.1
    },
    formCurve: [ 6, 8, 6, 8, 9, 5, 6, 7, 2, 7 ],
    seasonHighlights: [
      "10 mål på kontring mot Byåsen",
      "Toppscorer uke 12"
    ]
  },
  {
    id: 60,
    name: "Susanne Liberg Amundsen",
    slug: "susanne-liberg-amundsen",
    teamId: 3,
    position: "VenstreKant",
    jerseyNumber: 44,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY0NzU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjgxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0w8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 144,
      shots: 169,
      shootingPercent: 85,
      assists: 35,
      yellowCards: 2,
      twoMin: 4,
      redCards: 0,
      mepScore: 7.2
    },
    formCurve: [ 7, 1, 0, 2, 1, 4, 1, 0, 4, 6 ],
    seasonHighlights: [
      "Kampens spiller mot Byåsen"
    ]
  },
  {
    id: 61,
    name: "Liv Annik Drechsler",
    slug: "liv-annik-drechsler",
    teamId: 3,
    position: "Linje",
    jerseyNumber: 49,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmVkNTczIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU5MGZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TEE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 65,
      shots: 126,
      shootingPercent: 52,
      assists: 24,
      yellowCards: 5,
      twoMin: 3,
      redCards: 0,
      mepScore: 6.4
    },
    formCurve: [ 3, 1, 4, 2, 4, 7, 7, 6, 5, 0 ],
    seasonHighlights: [
      "5 mål fra linja mot Molde"
    ]
  },
  {
    id: 62,
    name: "Sakura Hauge",
    slug: "sakura-hauge",
    teamId: 3,
    position: "Keeper",
    jerseyNumber: 87,
    imageUrl: "/players/sakura-hauge.jpg",
    stats: {
      matchesPlayed: 29,
      goals: 4,
      shots: 15,
      shootingPercent: 0,
      assists: 9,
      yellowCards: 4,
      twoMin: 2,
      redCards: 0,
      mepScore: 7.2,
      saves: 124
    },
    formCurve: [ 4, 1, 1, 0, 1, 2, 1, 1, 1, 2 ],
    seasonHighlights: [
      "Redningsprosent 39% mot Sola",
      "Nullet Sola i 10 minutter",
      "9 redninger mot Tertnes"
    ]
  },
  {
    id: 63,
    name: "Olivia Lykke Nygaard",
    slug: "olivia-lykke-nygaard",
    teamId: 4,
    position: "Keeper",
    jerseyNumber: 1,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+T0w8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 1,
      shots: 6,
      shootingPercent: 0,
      assists: 10,
      yellowCards: 3,
      twoMin: 6,
      redCards: 0,
      mepScore: 5.2,
      saves: 223
    },
    formCurve: [ 2, 2, 1, 0, 0, 2, 2, 0, 0, 0 ],
    seasonHighlights: [
      "Nullet Byåsen i 10 minutter",
      "Beste keeper i Byåsen-kampen"
    ]
  },
  {
    id: 64,
    name: "Mari Kirkeby Stensrud",
    slug: "mari-kirkeby-stensrud",
    teamId: 4,
    position: "VenstreKant",
    jerseyNumber: 3,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 90,
      shots: 206,
      shootingPercent: 44,
      assists: 38,
      yellowCards: 2,
      twoMin: 3,
      redCards: 0,
      mepScore: 5.6
    },
    formCurve: [ 8, 8, 5, 5, 8, 8, 7, 3, 6, 2 ],
    seasonHighlights: [
      "5 mål mot Byåsen",
      "Lynrask kontring mot Byåsen",
      "Kampens spiller mot Tertnes"
    ]
  },
  {
    id: 65,
    name: "Charlotte Koffeld Iversen",
    slug: "charlotte-koffeld-iversen",
    teamId: 4,
    position: "HoyreKant",
    jerseyNumber: 4,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Q0s8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 158,
      shots: 250,
      shootingPercent: 63,
      assists: 49,
      yellowCards: 3,
      twoMin: 2,
      redCards: 0,
      mepScore: 6.8
    },
    formCurve: [ 2, 3, 5, 6, 3, 7, 0, 0, 5, 2 ],
    seasonHighlights: [
      "Lynrask kontring mot Fredrikstad"
    ]
  },
  {
    id: 66,
    name: "Kine Hauge Kvalsund",
    slug: "kine-hauge-kvalsund",
    teamId: 4,
    position: "VenstreKant",
    jerseyNumber: 5,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+S0g8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 75,
      shots: 132,
      shootingPercent: 57,
      assists: 63,
      yellowCards: 0,
      twoMin: 2,
      redCards: 0,
      mepScore: 5.8
    },
    formCurve: [ 4, 12, 7, 4, 2, 1, 6, 7, 1, 0 ],
    seasonHighlights: [
      "Lynrask kontring mot Fana",
      "7 mål på kontring mot Tertnes",
      "Toppscorer uke 19"
    ]
  },
  {
    id: 67,
    name: "Constance Hedenstad",
    slug: "constance-hedenstad",
    teamId: 4,
    position: "HoyreKant",
    jerseyNumber: 6,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkMmQzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDFhM2E0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Q0g8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 105,
      shots: 201,
      shootingPercent: 52,
      assists: 53,
      yellowCards: 5,
      twoMin: 0,
      redCards: 0,
      mepScore: 7.5
    },
    formCurve: [ 1, 4, 4, 6, 1, 6, 7, 6, 7, 7 ],
    seasonHighlights: [
      "10 mål mot Fana",
      "Kampens spiller mot Molde",
      "Kampens spiller mot Vipers"
    ]
  },
  {
    id: 68,
    name: "Sara Berg",
    slug: "sara-berg",
    teamId: 4,
    position: "VenstreKant",
    jerseyNumber: 7,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZWU1YTI0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0I8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 75,
      shots: 207,
      shootingPercent: 36,
      assists: 43,
      yellowCards: 3,
      twoMin: 6,
      redCards: 0,
      mepScore: 6
    },
    formCurve: [ 7, 4, 8, 7, 0, 6, 0, 1, 7, 4 ],
    seasonHighlights: [
      "10 mål mot Tertnes",
      "Lynrask kontring mot Vipers",
      "9 mål på kontring mot Molde"
    ]
  },
  {
    id: 69,
    name: "Martine Wolff",
    slug: "martine-wolff",
    teamId: 4,
    position: "Linje",
    jerseyNumber: 8,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNDhkYmZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGFiZGUzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TVc8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 126,
      shots: 197,
      shootingPercent: 64,
      assists: 38,
      yellowCards: 1,
      twoMin: 7,
      redCards: 0,
      mepScore: 5.1
    },
    formCurve: [ 0, 2, 2, 5, 7, 0, 2, 1, 3, 5 ],
    seasonHighlights: [
      "12 målgivende mot Larvik"
    ]
  },
  {
    id: 70,
    name: "Julie Hulleberg",
    slug: "julie-hulleberg",
    teamId: 4,
    position: "VenstreKant",
    jerseyNumber: 10,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Skg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 97,
      shots: 110,
      shootingPercent: 88,
      assists: 18,
      yellowCards: 5,
      twoMin: 0,
      redCards: 0,
      mepScore: 5.1
    },
    formCurve: [ 2, 7, 6, 7, 1, 0, 1, 4, 11, 2 ],
    seasonHighlights: [
      "Kampens spiller mot Tertnes",
      "Lynrask kontring mot Sola"
    ]
  },
  {
    id: 71,
    name: "Frøydis Wiik Seierstad",
    slug: "froydis-wiik-seierstad",
    teamId: 4,
    position: "Bakspiller",
    jerseyNumber: 11,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Rlc8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 86,
      shots: 306,
      shootingPercent: 28,
      assists: 75,
      yellowCards: 0,
      twoMin: 5,
      redCards: 0,
      mepScore: 8.7
    },
    formCurve: [ 3, 2, 0, 11, 5, 7, 4, 8, 13, 8 ],
    seasonHighlights: [
      "Toppscorer uke 13",
      "10 mål mot Fana",
      "3 målgivende mot Byåsen"
    ]
  },
  {
    id: 72,
    name: "Dina Frisendal",
    slug: "dina-frisendal",
    teamId: 4,
    position: "Keeper",
    jerseyNumber: 12,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+REY8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 0,
      shots: 5,
      shootingPercent: 0,
      assists: 8,
      yellowCards: 4,
      twoMin: 0,
      redCards: 0,
      mepScore: 5.5,
      saves: 325
    },
    formCurve: [ 2, 0, 1, 1, 1, 1, 0, 0, 1, 2 ],
    seasonHighlights: [
      "Beste keeper i Tertnes-kampen",
      "Beste keeper i Sola-kampen"
    ]
  },
  {
    id: 73,
    name: "Guro Ramberg",
    slug: "guro-ramberg",
    teamId: 4,
    position: "HoyreKant",
    jerseyNumber: 15,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+R1I8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 137,
      shots: 169,
      shootingPercent: 81,
      assists: 51,
      yellowCards: 3,
      twoMin: 4,
      redCards: 0,
      mepScore: 6.1
    },
    formCurve: [ 8, 9, 6, 8, 7, 1, 7, 8, 0, 5 ],
    seasonHighlights: [
      "Toppscorer uke 9"
    ]
  },
  {
    id: 74,
    name: "Lea Løkke-Øwre",
    slug: "lea-lokke-owre",
    teamId: 4,
    position: "Keeper",
    jerseyNumber: 16,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNDhkYmZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGFiZGUzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TEw8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 4,
      shots: 7,
      shootingPercent: 0,
      assists: 12,
      yellowCards: 0,
      twoMin: 7,
      redCards: 1,
      mepScore: 8.4,
      saves: 327
    },
    formCurve: [ 5, 0, 0, 1, 0, 2, 0, 3, 1, 0 ],
    seasonHighlights: [
      "Beste keeper i Fana-kampen",
      "Kampens spiller mot Byåsen"
    ]
  },
  {
    id: 75,
    name: "Tuva Engh Auby",
    slug: "tuva-engh-auby",
    teamId: 4,
    position: "Keeper",
    jerseyNumber: 17,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmU4NmRlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VEU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 5,
      shots: 29,
      shootingPercent: 0,
      assists: 2,
      yellowCards: 1,
      twoMin: 4,
      redCards: 0,
      mepScore: 5.1,
      saves: 311
    },
    formCurve: [ 1, 4, 1, 2, 2, 0, 2, 2, 2, 1 ],
    seasonHighlights: [
      "Nullet Sola i 10 minutter",
      "Redningsprosent 51% mot Storhamar",
      "Redningsprosent 45% mot Byåsen"
    ]
  },
  {
    id: 76,
    name: "Tirill Alexandrine Solumsmoen Mørch",
    slug: "tirill-alexandrine-solumsmoen-morch",
    teamId: 4,
    position: "Linje",
    jerseyNumber: 18,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTc0YzNjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VEE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 53,
      shots: 225,
      shootingPercent: 24,
      assists: 28,
      yellowCards: 5,
      twoMin: 5,
      redCards: 0,
      mepScore: 7.9
    },
    formCurve: [ 5, 2, 3, 2, 6, 5, 4, 7, 3, 5 ],
    seasonHighlights: [
      "9 målgivende mot Tertnes",
      "4 målgivende mot Tertnes",
      "Dominerende forsvarsspiller mot Sola"
    ]
  },
  {
    id: 77,
    name: "Ingrid Vinjevoll",
    slug: "ingrid-vinjevoll",
    teamId: 4,
    position: "VenstreKant",
    jerseyNumber: 20,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNDhkYmZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGFiZGUzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SVY8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 107,
      shots: 255,
      shootingPercent: 42,
      assists: 76,
      yellowCards: 1,
      twoMin: 7,
      redCards: 0,
      mepScore: 7.1
    },
    formCurve: [ 2, 1, 3, 1, 8, 3, 5, 8, 8, 8 ],
    seasonHighlights: [
      "11 mål mot Byåsen",
      "Lynrask kontring mot Fredrikstad"
    ]
  },
  {
    id: 78,
    name: "Andrea Rønning",
    slug: "andrea-ronning",
    teamId: 4,
    position: "Bakspiller",
    jerseyNumber: 22,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QVI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 134,
      shots: 379,
      shootingPercent: 35,
      assists: 111,
      yellowCards: 4,
      twoMin: 4,
      redCards: 0,
      mepScore: 6.9
    },
    formCurve: [ 10, 11, 4, 0, 10, 8, 3, 10, 5, 7 ],
    seasonHighlights: [
      "7-meter spesialist: 12 mål"
    ]
  },
  {
    id: 79,
    name: "Christine Neumann Strøm",
    slug: "christine-neumann-strom",
    teamId: 4,
    position: "Keeper",
    jerseyNumber: 23,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTM1MmVkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Q048L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 1,
      shots: 2,
      shootingPercent: 0,
      assists: 5,
      yellowCards: 4,
      twoMin: 6,
      redCards: 0,
      mepScore: 5,
      saves: 176
    },
    formCurve: [ 2, 2, 0, 2, 0, 0, 0, 2, 1, 1 ],
    seasonHighlights: [
      "Beste keeper i Sola-kampen",
      "Kampens spiller mot Vipers"
    ]
  },
  {
    id: 80,
    name: "Amanda Maria Kurtovic",
    slug: "amanda-maria-kurtovic",
    teamId: 4,
    position: "HoyreKant",
    jerseyNumber: 24,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZhNTAyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QU08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 67,
      shots: 276,
      shootingPercent: 24,
      assists: 40,
      yellowCards: 2,
      twoMin: 2,
      redCards: 0,
      mepScore: 5.4
    },
    formCurve: [ 6, 6, 2, 10, 1, 6, 4, 1, 0, 0 ],
    seasonHighlights: [
      "Toppscorer uke 12",
      "Lynrask kontring mot Vipers",
      "5 mål på kontring mot Sola"
    ]
  },
  {
    id: 81,
    name: "Tiril Birgitte Rosenberg",
    slug: "tiril-birgitte-rosenberg",
    teamId: 4,
    position: "Linje",
    jerseyNumber: 25,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTM1MmVkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VEI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 91,
      shots: 115,
      shootingPercent: 79,
      assists: 26,
      yellowCards: 2,
      twoMin: 4,
      redCards: 0,
      mepScore: 5.6
    },
    formCurve: [ 7, 5, 5, 5, 6, 5, 10, 1, 5, 3 ],
    seasonHighlights: [
      "Kampens spiller mot Vipers"
    ]
  },
  {
    id: 82,
    name: "Maja Furu Sæteren",
    slug: "maja-furu-saeteren",
    teamId: 4,
    position: "VenstreKant",
    jerseyNumber: 26,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN2JlZDlmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzBhMWZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUY8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 180,
      shots: 181,
      shootingPercent: 92,
      assists: 43,
      yellowCards: 5,
      twoMin: 5,
      redCards: 0,
      mepScore: 6.2
    },
    formCurve: [ 8, 14, 11, 3, 10, 12, 13, 9, 9, 5 ],
    seasonHighlights: [
      "9 mål mot Fana",
      "Toppscorer uke 19",
      "10 mål mot Byåsen"
    ]
  },
  {
    id: 83,
    name: "Signe Andreassen",
    slug: "signe-andreassen",
    teamId: 4,
    position: "Bakspiller",
    jerseyNumber: 29,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0E8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 77,
      shots: 195,
      shootingPercent: 39,
      assists: 67,
      yellowCards: 1,
      twoMin: 1,
      redCards: 0,
      mepScore: 8.6
    },
    formCurve: [ 11, 3, 6, 11, 2, 5, 11, 9, 9, 6 ],
    seasonHighlights: [
      "7-meter spesialist: 9 mål",
      "6 mål mot Molde",
      "Kampens spiller mot Byåsen"
    ]
  },
  {
    id: 84,
    name: "Sigrid Ellingsen",
    slug: "sigrid-ellingsen",
    teamId: 4,
    position: "Keeper",
    jerseyNumber: 30,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0U8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 5,
      shots: 7,
      shootingPercent: 0,
      assists: 1,
      yellowCards: 5,
      twoMin: 0,
      redCards: 0,
      mepScore: 6.8,
      saves: 212
    },
    formCurve: [ 2, 0, 1, 0, 2, 2, 0, 1, 1, 0 ],
    seasonHighlights: [
      "6 redninger mot Larvik"
    ]
  },
  {
    id: 85,
    name: "Sanna Langmo Wold",
    slug: "sanna-langmo-wold",
    teamId: 4,
    position: "Keeper",
    jerseyNumber: 30,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZhNTAyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0w8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 4,
      shots: 8,
      shootingPercent: 0,
      assists: 1,
      yellowCards: 5,
      twoMin: 6,
      redCards: 0,
      mepScore: 8.4,
      saves: 288
    },
    formCurve: [ 1, 1, 2, 0, 5, 0, 2, 1, 0, 1 ],
    seasonHighlights: [
      "Nullet Byåsen i 10 minutter"
    ]
  },
  {
    id: 86,
    name: "Nea Angelina Holand Frydenlund",
    slug: "nea-angelina-holand-frydenlund",
    teamId: 4,
    position: "VenstreKant",
    jerseyNumber: 32,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmVkNTczIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU5MGZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TkE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 83,
      shots: 274,
      shootingPercent: 30,
      assists: 42,
      yellowCards: 0,
      twoMin: 6,
      redCards: 0,
      mepScore: 7.8
    },
    formCurve: [ 5, 8, 6, 3, 1, 0, 0, 6, 0, 4 ],
    seasonHighlights: [
      "3 mål mot Fana"
    ]
  },
  {
    id: 87,
    name: "Amalie Gram",
    slug: "amalie-gram",
    teamId: 4,
    position: "Bakspiller",
    jerseyNumber: 33,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QUc8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 130,
      shots: 250,
      shootingPercent: 52,
      assists: 104,
      yellowCards: 5,
      twoMin: 1,
      redCards: 0,
      mepScore: 6.3
    },
    formCurve: [ 10, 7, 4, 11, 3, 4, 2, 4, 4, 6 ],
    seasonHighlights: [
      "9 mål mot Storhamar",
      "Kampens spiller mot Larvik",
      "12 mål mot Fredrikstad"
    ]
  },
  {
    id: 88,
    name: "Sarah Römhild",
    slug: "sarah-romhild",
    teamId: 4,
    position: "Bakspiller",
    jerseyNumber: 33,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U1I8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 71,
      shots: 255,
      shootingPercent: 28,
      assists: 67,
      yellowCards: 3,
      twoMin: 7,
      redCards: 0,
      mepScore: 9.3
    },
    formCurve: [ 11, 7, 13, 3, 2, 9, 11, 8, 8, 10 ],
    seasonHighlights: [
      "Toppscorer uke 5",
      "Toppscorer uke 10",
      "10 målgivende mot Byåsen"
    ]
  },
  {
    id: 89,
    name: "Christina Pedersen",
    slug: "christina-pedersen",
    teamId: 4,
    position: "Bakspiller",
    jerseyNumber: 66,
    imageUrl: "/players/christina-pedersen.jpg",
    stats: {
      matchesPlayed: 28,
      goals: 44,
      shots: 355,
      shootingPercent: 12,
      assists: 101,
      yellowCards: 3,
      twoMin: 2,
      redCards: 0,
      mepScore: 8.5
    },
    formCurve: [ 9, 3, 2, 9, 6, 0, 2, 2, 7, 0 ],
    seasonHighlights: [
      "7-meter spesialist: 5 mål",
      "7-meter spesialist: 6 mål"
    ]
  },
  {
    id: 90,
    name: "Birgitte Karlsen Hagen",
    slug: "birgitte-karlsen-hagen",
    teamId: 5,
    position: "VenstreKant",
    jerseyNumber: 2,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY0NzU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjgxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Qks8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 95,
      shots: 115,
      shootingPercent: 83,
      assists: 22,
      yellowCards: 5,
      twoMin: 4,
      redCards: 0,
      mepScore: 7.4
    },
    formCurve: [ 2, 8, 7, 8, 9, 3, 3, 5, 3, 0 ],
    seasonHighlights: [
      "Kampens spiller mot Byåsen",
      "Lynrask kontring mot Sola"
    ]
  },
  {
    id: 91,
    name: "Marthe Hatløy Walde",
    slug: "marthe-hatloy-walde",
    teamId: 5,
    position: "Linje",
    jerseyNumber: 4,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmVkNTczIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU5MGZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 56,
      shots: 64,
      shootingPercent: 88,
      assists: 35,
      yellowCards: 1,
      twoMin: 7,
      redCards: 1,
      mepScore: 6.6
    },
    formCurve: [ 7, 4, 0, 5, 8, 7, 2, 6, 6, 0 ],
    seasonHighlights: [
      "Dominerende forsvarsspiller mot Larvik",
      "4 målgivende mot Storhamar"
    ]
  },
  {
    id: 92,
    name: "Avril Mikkelsen Frei",
    slug: "avril-mikkelsen-frei",
    teamId: 5,
    position: "Bakspiller",
    jerseyNumber: 7,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QU08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 133,
      shots: 250,
      shootingPercent: 53,
      assists: 69,
      yellowCards: 1,
      twoMin: 5,
      redCards: 0,
      mepScore: 6.2
    },
    formCurve: [ 5, 6, 7, 7, 6, 11, 9, 7, 7, 8 ],
    seasonHighlights: [
      "Hattrick mot Vipers",
      "Hattrick mot Storhamar"
    ]
  },
  {
    id: 93,
    name: "Stella Waagan Kruse",
    slug: "stella-waagan-kruse",
    teamId: 5,
    position: "VenstreKant",
    jerseyNumber: 8,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U1c8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 56,
      shots: 129,
      shootingPercent: 43,
      assists: 61,
      yellowCards: 1,
      twoMin: 6,
      redCards: 0,
      mepScore: 6.3
    },
    formCurve: [ 3, 7, 1, 0, 3, 12, 2, 4, 6, 7 ],
    seasonHighlights: [
      "Kampens spiller mot Storhamar",
      "Lynrask kontring mot Fana",
      "Toppscorer uke 3"
    ]
  },
  {
    id: 94,
    name: "Henriette Espetvedt Eggen",
    slug: "henriette-espetvedt-eggen",
    teamId: 5,
    position: "VenstreKant",
    jerseyNumber: 10,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM5YzEyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SEU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 40,
      shots: 159,
      shootingPercent: 25,
      assists: 77,
      yellowCards: 2,
      twoMin: 5,
      redCards: 0,
      mepScore: 8
    },
    formCurve: [ 5, 6, 0, 1, 1, 2, 2, 6, 4, 0 ],
    seasonHighlights: [
      "Toppscorer uke 23",
      "Kampens spiller mot Storhamar"
    ]
  },
  {
    id: 95,
    name: "Sara Eline Lauritzen",
    slug: "sara-eline-lauritzen",
    teamId: 5,
    position: "VenstreKant",
    jerseyNumber: 11,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0U8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 59,
      shots: 210,
      shootingPercent: 28,
      assists: 20,
      yellowCards: 3,
      twoMin: 1,
      redCards: 0,
      mepScore: 5.7
    },
    formCurve: [ 4, 0, 7, 5, 4, 3, 2, 3, 7, 1 ],
    seasonHighlights: [
      "Toppscorer uke 1",
      "Kampens spiller mot Fana",
      "Kampens spiller mot Larvik"
    ]
  },
  {
    id: 96,
    name: "Emma Holtet",
    slug: "emma-holtet",
    teamId: 5,
    position: "Linje",
    jerseyNumber: 13,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkMmQzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDFhM2E0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RUg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 59,
      shots: 236,
      shootingPercent: 25,
      assists: 11,
      yellowCards: 0,
      twoMin: 2,
      redCards: 0,
      mepScore: 7.2
    },
    formCurve: [ 0, 2, 4, 3, 6, 6, 2, 3, 5, 5 ],
    seasonHighlights: [
      "Kampens spiller mot Molde",
      "Kampens spiller mot Storhamar",
      "9 mål fra linja mot Storhamar"
    ]
  },
  {
    id: 97,
    name: "Martine Hellesø Knutsen",
    slug: "martine-helleso-knutsen",
    teamId: 5,
    position: "VenstreKant",
    jerseyNumber: 15,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY0NzU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjgxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 146,
      shots: 154,
      shootingPercent: 95,
      assists: 32,
      yellowCards: 2,
      twoMin: 2,
      redCards: 0,
      mepScore: 6.5
    },
    formCurve: [ 6, 5, 7, 7, 6, 1, 0, 5, 6, 6 ],
    seasonHighlights: [
      "Toppscorer uke 19",
      "12 mål mot Larvik",
      "Kampens spiller mot Molde"
    ]
  },
  {
    id: 98,
    name: "Helle Kjellberg-Line",
    slug: "helle-kjellberg-line",
    teamId: 5,
    position: "Keeper",
    jerseyNumber: 16,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SEs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 7,
      shots: 15,
      shootingPercent: 0,
      assists: 6,
      yellowCards: 2,
      twoMin: 5,
      redCards: 1,
      mepScore: 8.2,
      saves: 168
    },
    formCurve: [ 1, 0, 0, 1, 2, 2, 5, 1, 0, 5 ],
    seasonHighlights: [
      "Nullet Tertnes i 10 minutter",
      "6 redninger mot Molde"
    ]
  },
  {
    id: 99,
    name: "Rikke Midtfjeld",
    slug: "rikke-midtfjeld",
    teamId: 5,
    position: "HoyreKant",
    jerseyNumber: 18,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Uk08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 141,
      shots: 152,
      shootingPercent: 93,
      assists: 54,
      yellowCards: 5,
      twoMin: 4,
      redCards: 0,
      mepScore: 5.2
    },
    formCurve: [ 8, 1, 7, 8, 0, 4, 3, 7, 0, 1 ],
    seasonHighlights: [
      "11 mål på kontring mot Sola",
      "8 mål mot Storhamar",
      "Kampens spiller mot Molde"
    ]
  },
  {
    id: 100,
    name: "Vilde Janbu Fresvik",
    slug: "vilde-janbu-fresvik",
    teamId: 5,
    position: "HoyreKant",
    jerseyNumber: 19,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN2JlZDlmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzBhMWZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Vko8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 90,
      shots: 110,
      shootingPercent: 82,
      assists: 67,
      yellowCards: 5,
      twoMin: 1,
      redCards: 0,
      mepScore: 8
    },
    formCurve: [ 4, 5, 1, 7, 8, 2, 7, 6, 3, 1 ],
    seasonHighlights: [
      "9 mål på kontring mot Fredrikstad",
      "10 mål på kontring mot Sola",
      "Lynrask kontring mot Sola"
    ]
  },
  {
    id: 101,
    name: "Fanny Skindlo",
    slug: "fanny-skindlo",
    teamId: 5,
    position: "Bakspiller",
    jerseyNumber: 20,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RlM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 101,
      shots: 301,
      shootingPercent: 34,
      assists: 109,
      yellowCards: 0,
      twoMin: 1,
      redCards: 0,
      mepScore: 6.2
    },
    formCurve: [ 3, 0, 7, 7, 8, 11, 4, 2, 10, 11 ],
    seasonHighlights: [
      "Kampens spiller mot Storhamar",
      "11 mål mot Tertnes"
    ]
  },
  {
    id: 102,
    name: "Maria Bergslien Gald",
    slug: "maria-bergslien-gald",
    teamId: 5,
    position: "VenstreKant",
    jerseyNumber: 22,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZhNTAyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 74,
      shots: 82,
      shootingPercent: 90,
      assists: 31,
      yellowCards: 2,
      twoMin: 0,
      redCards: 0,
      mepScore: 5.5
    },
    formCurve: [ 8, 8, 7, 2, 5, 9, 6, 2, 4, 1 ],
    seasonHighlights: [
      "6 mål mot Fana",
      "Kampens spiller mot Sola"
    ]
  },
  {
    id: 103,
    name: "Viktoria Giske",
    slug: "viktoria-giske",
    teamId: 5,
    position: "Linje",
    jerseyNumber: 23,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM5YzEyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Vkc8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 66,
      shots: 106,
      shootingPercent: 62,
      assists: 28,
      yellowCards: 5,
      twoMin: 5,
      redCards: 0,
      mepScore: 6.4
    },
    formCurve: [ 7, 5, 3, 8, 4, 6, 7, 6, 2, 2 ],
    seasonHighlights: [
      "7 mål fra linja mot Byåsen",
      "9 mål fra linja mot Molde"
    ]
  },
  {
    id: 104,
    name: "Kadija Mårdalen",
    slug: "kadija-mardalen",
    teamId: 5,
    position: "Keeper",
    jerseyNumber: 24,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+S008L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 6,
      shots: 10,
      shootingPercent: 0,
      assists: 7,
      yellowCards: 1,
      twoMin: 4,
      redCards: 0,
      mepScore: 6.2,
      saves: 181
    },
    formCurve: [ 1, 2, 1, 2, 0, 2, 2, 0, 2, 1 ],
    seasonHighlights: [
      "Redningsprosent 40% mot Fana",
      "Nullet Fana i 10 minutter",
      "5 redninger mot Tertnes"
    ]
  },
  {
    id: 105,
    name: "Marie Kristine Rokkones Hansen",
    slug: "marie-kristine-rokkones-hansen",
    teamId: 5,
    position: "HoyreKant",
    jerseyNumber: 26,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 91,
      shots: 122,
      shootingPercent: 75,
      assists: 60,
      yellowCards: 4,
      twoMin: 0,
      redCards: 0,
      mepScore: 7.9
    },
    formCurve: [ 4, 3, 1, 0, 6, 0, 1, 0, 3, 1 ],
    seasonHighlights: [
      "Toppscorer uke 3"
    ]
  },
  {
    id: 106,
    name: "Nora Evelina Cecilia Rosenberg",
    slug: "nora-evelina-cecilia-rosenberg",
    teamId: 5,
    position: "VenstreKant",
    jerseyNumber: 28,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TkU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 132,
      shots: 250,
      shootingPercent: 53,
      assists: 58,
      yellowCards: 0,
      twoMin: 7,
      redCards: 0,
      mepScore: 5.3
    },
    formCurve: [ 7, 7, 8, 2, 6, 7, 5, 5, 6, 0 ],
    seasonHighlights: [
      "Lynrask kontring mot Molde",
      "Kampens spiller mot Fredrikstad"
    ]
  },
  {
    id: 107,
    name: "Benedikte Kalstad Hernes",
    slug: "benedikte-kalstad-hernes",
    teamId: 6,
    position: "Keeper",
    jerseyNumber: 1,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Qks8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 1,
      shots: 11,
      shootingPercent: 0,
      assists: 6,
      yellowCards: 3,
      twoMin: 7,
      redCards: 0,
      mepScore: 6.1,
      saves: 122
    },
    formCurve: [ 1, 0, 4, 2, 2, 2, 0, 2, 0, 1 ],
    seasonHighlights: [
      "Kampens spiller mot Larvik",
      "Beste keeper i Byåsen-kampen",
      "Kampens spiller mot Fana"
    ]
  },
  {
    id: 108,
    name: "Emily Lønnestad-Wiers",
    slug: "emily-lonnestad-wiers",
    teamId: 6,
    position: "VenstreKant",
    jerseyNumber: 2,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkMmQzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDFhM2E0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RUw8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 55,
      shots: 62,
      shootingPercent: 89,
      assists: 33,
      yellowCards: 0,
      twoMin: 6,
      redCards: 0,
      mepScore: 6
    },
    formCurve: [ 1, 3, 5, 4, 5, 9, 5, 2, 4, 0 ],
    seasonHighlights: [
      "Kampens spiller mot Larvik",
      "7 mål mot Fana"
    ]
  },
  {
    id: 109,
    name: "Sara Hallingstad",
    slug: "sara-hallingstad",
    teamId: 6,
    position: "VenstreKant",
    jerseyNumber: 3,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkMmQzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDFhM2E0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0g8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 148,
      shots: 208,
      shootingPercent: 71,
      assists: 32,
      yellowCards: 1,
      twoMin: 0,
      redCards: 0,
      mepScore: 6.7
    },
    formCurve: [ 7, 8, 2, 5, 0, 3, 5, 2, 6, 6 ],
    seasonHighlights: [
      "Toppscorer uke 21",
      "12 mål mot Fredrikstad"
    ]
  },
  {
    id: 110,
    name: "Linnea Skadal Kyrkjeeide",
    slug: "linnea-skadal-kyrkjeeide",
    teamId: 6,
    position: "HoyreKant",
    jerseyNumber: 4,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmVkNTczIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU5MGZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TFM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 125,
      shots: 136,
      shootingPercent: 92,
      assists: 52,
      yellowCards: 4,
      twoMin: 0,
      redCards: 0,
      mepScore: 7.2
    },
    formCurve: [ 6, 5, 7, 2, 4, 2, 8, 1, 0, 0 ],
    seasonHighlights: [
      "11 mål på kontring mot Tertnes",
      "Toppscorer uke 9"
    ]
  },
  {
    id: 111,
    name: "Maren Eriksen Langø",
    slug: "maren-eriksen-lango",
    teamId: 6,
    position: "VenstreKant",
    jerseyNumber: 5,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNDhkYmZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGFiZGUzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 157,
      shots: 175,
      shootingPercent: 90,
      assists: 64,
      yellowCards: 3,
      twoMin: 5,
      redCards: 0,
      mepScore: 7.1
    },
    formCurve: [ 3, 2, 3, 8, 5, 2, 9, 7, 1, 8 ],
    seasonHighlights: [
      "9 mål på kontring mot Molde"
    ]
  },
  {
    id: 112,
    name: "Lina Waage Mossestad",
    slug: "lina-waage-mossestad",
    teamId: 6,
    position: "Bakspiller",
    jerseyNumber: 6,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TFc8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 87,
      shots: 173,
      shootingPercent: 50,
      assists: 47,
      yellowCards: 4,
      twoMin: 7,
      redCards: 0,
      mepScore: 6.4
    },
    formCurve: [ 11, 9, 10, 4, 3, 0, 11, 11, 14, 8 ],
    seasonHighlights: [
      "Kampens spiller mot Storhamar",
      "8 målgivende mot Vipers"
    ]
  },
  {
    id: 113,
    name: "Frida Aasekjær Wilkensen",
    slug: "frida-aasekjaer-wilkensen",
    teamId: 6,
    position: "HoyreKant",
    jerseyNumber: 9,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZhNTAyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RkE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 84,
      shots: 108,
      shootingPercent: 78,
      assists: 26,
      yellowCards: 1,
      twoMin: 6,
      redCards: 0,
      mepScore: 5.8
    },
    formCurve: [ 6, 6, 8, 2, 2, 1, 4, 2, 5, 5 ],
    seasonHighlights: [
      "Lynrask kontring mot Sola"
    ]
  },
  {
    id: 114,
    name: "Christine Karlsen Alver",
    slug: "christine-karlsen-alver",
    teamId: 6,
    position: "Bakspiller",
    jerseyNumber: 10,
    imageUrl: "/players/christine-karlsen-alver.jpg",
    stats: {
      matchesPlayed: 20,
      goals: 172,
      shots: 188,
      shootingPercent: 91,
      assists: 48,
      yellowCards: 2,
      twoMin: 3,
      redCards: 1,
      mepScore: 7.8
    },
    formCurve: [ 4, 9, 10, 6, 8, 11, 4, 9, 7, 7 ],
    seasonHighlights: [
      "9 mål mot Molde",
      "7-meter spesialist: 12 mål",
      "9 mål mot Vipers"
    ]
  },
  {
    id: 115,
    name: "Anna Mortvedt",
    slug: "anna-mortvedt",
    teamId: 6,
    position: "Linje",
    jerseyNumber: 11,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY0NzU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjgxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QU08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 66,
      shots: 138,
      shootingPercent: 48,
      assists: 31,
      yellowCards: 3,
      twoMin: 7,
      redCards: 0,
      mepScore: 5.1
    },
    formCurve: [ 4, 2, 1, 0, 0, 6, 7, 2, 5, 4 ],
    seasonHighlights: [
      "8 målgivende mot Fana",
      "Sterk duellspiller mot Molde",
      "Dominerende forsvarsspiller mot Vipers"
    ]
  },
  {
    id: 116,
    name: "Marie Skurtveit Davidsen",
    slug: "marie-skurtveit-davidsen",
    teamId: 6,
    position: "Keeper",
    jerseyNumber: 12,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTM1MmVkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 2,
      shots: 7,
      shootingPercent: 0,
      assists: 14,
      yellowCards: 1,
      twoMin: 2,
      redCards: 0,
      mepScore: 5.9,
      saves: 152
    },
    formCurve: [ 2, 2, 2, 2, 0, 0, 4, 1, 1, 1 ],
    seasonHighlights: [
      "Kampens spiller mot Sola"
    ]
  },
  {
    id: 117,
    name: "Fride Heggdal Stølen",
    slug: "fride-heggdal-stolen",
    teamId: 6,
    position: "Linje",
    jerseyNumber: 13,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN2JlZDlmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzBhMWZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Rkg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 45,
      shots: 211,
      shootingPercent: 21,
      assists: 25,
      yellowCards: 2,
      twoMin: 3,
      redCards: 0,
      mepScore: 5.9
    },
    formCurve: [ 6, 6, 5, 6, 1, 9, 1, 6, 1, 1 ],
    seasonHighlights: [
      "Kampens spiller mot Tertnes"
    ]
  },
  {
    id: 118,
    name: "Eline Mangen Solbakken",
    slug: "eline-mangen-solbakken",
    teamId: 6,
    position: "Linje",
    jerseyNumber: 14,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RU08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 138,
      shots: 157,
      shootingPercent: 88,
      assists: 36,
      yellowCards: 1,
      twoMin: 6,
      redCards: 1,
      mepScore: 5.4
    },
    formCurve: [ 10, 1, 5, 6, 4, 4, 4, 0, 2, 5 ],
    seasonHighlights: [
      "8 mål fra linja mot Fredrikstad"
    ]
  },
  {
    id: 119,
    name: "Marie Mjøs",
    slug: "marie-mjos",
    teamId: 6,
    position: "Bakspiller",
    jerseyNumber: 15,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkMmQzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDFhM2E0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TU08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 160,
      shots: 332,
      shootingPercent: 48,
      assists: 119,
      yellowCards: 3,
      twoMin: 7,
      redCards: 0,
      mepScore: 6.1
    },
    formCurve: [ 6, 2, 4, 8, 9, 10, 3, 4, 8, 7 ],
    seasonHighlights: [
      "10 mål mot Byåsen"
    ]
  },
  {
    id: 120,
    name: "Leah Bjotveit Verpeide",
    slug: "leah-bjotveit-verpeide",
    teamId: 6,
    position: "Keeper",
    jerseyNumber: 16,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TEI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 4,
      shots: 5,
      shootingPercent: 0,
      assists: 2,
      yellowCards: 4,
      twoMin: 3,
      redCards: 0,
      mepScore: 8.5,
      saves: 325
    },
    formCurve: [ 0, 2, 0, 1, 1, 1, 1, 1, 2, 2 ],
    seasonHighlights: [
      "Nullet Sola i 10 minutter",
      "Nullet Fredrikstad i 10 minutter"
    ]
  },
  {
    id: 121,
    name: "Eline Osland",
    slug: "eline-osland",
    teamId: 6,
    position: "HoyreKant",
    jerseyNumber: 19,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkMmQzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDFhM2E0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RU88L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 152,
      shots: 233,
      shootingPercent: 65,
      assists: 28,
      yellowCards: 3,
      twoMin: 2,
      redCards: 0,
      mepScore: 6.2
    },
    formCurve: [ 7, 4, 7, 2, 4, 7, 5, 8, 5, 1 ],
    seasonHighlights: [
      "Toppscorer uke 1"
    ]
  },
  {
    id: 122,
    name: "Martine Kårigstad Andersen",
    slug: "martine-karigstad-andersen",
    teamId: 6,
    position: "VenstreKant",
    jerseyNumber: 20,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 83,
      shots: 90,
      shootingPercent: 92,
      assists: 55,
      yellowCards: 5,
      twoMin: 2,
      redCards: 0,
      mepScore: 5.6
    },
    formCurve: [ 1, 6, 0, 8, 4, 6, 2, 2, 3, 3 ],
    seasonHighlights: [
      "6 mål på kontring mot Byåsen"
    ]
  },
  {
    id: 123,
    name: "Evita Naper Lindberget",
    slug: "evita-naper-lindberget",
    teamId: 6,
    position: "Bakspiller",
    jerseyNumber: 21,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY0NzU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjgxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RU48L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 53,
      shots: 211,
      shootingPercent: 25,
      assists: 55,
      yellowCards: 5,
      twoMin: 6,
      redCards: 0,
      mepScore: 6
    },
    formCurve: [ 7, 2, 10, 5, 9, 5, 5, 0, 7, 5 ],
    seasonHighlights: [
      "9 målgivende mot Molde",
      "6 målgivende mot Fana"
    ]
  },
  {
    id: 124,
    name: "Emma Gloppestad",
    slug: "emma-gloppestad",
    teamId: 6,
    position: "VenstreKant",
    jerseyNumber: 22,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmU4NmRlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RUc8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 97,
      shots: 105,
      shootingPercent: 92,
      assists: 59,
      yellowCards: 4,
      twoMin: 0,
      redCards: 0,
      mepScore: 6.1
    },
    formCurve: [ 6, 6, 3, 1, 2, 3, 0, 7, 3, 0 ],
    seasonHighlights: [
      "Lynrask kontring mot Tertnes"
    ]
  },
  {
    id: 125,
    name: "Sara Osen Tefre",
    slug: "sara-osen-tefre",
    teamId: 6,
    position: "HoyreKant",
    jerseyNumber: 23,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U088L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 119,
      shots: 238,
      shootingPercent: 50,
      assists: 64,
      yellowCards: 3,
      twoMin: 5,
      redCards: 0,
      mepScore: 7.1
    },
    formCurve: [ 3, 8, 2, 7, 7, 6, 3, 6, 6, 0 ],
    seasonHighlights: [
      "10 mål mot Molde",
      "Lynrask kontring mot Molde"
    ]
  },
  {
    id: 126,
    name: "Andrea Varvin Fredriksen",
    slug: "andrea-varvin-fredriksen",
    teamId: 6,
    position: "VenstreKant",
    jerseyNumber: 24,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkMmQzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDFhM2E0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QVY8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 50,
      shots: 250,
      shootingPercent: 20,
      assists: 54,
      yellowCards: 5,
      twoMin: 2,
      redCards: 0,
      mepScore: 5.3
    },
    formCurve: [ 8, 1, 5, 8, 4, 1, 6, 2, 6, 5 ],
    seasonHighlights: [
      "8 mål på kontring mot Molde",
      "5 mål mot Fana",
      "9 mål på kontring mot Tertnes"
    ]
  },
  {
    id: 127,
    name: "Aurora Kjellevold Hatle",
    slug: "aurora-kjellevold-hatle",
    teamId: 6,
    position: "VenstreKant",
    jerseyNumber: 27,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QUs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 159,
      shots: 229,
      shootingPercent: 69,
      assists: 68,
      yellowCards: 2,
      twoMin: 6,
      redCards: 0,
      mepScore: 6.9
    },
    formCurve: [ 5, 5, 2, 8, 5, 8, 2, 7, 8, 2 ],
    seasonHighlights: [
      "9 mål mot Molde",
      "11 mål mot Fredrikstad"
    ]
  },
  {
    id: 128,
    name: "Haya Elhanafi",
    slug: "haya-elhanafi",
    teamId: 6,
    position: "Keeper",
    jerseyNumber: 40,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmU4NmRlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SEU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 5,
      shots: 29,
      shootingPercent: 0,
      assists: 8,
      yellowCards: 5,
      twoMin: 4,
      redCards: 0,
      mepScore: 6.4,
      saves: 195
    },
    formCurve: [ 2, 2, 4, 0, 2, 3, 2, 2, 1, 1 ],
    seasonHighlights: [
      "7 redninger mot Tertnes"
    ]
  },
  {
    id: 129,
    name: "Maren Austmo Pedersen",
    slug: "maren-austmo-pedersen",
    teamId: 7,
    position: "Keeper",
    jerseyNumber: 1,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 1,
      shots: 6,
      shootingPercent: 0,
      assists: 6,
      yellowCards: 0,
      twoMin: 4,
      redCards: 1,
      mepScore: 8.9,
      saves: 343
    },
    formCurve: [ 2, 1, 0, 2, 0, 0, 1, 2, 0, 0 ],
    seasonHighlights: [
      "Kampens spiller mot Fredrikstad"
    ]
  },
  {
    id: 130,
    name: "Ine Fremo",
    slug: "ine-fremo",
    teamId: 7,
    position: "Bakspiller",
    jerseyNumber: 3,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTc0YzNjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SUY8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 178,
      shots: 196,
      shootingPercent: 91,
      assists: 72,
      yellowCards: 1,
      twoMin: 4,
      redCards: 0,
      mepScore: 7.5
    },
    formCurve: [ 11, 0, 3, 6, 7, 0, 5, 2, 11, 3 ],
    seasonHighlights: [
      "Hattrick mot Fana",
      "Hattrick mot Larvik",
      "Hattrick mot Fredrikstad"
    ]
  },
  {
    id: 131,
    name: "Mathilde Arnstad",
    slug: "mathilde-arnstad",
    teamId: 7,
    position: "Linje",
    jerseyNumber: 4,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZWU1YTI0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 114,
      shots: 202,
      shootingPercent: 56,
      assists: 18,
      yellowCards: 2,
      twoMin: 1,
      redCards: 0,
      mepScore: 6.8
    },
    formCurve: [ 3, 2, 1, 5, 0, 2, 4, 4, 1, 4 ],
    seasonHighlights: [
      "Sterk duellspiller mot Larvik",
      "10 målgivende mot Vipers"
    ]
  },
  {
    id: 132,
    name: "Dina Salih",
    slug: "dina-salih",
    teamId: 7,
    position: "VenstreKant",
    jerseyNumber: 5,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTM1MmVkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RFM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 118,
      shots: 188,
      shootingPercent: 63,
      assists: 48,
      yellowCards: 4,
      twoMin: 3,
      redCards: 1,
      mepScore: 7.5
    },
    formCurve: [ 4, 4, 3, 1, 2, 2, 8, 2, 1, 2 ],
    seasonHighlights: [
      "Kampens spiller mot Fana",
      "Lynrask kontring mot Larvik"
    ]
  },
  {
    id: 133,
    name: "Janne Charlotte Thoresen Nordnes",
    slug: "janne-charlotte-thoresen-nordnes",
    teamId: 7,
    position: "Linje",
    jerseyNumber: 7,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZhNTAyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SkM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 133,
      shots: 143,
      shootingPercent: 93,
      assists: 26,
      yellowCards: 4,
      twoMin: 4,
      redCards: 0,
      mepScore: 5.6
    },
    formCurve: [ 3, 2, 1, 7, 1, 3, 4, 7, 6, 2 ],
    seasonHighlights: [
      "Kampens spiller mot Tertnes",
      "8 målgivende mot Molde",
      "9 mål fra linja mot Byåsen"
    ]
  },
  {
    id: 134,
    name: "Hedda Lauvås Aasen",
    slug: "hedda-lauvas-aasen",
    teamId: 7,
    position: "HoyreKant",
    jerseyNumber: 9,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SEw8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 90,
      shots: 152,
      shootingPercent: 59,
      assists: 20,
      yellowCards: 3,
      twoMin: 3,
      redCards: 0,
      mepScore: 5.8
    },
    formCurve: [ 3, 0, 6, 4, 7, 6, 3, 4, 7, 5 ],
    seasonHighlights: [
      "Toppscorer uke 10",
      "6 mål på kontring mot Sola"
    ]
  },
  {
    id: 135,
    name: "Silje Katrine Waade",
    slug: "silje-katrine-waade",
    teamId: 7,
    position: "HoyreKant",
    jerseyNumber: 10,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZWU1YTI0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0s8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 40,
      shots: 229,
      shootingPercent: 17,
      assists: 18,
      yellowCards: 1,
      twoMin: 0,
      redCards: 1,
      mepScore: 6.5
    },
    formCurve: [ 6, 4, 1, 5, 8, 3, 3, 10, 8, 8 ],
    seasonHighlights: [
      "Kampens spiller mot Fredrikstad"
    ]
  },
  {
    id: 136,
    name: "Frida Molaup Selnes",
    slug: "frida-molaup-selnes",
    teamId: 7,
    position: "Keeper",
    jerseyNumber: 12,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNDhkYmZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGFiZGUzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Rk08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 4,
      shots: 16,
      shootingPercent: 0,
      assists: 7,
      yellowCards: 5,
      twoMin: 4,
      redCards: 0,
      mepScore: 8.9,
      saves: 252
    },
    formCurve: [ 0, 0, 0, 1, 2, 0, 0, 2, 2, 1 ],
    seasonHighlights: [
      "Kampens spiller mot Sola",
      "Nullet Larvik i 10 minutter"
    ]
  },
  {
    id: 137,
    name: "Helene Lovise Wesche-Rø",
    slug: "helene-lovise-wesche-ro",
    teamId: 7,
    position: "Linje",
    jerseyNumber: 13,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZhNTAyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SEw8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 35,
      shots: 95,
      shootingPercent: 37,
      assists: 57,
      yellowCards: 5,
      twoMin: 3,
      redCards: 0,
      mepScore: 7.1
    },
    formCurve: [ 6, 4, 9, 7, 6, 4, 7, 7, 0, 5 ],
    seasonHighlights: [
      "Kampens spiller mot Vipers",
      "Sterk duellspiller mot Tertnes",
      "4 mål fra linja mot Molde"
    ]
  },
  {
    id: 138,
    name: "Andrea Austmo Pedersen",
    slug: "andrea-austmo-pedersen",
    teamId: 7,
    position: "Keeper",
    jerseyNumber: 16,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QUE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 5,
      shots: 11,
      shootingPercent: 0,
      assists: 5,
      yellowCards: 0,
      twoMin: 7,
      redCards: 0,
      mepScore: 6,
      saves: 185
    },
    formCurve: [ 2, 1, 1, 0, 0, 0, 5, 0, 0, 1 ],
    seasonHighlights: [
      "Kampens spiller mot Molde",
      "Beste keeper i Vipers-kampen"
    ]
  },
  {
    id: 139,
    name: "Janne Håvelsrud Eklo",
    slug: "janne-havelsrud-eklo",
    teamId: 7,
    position: "VenstreKant",
    jerseyNumber: 17,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZWU1YTI0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Skg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 107,
      shots: 192,
      shootingPercent: 56,
      assists: 16,
      yellowCards: 4,
      twoMin: 7,
      redCards: 0,
      mepScore: 5.4
    },
    formCurve: [ 1, 7, 1, 5, 6, 7, 0, 8, 8, 8 ],
    seasonHighlights: [
      "Lynrask kontring mot Vipers"
    ]
  },
  {
    id: 140,
    name: "Marte Lausund Nornes",
    slug: "marte-lausund-nornes",
    teamId: 7,
    position: "Bakspiller",
    jerseyNumber: 18,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUw8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 199,
      shots: 212,
      shootingPercent: 94,
      assists: 47,
      yellowCards: 2,
      twoMin: 7,
      redCards: 0,
      mepScore: 7.9
    },
    formCurve: [ 12, 8, 6, 3, 8, 10, 4, 4, 0, 10 ],
    seasonHighlights: [
      "12 målgivende mot Sola",
      "10 mål mot Fredrikstad"
    ]
  },
  {
    id: 141,
    name: "Mathea Enger",
    slug: "mathea-enger",
    teamId: 7,
    position: "HoyreKant",
    jerseyNumber: 19,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY0NzU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjgxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 123,
      shots: 259,
      shootingPercent: 47,
      assists: 34,
      yellowCards: 4,
      twoMin: 2,
      redCards: 0,
      mepScore: 5.6
    },
    formCurve: [ 4, 3, 2, 7, 2, 7, 8, 8, 4, 5 ],
    seasonHighlights: [
      "12 mål på kontring mot Storhamar",
      "Toppscorer uke 22"
    ]
  },
  {
    id: 142,
    name: "Fride Lunne Mastad",
    slug: "fride-lunne-mastad",
    teamId: 7,
    position: "Bakspiller",
    jerseyNumber: 20,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN2JlZDlmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzBhMWZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Rkw8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 136,
      shots: 244,
      shootingPercent: 56,
      assists: 51,
      yellowCards: 2,
      twoMin: 7,
      redCards: 0,
      mepScore: 7.2
    },
    formCurve: [ 2, 0, 7, 8, 8, 5, 10, 7, 10, 2 ],
    seasonHighlights: [
      "Kampens spiller mot Molde",
      "9 mål mot Tertnes"
    ]
  },
  {
    id: 143,
    name: "Malin Smevik Dahl",
    slug: "malin-smevik-dahl",
    teamId: 7,
    position: "HoyreKant",
    jerseyNumber: 21,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTc0YzNjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 157,
      shots: 212,
      shootingPercent: 74,
      assists: 58,
      yellowCards: 3,
      twoMin: 6,
      redCards: 0,
      mepScore: 5.3
    },
    formCurve: [ 4, 7, 5, 5, 4, 9, 1, 7, 3, 6 ],
    seasonHighlights: [
      "8 mål mot Larvik",
      "10 mål mot Sola",
      "Kampens spiller mot Vipers"
    ]
  },
  {
    id: 144,
    name: "Freja Emilie Vinther Christensen",
    slug: "freja-emilie-vinther-christensen",
    teamId: 7,
    position: "VenstreKant",
    jerseyNumber: 22,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RkU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 152,
      shots: 166,
      shootingPercent: 92,
      assists: 18,
      yellowCards: 2,
      twoMin: 0,
      redCards: 0,
      mepScore: 5
    },
    formCurve: [ 0, 2, 6, 4, 2, 3, 6, 5, 0, 1 ],
    seasonHighlights: [
      "Lynrask kontring mot Molde"
    ]
  },
  {
    id: 145,
    name: "Sofie Sandø Kleiven",
    slug: "sofie-sando-kleiven",
    teamId: 7,
    position: "HoyreKant",
    jerseyNumber: 23,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U1M8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 47,
      shots: 152,
      shootingPercent: 31,
      assists: 24,
      yellowCards: 5,
      twoMin: 0,
      redCards: 0,
      mepScore: 7
    },
    formCurve: [ 4, 6, 8, 2, 6, 0, 10, 2, 4, 8 ],
    seasonHighlights: [
      "5 mål på kontring mot Storhamar",
      "8 mål på kontring mot Byåsen"
    ]
  },
  {
    id: 146,
    name: "Pernille Rø",
    slug: "pernille-ro",
    teamId: 7,
    position: "Keeper",
    jerseyNumber: 24,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZWU1YTI0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+UFI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 2,
      shots: 4,
      shootingPercent: 0,
      assists: 13,
      yellowCards: 5,
      twoMin: 4,
      redCards: 0,
      mepScore: 7.4,
      saves: 180
    },
    formCurve: [ 0, 2, 2, 2, 2, 5, 0, 1, 1, 2 ],
    seasonHighlights: [
      "Kampens spiller mot Storhamar",
      "Beste keeper i Fredrikstad-kampen"
    ]
  },
  {
    id: 147,
    name: "Johanna Dahl Haugan",
    slug: "johanna-dahl-haugan",
    teamId: 7,
    position: "VenstreKant",
    jerseyNumber: 25,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNDhkYmZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGFiZGUzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SkQ8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 88,
      shots: 127,
      shootingPercent: 69,
      assists: 66,
      yellowCards: 5,
      twoMin: 7,
      redCards: 0,
      mepScore: 6.9
    },
    formCurve: [ 3, 8, 5, 4, 8, 3, 3, 6, 9, 5 ],
    seasonHighlights: [
      "Lynrask kontring mot Sola",
      "Lynrask kontring mot Vipers"
    ]
  },
  {
    id: 148,
    name: "Kristin Nordløkken Kounchou",
    slug: "kristin-nordlokken-kounchou",
    teamId: 7,
    position: "VenstreKant",
    jerseyNumber: 26,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+S048L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 113,
      shots: 127,
      shootingPercent: 89,
      assists: 63,
      yellowCards: 1,
      twoMin: 4,
      redCards: 0,
      mepScore: 7.1
    },
    formCurve: [ 8, 1, 1, 1, 8, 8, 2, 0, 3, 1 ],
    seasonHighlights: [
      "8 mål mot Sola",
      "Lynrask kontring mot Fana",
      "Kampens spiller mot Sola"
    ]
  },
  {
    id: 149,
    name: "Emma Henden Foosnæs",
    slug: "emma-henden-foosnaes",
    teamId: 7,
    position: "HoyreKant",
    jerseyNumber: 27,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM5YzEyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RUg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 105,
      shots: 169,
      shootingPercent: 62,
      assists: 77,
      yellowCards: 5,
      twoMin: 6,
      redCards: 0,
      mepScore: 6.3
    },
    formCurve: [ 1, 5, 7, 7, 1, 4, 2, 5, 4, 1 ],
    seasonHighlights: [
      "11 mål på kontring mot Fana",
      "8 mål på kontring mot Fredrikstad"
    ]
  },
  {
    id: 150,
    name: "Live Sønstebø",
    slug: "live-sonstebo",
    teamId: 7,
    position: "Linje",
    jerseyNumber: 28,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY0NzU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjgxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TFM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 128,
      shots: 145,
      shootingPercent: 88,
      assists: 17,
      yellowCards: 4,
      twoMin: 6,
      redCards: 0,
      mepScore: 6.6
    },
    formCurve: [ 4, 4, 5, 2, 5, 4, 5, 6, 5, 6 ],
    seasonHighlights: [
      "10 målgivende mot Larvik",
      "Sterk duellspiller mot Sola"
    ]
  },
  {
    id: 151,
    name: "Hanne Ramsøskar Sagvold",
    slug: "hanne-ramsoskar-sagvold",
    teamId: 8,
    position: "Keeper",
    jerseyNumber: 1,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNDhkYmZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGFiZGUzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SFI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 6,
      shots: 10,
      shootingPercent: 0,
      assists: 9,
      yellowCards: 1,
      twoMin: 5,
      redCards: 0,
      mepScore: 7.8,
      saves: 186
    },
    formCurve: [ 0, 1, 2, 0, 1, 2, 1, 1, 0, 2 ],
    seasonHighlights: [
      "Redningsprosent 49% mot Sola",
      "Beste keeper i Larvik-kampen",
      "5 redninger mot Vipers"
    ]
  },
  {
    id: 152,
    name: "Zara Johnsson Solberg",
    slug: "zara-johnsson-solberg",
    teamId: 8,
    position: "Bakspiller",
    jerseyNumber: 2,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Wko8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 167,
      shots: 250,
      shootingPercent: 67,
      assists: 107,
      yellowCards: 0,
      twoMin: 7,
      redCards: 0,
      mepScore: 6.5
    },
    formCurve: [ 8, 7, 4, 3, 8, 0, 10, 0, 7, 6 ],
    seasonHighlights: [
      "7-meter spesialist: 8 mål",
      "Kampens spiller mot Vipers",
      "Hattrick mot Vipers"
    ]
  },
  {
    id: 153,
    name: "Maja Eiberg",
    slug: "maja-eiberg",
    teamId: 8,
    position: "VenstreKant",
    jerseyNumber: 5,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZWU1YTI0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 98,
      shots: 248,
      shootingPercent: 40,
      assists: 24,
      yellowCards: 0,
      twoMin: 7,
      redCards: 0,
      mepScore: 6.8
    },
    formCurve: [ 8, 5, 1, 6, 8, 3, 8, 3, 6, 2 ],
    seasonHighlights: [
      "10 mål mot Storhamar",
      "4 mål mot Vipers",
      "Lynrask kontring mot Vipers"
    ]
  },
  {
    id: 154,
    name: "Sofia Shauri Dalsveen",
    slug: "sofia-shauri-dalsveen",
    teamId: 8,
    position: "VenstreKant",
    jerseyNumber: 7,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkMmQzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDFhM2E0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U1M8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 138,
      shots: 192,
      shootingPercent: 72,
      assists: 21,
      yellowCards: 4,
      twoMin: 5,
      redCards: 0,
      mepScore: 7.1
    },
    formCurve: [ 3, 4, 4, 8, 5, 8, 9, 6, 2, 4 ],
    seasonHighlights: [
      "Lynrask kontring mot Tertnes",
      "Kampens spiller mot Vipers"
    ]
  },
  {
    id: 155,
    name: "Thea Andresen",
    slug: "thea-andresen",
    teamId: 8,
    position: "Bakspiller",
    jerseyNumber: 10,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmVkNTczIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU5MGZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VEE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 111,
      shots: 372,
      shootingPercent: 30,
      assists: 62,
      yellowCards: 1,
      twoMin: 0,
      redCards: 1,
      mepScore: 6.9
    },
    formCurve: [ 2, 10, 4, 7, 9, 6, 2, 4, 6, 6 ],
    seasonHighlights: [
      "10-meter spesialist: 7 mål"
    ]
  },
  {
    id: 156,
    name: "Hanna Blystad",
    slug: "hanna-blystad",
    teamId: 8,
    position: "VenstreKant",
    jerseyNumber: 11,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZhNTAyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SEI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 123,
      shots: 144,
      shootingPercent: 85,
      assists: 37,
      yellowCards: 2,
      twoMin: 5,
      redCards: 0,
      mepScore: 7.5
    },
    formCurve: [ 5, 8, 2, 6, 8, 12, 5, 11, 8, 5 ],
    seasonHighlights: [
      "Lynrask kontring mot Larvik",
      "Toppscorer uke 23"
    ]
  },
  {
    id: 157,
    name: "Mathilde Berner Rømer",
    slug: "mathilde-berner-romer",
    teamId: 8,
    position: "Keeper",
    jerseyNumber: 12,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 3,
      shots: 17,
      shootingPercent: 0,
      assists: 7,
      yellowCards: 5,
      twoMin: 5,
      redCards: 0,
      mepScore: 7.2,
      saves: 283
    },
    formCurve: [ 1, 6, 0, 1, 0, 0, 1, 5, 2, 0 ],
    seasonHighlights: [
      "Nullet Sola i 10 minutter",
      "Nullet Vipers i 10 minutter",
      "Nullet Molde i 10 minutter"
    ]
  },
  {
    id: 158,
    name: "Emily Solberg",
    slug: "emily-solberg",
    teamId: 8,
    position: "HoyreKant",
    jerseyNumber: 13,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmVkNTczIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU5MGZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 71,
      shots: 231,
      shootingPercent: 31,
      assists: 15,
      yellowCards: 5,
      twoMin: 3,
      redCards: 0,
      mepScore: 7.3
    },
    formCurve: [ 6, 8, 2, 1, 6, 1, 3, 8, 6, 0 ],
    seasonHighlights: [
      "6 mål på kontring mot Fana",
      "Toppscorer uke 22"
    ]
  },
  {
    id: 159,
    name: "Kristin Dorthea Eskerud",
    slug: "kristin-dorthea-eskerud",
    teamId: 8,
    position: "Linje",
    jerseyNumber: 18,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+S0Q8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 55,
      shots: 74,
      shootingPercent: 74,
      assists: 10,
      yellowCards: 2,
      twoMin: 3,
      redCards: 0,
      mepScore: 5.9
    },
    formCurve: [ 4, 8, 5, 6, 3, 6, 2, 4, 1, 7 ],
    seasonHighlights: [
      "Kampens spiller mot Storhamar",
      "7 målgivende mot Byåsen"
    ]
  },
  {
    id: 160,
    name: "Oda Ragnhild Bekker Olsen",
    slug: "oda-ragnhild-bekker-olsen",
    teamId: 8,
    position: "Linje",
    jerseyNumber: 19,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+T1I8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 85,
      shots: 130,
      shootingPercent: 65,
      assists: 59,
      yellowCards: 1,
      twoMin: 5,
      redCards: 0,
      mepScore: 7.5
    },
    formCurve: [ 0, 7, 6, 1, 5, 9, 5, 7, 5, 5 ],
    seasonHighlights: [
      "6 mål fra linja mot Fana",
      "Kampens spiller mot Byåsen",
      "10 mål fra linja mot Storhamar"
    ]
  },
  {
    id: 161,
    name: "Maren Hansen Tangen",
    slug: "maren-hansen-tangen",
    teamId: 8,
    position: "HoyreKant",
    jerseyNumber: 21,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTc0YzNjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 123,
      shots: 219,
      shootingPercent: 56,
      assists: 68,
      yellowCards: 1,
      twoMin: 0,
      redCards: 0,
      mepScore: 5.6
    },
    formCurve: [ 8, 7, 1, 9, 4, 1, 3, 8, 7, 4 ],
    seasonHighlights: [
      "8 mål mot Tertnes",
      "Lynrask kontring mot Molde",
      "Lynrask kontring mot Byåsen"
    ]
  },
  {
    id: 162,
    name: "Anniken Maria Monsen",
    slug: "anniken-maria-monsen",
    teamId: 8,
    position: "Bakspiller",
    jerseyNumber: 25,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN2JlZDlmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzBhMWZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QU08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 99,
      shots: 110,
      shootingPercent: 90,
      assists: 54,
      yellowCards: 4,
      twoMin: 6,
      redCards: 0,
      mepScore: 6.8
    },
    formCurve: [ 13, 8, 11, 11, 5, 0, 3, 9, 3, 9 ],
    seasonHighlights: [
      "Hattrick mot Larvik",
      "4 mål mot Storhamar",
      "10 målgivende mot Tertnes"
    ]
  },
  {
    id: 163,
    name: "Magdele Kvarving Sandtrø",
    slug: "magdele-kvarving-sandtro",
    teamId: 8,
    position: "HoyreKant",
    jerseyNumber: 27,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzQ0NTY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 67,
      shots: 252,
      shootingPercent: 27,
      assists: 34,
      yellowCards: 0,
      twoMin: 0,
      redCards: 0,
      mepScore: 6
    },
    formCurve: [ 2, 10, 8, 0, 5, 4, 6, 7, 2, 2 ],
    seasonHighlights: [
      "Kampens spiller mot Fredrikstad"
    ]
  },
  {
    id: 164,
    name: "Malene Hansen Tangen",
    slug: "malene-hansen-tangen",
    teamId: 8,
    position: "VenstreKant",
    jerseyNumber: 30,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 136,
      shots: 145,
      shootingPercent: 94,
      assists: 34,
      yellowCards: 5,
      twoMin: 5,
      redCards: 0,
      mepScore: 7.8
    },
    formCurve: [ 5, 2, 0, 1, 7, 6, 7, 7, 6, 2 ],
    seasonHighlights: [
      "Lynrask kontring mot Larvik",
      "Kampens spiller mot Tertnes",
      "8 mål mot Fana"
    ]
  },
  {
    id: 165,
    name: "Regine Nekstad",
    slug: "regine-nekstad",
    teamId: 8,
    position: "VenstreKant",
    jerseyNumber: 45,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Uk48L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 77,
      shots: 98,
      shootingPercent: 79,
      assists: 78,
      yellowCards: 2,
      twoMin: 5,
      redCards: 0,
      mepScore: 6.6
    },
    formCurve: [ 7, 1, 3, 5, 6, 0, 5, 8, 6, 11 ],
    seasonHighlights: [
      "8 mål mot Fredrikstad"
    ]
  },
  {
    id: 166,
    name: "Martine Guterud Helland",
    slug: "martine-guterud-helland",
    teamId: 8,
    position: "Linje",
    jerseyNumber: 72,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM5YzEyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUc8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 109,
      shots: 161,
      shootingPercent: 68,
      assists: 61,
      yellowCards: 1,
      twoMin: 2,
      redCards: 0,
      mepScore: 6.6
    },
    formCurve: [ 2, 2, 3, 5, 1, 2, 4, 0, 1, 7 ],
    seasonHighlights: [
      "Dominerende forsvarsspiller mot Fana"
    ]
  },
  {
    id: 167,
    name: "Alberte Ebler",
    slug: "alberte-ebler",
    teamId: 8,
    position: "HoyreKant",
    jerseyNumber: 77,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzQ0NTY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QUU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 82,
      shots: 201,
      shootingPercent: 41,
      assists: 18,
      yellowCards: 2,
      twoMin: 6,
      redCards: 0,
      mepScore: 6.3
    },
    formCurve: [ 6, 1, 6, 8, 8, 6, 4, 8, 6, 8 ],
    seasonHighlights: [
      "Lynrask kontring mot Vipers",
      "Toppscorer uke 16",
      "9 mål på kontring mot Byåsen"
    ]
  },
  {
    id: 168,
    name: "Vilde Amalie Klaussen",
    slug: "vilde-amalie-klaussen",
    teamId: 9,
    position: "Keeper",
    jerseyNumber: 1,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZhNTAyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VkE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 0,
      shots: 1,
      shootingPercent: 0,
      assists: 4,
      yellowCards: 4,
      twoMin: 1,
      redCards: 1,
      mepScore: 8.5,
      saves: 146
    },
    formCurve: [ 2, 3, 0, 1, 1, 6, 0, 2, 2, 0 ],
    seasonHighlights: [
      "Nullet Fredrikstad i 10 minutter",
      "Beste keeper i Fana-kampen"
    ]
  },
  {
    id: 169,
    name: "Oda Olsen",
    slug: "oda-olsen",
    teamId: 9,
    position: "Bakspiller",
    jerseyNumber: 2,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzQ0NTY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+T088L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 74,
      shots: 134,
      shootingPercent: 55,
      assists: 117,
      yellowCards: 4,
      twoMin: 3,
      redCards: 0,
      mepScore: 6.5
    },
    formCurve: [ 6, 2, 3, 0, 10, 5, 10, 5, 4, 5 ],
    seasonHighlights: [
      "6 mål mot Fana",
      "7-meter spesialist: 9 mål",
      "5 målgivende mot Fana"
    ]
  },
  {
    id: 170,
    name: "Lea Tidemann Stenvik",
    slug: "lea-tidemann-stenvik",
    teamId: 9,
    position: "Bakspiller",
    jerseyNumber: 4,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TFQ8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 70,
      shots: 383,
      shootingPercent: 18,
      assists: 53,
      yellowCards: 2,
      twoMin: 1,
      redCards: 0,
      mepScore: 6.2
    },
    formCurve: [ 4, 8, 8, 0, 9, 7, 9, 9, 4, 10 ],
    seasonHighlights: [
      "8 målgivende mot Vipers"
    ]
  },
  {
    id: 171,
    name: "Hannah Kjelstad Høsøien",
    slug: "hannah-kjelstad-hosoien",
    teamId: 9,
    position: "Bakspiller",
    jerseyNumber: 5,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmU4NmRlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SEs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 177,
      shots: 221,
      shootingPercent: 80,
      assists: 75,
      yellowCards: 2,
      twoMin: 6,
      redCards: 0,
      mepScore: 7.1
    },
    formCurve: [ 7, 13, 10, 0, 10, 7, 8, 4, 9, 10 ],
    seasonHighlights: [
      "12 målgivende mot Molde",
      "11 mål mot Fana",
      "Toppscorer uke 23"
    ]
  },
  {
    id: 172,
    name: "Oda Jeanette Burhol",
    slug: "oda-jeanette-burhol",
    teamId: 9,
    position: "VenstreKant",
    jerseyNumber: 6,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM5YzEyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+T0o8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 123,
      shots: 207,
      shootingPercent: 59,
      assists: 61,
      yellowCards: 5,
      twoMin: 5,
      redCards: 0,
      mepScore: 5.1
    },
    formCurve: [ 6, 6, 7, 5, 5, 2, 0, 3, 3, 1 ],
    seasonHighlights: [
      "Toppscorer uke 10",
      "Lynrask kontring mot Fredrikstad"
    ]
  },
  {
    id: 173,
    name: "Ingeborg Rolseth Holt",
    slug: "ingeborg-rolseth-holt",
    teamId: 9,
    position: "Bakspiller",
    jerseyNumber: 7,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZWU1YTI0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SVI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 92,
      shots: 107,
      shootingPercent: 86,
      assists: 25,
      yellowCards: 3,
      twoMin: 6,
      redCards: 1,
      mepScore: 8.8
    },
    formCurve: [ 3, 6, 9, 4, 10, 11, 3, 4, 3, 4 ],
    seasonHighlights: [
      "10 mål mot Tertnes",
      "Kampens spiller mot Fana",
      "4 målgivende mot Sola"
    ]
  },
  {
    id: 174,
    name: "Henriette Jarnang",
    slug: "henriette-jarnang",
    teamId: 9,
    position: "HoyreKant",
    jerseyNumber: 8,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SEo8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 67,
      shots: 93,
      shootingPercent: 72,
      assists: 53,
      yellowCards: 0,
      twoMin: 1,
      redCards: 0,
      mepScore: 5
    },
    formCurve: [ 4, 1, 8, 7, 6, 4, 1, 5, 8, 7 ],
    seasonHighlights: [
      "6 mål mot Byåsen"
    ]
  },
  {
    id: 175,
    name: "Hedda Skjelbreid Rønningen",
    slug: "hedda-skjelbreid-ronningen",
    teamId: 9,
    position: "Bakspiller",
    jerseyNumber: 9,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SFM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 54,
      shots: 150,
      shootingPercent: 36,
      assists: 45,
      yellowCards: 4,
      twoMin: 0,
      redCards: 0,
      mepScore: 6.5
    },
    formCurve: [ 6, 4, 9, 8, 2, 4, 8, 3, 0, 11 ],
    seasonHighlights: [
      "5 målgivende mot Sola",
      "Toppscorer uke 24"
    ]
  },
  {
    id: 176,
    name: "Caroline Wikheim Aas",
    slug: "caroline-wikheim-aas",
    teamId: 9,
    position: "HoyreKant",
    jerseyNumber: 10,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Q1c8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 55,
      shots: 143,
      shootingPercent: 38,
      assists: 54,
      yellowCards: 5,
      twoMin: 7,
      redCards: 0,
      mepScore: 5.5
    },
    formCurve: [ 6, 3, 1, 6, 6, 3, 5, 6, 9, 4 ],
    seasonHighlights: [
      "Toppscorer uke 6",
      "Lynrask kontring mot Molde"
    ]
  },
  {
    id: 177,
    name: "Mia Kristin Vinje Horgøien",
    slug: "mia-kristin-vinje-horgoien",
    teamId: 9,
    position: "Linje",
    jerseyNumber: 11,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmU4NmRlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 136,
      shots: 146,
      shootingPercent: 93,
      assists: 41,
      yellowCards: 3,
      twoMin: 5,
      redCards: 0,
      mepScore: 7
    },
    formCurve: [ 4, 9, 2, 1, 3, 6, 3, 4, 7, 4 ],
    seasonHighlights: [
      "Sterk duellspiller mot Byåsen",
      "9 målgivende mot Larvik",
      "8 mål fra linja mot Larvik"
    ]
  },
  {
    id: 178,
    name: "Mia Stensland",
    slug: "mia-stensland",
    teamId: 9,
    position: "Keeper",
    jerseyNumber: 12,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 6,
      shots: 25,
      shootingPercent: 0,
      assists: 8,
      yellowCards: 4,
      twoMin: 1,
      redCards: 0,
      mepScore: 6.5,
      saves: 318
    },
    formCurve: [ 3, 1, 0, 0, 2, 5, 0, 0, 2, 2 ],
    seasonHighlights: [
      "Nullet Molde i 10 minutter"
    ]
  },
  {
    id: 179,
    name: "Viktoria Odinokova Eilertsen",
    slug: "viktoria-odinokova-eilertsen",
    teamId: 9,
    position: "Bakspiller",
    jerseyNumber: 13,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Vk88L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 83,
      shots: 219,
      shootingPercent: 38,
      assists: 119,
      yellowCards: 2,
      twoMin: 1,
      redCards: 0,
      mepScore: 7.7
    },
    formCurve: [ 10, 3, 9, 7, 5, 9, 4, 12, 10, 11 ],
    seasonHighlights: [
      "Hattrick mot Tertnes",
      "Hattrick mot Byåsen",
      "7 målgivende mot Fana"
    ]
  },
  {
    id: 180,
    name: "Linn Andresen",
    slug: "linn-andresen",
    teamId: 9,
    position: "Bakspiller",
    jerseyNumber: 15,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY0NzU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjgxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TEE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 165,
      shots: 180,
      shootingPercent: 92,
      assists: 60,
      yellowCards: 5,
      twoMin: 6,
      redCards: 0,
      mepScore: 6.1
    },
    formCurve: [ 9, 7, 7, 4, 10, 4, 5, 3, 2, 6 ],
    seasonHighlights: [
      "Toppscorer uke 23"
    ]
  },
  {
    id: 181,
    name: "Mia Tvedte Johannessen",
    slug: "mia-tvedte-johannessen",
    teamId: 9,
    position: "Keeper",
    jerseyNumber: 16,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY0NzU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjgxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TVQ8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 7,
      shots: 31,
      shootingPercent: 0,
      assists: 1,
      yellowCards: 3,
      twoMin: 5,
      redCards: 0,
      mepScore: 7.9,
      saves: 212
    },
    formCurve: [ 0, 1, 5, 1, 2, 2, 0, 2, 0, 2 ],
    seasonHighlights: [
      "Nullet Tertnes i 10 minutter",
      "Nullet Storhamar i 10 minutter",
      "Redningsprosent 35% mot Tertnes"
    ]
  },
  {
    id: 182,
    name: "Ingvild Bersås Westersjø",
    slug: "ingvild-bersas-westersjo",
    teamId: 9,
    position: "Linje",
    jerseyNumber: 17,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNDhkYmZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGFiZGUzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SUI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 44,
      shots: 92,
      shootingPercent: 48,
      assists: 69,
      yellowCards: 5,
      twoMin: 3,
      redCards: 0,
      mepScore: 6.4
    },
    formCurve: [ 1, 4, 5, 2, 6, 6, 7, 2, 4, 7 ],
    seasonHighlights: [
      "3 målgivende mot Vipers",
      "Dominerende forsvarsspiller mot Fredrikstad",
      "6 mål fra linja mot Byåsen"
    ]
  },
  {
    id: 183,
    name: "Anne Malin Antonsen",
    slug: "anne-malin-antonsen",
    teamId: 9,
    position: "Bakspiller",
    jerseyNumber: 18,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QU08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 122,
      shots: 289,
      shootingPercent: 42,
      assists: 33,
      yellowCards: 1,
      twoMin: 2,
      redCards: 0,
      mepScore: 9
    },
    formCurve: [ 0, 6, 3, 0, 4, 7, 4, 9, 0, 2 ],
    seasonHighlights: [
      "11-meter spesialist: 7 mål"
    ]
  },
  {
    id: 184,
    name: "Maja Rame",
    slug: "maja-rame",
    teamId: 9,
    position: "VenstreKant",
    jerseyNumber: 19,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TVI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 53,
      shots: 63,
      shootingPercent: 84,
      assists: 63,
      yellowCards: 0,
      twoMin: 1,
      redCards: 0,
      mepScore: 5.1
    },
    formCurve: [ 5, 6, 2, 7, 5, 6, 1, 0, 3, 8 ],
    seasonHighlights: [
      "Lynrask kontring mot Byåsen"
    ]
  },
  {
    id: 185,
    name: "Oda Kongssund",
    slug: "oda-kongssund",
    teamId: 9,
    position: "Bakspiller",
    jerseyNumber: 20,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmVkNTczIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU5MGZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+T0s8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 103,
      shots: 159,
      shootingPercent: 65,
      assists: 46,
      yellowCards: 3,
      twoMin: 4,
      redCards: 1,
      mepScore: 8.3
    },
    formCurve: [ 6, 8, 8, 8, 8, 7, 6, 7, 2, 6 ],
    seasonHighlights: [
      "8 mål mot Tertnes",
      "Hattrick mot Fana",
      "Toppscorer uke 10"
    ]
  },
  {
    id: 186,
    name: "Kaja Stavdal Bækkevar",
    slug: "kaja-stavdal-baekkevar",
    teamId: 9,
    position: "Linje",
    jerseyNumber: 24,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+S1M8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 57,
      shots: 238,
      shootingPercent: 24,
      assists: 43,
      yellowCards: 4,
      twoMin: 3,
      redCards: 1,
      mepScore: 7
    },
    formCurve: [ 4, 2, 1, 2, 3, 3, 3, 6, 2, 2 ],
    seasonHighlights: [
      "Kampens spiller mot Byåsen",
      "Sterk duellspiller mot Tertnes"
    ]
  },
  {
    id: 187,
    name: "Emma Christine Gudmundsen",
    slug: "emma-christine-gudmundsen",
    teamId: 9,
    position: "Linje",
    jerseyNumber: 29,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzQ0NTY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RUM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 137,
      shots: 155,
      shootingPercent: 88,
      assists: 67,
      yellowCards: 2,
      twoMin: 4,
      redCards: 0,
      mepScore: 5.2
    },
    formCurve: [ 7, 1, 4, 7, 4, 3, 6, 6, 7, 4 ],
    seasonHighlights: [
      "Dominerende forsvarsspiller mot Vipers",
      "Kampens spiller mot Byåsen",
      "Dominerende forsvarsspiller mot Larvik"
    ]
  },
  {
    id: 188,
    name: "Madeleine Bakke",
    slug: "madeleine-bakke",
    teamId: 9,
    position: "HoyreKant",
    jerseyNumber: 31,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 52,
      shots: 220,
      shootingPercent: 24,
      assists: 59,
      yellowCards: 4,
      twoMin: 1,
      redCards: 0,
      mepScore: 6.8
    },
    formCurve: [ 4, 3, 3, 5, 8, 5, 3, 6, 8, 4 ],
    seasonHighlights: [
      "Lynrask kontring mot Larvik",
      "3 mål mot Fredrikstad"
    ]
  },
  {
    id: 189,
    name: "Heidi Bildøy Østvold",
    slug: "heidi-bildoy-ostvold",
    teamId: 9,
    position: "Linje",
    jerseyNumber: 33,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTM1MmVkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SEI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 51,
      shots: 57,
      shootingPercent: 89,
      assists: 37,
      yellowCards: 3,
      twoMin: 6,
      redCards: 0,
      mepScore: 6.1
    },
    formCurve: [ 0, 4, 7, 4, 7, 4, 4, 1, 4, 2 ],
    seasonHighlights: [
      "Dominerende forsvarsspiller mot Molde",
      "Dominerende forsvarsspiller mot Larvik",
      "3 mål fra linja mot Vipers"
    ]
  },
  {
    id: 190,
    name: "Sofie Magdalena Plich",
    slug: "sofie-magdalena-plich",
    teamId: 9,
    position: "VenstreKant",
    jerseyNumber: 34,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U008L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 43,
      shots: 196,
      shootingPercent: 22,
      assists: 58,
      yellowCards: 2,
      twoMin: 5,
      redCards: 0,
      mepScore: 5
    },
    formCurve: [ 2, 8, 3, 4, 2, 1, 7, 7, 4, 2 ],
    seasonHighlights: [
      "Toppscorer uke 12",
      "Toppscorer uke 6",
      "Lynrask kontring mot Vipers"
    ]
  },
  {
    id: 191,
    name: "Tora Charlotte Tande-Elton",
    slug: "tora-charlotte-tande-elton",
    teamId: 10,
    position: "Keeper",
    jerseyNumber: 1,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmU4NmRlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VEM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 0,
      shots: 0,
      shootingPercent: 0,
      assists: 13,
      yellowCards: 5,
      twoMin: 6,
      redCards: 0,
      mepScore: 8.1,
      saves: 123
    },
    formCurve: [ 0, 1, 1, 2, 0, 2, 2, 0, 1, 0 ],
    seasonHighlights: [
      "Beste keeper i Byåsen-kampen"
    ]
  },
  {
    id: 192,
    name: "Celine Lyngholt-Osland",
    slug: "celine-lyngholt-osland",
    teamId: 10,
    position: "VenstreKant",
    jerseyNumber: 2,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZhNTAyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Q0w8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 101,
      shots: 151,
      shootingPercent: 67,
      assists: 18,
      yellowCards: 5,
      twoMin: 7,
      redCards: 0,
      mepScore: 7.6
    },
    formCurve: [ 3, 3, 2, 1, 6, 7, 4, 2, 4, 8 ],
    seasonHighlights: [
      "11 mål mot Sola",
      "10 mål på kontring mot Tertnes",
      "Kampens spiller mot Molde"
    ]
  },
  {
    id: 193,
    name: "Elisabeth Hammerstad",
    slug: "elisabeth-hammerstad",
    teamId: 10,
    position: "HoyreKant",
    jerseyNumber: 3,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTM1MmVkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RUg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 154,
      shots: 194,
      shootingPercent: 79,
      assists: 34,
      yellowCards: 0,
      twoMin: 5,
      redCards: 0,
      mepScore: 7.9
    },
    formCurve: [ 6, 11, 7, 7, 6, 4, 3, 7, 3, 7 ],
    seasonHighlights: [
      "Toppscorer uke 8",
      "10 mål på kontring mot Storhamar",
      "Kampens spiller mot Molde"
    ]
  },
  {
    id: 194,
    name: "Anette Sundfær Johnsen",
    slug: "anette-sundfaer-johnsen",
    teamId: 10,
    position: "HoyreKant",
    jerseyNumber: 4,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 78,
      shots: 125,
      shootingPercent: 62,
      assists: 43,
      yellowCards: 0,
      twoMin: 5,
      redCards: 0,
      mepScore: 6.6
    },
    formCurve: [ 7, 6, 5, 8, 6, 6, 4, 5, 7, 2 ],
    seasonHighlights: [
      "Toppscorer uke 4",
      "Lynrask kontring mot Sola"
    ]
  },
  {
    id: 195,
    name: "Oda Caroline Mørk",
    slug: "oda-caroline-mork",
    teamId: 10,
    position: "HoyreKant",
    jerseyNumber: 5,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY0NzU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjgxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+T0M8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 79,
      shots: 223,
      shootingPercent: 35,
      assists: 32,
      yellowCards: 5,
      twoMin: 2,
      redCards: 0,
      mepScore: 6
    },
    formCurve: [ 6, 7, 8, 0, 3, 1, 2, 6, 5, 3 ],
    seasonHighlights: [
      "Kampens spiller mot Larvik"
    ]
  },
  {
    id: 196,
    name: "Karen Linnestad Spone",
    slug: "karen-linnestad-spone",
    teamId: 10,
    position: "VenstreKant",
    jerseyNumber: 6,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmVkNTczIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU5MGZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+S0w8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 116,
      shots: 242,
      shootingPercent: 48,
      assists: 24,
      yellowCards: 2,
      twoMin: 2,
      redCards: 0,
      mepScore: 7.9
    },
    formCurve: [ 1, 3, 1, 4, 3, 3, 4, 0, 4, 6 ],
    seasonHighlights: [
      "Kampens spiller mot Larvik"
    ]
  },
  {
    id: 197,
    name: "Mari Myrland",
    slug: "mari-myrland",
    teamId: 10,
    position: "Bakspiller",
    jerseyNumber: 7,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TU08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 53,
      shots: 119,
      shootingPercent: 45,
      assists: 77,
      yellowCards: 2,
      twoMin: 5,
      redCards: 0,
      mepScore: 8.5
    },
    formCurve: [ 7, 8, 9, 12, 11, 8, 4, 13, 3, 10 ],
    seasonHighlights: [
      "7 mål mot Fredrikstad"
    ]
  },
  {
    id: 198,
    name: "Hanna Waaler Lindquist",
    slug: "hanna-waaler-lindquist",
    teamId: 10,
    position: "Linje",
    jerseyNumber: 8,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTc0YzNjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SFc8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 43,
      shots: 105,
      shootingPercent: 41,
      assists: 19,
      yellowCards: 0,
      twoMin: 2,
      redCards: 0,
      mepScore: 7.9
    },
    formCurve: [ 7, 3, 0, 3, 0, 6, 5, 4, 5, 11 ],
    seasonHighlights: [
      "9 målgivende mot Tertnes",
      "Kampens spiller mot Storhamar",
      "6 mål fra linja mot Tertnes"
    ]
  },
  {
    id: 199,
    name: "Aurora Solveig Kristiansen",
    slug: "aurora-solveig-kristiansen",
    teamId: 10,
    position: "Bakspiller",
    jerseyNumber: 9,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNDhkYmZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGFiZGUzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 64,
      shots: 172,
      shootingPercent: 37,
      assists: 54,
      yellowCards: 3,
      twoMin: 5,
      redCards: 0,
      mepScore: 8.1
    },
    formCurve: [ 7, 2, 9, 6, 4, 11, 10, 5, 4, 6 ],
    seasonHighlights: [
      "10 mål mot Molde",
      "Hattrick mot Sola"
    ]
  },
  {
    id: 200,
    name: "Iben Helland Flø",
    slug: "iben-helland-flo",
    teamId: 10,
    position: "VenstreKant",
    jerseyNumber: 10,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNDhkYmZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGFiZGUzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SUg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 150,
      shots: 190,
      shootingPercent: 79,
      assists: 37,
      yellowCards: 5,
      twoMin: 7,
      redCards: 0,
      mepScore: 6.8
    },
    formCurve: [ 8, 2, 8, 0, 8, 1, 4, 7, 8, 4 ],
    seasonHighlights: [
      "10 mål på kontring mot Molde"
    ]
  },
  {
    id: 201,
    name: "Sara Benedicte Fredheim Barbosa",
    slug: "sara-benedicte-fredheim-barbosa",
    teamId: 10,
    position: "Bakspiller",
    jerseyNumber: 11,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0I8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 128,
      shots: 359,
      shootingPercent: 36,
      assists: 20,
      yellowCards: 3,
      twoMin: 0,
      redCards: 0,
      mepScore: 7.4
    },
    formCurve: [ 7, 6, 6, 4, 3, 4, 5, 3, 9, 8 ],
    seasonHighlights: [
      "Hattrick mot Larvik",
      "Toppscorer uke 21"
    ]
  },
  {
    id: 202,
    name: "Margrethe Moen Kile",
    slug: "margrethe-moen-kile",
    teamId: 10,
    position: "Keeper",
    jerseyNumber: 12,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTc0YzNjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TU08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 3,
      shots: 6,
      shootingPercent: 0,
      assists: 7,
      yellowCards: 5,
      twoMin: 1,
      redCards: 0,
      mepScore: 5.7,
      saves: 339
    },
    formCurve: [ 1, 0, 0, 4, 1, 1, 1, 1, 2, 3 ],
    seasonHighlights: [
      "9 redninger mot Fredrikstad",
      "Nullet Fana i 10 minutter"
    ]
  },
  {
    id: 203,
    name: "Anette Rusten",
    slug: "anette-rusten",
    teamId: 10,
    position: "Linje",
    jerseyNumber: 14,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QVI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 68,
      shots: 82,
      shootingPercent: 83,
      assists: 58,
      yellowCards: 5,
      twoMin: 6,
      redCards: 1,
      mepScore: 6.4
    },
    formCurve: [ 4, 2, 4, 4, 1, 4, 2, 6, 4, 4 ],
    seasonHighlights: [
      "6 mål fra linja mot Molde"
    ]
  },
  {
    id: 204,
    name: "Tilde Alræk",
    slug: "tilde-alraek",
    teamId: 10,
    position: "Bakspiller",
    jerseyNumber: 15,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VEE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 154,
      shots: 324,
      shootingPercent: 48,
      assists: 77,
      yellowCards: 2,
      twoMin: 1,
      redCards: 0,
      mepScore: 8.7
    },
    formCurve: [ 4, 8, 5, 7, 7, 8, 6, 10, 10, 12 ],
    seasonHighlights: [
      "7-meter spesialist: 12 mål"
    ]
  },
  {
    id: 205,
    name: "Marte Sirén Figenschau",
    slug: "marte-siren-figenschau",
    teamId: 10,
    position: "Linje",
    jerseyNumber: 19,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 124,
      shots: 144,
      shootingPercent: 86,
      assists: 27,
      yellowCards: 2,
      twoMin: 7,
      redCards: 0,
      mepScore: 7.4
    },
    formCurve: [ 3, 6, 4, 6, 5, 4, 5, 4, 6, 0 ],
    seasonHighlights: [
      "9 målgivende mot Tertnes",
      "9 målgivende mot Molde"
    ]
  },
  {
    id: 206,
    name: "Andrea Landås Gabrielsen",
    slug: "andrea-landas-gabrielsen",
    teamId: 10,
    position: "VenstreKant",
    jerseyNumber: 20,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QUw8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 153,
      shots: 175,
      shootingPercent: 87,
      assists: 35,
      yellowCards: 3,
      twoMin: 7,
      redCards: 0,
      mepScore: 5.9
    },
    formCurve: [ 7, 2, 3, 7, 3, 7, 3, 0, 8, 4 ],
    seasonHighlights: [
      "12 mål på kontring mot Sola"
    ]
  },
  {
    id: 207,
    name: "Harrieth Toft Nordrum",
    slug: "harrieth-toft-nordrum",
    teamId: 10,
    position: "VenstreKant",
    jerseyNumber: 21,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SFQ8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 157,
      shots: 220,
      shootingPercent: 71,
      assists: 33,
      yellowCards: 2,
      twoMin: 6,
      redCards: 0,
      mepScore: 7
    },
    formCurve: [ 8, 0, 6, 8, 7, 8, 8, 3, 6, 4 ],
    seasonHighlights: [
      "9 mål mot Larvik"
    ]
  },
  {
    id: 208,
    name: "Hante Satu Hamel",
    slug: "hante-satu-hamel",
    teamId: 10,
    position: "Keeper",
    jerseyNumber: 22,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SFM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 7,
      shots: 8,
      shootingPercent: 0,
      assists: 5,
      yellowCards: 3,
      twoMin: 0,
      redCards: 0,
      mepScore: 6.1,
      saves: 258
    },
    formCurve: [ 6, 0, 2, 1, 2, 0, 0, 1, 2, 0 ],
    seasonHighlights: [
      "Redningsprosent 46% mot Molde"
    ]
  },
  {
    id: 209,
    name: "Emilie Hattestad",
    slug: "emilie-hattestad",
    teamId: 10,
    position: "HoyreKant",
    jerseyNumber: 23,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZWU1YTI0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RUg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 106,
      shots: 219,
      shootingPercent: 48,
      assists: 65,
      yellowCards: 2,
      twoMin: 3,
      redCards: 0,
      mepScore: 6.6
    },
    formCurve: [ 6, 9, 3, 1, 8, 0, 0, 6, 1, 7 ],
    seasonHighlights: [
      "11 mål på kontring mot Vipers",
      "Lynrask kontring mot Fana"
    ]
  },
  {
    id: 210,
    name: "Mia Holene Kvithyll",
    slug: "mia-holene-kvithyll",
    teamId: 10,
    position: "HoyreKant",
    jerseyNumber: 24,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTc0YzNjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 158,
      shots: 274,
      shootingPercent: 58,
      assists: 72,
      yellowCards: 1,
      twoMin: 2,
      redCards: 0,
      mepScore: 7.9
    },
    formCurve: [ 4, 2, 4, 6, 6, 2, 10, 8, 1, 6 ],
    seasonHighlights: [
      "Lynrask kontring mot Byåsen"
    ]
  },
  {
    id: 211,
    name: "Line Strand-Larsen",
    slug: "line-strand-larsen",
    teamId: 10,
    position: "VenstreKant",
    jerseyNumber: 25,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM5YzEyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TFM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 130,
      shots: 170,
      shootingPercent: 76,
      assists: 57,
      yellowCards: 2,
      twoMin: 0,
      redCards: 1,
      mepScore: 7.6
    },
    formCurve: [ 8, 8, 6, 4, 5, 5, 6, 1, 8, 0 ],
    seasonHighlights: [
      "Kampens spiller mot Fredrikstad",
      "Lynrask kontring mot Fana",
      "Lynrask kontring mot Storhamar"
    ]
  },
  {
    id: 212,
    name: "Mirela Gjikokaj",
    slug: "mirela-gjikokaj",
    teamId: 10,
    position: "VenstreKant",
    jerseyNumber: 77,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmVkNTczIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU5MGZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUc8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 41,
      shots: 206,
      shootingPercent: 20,
      assists: 46,
      yellowCards: 0,
      twoMin: 5,
      redCards: 1,
      mepScore: 6.4
    },
    formCurve: [ 1, 5, 5, 4, 0, 5, 3, 1, 1, 4 ],
    seasonHighlights: [
      "Lynrask kontring mot Fredrikstad"
    ]
  },
  {
    id: 213,
    name: "Martine Skudvig Mork",
    slug: "martine-skudvig-mork",
    teamId: 11,
    position: "Bakspiller",
    jerseyNumber: 2,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 41,
      shots: 329,
      shootingPercent: 12,
      assists: 88,
      yellowCards: 3,
      twoMin: 7,
      redCards: 0,
      mepScore: 7.8
    },
    formCurve: [ 2, 13, 5, 6, 0, 5, 0, 10, 10, 4 ],
    seasonHighlights: [
      "3 målgivende mot Larvik",
      "Hattrick mot Byåsen",
      "5 mål mot Vipers"
    ]
  },
  {
    id: 214,
    name: "Hanna Karoline Hernes Gåsvær",
    slug: "hanna-karoline-hernes-gasvaer",
    teamId: 11,
    position: "Bakspiller",
    jerseyNumber: 3,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZhNTAyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SEs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 122,
      shots: 382,
      shootingPercent: 32,
      assists: 119,
      yellowCards: 4,
      twoMin: 0,
      redCards: 0,
      mepScore: 7.3
    },
    formCurve: [ 7, 12, 8, 5, 7, 0, 5, 10, 4, 9 ],
    seasonHighlights: [
      "11 mål mot Molde",
      "Hattrick mot Tertnes"
    ]
  },
  {
    id: 215,
    name: "Mille Tveit Porsmyr",
    slug: "mille-tveit-porsmyr",
    teamId: 11,
    position: "Bakspiller",
    jerseyNumber: 5,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZhNTAyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TVQ8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 190,
      shots: 225,
      shootingPercent: 84,
      assists: 34,
      yellowCards: 3,
      twoMin: 5,
      redCards: 0,
      mepScore: 6.9
    },
    formCurve: [ 2, 10, 3, 6, 0, 0, 6, 11, 10, 9 ],
    seasonHighlights: [
      "8 målgivende mot Sola",
      "Toppscorer uke 26",
      "10 målgivende mot Fana"
    ]
  },
  {
    id: 216,
    name: "Mali Halldorsson",
    slug: "mali-halldorsson",
    teamId: 11,
    position: "VenstreKant",
    jerseyNumber: 6,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNDhkYmZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGFiZGUzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 90,
      shots: 182,
      shootingPercent: 49,
      assists: 43,
      yellowCards: 5,
      twoMin: 5,
      redCards: 0,
      mepScore: 6.8
    },
    formCurve: [ 5, 6, 8, 7, 3, 5, 2, 2, 8, 6 ],
    seasonHighlights: [
      "6 mål mot Tertnes"
    ]
  },
  {
    id: 217,
    name: "Emily Andersen",
    slug: "emily-andersen",
    teamId: 11,
    position: "Bakspiller",
    jerseyNumber: 7,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmVkNTczIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU5MGZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RUE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 179,
      shots: 189,
      shootingPercent: 95,
      assists: 28,
      yellowCards: 2,
      twoMin: 7,
      redCards: 0,
      mepScore: 8
    },
    formCurve: [ 6, 5, 3, 10, 11, 3, 3, 9, 4, 11 ],
    seasonHighlights: [
      "7-meter spesialist: 12 mål",
      "Hattrick mot Storhamar"
    ]
  },
  {
    id: 218,
    name: "Nora Løken",
    slug: "nora-loken",
    teamId: 11,
    position: "VenstreKant",
    jerseyNumber: 11,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Tkw8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 120,
      shots: 142,
      shootingPercent: 85,
      assists: 59,
      yellowCards: 2,
      twoMin: 3,
      redCards: 0,
      mepScore: 5.2
    },
    formCurve: [ 2, 0, 7, 8, 6, 4, 2, 2, 6, 3 ],
    seasonHighlights: [
      "Lynrask kontring mot Storhamar"
    ]
  },
  {
    id: 219,
    name: "Kristin Loraas Eiriksson",
    slug: "kristin-loraas-eiriksson",
    teamId: 11,
    position: "VenstreKant",
    jerseyNumber: 13,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzQ0NTY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+S0w8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 154,
      shots: 160,
      shootingPercent: 96,
      assists: 25,
      yellowCards: 3,
      twoMin: 3,
      redCards: 0,
      mepScore: 6.7
    },
    formCurve: [ 5, 4, 4, 3, 2, 2, 5, 4, 4, 7 ],
    seasonHighlights: [
      "Toppscorer uke 14",
      "10 mål mot Molde",
      "Kampens spiller mot Storhamar"
    ]
  },
  {
    id: 220,
    name: "Aleksandra Mandic",
    slug: "aleksandra-mandic",
    teamId: 11,
    position: "Linje",
    jerseyNumber: 14,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QU08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 75,
      shots: 101,
      shootingPercent: 74,
      assists: 18,
      yellowCards: 4,
      twoMin: 6,
      redCards: 0,
      mepScore: 5.4
    },
    formCurve: [ 7, 4, 3, 6, 1, 5, 3, 5, 3, 4 ],
    seasonHighlights: [
      "Dominerende forsvarsspiller mot Larvik"
    ]
  },
  {
    id: 221,
    name: "Vilde Tornes Finneide",
    slug: "vilde-tornes-finneide",
    teamId: 11,
    position: "Keeper",
    jerseyNumber: 16,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTM1MmVkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VlQ8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 1,
      shots: 10,
      shootingPercent: 0,
      assists: 11,
      yellowCards: 0,
      twoMin: 2,
      redCards: 0,
      mepScore: 5.8,
      saves: 281
    },
    formCurve: [ 0, 1, 0, 0, 0, 2, 0, 1, 2, 0 ],
    seasonHighlights: [
      "6 redninger mot Larvik",
      "Kampens spiller mot Tertnes",
      "Beste keeper i Fana-kampen"
    ]
  },
  {
    id: 222,
    name: "Ida Marie Syversen Kallhovd",
    slug: "ida-marie-syversen-kallhovd",
    teamId: 11,
    position: "HoyreKant",
    jerseyNumber: 19,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SU08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 128,
      shots: 136,
      shootingPercent: 94,
      assists: 42,
      yellowCards: 0,
      twoMin: 5,
      redCards: 0,
      mepScore: 5.5
    },
    formCurve: [ 2, 5, 6, 4, 4, 6, 6, 3, 5, 12 ],
    seasonHighlights: [
      "Lynrask kontring mot Byåsen",
      "8 mål mot Vipers"
    ]
  },
  {
    id: 223,
    name: "Mille Constanse Brekken Daae",
    slug: "mille-constanse-brekken-daae",
    teamId: 11,
    position: "HoyreKant",
    jerseyNumber: 21,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 141,
      shots: 157,
      shootingPercent: 90,
      assists: 48,
      yellowCards: 1,
      twoMin: 2,
      redCards: 0,
      mepScore: 7
    },
    formCurve: [ 4, 3, 7, 4, 2, 8, 5, 4, 8, 7 ],
    seasonHighlights: [
      "Toppscorer uke 21",
      "12 mål på kontring mot Larvik",
      "10 mål på kontring mot Fredrikstad"
    ]
  },
  {
    id: 224,
    name: "Kristin Halvorsen",
    slug: "kristin-halvorsen",
    teamId: 11,
    position: "Linje",
    jerseyNumber: 23,
    imageUrl: "/players/kristin-halvorsen.jpg",
    stats: {
      matchesPlayed: 23,
      goals: 86,
      shots: 117,
      shootingPercent: 74,
      assists: 64,
      yellowCards: 0,
      twoMin: 3,
      redCards: 0,
      mepScore: 5.3
    },
    formCurve: [ 6, 10, 0, 2, 0, 3, 6, 5, 4, 6 ],
    seasonHighlights: [
      "8 målgivende mot Fana"
    ]
  },
  {
    id: 225,
    name: "Marthine Svendsberget",
    slug: "marthine-svendsberget",
    teamId: 11,
    position: "VenstreKant",
    jerseyNumber: 24,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 115,
      shots: 124,
      shootingPercent: 93,
      assists: 68,
      yellowCards: 3,
      twoMin: 1,
      redCards: 0,
      mepScore: 6.8
    },
    formCurve: [ 0, 9, 5, 0, 0, 1, 2, 7, 7, 4 ],
    seasonHighlights: [
      "Kampens spiller mot Molde"
    ]
  },
  {
    id: 226,
    name: "Elika Nodland Meiland",
    slug: "elika-nodland-meiland",
    teamId: 11,
    position: "Bakspiller",
    jerseyNumber: 25,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM5YzEyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RU48L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 133,
      shots: 145,
      shootingPercent: 92,
      assists: 83,
      yellowCards: 4,
      twoMin: 6,
      redCards: 0,
      mepScore: 7.6
    },
    formCurve: [ 9, 6, 11, 10, 4, 9, 10, 2, 10, 8 ],
    seasonHighlights: [
      "Toppscorer uke 25",
      "Hattrick mot Fredrikstad"
    ]
  },
  {
    id: 227,
    name: "Vanessa Bråten Gulbrandsen",
    slug: "vanessa-braten-gulbrandsen",
    teamId: 11,
    position: "HoyreKant",
    jerseyNumber: 27,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VkI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 129,
      shots: 217,
      shootingPercent: 59,
      assists: 18,
      yellowCards: 2,
      twoMin: 5,
      redCards: 0,
      mepScore: 7.2
    },
    formCurve: [ 1, 3, 0, 0, 6, 1, 5, 8, 6, 1 ],
    seasonHighlights: [
      "Kampens spiller mot Byåsen",
      "11 mål på kontring mot Tertnes"
    ]
  },
  {
    id: 228,
    name: "Silje Leikfoss Solbakken",
    slug: "silje-leikfoss-solbakken",
    teamId: 11,
    position: "VenstreKant",
    jerseyNumber: 28,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY0NzU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjgxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0w8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 113,
      shots: 266,
      shootingPercent: 42,
      assists: 22,
      yellowCards: 1,
      twoMin: 2,
      redCards: 0,
      mepScore: 7.4
    },
    formCurve: [ 8, 6, 10, 8, 6, 5, 3, 7, 2, 8 ],
    seasonHighlights: [
      "8 mål på kontring mot Fana",
      "10 mål på kontring mot Tertnes",
      "10 mål mot Fana"
    ]
  },
  {
    id: 229,
    name: "Maja Linnea Gulliksen",
    slug: "maja-linnea-gulliksen",
    teamId: 11,
    position: "Keeper",
    jerseyNumber: 30,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM5YzEyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUw8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 3,
      shots: 5,
      shootingPercent: 0,
      assists: 3,
      yellowCards: 3,
      twoMin: 4,
      redCards: 0,
      mepScore: 5.5,
      saves: 267
    },
    formCurve: [ 1, 0, 3, 0, 2, 1, 6, 2, 6, 0 ],
    seasonHighlights: [
      "3 redninger mot Fana",
      "Redningsprosent 49% mot Fana"
    ]
  },
  {
    id: 230,
    name: "Maja Leinan",
    slug: "maja-leinan",
    teamId: 11,
    position: "Linje",
    jerseyNumber: 35,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUw8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 97,
      shots: 181,
      shootingPercent: 54,
      assists: 32,
      yellowCards: 5,
      twoMin: 2,
      redCards: 0,
      mepScore: 7.1
    },
    formCurve: [ 1, 7, 4, 1, 7, 7, 4, 6, 4, 5 ],
    seasonHighlights: [
      "Sterk duellspiller mot Byåsen",
      "Sterk duellspiller mot Larvik"
    ]
  },
  {
    id: 231,
    name: "Thea Ellen Löfstedt",
    slug: "thea-ellen-lofstedt",
    teamId: 11,
    position: "HoyreKant",
    jerseyNumber: 64,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmVkNTczIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU5MGZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VEU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 151,
      shots: 159,
      shootingPercent: 95,
      assists: 36,
      yellowCards: 0,
      twoMin: 5,
      redCards: 0,
      mepScore: 7.6
    },
    formCurve: [ 5, 6, 0, 7, 4, 4, 7, 0, 1, 6 ],
    seasonHighlights: [
      "9 mål på kontring mot Tertnes"
    ]
  },
  {
    id: 232,
    name: "My Lervold",
    slug: "my-lervold",
    teamId: 12,
    position: "VenstreKant",
    jerseyNumber: 2,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNDhkYmZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGFiZGUzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUw8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 110,
      shots: 114,
      shootingPercent: 96,
      assists: 61,
      yellowCards: 2,
      twoMin: 5,
      redCards: 0,
      mepScore: 7.6
    },
    formCurve: [ 7, 1, 5, 4, 3, 0, 0, 0, 6, 5 ],
    seasonHighlights: [
      "10 mål mot Fana",
      "Lynrask kontring mot Fana"
    ]
  },
  {
    id: 233,
    name: "Martine Tveter",
    slug: "martine-tveter",
    teamId: 12,
    position: "Bakspiller",
    jerseyNumber: 4,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TVQ8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 51,
      shots: 367,
      shootingPercent: 14,
      assists: 98,
      yellowCards: 3,
      twoMin: 6,
      redCards: 0,
      mepScore: 6.4
    },
    formCurve: [ 0, 0, 0, 4, 10, 0, 11, 10, 3, 10 ],
    seasonHighlights: [
      "Hattrick mot Byåsen",
      "Kampens spiller mot Sola",
      "7-meter spesialist: 7 mål"
    ]
  },
  {
    id: 234,
    name: "Julie Rensmoen Benterud",
    slug: "julie-rensmoen-benterud",
    teamId: 12,
    position: "HoyreKant",
    jerseyNumber: 5,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTc0YzNjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SlI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 108,
      shots: 118,
      shootingPercent: 92,
      assists: 68,
      yellowCards: 5,
      twoMin: 0,
      redCards: 0,
      mepScore: 6
    },
    formCurve: [ 7, 5, 7, 7, 5, 4, 3, 5, 3, 11 ],
    seasonHighlights: [
      "Kampens spiller mot Fredrikstad"
    ]
  },
  {
    id: 235,
    name: "Tuva Knai",
    slug: "tuva-knai",
    teamId: 12,
    position: "Linje",
    jerseyNumber: 6,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VEs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 77,
      shots: 181,
      shootingPercent: 43,
      assists: 53,
      yellowCards: 0,
      twoMin: 4,
      redCards: 0,
      mepScore: 6.2
    },
    formCurve: [ 8, 7, 5, 5, 4, 0, 1, 4, 1, 0 ],
    seasonHighlights: [
      "Sterk duellspiller mot Tertnes"
    ]
  },
  {
    id: 236,
    name: "Inga Sandvold",
    slug: "inga-sandvold",
    teamId: 12,
    position: "Linje",
    jerseyNumber: 7,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmVkNTczIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU5MGZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 108,
      shots: 116,
      shootingPercent: 93,
      assists: 40,
      yellowCards: 2,
      twoMin: 7,
      redCards: 0,
      mepScore: 6.1
    },
    formCurve: [ 1, 0, 4, 6, 1, 2, 3, 4, 1, 7 ],
    seasonHighlights: [
      "Dominerende forsvarsspiller mot Larvik",
      "Sterk duellspiller mot Byåsen",
      "Kampens spiller mot Fana"
    ]
  },
  {
    id: 237,
    name: "Hannah Deari Solheim",
    slug: "hannah-deari-solheim",
    teamId: 12,
    position: "Bakspiller",
    jerseyNumber: 9,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SEQ8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 121,
      shots: 137,
      shootingPercent: 88,
      assists: 77,
      yellowCards: 4,
      twoMin: 0,
      redCards: 0,
      mepScore: 9.2
    },
    formCurve: [ 3, 11, 5, 6, 11, 5, 2, 9, 11, 5 ],
    seasonHighlights: [
      "11 målgivende mot Storhamar",
      "Toppscorer uke 21"
    ]
  },
  {
    id: 238,
    name: "Mia Lundberg Lersbryggen",
    slug: "mia-lundberg-lersbryggen",
    teamId: 12,
    position: "VenstreKant",
    jerseyNumber: 10,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN2JlZDlmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzBhMWZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUw8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 52,
      shots: 152,
      shootingPercent: 34,
      assists: 37,
      yellowCards: 4,
      twoMin: 7,
      redCards: 0,
      mepScore: 5.3
    },
    formCurve: [ 2, 4, 0, 2, 7, 8, 0, 10, 7, 6 ],
    seasonHighlights: [
      "Lynrask kontring mot Fredrikstad",
      "6 mål på kontring mot Byåsen",
      "Toppscorer uke 9"
    ]
  },
  {
    id: 239,
    name: "Sara Ashuri",
    slug: "sara-ashuri",
    teamId: 12,
    position: "VenstreKant",
    jerseyNumber: 11,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0E8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 128,
      shots: 151,
      shootingPercent: 85,
      assists: 39,
      yellowCards: 2,
      twoMin: 5,
      redCards: 1,
      mepScore: 7.7
    },
    formCurve: [ 5, 4, 3, 3, 1, 2, 8, 4, 10, 7 ],
    seasonHighlights: [
      "Kampens spiller mot Larvik",
      "Toppscorer uke 1"
    ]
  },
  {
    id: 240,
    name: "Zaynab Elmrani",
    slug: "zaynab-elmrani",
    teamId: 12,
    position: "Keeper",
    jerseyNumber: 12,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+WkU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 0,
      shots: 10,
      shootingPercent: 0,
      assists: 8,
      yellowCards: 3,
      twoMin: 2,
      redCards: 0,
      mepScore: 8.1,
      saves: 151
    },
    formCurve: [ 0, 1, 1, 2, 0, 1, 1, 1, 0, 0 ],
    seasonHighlights: [
      "8 redninger mot Fana",
      "8 redninger mot Fredrikstad"
    ]
  },
  {
    id: 241,
    name: "Sarah Deari Solheim",
    slug: "sarah-deari-solheim",
    teamId: 12,
    position: "HoyreKant",
    jerseyNumber: 14,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZWU1YTI0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0Q8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 153,
      shots: 159,
      shootingPercent: 96,
      assists: 37,
      yellowCards: 4,
      twoMin: 3,
      redCards: 0,
      mepScore: 5.7
    },
    formCurve: [ 5, 1, 1, 4, 1, 4, 0, 8, 5, 7 ],
    seasonHighlights: [
      "12 mål mot Fana"
    ]
  },
  {
    id: 242,
    name: "Christina Midtdal Nummestad",
    slug: "christina-midtdal-nummestad",
    teamId: 12,
    position: "VenstreKant",
    jerseyNumber: 15,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Q008L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 82,
      shots: 204,
      shootingPercent: 40,
      assists: 69,
      yellowCards: 1,
      twoMin: 4,
      redCards: 0,
      mepScore: 6.4
    },
    formCurve: [ 6, 8, 7, 1, 6, 3, 3, 4, 6, 3 ],
    seasonHighlights: [
      "Lynrask kontring mot Fana",
      "4 mål på kontring mot Fana",
      "Lynrask kontring mot Sola"
    ]
  },
  {
    id: 243,
    name: "Marie Elstrand Munthe",
    slug: "marie-elstrand-munthe",
    teamId: 12,
    position: "HoyreKant",
    jerseyNumber: 17,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 64,
      shots: 164,
      shootingPercent: 39,
      assists: 62,
      yellowCards: 1,
      twoMin: 2,
      redCards: 0,
      mepScore: 5.8
    },
    formCurve: [ 7, 4, 8, 3, 0, 4, 8, 7, 6, 2 ],
    seasonHighlights: [
      "Toppscorer uke 3",
      "9 mål på kontring mot Fana"
    ]
  },
  {
    id: 244,
    name: "Linnea Isabel Ingeborg Aula",
    slug: "linnea-isabel-ingeborg-aula",
    teamId: 12,
    position: "VenstreKant",
    jerseyNumber: 18,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzQ0NTY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TEk8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 116,
      shots: 173,
      shootingPercent: 67,
      assists: 47,
      yellowCards: 2,
      twoMin: 0,
      redCards: 0,
      mepScore: 5.9
    },
    formCurve: [ 3, 6, 0, 1, 7, 8, 5, 5, 7, 4 ],
    seasonHighlights: [
      "Kampens spiller mot Fana"
    ]
  },
  {
    id: 245,
    name: "Hedda Klippen Nilsen",
    slug: "hedda-klippen-nilsen",
    teamId: 12,
    position: "HoyreKant",
    jerseyNumber: 20,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN2JlZDlmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzBhMWZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SEs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 86,
      shots: 124,
      shootingPercent: 69,
      assists: 24,
      yellowCards: 3,
      twoMin: 5,
      redCards: 0,
      mepScore: 5.3
    },
    formCurve: [ 5, 5, 2, 8, 5, 4, 8, 7, 3, 3 ],
    seasonHighlights: [
      "Lynrask kontring mot Molde",
      "Lynrask kontring mot Sola"
    ]
  },
  {
    id: 246,
    name: "Sunniva Sogn-Johansen",
    slug: "sunniva-sogn-johansen",
    teamId: 12,
    position: "Linje",
    jerseyNumber: 22,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U1M8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 93,
      shots: 114,
      shootingPercent: 82,
      assists: 57,
      yellowCards: 5,
      twoMin: 6,
      redCards: 0,
      mepScore: 6.6
    },
    formCurve: [ 0, 7, 3, 6, 2, 0, 4, 6, 5, 5 ],
    seasonHighlights: [
      "5 mål fra linja mot Fredrikstad"
    ]
  },
  {
    id: 247,
    name: "Emma Egge Edner",
    slug: "emma-egge-edner",
    teamId: 12,
    position: "HoyreKant",
    jerseyNumber: 25,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RUU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 122,
      shots: 136,
      shootingPercent: 90,
      assists: 67,
      yellowCards: 1,
      twoMin: 0,
      redCards: 0,
      mepScore: 5.9
    },
    formCurve: [ 4, 0, 8, 5, 7, 4, 3, 6, 0, 3 ],
    seasonHighlights: [
      "9 mål mot Fana",
      "10 mål mot Sola"
    ]
  },
  {
    id: 248,
    name: "Marthe Bjørnson Ulvåknippa",
    slug: "marthe-bjornson-ulvaknippa",
    teamId: 12,
    position: "VenstreKant",
    jerseyNumber: 27,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmVkNTczIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU5MGZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 72,
      shots: 173,
      shootingPercent: 42,
      assists: 21,
      yellowCards: 4,
      twoMin: 7,
      redCards: 1,
      mepScore: 6.6
    },
    formCurve: [ 2, 4, 1, 6, 5, 6, 7, 8, 5, 6 ],
    seasonHighlights: [
      "7 mål på kontring mot Fredrikstad"
    ]
  },
  {
    id: 249,
    name: "Mathilde Aas Fjelddalen",
    slug: "mathilde-aas-fjelddalen",
    teamId: 12,
    position: "VenstreKant",
    jerseyNumber: 33,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 39,
      shots: 195,
      shootingPercent: 20,
      assists: 39,
      yellowCards: 2,
      twoMin: 2,
      redCards: 1,
      mepScore: 6.5
    },
    formCurve: [ 8, 4, 6, 5, 1, 1, 4, 6, 5, 8 ],
    seasonHighlights: [
      "10 mål mot Larvik",
      "Kampens spiller mot Byåsen",
      "6 mål på kontring mot Tertnes"
    ]
  },
  {
    id: 250,
    name: "Ida Wall Bakken",
    slug: "ida-wall-bakken",
    teamId: 12,
    position: "Keeper",
    jerseyNumber: 37,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SVc8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 4,
      shots: 4,
      shootingPercent: 0,
      assists: 1,
      yellowCards: 2,
      twoMin: 2,
      redCards: 0,
      mepScore: 8.9,
      saves: 190
    },
    formCurve: [ 2, 2, 2, 1, 2, 0, 2, 2, 2, 0 ],
    seasonHighlights: [
      "Beste keeper i Fana-kampen"
    ]
  },
  {
    id: 251,
    name: "Stine Mellemstrand Bore",
    slug: "stine-mellemstrand-bore",
    teamId: 12,
    position: "Bakspiller",
    jerseyNumber: 72,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQxZjk3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U008L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 158,
      shots: 347,
      shootingPercent: 46,
      assists: 26,
      yellowCards: 2,
      twoMin: 3,
      redCards: 1,
      mepScore: 6.2
    },
    formCurve: [ 10, 11, 5, 2, 7, 8, 7, 3, 12, 7 ],
    seasonHighlights: [
      "Toppscorer uke 8",
      "10 mål mot Tertnes"
    ]
  },
  {
    id: 252,
    name: "Thea Granlund",
    slug: "thea-granlund",
    teamId: 13,
    position: "Keeper",
    jerseyNumber: 1,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTc0YzNjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VEc8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 1,
      shots: 3,
      shootingPercent: 0,
      assists: 8,
      yellowCards: 2,
      twoMin: 2,
      redCards: 0,
      mepScore: 7.1,
      saves: 252
    },
    formCurve: [ 2, 2, 0, 2, 2, 0, 0, 1, 6, 2 ],
    seasonHighlights: [
      "8 redninger mot Tertnes"
    ]
  },
  {
    id: 253,
    name: "Siri Elicabeth Hansson",
    slug: "siri-elicabeth-hansson",
    teamId: 13,
    position: "Bakspiller",
    jerseyNumber: 4,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0U8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 93,
      shots: 221,
      shootingPercent: 42,
      assists: 46,
      yellowCards: 2,
      twoMin: 0,
      redCards: 0,
      mepScore: 9.4
    },
    formCurve: [ 8, 9, 3, 8, 7, 7, 5, 5, 6, 9 ],
    seasonHighlights: [
      "Hattrick mot Byåsen",
      "7-meter spesialist: 8 mål"
    ]
  },
  {
    id: 254,
    name: "Veslemøy Marie Mehus",
    slug: "veslemoy-marie-mehus",
    teamId: 13,
    position: "Bakspiller",
    jerseyNumber: 6,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Vk08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 158,
      shots: 395,
      shootingPercent: 40,
      assists: 50,
      yellowCards: 4,
      twoMin: 6,
      redCards: 1,
      mepScore: 7.9
    },
    formCurve: [ 8, 7, 11, 8, 0, 0, 10, 2, 8, 6 ],
    seasonHighlights: [
      "7-meter spesialist: 10 mål"
    ]
  },
  {
    id: 255,
    name: "Tuva Pharo",
    slug: "tuva-pharo",
    teamId: 13,
    position: "Linje",
    jerseyNumber: 7,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkMmQzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDFhM2E0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VFA8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 56,
      shots: 153,
      shootingPercent: 37,
      assists: 44,
      yellowCards: 1,
      twoMin: 1,
      redCards: 0,
      mepScore: 7.7
    },
    formCurve: [ 1, 4, 5, 3, 7, 6, 3, 2, 2, 6 ],
    seasonHighlights: [
      "Sterk duellspiller mot Byåsen"
    ]
  },
  {
    id: 256,
    name: "Tilde Wilhelmsen Grønvold",
    slug: "tilde-wilhelmsen-gronvold",
    teamId: 13,
    position: "Bakspiller",
    jerseyNumber: 9,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN2JlZDlmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzBhMWZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VFc8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 125,
      shots: 369,
      shootingPercent: 34,
      assists: 33,
      yellowCards: 4,
      twoMin: 1,
      redCards: 0,
      mepScore: 9.3
    },
    formCurve: [ 7, 9, 8, 9, 4, 10, 0, 9, 3, 4 ],
    seasonHighlights: [
      "Kampens spiller mot Fredrikstad"
    ]
  },
  {
    id: 257,
    name: "Bertine Emilie Sundby Lunde",
    slug: "bertine-emilie-sundby-lunde",
    teamId: 13,
    position: "Bakspiller",
    jerseyNumber: 10,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzQ0NTY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QkU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 98,
      shots: 141,
      shootingPercent: 70,
      assists: 42,
      yellowCards: 4,
      twoMin: 3,
      redCards: 0,
      mepScore: 6.7
    },
    formCurve: [ 7, 0, 11, 9, 10, 6, 2, 0, 6, 4 ],
    seasonHighlights: [
      "Toppscorer uke 14",
      "Toppscorer uke 2"
    ]
  },
  {
    id: 258,
    name: "Sofie Fosnæss Hanssen",
    slug: "sofie-fosnaess-hanssen",
    teamId: 13,
    position: "VenstreKant",
    jerseyNumber: 11,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM5YzEyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0Y8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 73,
      shots: 158,
      shootingPercent: 46,
      assists: 72,
      yellowCards: 5,
      twoMin: 0,
      redCards: 0,
      mepScore: 5.9
    },
    formCurve: [ 5, 4, 4, 2, 6, 5, 4, 3, 7, 6 ],
    seasonHighlights: [
      "4 mål på kontring mot Fredrikstad",
      "7 mål mot Byåsen"
    ]
  },
  {
    id: 259,
    name: "Erika Madeleine Arntsen Bjørløw",
    slug: "erika-madeleine-arntsen-bjorlow",
    teamId: 13,
    position: "Keeper",
    jerseyNumber: 12,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN2JlZDlmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzBhMWZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RU08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 6,
      shots: 11,
      shootingPercent: 0,
      assists: 1,
      yellowCards: 1,
      twoMin: 1,
      redCards: 0,
      mepScore: 5.8,
      saves: 181
    },
    formCurve: [ 0, 0, 2, 2, 1, 2, 0, 1, 1, 0 ],
    seasonHighlights: [
      "Kampens spiller mot Fana",
      "Nullet Byåsen i 10 minutter"
    ]
  },
  {
    id: 260,
    name: "Anette Sundal",
    slug: "anette-sundal",
    teamId: 13,
    position: "HoyreKant",
    jerseyNumber: 14,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN2JlZDlmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzBhMWZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 63,
      shots: 221,
      shootingPercent: 29,
      assists: 53,
      yellowCards: 1,
      twoMin: 0,
      redCards: 0,
      mepScore: 5.3
    },
    formCurve: [ 7, 1, 2, 1, 6, 0, 8, 4, 5, 0 ],
    seasonHighlights: [
      "7 mål mot Tertnes",
      "4 mål mot Byåsen",
      "9 mål mot Fredrikstad"
    ]
  },
  {
    id: 261,
    name: "Andrea Holmsveen Moen",
    slug: "andrea-holmsveen-moen",
    teamId: 13,
    position: "Bakspiller",
    jerseyNumber: 15,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QUg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 29,
      goals: 49,
      shots: 105,
      shootingPercent: 47,
      assists: 115,
      yellowCards: 4,
      twoMin: 1,
      redCards: 0,
      mepScore: 6.6
    },
    formCurve: [ 3, 2, 10, 2, 6, 3, 8, 2, 2, 3 ],
    seasonHighlights: [
      "8 mål mot Larvik",
      "3 målgivende mot Sola",
      "Hattrick mot Molde"
    ]
  },
  {
    id: 262,
    name: "Alva Bjanes Iversen",
    slug: "alva-bjanes-iversen",
    teamId: 13,
    position: "Keeper",
    jerseyNumber: 16,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzQ0NTY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QUI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 4,
      shots: 6,
      shootingPercent: 0,
      assists: 6,
      yellowCards: 3,
      twoMin: 5,
      redCards: 0,
      mepScore: 5.6,
      saves: 332
    },
    formCurve: [ 0, 1, 1, 2, 4, 1, 2, 2, 0, 1 ],
    seasonHighlights: [
      "Redningsprosent 45% mot Fredrikstad"
    ]
  },
  {
    id: 263,
    name: "Inez Hjemås Fagermo",
    slug: "inez-hjemas-fagermo",
    teamId: 13,
    position: "VenstreKant",
    jerseyNumber: 17,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWRkMWExIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTBhYzg0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SUg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 93,
      shots: 105,
      shootingPercent: 89,
      assists: 36,
      yellowCards: 5,
      twoMin: 7,
      redCards: 0,
      mepScore: 5.3
    },
    formCurve: [ 1, 4, 7, 3, 2, 1, 4, 5, 0, 0 ],
    seasonHighlights: [
      "Kampens spiller mot Larvik",
      "3 mål mot Sola"
    ]
  },
  {
    id: 264,
    name: "Guro Skålevåg",
    slug: "guro-skalevag",
    teamId: 13,
    position: "Bakspiller",
    jerseyNumber: 19,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZWU1YTI0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+R1M8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 188,
      shots: 366,
      shootingPercent: 51,
      assists: 82,
      yellowCards: 2,
      twoMin: 6,
      redCards: 1,
      mepScore: 6.5
    },
    formCurve: [ 7, 4, 4, 5, 7, 2, 5, 2, 8, 12 ],
    seasonHighlights: [
      "7-meter spesialist: 12 mål",
      "Toppscorer uke 9"
    ]
  },
  {
    id: 265,
    name: "Kristina Othilie Hetland Schennum",
    slug: "kristina-othilie-hetland-schennum",
    teamId: 13,
    position: "VenstreKant",
    jerseyNumber: 20,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+S088L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 46,
      shots: 242,
      shootingPercent: 19,
      assists: 18,
      yellowCards: 1,
      twoMin: 6,
      redCards: 0,
      mepScore: 5.3
    },
    formCurve: [ 3, 1, 5, 7, 4, 8, 5, 4, 6, 8 ],
    seasonHighlights: [
      "7 mål mot Storhamar"
    ]
  },
  {
    id: 266,
    name: "Tilde Amalia Grönvall",
    slug: "tilde-amalia-gronvall",
    teamId: 13,
    position: "Linje",
    jerseyNumber: 23,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmU4NmRlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VEE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 109,
      shots: 219,
      shootingPercent: 50,
      assists: 41,
      yellowCards: 0,
      twoMin: 7,
      redCards: 0,
      mepScore: 6.9
    },
    formCurve: [ 7, 5, 7, 4, 2, 4, 0, 5, 1, 0 ],
    seasonHighlights: [
      "11 målgivende mot Fredrikstad",
      "Dominerende forsvarsspiller mot Byåsen",
      "Kampens spiller mot Storhamar"
    ]
  },
  {
    id: 267,
    name: "Veriana Veliqi",
    slug: "veriana-veliqi",
    teamId: 13,
    position: "HoyreKant",
    jerseyNumber: 24,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN2JlZDlmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzBhMWZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VlY8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 156,
      shots: 163,
      shootingPercent: 96,
      assists: 42,
      yellowCards: 0,
      twoMin: 6,
      redCards: 0,
      mepScore: 7.8
    },
    formCurve: [ 7, 1, 5, 5, 4, 5, 1, 8, 3, 7 ],
    seasonHighlights: [
      "Kampens spiller mot Sola",
      "12 mål mot Byåsen"
    ]
  },
  {
    id: 268,
    name: "Janine Borchgrevink Børkeeiet",
    slug: "janine-borchgrevink-borkeeiet",
    teamId: 13,
    position: "Bakspiller",
    jerseyNumber: 25,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SkI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 117,
      shots: 198,
      shootingPercent: 59,
      assists: 70,
      yellowCards: 3,
      twoMin: 4,
      redCards: 0,
      mepScore: 8.8
    },
    formCurve: [ 5, 4, 4, 10, 11, 8, 10, 5, 11, 2 ],
    seasonHighlights: [
      "8 målgivende mot Sola",
      "8 målgivende mot Tertnes"
    ]
  },
  {
    id: 269,
    name: "Ingrid Louise Bjørnskau Berens",
    slug: "ingrid-louise-bjornskau-berens",
    teamId: 13,
    position: "Linje",
    jerseyNumber: 26,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWRkMWExIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTBhYzg0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SUw8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 94,
      shots: 108,
      shootingPercent: 87,
      assists: 14,
      yellowCards: 0,
      twoMin: 7,
      redCards: 0,
      mepScore: 6.6
    },
    formCurve: [ 0, 2, 3, 5, 7, 4, 1, 5, 0, 4 ],
    seasonHighlights: [
      "7 mål fra linja mot Vipers",
      "Sterk duellspiller mot Tertnes",
      "Dominerende forsvarsspiller mot Byåsen"
    ]
  },
  {
    id: 270,
    name: "Andrea Nalbant Moe",
    slug: "andrea-nalbant-moe",
    teamId: 13,
    position: "Bakspiller",
    jerseyNumber: 33,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QU48L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 104,
      shots: 189,
      shootingPercent: 55,
      assists: 57,
      yellowCards: 2,
      twoMin: 5,
      redCards: 0,
      mepScore: 6.3
    },
    formCurve: [ 3, 2, 10, 8, 6, 7, 3, 5, 4, 8 ],
    seasonHighlights: [
      "Hattrick mot Fana",
      "Hattrick mot Storhamar",
      "12 mål mot Larvik"
    ]
  },
  {
    id: 271,
    name: "Vilde Marsteinstredet",
    slug: "vilde-marsteinstredet",
    teamId: 13,
    position: "Keeper",
    jerseyNumber: 50,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkMmQzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDFhM2E0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Vk08L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 2,
      shots: 10,
      shootingPercent: 0,
      assists: 3,
      yellowCards: 5,
      twoMin: 5,
      redCards: 0,
      mepScore: 5.3,
      saves: 210
    },
    formCurve: [ 4, 1, 0, 0, 1, 1, 0, 1, 2, 1 ],
    seasonHighlights: [
      "Nullet Vipers i 10 minutter",
      "10 redninger mot Molde"
    ]
  },
  {
    id: 272,
    name: "Nicoline Jullumstrø",
    slug: "nicoline-jullumstro",
    teamId: 13,
    position: "HoyreKant",
    jerseyNumber: 75,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTM1MmVkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Tko8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 59,
      shots: 73,
      shootingPercent: 81,
      assists: 70,
      yellowCards: 0,
      twoMin: 6,
      redCards: 0,
      mepScore: 7.6
    },
    formCurve: [ 4, 8, 6, 8, 0, 4, 3, 4, 11, 2 ],
    seasonHighlights: [
      "5 mål på kontring mot Molde",
      "Lynrask kontring mot Fana"
    ]
  },
  {
    id: 273,
    name: "Marthe Davidsen Hellevik",
    slug: "marthe-davidsen-hellevik",
    teamId: 14,
    position: "Keeper",
    jerseyNumber: 1,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUQ8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 3,
      shots: 9,
      shootingPercent: 0,
      assists: 9,
      yellowCards: 5,
      twoMin: 6,
      redCards: 0,
      mepScore: 7.7,
      saves: 174
    },
    formCurve: [ 1, 1, 2, 1, 0, 1, 0, 2, 2, 3 ],
    seasonHighlights: [
      "Redningsprosent 46% mot Larvik",
      "Nullet Vipers i 10 minutter",
      "Nullet Tertnes i 10 minutter"
    ]
  },
  {
    id: 274,
    name: "Kristina Granli Nordvik",
    slug: "kristina-granli-nordvik",
    teamId: 14,
    position: "VenstreKant",
    jerseyNumber: 2,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWRkMWExIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTBhYzg0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+S0c8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 103,
      shots: 123,
      shootingPercent: 84,
      assists: 15,
      yellowCards: 1,
      twoMin: 1,
      redCards: 0,
      mepScore: 5.4
    },
    formCurve: [ 2, 5, 1, 7, 6, 2, 6, 6, 7, 2 ],
    seasonHighlights: [
      "9 mål mot Storhamar",
      "Lynrask kontring mot Larvik",
      "9 mål mot Byåsen"
    ]
  },
  {
    id: 275,
    name: "Julie Kristine Hattestad",
    slug: "julie-kristine-hattestad",
    teamId: 14,
    position: "Bakspiller",
    jerseyNumber: 3,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkNGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2NmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Sks8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 135,
      shots: 163,
      shootingPercent: 83,
      assists: 93,
      yellowCards: 5,
      twoMin: 0,
      redCards: 1,
      mepScore: 6.9
    },
    formCurve: [ 8, 10, 9, 9, 7, 2, 10, 11, 7, 0 ],
    seasonHighlights: [
      "7-meter spesialist: 10 mål"
    ]
  },
  {
    id: 276,
    name: "Bettina Ranvik",
    slug: "bettina-ranvik",
    teamId: 14,
    position: "Linje",
    jerseyNumber: 4,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZjQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QlI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 96,
      shots: 177,
      shootingPercent: 54,
      assists: 33,
      yellowCards: 0,
      twoMin: 7,
      redCards: 0,
      mepScore: 6.3
    },
    formCurve: [ 2, 6, 0, 4, 4, 4, 8, 6, 5, 1 ],
    seasonHighlights: [
      "Sterk duellspiller mot Vipers"
    ]
  },
  {
    id: 277,
    name: "Ina Jåtten",
    slug: "ina-jatten",
    teamId: 14,
    position: "HoyreKant",
    jerseyNumber: 6,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SUo8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 27,
      goals: 123,
      shots: 133,
      shootingPercent: 92,
      assists: 53,
      yellowCards: 2,
      twoMin: 3,
      redCards: 0,
      mepScore: 6.2
    },
    formCurve: [ 2, 2, 3, 3, 5, 4, 2, 1, 4, 7 ],
    seasonHighlights: [
      "Kampens spiller mot Fana",
      "Toppscorer uke 23"
    ]
  },
  {
    id: 278,
    name: "Lorin Sendi",
    slug: "lorin-sendi",
    teamId: 14,
    position: "Bakspiller",
    jerseyNumber: 7,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWRkMWExIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTBhYzg0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TFM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 63,
      shots: 237,
      shootingPercent: 27,
      assists: 29,
      yellowCards: 0,
      twoMin: 5,
      redCards: 0,
      mepScore: 7.7
    },
    formCurve: [ 2, 8, 3, 8, 5, 4, 9, 4, 3, 10 ],
    seasonHighlights: [
      "Toppscorer uke 3"
    ]
  },
  {
    id: 279,
    name: "Mia Kvarme",
    slug: "mia-kvarme",
    teamId: 14,
    position: "HoyreKant",
    jerseyNumber: 9,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzQ0NTY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUs8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 114,
      shots: 116,
      shootingPercent: 98,
      assists: 44,
      yellowCards: 5,
      twoMin: 2,
      redCards: 0,
      mepScore: 6.5
    },
    formCurve: [ 4, 6, 4, 8, 0, 3, 8, 3, 3, 8 ],
    seasonHighlights: [
      "12 mål på kontring mot Larvik",
      "12 mål mot Sola",
      "11 mål mot Larvik"
    ]
  },
  {
    id: 280,
    name: "Anna Lunke Norum",
    slug: "anna-lunke-norum",
    teamId: 14,
    position: "VenstreKant",
    jerseyNumber: 11,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QUw8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 62,
      shots: 161,
      shootingPercent: 39,
      assists: 38,
      yellowCards: 0,
      twoMin: 1,
      redCards: 0,
      mepScore: 7.1
    },
    formCurve: [ 1, 7, 5, 7, 7, 5, 1, 10, 2, 10 ],
    seasonHighlights: [
      "Kampens spiller mot Tertnes",
      "Toppscorer uke 2",
      "8 mål mot Molde"
    ]
  },
  {
    id: 281,
    name: "Daniella Holm",
    slug: "daniella-holm",
    teamId: 14,
    position: "Keeper",
    jerseyNumber: 12,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+REg8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 24,
      goals: 7,
      shots: 10,
      shootingPercent: 0,
      assists: 5,
      yellowCards: 4,
      twoMin: 7,
      redCards: 0,
      mepScore: 7.6,
      saves: 251
    },
    formCurve: [ 2, 0, 2, 2, 0, 0, 2, 0, 1, 0 ],
    seasonHighlights: [
      "Kampens spiller mot Tertnes",
      "Beste keeper i Fredrikstad-kampen"
    ]
  },
  {
    id: 282,
    name: "Ane Engan Haugen",
    slug: "ane-engan-haugen",
    teamId: 14,
    position: "VenstreKant",
    jerseyNumber: 14,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QUU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 26,
      goals: 97,
      shots: 205,
      shootingPercent: 47,
      assists: 23,
      yellowCards: 5,
      twoMin: 3,
      redCards: 0,
      mepScore: 7.4
    },
    formCurve: [ 0, 4, 7, 4, 1, 1, 0, 0, 3, 4 ],
    seasonHighlights: [
      "10 mål på kontring mot Tertnes",
      "Lynrask kontring mot Molde"
    ]
  },
  {
    id: 283,
    name: "Bibi Aandewiel",
    slug: "bibi-aandewiel",
    teamId: 14,
    position: "VenstreKant",
    jerseyNumber: 15,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmVjYTU3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM5YzEyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QkE8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 50,
      shots: 112,
      shootingPercent: 45,
      assists: 62,
      yellowCards: 2,
      twoMin: 2,
      redCards: 0,
      mepScore: 5.2
    },
    formCurve: [ 2, 1, 7, 10, 5, 3, 8, 2, 8, 3 ],
    seasonHighlights: [
      "Lynrask kontring mot Tertnes"
    ]
  },
  {
    id: 284,
    name: "Julie Søfting Tovslid",
    slug: "julie-softing-tovslid",
    teamId: 14,
    position: "Keeper",
    jerseyNumber: 16,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWRkMWExIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTBhYzg0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SlM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 1,
      shots: 9,
      shootingPercent: 0,
      assists: 5,
      yellowCards: 2,
      twoMin: 1,
      redCards: 0,
      mepScore: 7.5,
      saves: 176
    },
    formCurve: [ 1, 1, 1, 3, 0, 2, 3, 1, 2, 1 ],
    seasonHighlights: [
      "8 redninger mot Tertnes",
      "Redningsprosent 54% mot Tertnes",
      "Beste keeper i Vipers-kampen"
    ]
  },
  {
    id: 285,
    name: "Fredrikke Sundsby Kjølstad",
    slug: "fredrikke-sundsby-kjolstad",
    teamId: 14,
    position: "VenstreKant",
    jerseyNumber: 17,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkMmQzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDFhM2E0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RlM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 133,
      shots: 173,
      shootingPercent: 77,
      assists: 26,
      yellowCards: 3,
      twoMin: 3,
      redCards: 0,
      mepScore: 7.8
    },
    formCurve: [ 2, 6, 4, 4, 6, 9, 5, 0, 7, 5 ],
    seasonHighlights: [
      "Lynrask kontring mot Fredrikstad",
      "Lynrask kontring mot Vipers",
      "Kampens spiller mot Vipers"
    ]
  },
  {
    id: 286,
    name: "Marte Juuhl Svensson",
    slug: "marte-juuhl-svensson",
    teamId: 14,
    position: "Bakspiller",
    jerseyNumber: 18,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN2JlZDlmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzBhMWZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUo8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 117,
      shots: 165,
      shootingPercent: 71,
      assists: 98,
      yellowCards: 2,
      twoMin: 7,
      redCards: 1,
      mepScore: 9.3
    },
    formCurve: [ 11, 0, 6, 12, 7, 9, 4, 6, 7, 3 ],
    seasonHighlights: [
      "Kampens spiller mot Storhamar"
    ]
  },
  {
    id: 287,
    name: "Synnøve Lind Edvardsen",
    slug: "synnove-lind-edvardsen",
    teamId: 14,
    position: "Linje",
    jerseyNumber: 19,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmVkNTczIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU5MGZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0w8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 106,
      shots: 197,
      shootingPercent: 54,
      assists: 29,
      yellowCards: 2,
      twoMin: 3,
      redCards: 0,
      mepScore: 7.6
    },
    formCurve: [ 4, 4, 4, 4, 6, 6, 2, 6, 0, 2 ],
    seasonHighlights: [
      "Sterk duellspiller mot Molde",
      "Sterk duellspiller mot Storhamar"
    ]
  },
  {
    id: 288,
    name: "Nora Young Za Lundell",
    slug: "nora-young-za-lundell",
    teamId: 14,
    position: "Linje",
    jerseyNumber: 20,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZhNTAyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Tlk8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 23,
      goals: 59,
      shots: 182,
      shootingPercent: 32,
      assists: 36,
      yellowCards: 3,
      twoMin: 4,
      redCards: 0,
      mepScore: 7.8
    },
    formCurve: [ 0, 0, 2, 3, 7, 3, 5, 10, 2, 4 ],
    seasonHighlights: [
      "6 mål fra linja mot Byåsen"
    ]
  },
  {
    id: 289,
    name: "Elvira Rensmoen",
    slug: "elvira-rensmoen",
    teamId: 14,
    position: "HoyreKant",
    jerseyNumber: 22,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN2JlZDlmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNzBhMWZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RVI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 20,
      goals: 132,
      shots: 248,
      shootingPercent: 53,
      assists: 54,
      yellowCards: 5,
      twoMin: 0,
      redCards: 0,
      mepScore: 5.7
    },
    formCurve: [ 9, 7, 0, 4, 5, 8, 4, 5, 3, 4 ],
    seasonHighlights: [
      "8 mål på kontring mot Vipers"
    ]
  },
  {
    id: 290,
    name: "Vilde Bjørnsen",
    slug: "vilde-bjornsen",
    teamId: 14,
    position: "HoyreKant",
    jerseyNumber: 24,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBkMmQzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDFhM2E0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VkI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 22,
      goals: 54,
      shots: 60,
      shootingPercent: 90,
      assists: 27,
      yellowCards: 4,
      twoMin: 1,
      redCards: 0,
      mepScore: 5.7
    },
    formCurve: [ 8, 0, 6, 6, 8, 1, 4, 8, 4, 6 ],
    seasonHighlights: [
      "Toppscorer uke 18",
      "Toppscorer uke 1"
    ]
  },
  {
    id: 291,
    name: "Marie Elde Selvaag",
    slug: "marie-elde-selvaag",
    teamId: 14,
    position: "HoyreKant",
    jerseyNumber: 26,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2MzQ4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTc0YzNjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TUU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 25,
      goals: 149,
      shots: 186,
      shootingPercent: 80,
      assists: 66,
      yellowCards: 2,
      twoMin: 7,
      redCards: 0,
      mepScore: 5.4
    },
    formCurve: [ 0, 3, 4, 4, 7, 7, 2, 5, 2, 4 ],
    seasonHighlights: [
      "9 mål på kontring mot Byåsen",
      "11 mål på kontring mot Byåsen"
    ]
  },
  {
    id: 292,
    name: "Karin Mollatt",
    slug: "karin-mollatt",
    teamId: 14,
    position: "Linje",
    jerseyNumber: 27,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmYzNTQyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+S008L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 87,
      shots: 97,
      shootingPercent: 90,
      assists: 56,
      yellowCards: 2,
      twoMin: 2,
      redCards: 0,
      mepScore: 7.6
    },
    formCurve: [ 3, 1, 5, 3, 6, 3, 6, 2, 7, 2 ],
    seasonHighlights: [
      "6 mål fra linja mot Storhamar",
      "9 målgivende mot Sola",
      "9 målgivende mot Molde"
    ]
  },
  {
    id: 293,
    name: "Isabel Gunnerød",
    slug: "isabel-gunnerod",
    teamId: 14,
    position: "VenstreKant",
    jerseyNumber: 30,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTRhMGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWYyN2NkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SUc8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 89,
      shots: 255,
      shootingPercent: 35,
      assists: 23,
      yellowCards: 3,
      twoMin: 3,
      redCards: 0,
      mepScore: 8
    },
    formCurve: [ 2, 4, 7, 10, 6, 6, 2, 8, 6, 6 ],
    seasonHighlights: [
      "Lynrask kontring mot Larvik",
      "9 mål på kontring mot Molde"
    ]
  },
  {
    id: 294,
    name: "Ane Emilie Westerhus Bolstad",
    slug: "ane-emilie-westerhus-bolstad",
    teamId: 14,
    position: "Keeper",
    jerseyNumber: 96,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY5ZmYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjM2OGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QUU8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 21,
      goals: 1,
      shots: 10,
      shootingPercent: 0,
      assists: 6,
      yellowCards: 2,
      twoMin: 4,
      redCards: 0,
      mepScore: 8.9,
      saves: 262
    },
    formCurve: [ 3, 1, 1, 0, 0, 1, 0, 0, 2, 0 ],
    seasonHighlights: [
      "Beste keeper i Fana-kampen",
      "Kampens spiller mot Storhamar"
    ]
  },
  {
    id: 295,
    name: "Hansine Brune Skorgevik",
    slug: "hansine-brune-skorgevik",
    teamId: 14,
    position: "Bakspiller",
    jerseyNumber: 97,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTM1MmVkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SEI8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 93,
      shots: 323,
      shootingPercent: 29,
      assists: 56,
      yellowCards: 2,
      twoMin: 3,
      redCards: 0,
      mepScore: 7.1
    },
    formCurve: [ 6, 10, 10, 5, 5, 0, 2, 4, 0, 0 ],
    seasonHighlights: [
      "7-meter spesialist: 4 mål",
      "7-meter spesialist: 5 mål"
    ]
  },
  {
    id: 296,
    name: "Marte Sofie Syverud",
    slug: "marte-sofie-syverud",
    teamId: 14,
    position: "Bakspiller",
    jerseyNumber: 98,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNTM1MmVkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MmZhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZykiLz48dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjcyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TVM8L3RleHQ+PC9zdmc+",
    stats: {
      matchesPlayed: 28,
      goals: 42,
      shots: 86,
      shootingPercent: 49,
      assists: 46,
      yellowCards: 3,
      twoMin: 1,
      redCards: 0,
      mepScore: 8.5
    },
    formCurve: [ 0, 2, 9, 8, 8, 6, 6, 8, 9, 3 ],
    seasonHighlights: [
      "Toppscorer uke 2"
    ]
  }
];
