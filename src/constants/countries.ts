export const COUNTRIES_REGEX = /^[ㄱ-ㅎ가-힣a-zA-Z]+$/;

export const CATEGORIES = ['WISH', 'LIKE', 'EXPERIENCE'];

export const Categories = {
    WISH: 'WISH' as const,
    LIKE: 'LIKE' as const,
    EXPERIENCE: 'EXPERIENCE' as const,
  } as const;