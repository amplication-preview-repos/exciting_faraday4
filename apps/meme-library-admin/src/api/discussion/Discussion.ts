import { User } from "../user/User";
import { Meme } from "../meme/Meme";

export type Discussion = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  user?: User | null;
  meme?: Meme | null;
};
