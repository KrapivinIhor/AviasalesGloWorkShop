const formSearch = document.querySelector('.form-search'),
inputCitiesFrom = formSearch.querySelector('.input__cities-from'),
dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
inputCitiesTo = formSearch.querySelector('.input__cities-to'),
dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to');

const cities = ['Москва','Керчь','Санкт-Петербург','Харьков','Астана','Днепр',
                'Одесса','Ухань','Киев','Вроцлав','Львов','Елизово','Самара'];

const showCities = (input, list) => {
    list.textContent = '';

    if(input.value === '') return;

            const filterOfTheCities = cities.filter((item) => {
                const itemToLowerCase = item.toLowerCase();
                return itemToLowerCase.includes(input.value.toLowerCase());
            });
            filterOfTheCities.forEach((item) => {
                const li = document.createElement('li');
                li.classList.add('dropdown__city');
                li.textContent = item;
                list.append(li);
                console.log(li);
            });

      
};

inputCitiesFrom.addEventListener('input', () => {
    showCities(inputCitiesFrom, dropdownCitiesFrom);
});

dropdownCitiesFrom.addEventListener('click', (event) => {
    const target = event.target;
    if(target.tagName.toLowerCase() === 'li') {
        inputCitiesFrom.value = target.textContent;
        dropdownCitiesFrom.textContent = '';
    }
});

inputCitiesTo.addEventListener('input', () => {
    showCities(inputCitiesTo, dropdownCitiesTo);
});

dropdownCitiesTo.addEventListener('click', (event) => {
    const target = event.target;
    if(target.tagName.toLowerCase() === 'li') {
        inputCitiesTo.value = target.textContent;
        dropdownCitiesTo.textContent = '';
    }
});