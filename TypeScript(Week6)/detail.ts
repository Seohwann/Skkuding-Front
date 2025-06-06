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

const pokemon = JSON.parse(localStorage.getItem('selected') as string) as Pokemon;
const main = document.createElement('main');

const detailcontainer = document.getElementById('pokemon-detail') as HTMLElement;
detailcontainer.className = 'container';

const circle = document.getElementById('circle') as HTMLElement;
circle.className = 'circle-border';

const table = document.getElementById('table') as HTMLElement;
table.className = 'table';
if (pokemon) {
    const img = document.createElement('img') as HTMLImageElement;
    img.src = pokemon.img;
    img.className = 'imgsize';

    circle.appendChild(img);
    detailcontainer.appendChild(circle);

    const idtr = document.createElement('tr') as HTMLTableRowElement;
    const idtdl = document.createElement('td') as HTMLTableCellElement;
    const idtdr = document.createElement('td') as HTMLTableCellElement;
    idtdl.innerText = "Id";
    idtdl.className = "table-td left";
    idtdr.innerText = pokemon.id;
    idtdr.className = "table-td right";
    idtr.className = "table-tr";
    idtr.appendChild(idtdl);
    idtr.appendChild(idtdr);
    table.appendChild(idtr);

    const nametr = document.createElement('tr') as HTMLTableRowElement;
    const nametdl = document.createElement('td') as HTMLTableCellElement;
    const nametdr = document.createElement('td') as HTMLTableCellElement;
    nametdl.innerText = "Name";
    nametdl.className = "table-td left";
    nametdr.innerText = pokemon.name;
    nametdr.className = "table-td right";
    nametr.className = "table-tr";
    nametr.appendChild(nametdl);
    nametr.appendChild(nametdr);
    table.appendChild(nametr);
    
    const heighttr = document.createElement('tr') as HTMLTableRowElement;
    const heighttdl = document.createElement('td') as HTMLTableCellElement;
    const heighttdr = document.createElement('td') as HTMLTableCellElement;
    heighttdl.innerText = "Height";
    heighttdl.className = "table-td left";
    heighttdr.innerText = pokemon.height;
    heighttdr.className = "table-td right";
    heighttr.className = "table-tr";
    heighttr.appendChild(heighttdl);
    heighttr.appendChild(heighttdr);
    table.appendChild(heighttr);
    
    const weighttr = document.createElement('tr') as HTMLTableRowElement;
    const weighttdl = document.createElement('td') as HTMLTableCellElement;
    const weighttdr = document.createElement('td') as HTMLTableCellElement;
    weighttdl.innerText = "Weight";
    weighttdl.className = "table-td left";
    weighttdr.innerText = pokemon.weight;
    weighttdr.className = "table-td right";
    weighttr.className = "table-tr";
    weighttr.appendChild(weighttdl);
    weighttr.appendChild(weighttdr);
    table.appendChild(weighttr);

    const typestr = document.createElement('tr') as HTMLTableRowElement;
    const typestdl = document.createElement('td') as HTMLTableCellElement;
    const typestdr = document.createElement('td') as HTMLTableCellElement;
    typestdl.innerText = "Types";
    typestdl.className = "table-td left";
    typestdr.innerText = pokemon.types;
    typestdr.className = "table-td right";
    typestr.className = "table-tr";
    typestr.appendChild(typestdl);
    typestr.appendChild(typestdr);
    table.appendChild(typestr);

    const base_Experiencetr = document.createElement('tr') as HTMLTableRowElement;
    const base_Experiencetdl = document.createElement('td') as HTMLTableCellElement;
    const base_Experiencetdr = document.createElement('td') as HTMLTableCellElement;
    base_Experiencetdl.innerText = "Base-Experience";
    base_Experiencetdl.className = "table-td left";
    base_Experiencetdr.innerText = pokemon['base-Experience'];
    base_Experiencetdr.className = "table-td right";
    base_Experiencetr.className = "table-tr";
    base_Experiencetr.appendChild(base_Experiencetdl);
    base_Experiencetr.appendChild(base_Experiencetdr);
    table.appendChild(base_Experiencetr);

    const abilitiestr = document.createElement('tr') as HTMLTableRowElement;
    const abilitiestdl = document.createElement('td') as HTMLTableCellElement;
    const abilitiestdr = document.createElement('td') as HTMLTableCellElement;
    abilitiestdl.innerText = "Abilities";
    abilitiestdl.className = "table-td left";
    abilitiestdr.innerText = pokemon.abilities;
    abilitiestdr.className = "table-td right";
    abilitiestr.className = "table-tr";
    abilitiestr.appendChild(abilitiestdl);
    abilitiestr.appendChild(abilitiestdr);
    table.appendChild(abilitiestr);

    const hptr = document.createElement('tr') as HTMLTableRowElement;
    const hptdl = document.createElement('td') as HTMLTableCellElement;
    const hptdr = document.createElement('td') as HTMLTableCellElement;
    hptdl.innerText = "Hp";
    hptdl.className = "table-td left";
    hptdr.innerText = pokemon.hp;
    hptdr.className = "table-td right";
    hptr.className = "table-tr";
    hptr.appendChild(hptdl);
    hptr.appendChild(hptdr);
    table.appendChild(hptr);

    const attacktr = document.createElement('tr') as HTMLTableRowElement;
    const attacktdl = document.createElement('td') as HTMLTableCellElement;
    const attacktdr = document.createElement('td') as HTMLTableCellElement;
    attacktdl.innerText = "Attack";
    attacktdl.className = "table-td left";
    attacktdr.innerText = pokemon.attack;
    attacktdr.className = "table-td right";
    attacktr.className = "table-tr";
    attacktr.appendChild(attacktdl);
    attacktr.appendChild(attacktdr);
    table.appendChild(attacktr);
    
    const defensetr = document.createElement('tr') as HTMLTableRowElement;
    const defensetdl = document.createElement('td') as HTMLTableCellElement;
    const defensetdr = document.createElement('td') as HTMLTableCellElement;
    defensetdl.innerText = "Defense";
    defensetdl.className = "table-td left";
    defensetdr.innerText = pokemon.defense;
    defensetdr.className = "table-td right";
    defensetr.className = "table-tr";
    defensetr.appendChild(defensetdl);
    defensetr.appendChild(defensetdr);
    table.appendChild(defensetr);
  
    const special_attacktr = document.createElement('tr') as HTMLTableRowElement;
    const special_attacktdl = document.createElement('td') as HTMLTableCellElement;
    const special_attacktdr = document.createElement('td') as HTMLTableCellElement;
    special_attacktdl.innerText = "Special-attack";
    special_attacktdl.className = "table-td left";
    special_attacktdr.innerText = pokemon['special-attack'];
    special_attacktdr.className = "table-td right";
    special_attacktr.className = "table-tr";
    special_attacktr.appendChild(special_attacktdl);
    special_attacktr.appendChild(special_attacktdr);
    table.appendChild(special_attacktr);

    const special_defensetr = document.createElement('tr') as HTMLTableRowElement;
    const special_defensetdl = document.createElement('td') as HTMLTableCellElement;
    const special_defensetdr = document.createElement('td') as HTMLTableCellElement;
    special_defensetdl.innerText = "Special-defense";
    special_defensetdl.className = "table-td left";
    special_defensetdr.innerText = pokemon['special-defense'];
    special_defensetdr.className = "table-td right";
    special_defensetr.className = "table-tr";
    special_defensetr.appendChild(special_defensetdl);
    special_defensetr.appendChild(special_defensetdr);

    const speedtr = document.createElement('tr') as HTMLTableRowElement;
    const speedtdl = document.createElement('td') as HTMLTableCellElement;
    const speedtdr = document.createElement('td') as HTMLTableCellElement;
    speedtdl.innerText = "Speed";
    speedtdl.className = "table-td left";
    speedtdr.innerText = pokemon.speed;
    speedtdr.className = "table-td right";
    speedtr.className = "table-tr";
    speedtr.appendChild(speedtdl);
    speedtr.appendChild(speedtdr);
    table.appendChild(speedtr);
    
  } else {
    detailcontainer.innerText = 'No data found!';
  }
  