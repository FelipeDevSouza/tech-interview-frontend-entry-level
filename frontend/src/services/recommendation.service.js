// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  const { selectedPreferences, selectedFeatures, selectedRecommendationType } =
    formData;
  let recommendations = [];

  if (selectedRecommendationType === 'SingleProduct') {
    const matches = products.filter((product) => {
      const preferencesMatch = selectedPreferences?.some((preference) =>
        product.preferences.includes(preference)
      );

      const featuresMatch = selectedFeatures?.some((feature) =>
        product.features.includes(feature)
      );

      return preferencesMatch || featuresMatch;
    });

    if (matches.length > 0) {
      recommendations.push(matches[0]);
    } else {
      recommendations.push(matches[matches.length - 1]);
    }
  } else if (selectedRecommendationType === 'MultipleProducts') {
    const matches = products.filter((product) => {
      const preferencesMatch = selectedPreferences?.some((preference) =>
        product.preferences.includes(preference)
      );

      const featuresMatch = selectedFeatures?.some((feature) =>
        product.features.includes(feature)
      );

      return preferencesMatch && featuresMatch;
    });

    recommendations = matches;
  }

  return recommendations;
};

export default { getRecommendations };
