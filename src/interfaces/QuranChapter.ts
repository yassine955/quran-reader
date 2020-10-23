export interface Quran {
  chapter_number: number;
  name_arabic: string;
  name_simple: string;
}

export interface Chapter {
  verse_key: string;
  verse_number: number;
  text_indopak: string;
  text_madani: string;
  text_simple: string;
  id: number;
  translations: Translation[];
}

interface Translation {
  id: number;
  text: string;
}
