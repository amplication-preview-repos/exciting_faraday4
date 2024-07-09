import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MemeWhereUniqueInput } from "../meme/MemeWhereUniqueInput";

export type DiscussionWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  meme?: MemeWhereUniqueInput;
};
