import SelectBase from 'react-select';

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  defaultValue: Option;
  size: string;
};

export default function Select({ options, defaultValue, size }: SelectProps) {
  return (
    <SelectBase
      options={options}
      defaultValue={defaultValue}
      className={`react-select react-select-${size}`}
      classNamePrefix={'react-select'}
      unstyled
      isClearable={false}
      isSearchable={false}
    />
  );
}
