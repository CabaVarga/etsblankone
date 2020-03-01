import React, { useState } from 'react'

// either import from the outside (long-term: module, maybe npm?)
// or define here (only for some quick hacks...)

import { PartitionContext } from "../../statepattern/PartitionContext";
import { PartitionEntryState } from '../../statepattern/states/PartitionEntryState';
import { PartitionPresentation } from './PartitionPresentation';

let entryState = new PartitionEntryState();
let pactx = new PartitionContext(entryState);

function PartitionContainer () {

  const [StepName, setStepName] = useState(pactx.StepName);
  const [HI, setHI] = useState(pactx.Hi);
  const [LO, setLO] = useState(pactx.Lo);
  const [Pivot, setPivot] = useState(pactx.Pivot);
  const [ICount, setICount] = useState(pactx.ICount);
  const [JCount, setJCount] = useState(pactx.JCount);
  const [Numbers, setNumbers] = useState(pactx.Numbers);
  const [PartitionIndex, setPartitionIndex] = useState(pactx.PartitionIndex);

  const stepForward = () => {
    pactx.StepForward();
    setHI(pactx.Hi);
    setLO(pactx.Lo);
    setPivot(pactx.Pivot);
    setICount(pactx.ICount);
    setJCount(pactx.JCount);
    setPartitionIndex(pactx.PartitionIndex);
    setNumbers(pactx.Numbers);
    setStepName(pactx.StepName);
  }

  const stepBackward = () => {
    pactx.StepBackward();
    setHI(pactx.Hi);
    setLO(pactx.Lo);
    setPivot(pactx.Pivot);
    setICount(pactx.ICount);
    setJCount(pactx.JCount);
    setPartitionIndex(pactx.PartitionIndex);
    setNumbers(pactx.Numbers);
    setStepName(pactx.StepName);
  }

  return (
    <PartitionPresentation
      StepName={StepName}
      Numbers={Numbers}
      LO={LO} 
      HI={HI}
      Pivot={Pivot}
      ICount={ICount}
      JCount={JCount}
      PartitionNumber={PartitionIndex}
      StepForward={stepForward}
      StepBackward={stepBackward}
    />
  )
}

export { PartitionContainer };