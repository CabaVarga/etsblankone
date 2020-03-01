import { IContext } from "./IContext";

export interface IState {
  Name: string;
  Do() : void;
  Undo(): void;
  Exit(): void;
  SetContext(context : IContext) : void;
}