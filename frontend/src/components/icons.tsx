import * as Tabler from 'react-icons/tb';
import type { IconValue } from '@/util/icon-names';

interface IconProps {
  name: IconValue;
  size?: number;
  className?: string;
}

const Icon = ({ name, size = 16, className = '' }: IconProps) => {
  const IconComponent = Tabler[name as keyof typeof Tabler];

  if (!IconComponent) {
    console.warn(`Icon {name} was not found`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
