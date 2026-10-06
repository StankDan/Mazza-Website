// Koja fotografija prostora ide uz koju uzrasnu grupu na stranici "Programi".
// Broj je redni broj slike u galeriji tog vrtica (vidi src/data/photos.ts).

export const AGE_GROUP_PHOTOS: Record<string, { locationId: string; index: number }> = {
  nursery: { locationId: 'mazza-2', index: 11 },
  kindergarten: { locationId: 'mazza-2', index: 1 },
  preschool: { locationId: 'mazza-3', index: 5 },
};
