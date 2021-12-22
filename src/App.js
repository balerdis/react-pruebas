import {useState, useEffect} from 'react';
//import MyComponent from './components/MyComponent/MyComponent';  // <-- asi si es el componente por default
import PorDefecto, {MyComponent2, MyComponent} from './components/MyComponent/MyComponent';

//formas de importar una imagen:
//1.- directamente:
import banner from './components/images/banner.jpg'
//2.- via un component
import images from './components/images/images'

const App =  _ => {

  const [a, setA] = useState(8);

  const [txt, setTxt] = useState('');
  const hacerCosas = ()=>{
    setA(4);
  }

  const textChange = (e)=>{
    setTxt(e.target.value);
  }


  useEffect(() => {
    //alert("hola");
  }, [a])
  return (
    <div>
      <img src={banner} alt='hola'/><br/>
      <img src={images.img1} alt='hola'/><br/>
      {a}
      <button onClick={()=>hacerCosas()}>pulsame</button>
      <input type="text" onChange={(e)=>textChange(e)}/>
      {txt}

      <p>cositas</p>
      <MyComponent param="chau"/>
      <MyComponent2 param="move" param2="hasta nunca"/>
      <PorDefecto/>


    </div>
  );
}

export default App;
