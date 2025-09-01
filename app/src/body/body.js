import '../css/body.css';
import Mix from '../api/api_mix';
import Select from '../select/select';
import Login_and_cadastro from '../select_login/login_and_cadastro';

function Body(){


return (

<div className='body'>

<Login_and_cadastro/>
<Select/>
<Mix/>

</div>

);


}


export default Body;