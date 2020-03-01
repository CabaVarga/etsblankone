import { IState } from "./IState";
import { IPartitionContext } from "./IPartitionContext"

export interface IPartitionState extends IState {
  SetContext(context: IPartitionContext) : void;
}