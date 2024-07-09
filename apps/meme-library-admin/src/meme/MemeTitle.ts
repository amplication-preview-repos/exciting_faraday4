import { Meme as TMeme } from "../api/meme/Meme";

export const MEME_TITLE_FIELD = "name";

export const MemeTitle = (record: TMeme): string => {
  return record.name?.toString() || String(record.id);
};
