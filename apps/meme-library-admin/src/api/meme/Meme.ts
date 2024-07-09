import { User } from "../user/User";
import { Discussion } from "../discussion/Discussion";

export type Meme = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  url: string | null;
  description: string | null;
  tags?: Array<"Option1">;
  name: string | null;
  user?: User | null;
  discussions?: Array<Discussion>;
};
