import { ReactNode } from 'react';
import { Utensils, Shirt, Smartphone, Sparkles, Ticket, Flame } from 'lucide-react';

export type Category = 'Все' | 'Еда' | 'Одежда' | 'Техника' | 'Красота' | 'Развлечения' | 'Открытия';

export interface CategoryItem {
  id: Category;
  label: string;
  icon: ReactNode;
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
