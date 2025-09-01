import '../css/select.css';
import {useSelector,useDispatch } from 'react-redux';


function Select(){

const dispatch = useDispatch();

const items = useSelector((state)=>state.nome.sacola);

return(


<div className='select'>

<div><svg id='id-fechar' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg></div>

 {items.map((item, index) => (
  <div key={index}>
    <p>{item.nome}</p>
    <p>{item.valor}</p>
    <p>{item.tamanho}</p>
    <button type='button' onClick={() =>
    dispatch({ type: 'DELETAR-ITEM', payload: { nome: item.nome } })
  }>Excluir item</button>
  </div>
  ))}


</div>


);


}

export default Select;