import { IContext } from "./IContext";

export interface IPartitionContext extends IContext {
  Numbers: Array<number> | undefined;
  Lo: number | undefined;
  Hi: number | undefined;
  Pivot: number | undefined;
  ICount: number | undefined;
  JCount: number | undefined;
  PartitionIndex: number | undefined;
  IsEnd: boolean | undefined;
}