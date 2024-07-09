import { JsonValue } from "type-fest";
import { Meme } from "../meme/Meme";
import { Discussion } from "../discussion/Discussion";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  memes?: Array<Meme>;
  discussions?: Array<Discussion>;
};
