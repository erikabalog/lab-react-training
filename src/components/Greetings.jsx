function Greetings(props) {


  return (
      <div className='Content'>
    <div className='contenedor'>
     {props.lang === 'es' ? <p>Hola {props.name} </p> :
     props.lang === 'fr'? <p>Salut {props.name}</p>:
    <p>{props.name} </p>}
    </div>
    </div>
  );
}

export default Greetings;