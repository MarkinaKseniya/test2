function calculate() {
    var depositType = document.getElementById('depositType').value;
    var depositTermSelect = document.getElementById('depositTerm');
    var selectedTerm = depositTermSelect.value;

    var initialAmount = parseFloat(document.getElementById('initialAmount').value);
    var depositTerm = depositTermSelect.value;
    var interestRate = getInterestRate(depositType, depositTerm); // Получаем процентную ставку
    var totalAmount = initialAmount * (1 + interestRate);

    depositTermSelect.innerHTML = '';
  
    if (depositType === 'popolnyaemy') {
      addOption(depositTermSelect, '6m', '6 месяцев');
      addOption(depositTermSelect, '1y', '1 год');
      addOption(depositTermSelect, '1.5y', '1,5 года');
      addOption(depositTermSelect, '2y', '2 года');
    } else if (depositType === 'srochny') {
      addOption(depositTermSelect, '3m', '3 месяца');
      addOption(depositTermSelect, '6m', '6 месяцев');
      addOption(depositTermSelect, '9m', '9 месяцев');
      addOption(depositTermSelect, '1y', '1 год');
      addOption(depositTermSelect, '1.5y', '1,5 года');
      addOption(depositTermSelect, '2y', '2 года');
    }


    depositTermSelect.value = selectedTerm;
  
    var resultMessage = 'Вклад "' + (depositType === 'popolnyaemy' ? 'Пополняемый' : 'Срочный') +
    '" на срок "' + depositTermSelect.options[depositTermSelect.selectedIndex].text + '" на сумму ' + initialAmount.toFixed(2) + ' руб.\n' +
    'В конце срока вы получите ' + totalAmount.toFixed(2) + ' руб.';
    document.getElementById('resultMessage').innerText = resultMessage;
}
  
  function getInterestRate(depositType, depositTerm) {
    if (depositType === 'popolnyaemy') {
      switch (depositTerm) {
        case '6m':
          return 0.20;
        case '1y':
          return 0.22;
        case '1.5y':
          return 0.15;
        case '2y':
          return 0.10;
        default:
          return 0.05; // Значение по умолчанию
      }
    } else if (depositType === 'srochny') {
      switch (depositTerm) {
        case '3m':
          return 0.20;
        case '6m':
          return 0.22;
        case '9m':
          return 0.23;
        case '1y':
          return 0.24;
        case '1.5y':
          return 0.18;
        case '2y':
          return 0.15;
        default:
          return 0.05; // Значение по умолчанию
      }
    }
  }
  
  function addOption(select, value, text) {
    var option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    select.appendChild(option);
  }
  
// Добавление обработчика изменения для комбобокса с видом вклада
document.getElementById('depositType').addEventListener('change', calculate);

// Добавление обработчика изменения для комбобокса со сроком вклада
document.getElementById('depositTerm').addEventListener('change', calculate);
  