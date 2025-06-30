import React from 'react';
import MainLayout from '@components/layout/MainLayout';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Check } from '@mui/icons-material';

const cards = [
  {
    id: 1,
    title: 'Free',
    description: 'Бесплатная версия для ознакомления с базовым функционалом',
    features: [
      'Создание простых 3D-моделей',
      'Базовые инструменты черчения',
      'Экспорт в стандартные форматы (STEP, IGES)',
      'Лимитированная библиотека стандартных элементов',
      'Только локальное сохранение проектов',
    ],
    price: 'Бесплатно',
    audience: 'Студенты, начинающие специалисты',
  },
  {
    id: 2,
    title: 'Plus',
    description: 'Полный набор инструментов для инженерного проектирования',
    features: [
      'Расширенная библиотека резьб (метрическая, дюймовая, трубная)',
      'Расчет нагрузок на соединения',
      'Генерация технической документации по ГОСТ',
      'Интеграция с системами ЧПУ',
      'Облачное хранение проектов',
      'Поддержка API для автоматизации',
    ],
    price: '15 000 ₽/мес',
    audience: 'Инженеры-конструкторы, проектные бюро',
  },
  {
    id: 3,
    title: 'Pro',
    description: 'Комплексное решение для промышленного применения',
    features: [
      'Все функции Professional-версии',
      'Многопользовательский режим',
      'Ведение версионности проектов',
      'Расширенная аналитика (FEA, кинематика)',
      'Персональный менеджер',
      'Приоритетная техподдержка 24/7',
      'Индивидуальная адаптация под стандарты предприятия',
    ],
    price: 'Индивидуально',
    audience: 'Крупные промышленные предприятия',
  },
];

const ProductsPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = React.useState(0);
  const icon = <Check />;
  return (
    <MainLayout>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Наши приложения
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Выберите идеальное приложение для вашего проектирования
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
            gap: 2,
          }}
        >
          {cards.map((card, index) => (
            <Card>
              <CardActionArea
                onClick={() => setSelectedCard(index)}
                data-active={selectedCard === index ? '' : undefined}
                sx={{
                  height: '100%',
                  '&[data-active]': {
                    backgroundColor: 'action.selected',
                    '&:hover': {
                      backgroundColor: 'action.selectedHover',
                    },
                  },
                }}
              >
                <CardContent sx={{ height: '100%' }}>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                  <List>
                    {card.features?.map((feature, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Typography variant="body2" color="text.secondary">
                    {card.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.audience}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </MainLayout>
  );
};

export default ProductsPage;
