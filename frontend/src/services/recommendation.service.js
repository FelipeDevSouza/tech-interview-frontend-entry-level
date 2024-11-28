// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  const { selectedRecommendationType } = formData;
  let recommendations = [];

  if (selectedRecommendationType === 'SingleProduct') {
    const matches = products.filter((product) =>
      matchRecommendations(product, formData)
    );

    recommendations.push(matches[matches.length - 1]);
  } else if (selectedRecommendationType === 'MultipleProducts') {
    const matches = products.filter((product) =>
      matchRecommendations(product, formData)
    );

    recommendations = matches;
  }

  return recommendations;
};

const matchRecommendations = (
  product,
  formData = { selectedPreferences: [], selectedFeatures: [] }
) => {
  const { selectedPreferences, selectedFeatures } = formData;

  if (!selectedFeatures && selectedPreferences)
    return matchPreferences(product, selectedPreferences);

  if (!selectedPreferences && selectedFeatures)
    return matchFeatures(product, selectedFeatures);

  const preferencesMatch = matchPreferences(product, selectedPreferences);
  const featuresMatch = matchFeatures(product, selectedFeatures);

  return preferencesMatch && featuresMatch;
};

const matchPreferences = (product, selectedPreferences) => {
  if (!selectedPreferences) return false;

  return selectedPreferences.some((preference) =>
    product.preferences.includes(preference)
  );
};

const matchFeatures = (product, selectedFeatures) => {
  if (!selectedFeatures) return false;

  return selectedFeatures.some((feature) => product.features.includes(feature));
};

export default { getRecommendations };
