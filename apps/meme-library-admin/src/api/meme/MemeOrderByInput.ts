import { SortOrder } from "../../util/SortOrder";

export type MemeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  description?: SortOrder;
  tags?: SortOrder;
  name?: SortOrder;
  userId?: SortOrder;
};
