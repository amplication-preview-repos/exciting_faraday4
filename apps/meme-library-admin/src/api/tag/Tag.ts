export type Tag = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  memes?: Array<"Option1">;
};
