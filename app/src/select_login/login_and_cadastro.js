import '../css/login.css';

function Login_and_cadastro(){


return(


<div className='divLogin fixed-top'>
<div className='close-div'>
<svg id='id-close' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
</div>


<h1>Login</h1>
<form action='' method='POST'>

<p>email</p>
<input type='text' id='email-login' name='email' />
<p>Senha</p>
<input type='text' id='senha-login' name='senha' />

<button type='button' id='send-dados-login'>Login</button>

</form>

<hr/>

<h1>Cadastre-se</h1>
<form action='' method='POST'>

<p>Nome</p>
<input type='text' id='nome' name='nome' />
<p>email</p>
<input type='text' id='email' name='email' />
<p>Senha</p>
<input type='text' id='senha' name='senha' />

<button type='button' id='send-dados'>Cadastrar</button>

</form>


</div>


);


}


export default Login_and_cadastro;