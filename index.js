/* eslint-disable quote-props */
const button = document.getElementById('button');
const input = document.getElementById('input');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');

button.addEventListener('click', () => {
  // eslint-disable-next-line no-console
  console.log(input.value);
  const newDiv1 = document.createElement('div');
  newDiv1.id = 'newDiv1';
  newDiv1.title = input.value;
  box1.appendChild(newDiv1);

  function inputValueSlice(value) {
    let result = value;
    if (value.length > 15) {
      result = `${value.slice(0, 15).trim()}...`;
    }
    return result;
  }
  newDiv1.innerText = inputValueSlice(input.value);
  newDiv1.style.color = 'white';

  const newDiv2 = document.createElement('div');
  newDiv2.id = 'newDiv2';
  box2.appendChild(newDiv2);

  function translit(str) {
    const newArr = str.split('');
    const trans = {

      'а': 'a',
      'б': 'b',
      'в': 'v',
      'г': 'g',
      'д': 'd',
      'е': 'e',
      'ё': 'e',
      'ж': 'zh',
      'з': 'z',
      'и': 'i',
      'й': 'y',
      'к': 'k',
      'л': 'l',
      'м': 'm',
      'н': 'n',
      'о': 'o',
      'п': 'p',
      'р': 'r',
      'с': 's',
      'т': 't',
      'у': 'u',
      'ф': 'f',
      'х': 'h',
      'ц': 'c',
      'ч': 'ch',
      'ш': 'sh',
      'щ': 'sch',
      'ь': '',
      'ы': 'y',
      'ъ': '',
      'э': 'e',
      'ю': 'yu',
      'я': 'ya',

      'А': 'A',
      'Б': 'B',
      'В': 'V',
      'Г': 'G',
      'Д': 'D',
      'Е': 'E',
      'Ё': 'E',
      'Ж': 'Zh',
      'З': 'Z',
      'И': 'I',
      'Й': 'Y',
      'К': 'K',
      'Л': 'L',
      'М': 'M',
      'Н': 'N',
      'О': 'O',
      'П': 'P',
      'Р': 'R',
      'С': 'S',
      'Т': 'T',
      'У': 'U',
      'Ф': 'F',
      'Х': 'H',
      'Ц': 'C',
      'Ч': 'Ch',
      'Ш': 'Sh',
      'Щ': 'Sch',
      'Ь': '',
      'Ы': 'Y',
      'Ъ': '',
      'Э': 'E',
      'Ю': 'Yu',
      'Я': 'Ya',
    };
    return newArr.map((char) => trans[char] || char).join('');
  }

  newDiv2.title = translit(input.value);

  function sliceTranslit(trans) {
    if (trans.length > 15) {
      return `${trans.slice(0, 15).trim()}...`;
    }
    return trans;
  }

  newDiv2.innerText = sliceTranslit(translit(input.value));
  newDiv2.style.color = 'white';
});
