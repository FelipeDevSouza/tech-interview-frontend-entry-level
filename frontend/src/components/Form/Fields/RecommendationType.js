import React from 'react';
import Checkbox from '../../shared/Checkbox';

function RecommendationType({ onRecommendationTypeChange }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-4 uppercase">
        Tipo de Recomendação:
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex items-center gap-1">
          <Checkbox
            type="radio"
            name="recommendationType"
            value="SingleProduct"
            onChange={() => onRecommendationTypeChange('SingleProduct')}
          />
          <label htmlFor="SingleProduct">Produto Único</label>
        </div>
        <div className="flex items-center gap-1">
          <Checkbox
            type="radio"
            name="recommendationType"
            value="MultipleProducts"
            onChange={() => onRecommendationTypeChange('MultipleProducts')}
          />
          <label htmlFor="MultipleProducts">Múltiplos Produtos</label>
        </div>
      </div>
    </div>
  );
}

export default RecommendationType;
