const formSearch = document.querySelector('.form-search'),
inputCitiesFrom = formSearch.querySelector('.input__cities-from'),
dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
inputCitiesTo = formSearch.querySelector('.input__cities-to'),
dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to');


const citiesAPI = './cities.json',
        proxy = ' https://cors-anywhere.herokuapp.com/',
        API_KEY = '46ee86c8ac66a0302b6be11ec91350d2',
        CALENDAR = 'http://min-prices.aviasales.ru/calendar_preload';


const cities = ['Москва','Керчь','Санкт-Петербург','Харьков','Астана','Днепр',
                'Одесса','Ухань','Киев','Вроцлав','Львов','Елизово','Самара'];

let city = [];
                //API function
const getData = (url, callBack) => {
    const request = new XMLHttpRequest();

    request.open('GET', url);
    request.addEventListener('readystatechange', () => {
           if(request.readyState !== 4) return;

           if(request.status === 200){
             callBack(request.response);             
           } else{
               console.error(request.status);
           }
            
    });

    request.send();
};


const showCities = (input, list) => {
    list.textContent = '';

    if(input.value === '') return;

            const filterOfTheCities = city.filter((item) => {
                             
                const itemToLowerCase = item.name.toLowerCase();
                return itemToLowerCase.includes(input.value.toLowerCase());
                
            });
            filterOfTheCities.forEach((item) => {
                const li = document.createElement('li');
                li.classList.add('dropdown__city');
                li.textContent = item.name;
                list.append(li);
                console.log(li);
            });

      
};

const selectCity = (event, input, list) => {
    const target = event.target;
    if(target.tagName.toLowerCase() === 'li') {
        input.value = target.textContent;
        list.textContent = '';
    }
}

inputCitiesFrom.addEventListener('input', () => {
    showCities(inputCitiesFrom, dropdownCitiesFrom);
});

dropdownCitiesFrom.addEventListener('click', (event) => {
   selectCity(event, inputCitiesFrom, dropdownCitiesFrom);
});

inputCitiesTo.addEventListener('input', () => {
    showCities(inputCitiesTo, dropdownCitiesTo);
});

dropdownCitiesTo.addEventListener('click', (event) => {
    selectCity(event, inputCitiesTo, dropdownCitiesTo);
});

getData(citiesAPI, (data) =>    city = JSON.parse(data).filter((item) => item.name));