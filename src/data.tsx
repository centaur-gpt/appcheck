import { ReactNode } from 'react';
import { Utensils, Shirt, Smartphone, Sparkles, Ticket, Flame } from 'lucide-react';

export type Category = 'Все' | 'Еда' | 'Одежда' | 'Техника' | 'Красота' | 'Развлечения' | 'Открытия';

export interface CategoryItem {
  id: Category;
  label: string;
  icon: ReactNode;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  category: Category;
  discountType: string;
  address: string;
  image: string;
  url: string;
}

export const CATEGORIES: CategoryItem[] = [
  { id: 'Все', label: 'Все', icon: null },
  { id: 'Еда', label: 'Еда', icon: <Utensils size={16} /> },
  { id: 'Одежда', label: 'Одежда', icon: <Shirt size={16} /> },
  { id: 'Техника', label: 'Техника', icon: <Smartphone size={16} /> },
  { id: 'Красота', label: 'Красота', icon: <Sparkles size={16} /> },
  { id: 'Развлечения', label: 'Развлечения', icon: <Ticket size={16} /> },
  { id: 'Открытия', label: 'Открытия', icon: <Flame size={16} /> },
];

export const MOCK_OFFERS: Offer[] = [
  {
    id: '1',
    title: 'Скидка 30% на все меню',
    description: 'Идеальный повод собраться с друзьями. Актуально во всех ресторанах сети при заказе от 1500 рублей.',
    category: 'Еда',
    discountType: '-30%',
    address: 'м. Китай-город, ул. Маросейка, 15',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    url: '#',
  },
  {
    id: '2',
    title: 'Распродажа кроссовок New Balance',
    description: 'Ликвидация прошлой коллекции. Размеры тают на глазах, успей забрать свою пару по суперцене.',
    category: 'Одежда',
    discountType: 'SALE',
    address: 'ТЦ Авиапарк, Ходынский б-р, 4',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80',
    url: '#',
  },
  {
    id: '3',
    title: 'Кэшбэк 20% на технику Apple',
    description: 'При покупке iPhone 15 или MacBook Air M2 возвращаем 20% бонусными баллами на карту магазина.',
    category: 'Техника',
    discountType: 'КЭШБЭК',
    address: 'м. Тверская, Тверская ул., 10',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=600&q=80',
    url: '#',
  },
  {
    id: '4',
    title: 'Спа-день для двоих со скидкой',
    description: 'Массаж, бассейн и хаммам. Подарите себе и близкому человеку день полного релакса в центре Москвы.',
    category: 'Красота',
    discountType: '-40%',
    address: 'Москва Сити, Башня Федерация',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
    url: '#',
  },
  {
    id: '5',
    title: 'Билеты на выставку "Дали"',
    description: 'Эксклюзивная выставка оригиналов Сальвадора Дали. При покупке онлайн второй билет в подарок.',
    category: 'Развлечения',
    discountType: '1+1',
    address: 'м. Кропоткинская, Волхонка, 12',
    image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=600&q=80',
    url: '#',
  },
  {
    id: '6',
    title: 'Открытие нового гастромаркета',
    description: 'Бесплатные дегустации, мастер-классы от шефов и скидка 50% на первый заказ в любом корнере.',
    category: 'Открытия',
    discountType: 'БОНУС',
    address: 'м. Курская, пространство Arma',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    url: '#',
  }
];
