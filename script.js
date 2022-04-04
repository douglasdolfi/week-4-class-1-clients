//const client1 = {
//  nome: 'Joao',
//  email: 'joao@test.com'
//}

//const client2 = {
//  nome: 'Paulo',
//  email: 'paulo@test.com'
//}

//const client3 = {
//  nome: 'Ricardo',
//  email: 'ricardo@test.com'
//}

//const list = [client1, client2, client3];
// index: 0 ...
// position: 1 ...

// console.log(list[0]);

//console.log(list.length);

// let index = 0;
// while(index < 3) {
//  console.log(list[index]);
//  index ++;
// }

//for(let index = 0; index < list.length; index ++) {
//  console.log(list[index].nome);

//  const client = list[index];
//  console.log(client.email);
//}

//list.forEach((client) => {
//  console.log(client);
//});

const clients = [
  {
    name: 'Joao',
    email: 'joao@test.com'
  },
  {
    name: 'Paulo',
    email: 'paulo@test.com'
  },
  {
    name: 'Ricardo',
    email: 'ricardo@test.com'
  }
]

const list = document.getElementById('clients')
//console.log(list);

const createParagraph = (textContent, parent) => {
  const paragraph = document.createElement('p');
  const text = document.createTextNode(textContent);
  paragraph.appendChild(text);

  parent.appendChild(paragraph)
}

clients.forEach((client) => {
  const listItem = document.createElement('li');
  createParagraph(client.name, listItem);
  createParagraph(client.email, listItem);

  list.appendChild(listItem);
});

let index = 0;
while(index < clients.length) {

  const client = clients[index];
  const listItem = document.createElement('li');
  const text = document.createTextNode(client.name);

  listItem.appendChild(text);
  list.appendChild(listItem);

  index ++;
};
