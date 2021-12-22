import React from 'react';

// primera forma de exportar un componente

// const MyComponent = _ => {
//   return (<div>hola a todos</div>);
// }
// export default MyComponent;

// segunda forma de exportar un componente

// export const MyComponent = _ => <div>hola a todos</div>;
// export const MyComponent2 = _ => <div>holaaaaa a todos</div>;
// export const PorDefecto = _ => <div>hola assss todos</div>;

// export { PorDefecto as default };

// tercera forma de exportar un componente
export const MyComponent = props => <div>hola a todos {props.param}</div>;  // <-- un solo parametro no hace falta parentesis
export const MyComponent2 = ({param, param2}) => <div>holaaaaa a todos {param} {param2}</div>; // <-- 2 parametros "de construidos", los "deconstruis asi"
export default _ => <div>hola assss todos</div>;
