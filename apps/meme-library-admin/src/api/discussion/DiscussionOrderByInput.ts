import { SortOrder } from "../../util/SortOrder";

export type DiscussionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  userId?: SortOrder;
  memeId?: SortOrder;
};
