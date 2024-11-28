import recommendationService from './recommendation.service';
import mockProducts from '../mocks/mockProducts';

describe('recommendationService', () => {
  test('Retorna recomendação correta para SingleProduct com base nas preferências selecionadas', () => {
    const formData = {
      selectedPreferences: ['Integração com chatbots'],
      selectedFeatures: ['Chat ao vivo e mensagens automatizadas'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Conversas');
  });

  test('Retorna recomendação correta para SingleProduct com base nas funcionalidades selecionadas', () => {
    const formData = {
      selectedPreferences: ['Integração com chatbots'],
      selectedFeatures: ['Chat ao vivo e mensagens automatizadas'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Conversas');
  });

  test('Retorna recomendações corretas para MultipleProducts com base nas preferências selecionadas', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Personalização de funis de vendas',
        'Automação de marketing',
      ],
      selectedFeatures: [
        'Rastreamento de interações com clientes',
        'Rastreamento de comportamento do usuário',
      ],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(2);
    expect(recommendations.map((product) => product.name)).toEqual([
      'RD Station CRM',
      'RD Station Marketing',
    ]);
  });

  test('Retorna recomendações corretas para MultipleProducts com base nas funcionalidades selecionadas', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Personalização de funis de vendas',
        'Automação de marketing',
      ],
      selectedFeatures: [
        'Rastreamento de interações com clientes',
        'Análise de retorno sobre investimento (ROI) de campanhas',
      ],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(2);
    expect(recommendations.map((product) => product.name)).toEqual([
      'RD Station CRM',
      'RD Station Marketing',
    ]);
  });

  test('Retorna apenas um produto para SingleProduct com mais de um produto de match', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Automação de marketing',
      ],
      selectedFeatures: [
        'Análise de dados para insights estratégicos',
        'Rastreamento de comportamento do usuário',
      ],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Station Marketing');
  });

  test('Retorna o último match em caso de empate para SingleProduct quando não há funcionalidades selecionadas', () => {
    const formData = {
      selectedPreferences: [
        'Automação de marketing',
        'Integração com chatbots',
      ],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Conversas');
  });
});

test('Retorna o último match em caso de empate para SingleProduct quando não há preferências selecionadas', () => {
  const formData = {
    selectedFeatures: [
      'Gestão de leads e oportunidades',
      'Recomendação de ações com base em padrões',
    ],
    selectedRecommendationType: 'SingleProduct',
  };

  const recommendations = recommendationService.getRecommendations(
    formData,
    mockProducts
  );

  expect(recommendations).toHaveLength(1);
  expect(recommendations[0].name).toBe('RD Mentor AI');
});

test('Não deve retornar nenhum produto quando não houver nem preferências nem funcionalidades selecionadas', () => {
  const formData = {
    selectedRecommendationType: 'SingleProduct',
  };

  const recommendations = recommendationService.getRecommendations(
    formData,
    mockProducts
  );

  expect(recommendations).toHaveLength(0);
  expect(recommendations).toEqual([]);
});

test('Não deve retornar nenhum produto quando o tipo de recomendação for inválido', () => {
  const formData = {
    selectedRecommendationType: 'InvalidType',
  };

  const recommendations = recommendationService.getRecommendations(
    formData,
    mockProducts
  );

  expect(recommendations).toHaveLength(0);
  expect(recommendations).toEqual([]);
});

test('Não deve retornar nenhum produto quando o tipo de recomendação for informado', () => {
  const formData = {
    selectedPreferences: [
      'Integração fácil com ferramentas de e-mail',
      'Automação de marketing',
    ],
    selectedFeatures: [
      'Análise de dados para insights estratégicos',
      'Rastreamento de comportamento do usuário',
    ],
  };

  const recommendations = recommendationService.getRecommendations(
    formData,
    mockProducts
  );

  expect(recommendations).toHaveLength(0);
  expect(recommendations).toEqual([]);
});
