interface Pokemon {
  id: string;
  name: string;
  height: string;
  weight: string;
  types: any;
  'base-Experience': string;
  abilities: any;
  hp: string;
  attack: string;
  defense: string;
  'special-attack': string;
  'special-defense': string;
  speed: string;
  img: string; 
}
const data: Array<Pokemon> = [
    { 
      id: '1',
      name: 'Bulbasaur',
      height: '7',
      weight: '69',
      types: ['grass', 'poison'],
      'base-Experience': '64',
      abilities: ['overgrow', 'chlorophyll'],
      hp: '45',
      attack: '49',
      defense: '49',
      'special-attack': '65',
      'special-defense': '65',
      speed: '45',
      img: '../img/pokemon1.png',
    },
    {
      id: '2',
      name: 'Ivysaur',
      height: '10',
      weight: '130',
      types: ['grass', 'poison'],
      'base-Experience': '142',
      abilities: ['overgrow', 'chlorophyll'],
      hp: '60',
      attack: '62',
      defense: '63',
      'special-attack': '80',
      'special-defense': '80',
      speed: '60',
      img: '../img/pokemon2.png',
    },
    {
      id: '3',
      name: 'Venusaur',
      height: '20',
      weight: '1000',
      types: ['grass', 'poison'],
      'base-Experience': '236',
      abilities: ['overgrow', 'chlorophyll'],
      hp: '80',
      attack: '82',
      defense: '83',
      'special-attack': '100',
      'special-defense': '100',
      speed: '80',
      img: '../img/pokemon3.png',
    },
    {
      id: '4',
      name: 'Charmander',
      height: '6',
      weight: '85',
      types: ['fire'],
      'base-Experience': '62',
      abilities: ['blaze', 'solar-power'],
      hp: '39',
      attack: '52',
      defense: '43',
      'special-attack': '60',
      'special-defense': '50',
      speed: '65',
      img: '../img/pokemon4.png',
    },
    {
      id: '5',
      name: 'Charmeleon',
      height: '11',
      weight: '190',
      types: ['fire'],
      'base-Experience': '142',
      abilities: ['blaze', 'solar-power'],
      hp: '58',
      attack: '64',
      defense: '58',
      'special-attack': '80',
      'special-defense': '65',
      speed: '80',
      img: '../img/pokemon5.png',
    },
    {
      id: '6',
      name: 'Charizard',
      height: '17',
      weight: '905',
      types: ['fire', 'flying'],
      'base-Experience': '240',
      abilities: ['blaze', 'solar-power'],
      hp: '78',
      attack: '84',
      defense: '78',
      'special-attack': '109',
      'special-defense': '85',
      speed: '100',
      img: '../img/pokemon6.png',
    },
    {
      id: '7',
      name: 'Squirtle',
      height: '5',
      weight: '90',
      types: ['water'],
      'base-Experience': '63',
      abilities: ['torrent', 'rain-dish'],
      hp: '44',
      attack: '48',
      defense: '65',
      'special-attack': '50',
      'special-defense': '64',
      speed: '43',
      img: '../img/pokemon7.png',
    },
    {
      id: '8',
      name: 'Wartortle',
      height: '10',
      weight: '225',
      types: ['water'],
      'base-Experience': '142',
      abilities: ['torrent', 'rain-dish'],
      hp: '59',
      attack: '63',
      defense: '80',
      'special-attack': '65',
      'special-defense': '80',
      speed: '58',
      img: '../img/pokemon8.png',
    },
    {
      id: '9',
      name: 'Blastoise',
      height: '16',
      weight: '855',
      types: ['water'],
      'base-Experience': '239',
      abilities: ['torrent', 'rain-dish'],
      hp: '79',
      attack: '83',
      defense: '100',
      'special-attack': '85',
      'special-defense': '105',
      speed: '78',
      img: '../img/pokemon9.png',
    },
    {
      id: '10',
      name: 'Caterpie',
      height: '3',
      weight: '29',
      types: ['bug'],
      'base-Experience': '39',
      abilities: ['shield-dust', 'run-away'],
      hp: '45',
      attack: '30',
      defense: '35',
      'special-attack': '20',
      'special-defense': '20',
      speed: '45',
      img: '../img/pokemon10.png',
    },
  ]

const container = document.getElementById('pokemon-list') as HTMLElement;
container.className = 'container';

data.map((data1: Pokemon) => {
    const item = document.createElement('div') as HTMLDivElement;
    item.className = 'item';

    const img = document.createElement('img') as HTMLImageElement;
    img.src = data1.img;
    img.className = 'item-img';

    const iteminfo = document.createElement('div') as HTMLDivElement;
    iteminfo.className = 'item-info';
    
    const name = document.createElement('h2') as HTMLHeadingElement;
    name.innerText = data1.name;
    name.className = 'item-info item-h2';
    
    const height = document.createElement('p') as HTMLParagraphElement;
    height.innerText = `height: ${data1.height}dm`;
    height.className = 'item-info item-p';

    const weight = document.createElement('p') as HTMLParagraphElement;
    weight.innerText = `weight: ${data1.weight}hg`;
    weight.className = 'item-info item-p';

    const types = document.createElement('p') as HTMLParagraphElement;
    types.innerText = `types: ${data1.types.join(', ')}`
    types.className = 'item-info item-p';

    iteminfo.appendChild(name);
    iteminfo.appendChild(height);
    iteminfo.appendChild(weight);
    iteminfo.appendChild(types);

    item.appendChild(img);
    item.appendChild(iteminfo);
    item.addEventListener('click',() => {
        localStorage.setItem('selected', JSON.stringify(data1));
        window.location.href = 'detail.html';
    })
    container.appendChild(item);
});