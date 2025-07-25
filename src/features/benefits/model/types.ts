import { SvgIconProps } from '@mui/material';

export type Benefit = {
  Icon: React.ComponentType<SvgIconProps>; // Изменено с icon на Icon
  title: string;
  description: string;
};

export type BenefitsList = Benefit[];
