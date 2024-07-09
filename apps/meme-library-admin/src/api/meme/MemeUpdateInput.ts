import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DiscussionUpdateManyWithoutMemesInput } from "./DiscussionUpdateManyWithoutMemesInput";

export type MemeUpdateInput = {
  url?: string | null;
  description?: string | null;
  tags?: Array<"Option1">;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
  discussions?: DiscussionUpdateManyWithoutMemesInput;
};
