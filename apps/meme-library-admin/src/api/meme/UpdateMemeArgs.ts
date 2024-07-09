import { MemeWhereUniqueInput } from "./MemeWhereUniqueInput";
import { MemeUpdateInput } from "./MemeUpdateInput";

export type UpdateMemeArgs = {
  where: MemeWhereUniqueInput;
  data: MemeUpdateInput;
};
