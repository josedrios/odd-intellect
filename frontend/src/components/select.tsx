import SelectBase from 'react-select';

export type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  defaultValue: Option;
  size: string;
  value: Option | null;
  setValue: React.Dispatch<React.SetStateAction<Option | null>>;
};

export function Select({
  value,
  setValue,
  options,
  defaultValue,
  size,
}: SelectProps) {
  return (
    <SelectBase
      options={options}
      value={value}
      onChange={(option) => setValue(option as Option | null)}
      defaultValue={defaultValue}
      className={`react-select react-select-${size}`}
      classNamePrefix={'react-select'}
      unstyled
      isClearable={false}
      isSearchable={false}
    />
  );
}
