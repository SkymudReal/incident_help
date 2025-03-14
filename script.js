document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit-incident');
  const previewElements = {
    'incident-name': 'preview-incident-name',
    'criticality': 'preview-criticality',
    'category': 'preview-category',
    'type': 'preview-type',
    'data-alert': 'preview-datetime',
    'description': 'preview-description',
    'source-info': 'preview-source-info',
    'actions': 'preview-actions',
    'recommendations': 'preview-recommendations',
    'target-system': 'preview-target-system',
    'additional-info': 'preview-additional-info'
  };
  

  // Отправка данных в таблицу
  submitButton.addEventListener('click', () => {
    Object.keys(previewElements).forEach(key => {
      const value = document.getElementById(key).value;
      document.getElementById(previewElements[key]).textContent = value;
    });
  });
});