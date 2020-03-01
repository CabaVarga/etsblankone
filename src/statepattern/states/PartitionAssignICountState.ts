import { IPartitionState } from "../IPartitionState";
import { IPartitionContext } from '../IPartitionContext';

export class PartitionAssignICountState implements IPartitionState {
  
  Name = "Assign i value";

  private _savedState : { ICount : number | undefined } | undefined;

  private _context : IPartitionContext | undefined;

  SetContext(context: IPartitionContext): void {
    this._context = context;
  }  
  
  Do(): void {
    if (this._savedState === undefined) {
      this._savedState = {
        ICount: this._context?.ICount
      }
    }
    else {
      this._savedState.ICount = this._context?.ICount;
    }
    
    if (this._context && this._context.Lo !== undefined) {
      this._context.ICount = this._context.Lo - 1;
    }
  }

  Undo(): void {
    if (this._savedState && this._context) {
      this._context.ICount = this._savedState.ICount;
    }
  }

  Exit(): void {
    if (this._context !== undefined) {
      this._context.IsEnd = true;
    }    
  }

}