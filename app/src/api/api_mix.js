import {useState,useEffect,useRef} from 'react';
import '../css/api_mix.css';
import { useDispatch } from 'react-redux';
import quiksilverImage from '../img/quiksilver.webp';
import oakleyImage from '../img/oakley.webp';
import mizunoImage from '../img/mizuno.webp';
import api from '../axios.js';



function Mix(){

const effectRan = useRef(false);
const effectRanTwo = useRef(false);
const effectRanThree = useRef(false);

const [mix,setMix] = useState([{nome: 'camiseta da quiksilver',valor: 50, p:'p',m:'m',g:'g',gg:'gg',imagem:quiksilverImage},{nome:'Camiseta da oakley',valor:100, p:'p',m:'m',g:'g',gg:'gg',imagem:oakleyImage},{nome:'Mizuno pro 12s',valor:1800, p:'p',m:'m',g:'g',gg:'gg',imagem:mizunoImage}]);

const att = useDispatch();


useEffect(()=>{

if (effectRanThree.current === false) {


let header = document.querySelector('#id-header');

header.addEventListener('click',function(){

let select_login = document.querySelector('.divLogin');

select_login.classList.add('ativado');


});


let divClose = document.querySelector('#id-close')
divClose.addEventListener('click',function(){

let select_login = document.querySelector('.divLogin');

select_login.classList.remove('ativado');

});


let buttonEnviar = document.querySelector('#send-dados');

buttonEnviar.addEventListener('click',function(){

let nome = document.querySelector('#nome').value;
let email = document.querySelector('#email').value;
let senha = document.querySelector('#senha').value;

console.log(nome)
console.log(email)
console.log(senha)

// Enviando com POST
api.post('/add', {
  nome: nome,
  email: email,
  senha: senha
})
.then(response => {
  console.log('Sucesso:', response.data);
})
.catch(error => {
  console.error('Erro:', error);
});

});



let buttonEnviarLogin = document.querySelector('#send-dados-login');

buttonEnviarLogin.addEventListener('click',function(){

let emailLogin = document.querySelector('#email-login').value;

let senhaLogin = document.querySelector('#senha-login').value;

// Enviando os dados como query params no GET
api.get('/login', {
  params: {
    email: emailLogin,
    senha: senhaLogin
  }
})
.then(response => {
  console.log('Resposta:', response.data);
})
.catch(error => {
  console.error('Erro:', error);
});


});



effectRanThree.current = true;

}


},[])


useEffect(()=>{

if (effectRanTwo.current === false) {


let selectButton = document.querySelector('#id-sacola');

selectButton.addEventListener('click',function(){


let selectDivselect = document.querySelector('.select');

selectDivselect.classList.add('just-in-phone');


});

let buttonClose = document.querySelector('#id-fechar')

buttonClose.addEventListener('click',function(){

let selectDivselect = document.querySelector('.select');

selectDivselect.classList.remove('just-in-phone');

});


effectRanTwo.current = true;

}

},[])

useEffect(() => {

if (effectRan.current === false) {	


// Adiciona listener nos spans (tamanhos) apenas uma vez
    const spans = document.querySelectorAll('.items li');
    spans.forEach(span => {
      span.addEventListener('click', function() {
        // Remove 'ativo' de todos os irmãos
        this.parentElement.querySelectorAll('li').forEach(s => s.classList.remove('ativo'));
        // Adiciona 'ativo' só no li clicado
        this.classList.add('ativo');

        //console.log(this);

      });
    });


let selectButton = document.querySelectorAll('.Selecionar');

selectButton.forEach(result=>{


result.addEventListener('click',function(){


 // Usando 'this' para pegar o item atual ao clicar no botão
 let item = this.closest('.items').querySelector('h1'); // Pega o <h1> dentro do item mais próximo
 let valor = this.closest('.items').querySelector('h4'); // Pega o <h4> dentro do item mais próximo

 let tamanho = this.closest('.items').querySelector('.items li.ativo');

 if (!tamanho) {
    alert("⚠️ Você precisa selecionar um tamanho antes de adicionar!");
    return;
 }

 console.log(item.textContent); // Agora retorna o conteúdo de texto do h1
 console.log(valor.textContent); // Agora retorna o conteúdo de texto do h4
 console.log(tamanho.textContent);


att({

    type: "ADICIONAR_ITEM",
    payload: {
    nome: item.textContent,
    valor: valor.textContent,
    tamanho: tamanho.textContent
  }
});


});

});

effectRan.current = true;

}

}, [mix]);

return (

<div className='produtos'>


{mix.map((result,key)=>(


<div className='items' key={key}>

 <img src={result.imagem} alt={result.nome} width='100'/>
<h1>{result.nome}</h1>
<br/>
<h2>Valor:</h2>
<h4>{result.valor}</h4>
<p>Tamanhos:</p>
<ul>

<li>{result.p}</li>
<li>{result.m}</li>
<li>{result.g}</li>
<li>{result.gg}</li>

</ul>

<button className='Selecionar' type='button'>Selecionar</button>

</div>


))}


</div>

);


}


export default Mix;