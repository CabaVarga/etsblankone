import { IPartitionContext } from './IPartitionContext';
import { IPartitionState } from './IPartitionState';

class PartitionContext implements IPartitionContext {
  
  Numbers: number[] | undefined;
  Lo: number | undefined;
  Hi: number | undefined;
  Pivot: number | undefined;
  ICount: number | undefined;
  JCount: number | undefined;
  PartitionIndex: number | undefined;

  IsEnd: boolean | undefined;
  
  private states : Array<IPartitionState> | undefined; 
  private _state : IPartitionState;

  constructor(state : IPartitionState) {
    this.IsEnd = false;

    this.SetupNumbers();
    this.SetupLo();
    this.SetupHi();
    
    this._state = state;

    this.states = [];
    this.states.push(this._state);

    this._state.SetContext(this);
    this._state.Do();
  }

  SetupNumbers() {
    this.Numbers = [2, 32, 3, 5, 1, 5, 3, 7];
  }

  SetupLo() {
    this.Lo = 0;
  }

  SetupHi() {
    if (this.Numbers) 
      this.Hi = this.Numbers.length - 1;
  }

  TransitionTo(state: IPartitionState): void {
    this._state = state;
    this.states?.push(this._state);
    this._state.SetContext(this);
    this._state.Do();
  }

  StepForward() : void {
    if (this.IsEnd !== undefined && this.IsEnd === true) {
      return;
    }

    this._state.Exit();
  }

  StepBackward() : void {

    if (this.states !== undefined && this.states.length <= 1) {
      return;
    }

    this._state.Undo();
    this.states?.pop();
    if (this.states) {
      this._state = this.states[this.states.length - 1];
    }

    if (this.IsEnd !== undefined && this.IsEnd === true) {
      this.IsEnd = false;
    }
  }

  get StepName () {
    return this._state.Name;
  }
}

export { PartitionContext }