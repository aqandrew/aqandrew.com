import type { ReactNode } from 'react';
import './Ingredient.css';

interface IngredientProps {
  desc: string;
  children: ReactNode;
}

export default function Ingredient({ desc, children }: IngredientProps) {
  return (
    // TODO make title show up without delay
    <mark className="Ingredient" title={desc} tabIndex={0}>
      {children}
    </mark>
  );
}
