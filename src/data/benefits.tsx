import React from 'react';
import {
  IntegrationInstructions,
  PrecisionManufacturing,
  Speed,
  ThumbUp,
} from '@mui/icons-material';

export const benefits = [
  {
    icon: <Speed />,
    title: 'Скорость',
    description: 'Построение резьбы занимает считанные минуты',
  },
  {
    icon: <PrecisionManufacturing />,
    title: 'Точность',
    description: 'Минимизация ошибок проектирования',
  },
  {
    icon: <IntegrationInstructions />,
    title: 'Интеграция',
    description: 'Полная совместимость с КОМПАС-3D',
  },
  {
    icon: <ThumbUp />,
    title: 'Удобство',
    description: 'Простой и понятный интерфейс',
  },
];
