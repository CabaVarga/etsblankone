import { IPartitionContext } from '../IPartitionContext'
import { IPartitionState } from '../IPartitionState';
import { PartitionAssignPivotState } from './PartitionAssignPivotState';

export class PartitionEntryState implements IPartitionState {
  
  Name = "Partition entry";
  
  private _savedState : { 
    Numbers : Array<number> | undefined,
    Lo: number | undefined,
    Hi: number | undefined 
  } | undefined;

  private _context : IPartitionContext | undefined;

  Do(): void {
    if (this._savedState === undefined) {
      this._savedState = {
        Numbers: this._context?.Numbers,
        Lo: this._context?.Lo,
        Hi: this._context?.Hi
      }
    } else {
      this._savedState.Numbers = this._context?.Numbers;
      this._savedState.Lo = this._context?.Lo;
      this._savedState.Hi = this._context?.Hi;
    }
  }  
  
  Undo(): void {
    if (this._savedState && this._context) {
      this._context.Numbers = this._savedState.Numbers;
      this._context.Lo = this._savedState.Lo;
      this._context.Hi = this._savedState.Hi;
    }
  }

  Exit(): void {
    this._context?.TransitionTo(new PartitionAssignPivotState());
  }

  SetContext(context: IPartitionContext): void {
    this._context = context;
  }
}