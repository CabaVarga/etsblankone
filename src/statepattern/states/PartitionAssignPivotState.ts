import { IPartitionContext } from '../IPartitionContext'
import { IPartitionState } from '../IPartitionState';
import { PartitionAssignICountState } from './PartitionAssignICountState';

export class PartitionAssignPivotState implements IPartitionState {
  Name = "Assign pivot value";

  private _savedState : { Pivot : number | undefined } | undefined;

  private _context : IPartitionContext | undefined;

  Do(): void {
    if (this._savedState === undefined) {
      this._savedState = {
        Pivot: this._context?.Pivot
      }
    }
    else {
      this._savedState.Pivot = this._context?.Pivot;
    }
    
    if (this._context && this._context.Numbers && this._context.Hi) {
      this._context.Pivot = this._context.Numbers[this._context.Hi];
    }
  }  
  
  Undo(): void {
    if (this._savedState && this._context && this._context.Numbers && this._context.Hi) {
      this._context.Pivot = this._savedState.Pivot;
    }
  }

  Exit(): void {
    this._context?.TransitionTo(new PartitionAssignICountState());
  }

  SetContext(context: IPartitionContext): void {
    this._context = context;
  }
}