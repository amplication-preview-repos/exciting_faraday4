import { MemeWhereInput } from "./MemeWhereInput";
import { MemeOrderByInput } from "./MemeOrderByInput";

export type MemeFindManyArgs = {
  where?: MemeWhereInput;
  orderBy?: Array<MemeOrderByInput>;
  skip?: number;
  take?: number;
};
