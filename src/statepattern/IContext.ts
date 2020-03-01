import { IState } from "./IState";

export interface IContext {
  TransitionTo(state : IState) : void;
}