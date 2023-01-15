import './task.css'

export function TaskCard({ready}) {

    // const cardStyles={
    //     background: "#202020",color: "#fff",padding: "20px"
    // }
    // const titleStyle={fontweight: "lighter"}

  return (
    <div className='card'>
      <h1>firt Task Card</h1>
      <span
      className={ready? 'bg-green':'bg-red'}
      > {ready? 'Tarea Realizada' : 'Tarea Pendiente'} </span>
      
    </div>
  );
}
