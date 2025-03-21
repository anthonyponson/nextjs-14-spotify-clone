import * as RadixSlider from '@radix-ui/react-slider';

interface SliderProps {
    value? : number;
    onChange?: (value: number) => void;

}
const Slider:React.FC<SliderProps> = ({value = 1, onChange}) => {
    const handleChange = (newValue: number[]) => {
        onChange?.(newValue[0]);
    }
  return (
   <div>
    <RadixSlider.Root
    className='relative flex items-center select-none touch-none w-full h-10'
      defaultValue={[1]}
      max={1}
      step={0.1}
      value={[value]}
      onValueChange={handleChange}
      aria-label='volume'
    >
      <RadixSlider.Track className="relative flex-grow rounded-full h-2 bg-neutral-600">
        <RadixSlider.Range className="absolute rounded-full h-full bg-white" />
      </RadixSlider.Track>
    </RadixSlider.Root>
   </div>
  )
}

export default Slider;