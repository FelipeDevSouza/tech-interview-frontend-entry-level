import React, { useState } from 'react';
import MainLayout from './components/shared/MainLayout';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  /**
   * Dadas atualizações no formulário, necessário atualizar a lista de recomendações
   */

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold my-8 text-white">
        Recomendador de Produtos RD Station
      </h1>

      <div className="bg-white p-8 shadow-sm w-full container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-2 mb-4">
          <p className="text-lg">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
            encontrar uma variedade de produtos da RD Station, cada um projetado
            para atender às necessidades específicas do seu negócio. De CRM a
            Marketing, de Conversas a Inteligência Artificial, temos uma solução
            para ajudar você a alcançar seus objetivos. Use o formulário abaixo
            para selecionar suas preferências e funcionalidades desejadas e
            receba recomendações personalizadas de produtos que melhor atendam
            às suas necessidades.
          </p>
        </div>
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <Form onRecommendationsSubmit={setRecommendations} />
          </div>
          <div className="col-span-1">
            <RecommendationList recommendations={recommendations} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
