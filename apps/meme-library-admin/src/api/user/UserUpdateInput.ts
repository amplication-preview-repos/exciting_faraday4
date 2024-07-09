import { InputJsonValue } from "../../types";
import { MemeUpdateManyWithoutUsersInput } from "./MemeUpdateManyWithoutUsersInput";
import { DiscussionUpdateManyWithoutUsersInput } from "./DiscussionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  memes?: MemeUpdateManyWithoutUsersInput;
  discussions?: DiscussionUpdateManyWithoutUsersInput;
};
