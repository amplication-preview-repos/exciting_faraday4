import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MemeWhereUniqueInput } from "../meme/MemeWhereUniqueInput";

export type DiscussionUpdateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
  meme?: MemeWhereUniqueInput | null;
};
