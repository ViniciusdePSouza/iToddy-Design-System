import { Label, MultiStepContainer, Step, Steps } from "./styled";

export interface MultiStepProps {
  size: number;
  currentStep?: number;
}

export function Multistep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label> Step {currentStep} out of {size} </Label>
      <Steps css={{ '--steps-size': size }}>
        {Array.from({length: size}, (_, i) => i + 1,).map(step => {
            return <Step key={step} active={currentStep >= step}/>
        })}
      </Steps>
    </MultiStepContainer>
  );
}

Multistep.displayName = 'Multistep'
