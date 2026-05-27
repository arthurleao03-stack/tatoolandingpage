export interface TattooImage {
  src: string;
  alt: string;
}

function generateAlt(filename: string): string {
  const name = filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ').toLowerCase();

  const keywords: Array<[string, string]> = [
    ['leao', 'tatuagem realista de leão'],
    ['lion', 'tatuagem realista de leão'],
    ['lobo', 'tatuagem realista de lobo'],
    ['wolf', 'tatuagem realista de lobo'],
    ['aguia', 'tatuagem realista de águia'],
    ['eagle', 'tatuagem realista de águia'],
    ['cobra', 'tatuagem de cobra'],
    ['snake', 'tatuagem de cobra'],
    ['tigre', 'tatuagem realista de tigre'],
    ['tiger', 'tatuagem realista de tigre'],
    ['pantera', 'tatuagem realista de pantera'],
    ['panther', 'tatuagem realista de pantera'],
    ['flor', 'tatuagem de flores detalhada'],
    ['flower', 'tatuagem de flores detalhada'],
    ['rosa', 'tatuagem de rosa'],
    ['rose', 'tatuagem de rosa'],
    ['retrato', 'tatuagem de retrato realista'],
    ['portrait', 'tatuagem de retrato realista'],
    ['skull', 'tatuagem de caveira detalhada'],
    ['caveira', 'tatuagem de caveira detalhada'],
    ['manga', 'manga de tatuagem no braço'],
    ['sleeve', 'manga de tatuagem no braço'],
    ['geometrico', 'tatuagem geométrica'],
    ['geometric', 'tatuagem geométrica'],
    ['tribal', 'tatuagem tribal'],
    ['dragon', 'tatuagem de dragão'],
    ['dragao', 'tatuagem de dragão'],
    ['angel', 'tatuagem de anjo'],
    ['anjo', 'tatuagem de anjo'],
    ['oldschool', 'tatuagem old school'],
    ['blackwork', 'tatuagem blackwork'],
    ['dotwork', 'tatuagem dotwork'],
    ['watercolor', 'tatuagem aquarela'],
    ['aquarela', 'tatuagem aquarela'],
    ['fineline', 'tatuagem fine line delicada'],
    ['peixe', 'tatuagem de peixe'],
    ['fish', 'tatuagem de peixe'],
    ['corvo', 'tatuagem de corvo'],
    ['raven', 'tatuagem de corvo'],
    ['touro', 'tatuagem de touro'],
    ['bull', 'tatuagem de touro'],
    ['urso', 'tatuagem de urso'],
    ['bear', 'tatuagem de urso'],
    ['mandala', 'tatuagem mandala'],
    ['compass', 'tatuagem de bússola'],
    ['bussola', 'tatuagem de bússola'],
    ['biomec', 'tatuagem biomecânica'],
    ['japanese', 'tatuagem estilo japonês'],
    ['japones', 'tatuagem estilo japonês'],
    ['maori', 'tatuagem maori'],
    ['celtic', 'tatuagem celta'],
    ['celta', 'tatuagem celta'],
    ['phoenix', 'tatuagem de fênix'],
    ['fenix', 'tatuagem de fênix'],
    ['skull', 'tatuagem de caveira'],
    ['horror', 'tatuagem estilo horror'],
    ['dark', 'tatuagem dark art'],
  ];

  for (const [key, description] of keywords) {
    if (name.includes(key)) {
      return `${description} — Yago Tatuador Lisboa`;
    }
  }

  return 'tatuagem realista por Yago — artista tatuador em Lisboa';
}

// Images are loaded via a Vite glob from the src/assets/images directory.
// When images exist in public/images/, they are referenced directly by URL.
// This module provides the list that Gallery.tsx consumes.

// Vite glob from src/assets — imported as data URLs for type safety
const assetModules = import.meta.glob('./assets/images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const fromAssets: TattooImage[] = Object.entries(assetModules).map(([path, url]) => {
  const filename = path.split('/').pop()!;
  return { src: url as string, alt: generateAlt(filename) };
});

// Fallback: if images are placed directly in public/images/ (not processed by Vite),
// they won't appear in fromAssets. We maintain a manifest here that is populated
// by listing the filenames. Add your filenames to this array when deploying.
// This array is intentionally empty by default; the project owner should populate it
// by adding image files to public/images/ — the Gallery component shows a helper
// message when both sources are empty.
const publicImageFilenames: string[] = [
  // Example: 'tattoo-leao-realismo.jpg',
  // The owner should list actual filenames here, or use the src/assets/images approach.
];

const fromPublic: TattooImage[] = publicImageFilenames.map((filename) => ({
  src: `/images/${filename}`,
  alt: generateAlt(filename),
}));

export const tattooImages: TattooImage[] = [...fromAssets, ...fromPublic];
