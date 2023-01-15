
export function Greeting({title , name ="User"}) {
    console.log(title, name )
    return <h1>{title}, dice {name} </h1>
}

export function UserCard(props){
    console.log(props)
    return (
        <div>
            <h1> {props.name} </h1>
            <p> ${props.amount} </p>
            <p> {props.married ? 'married' : "single"} </p>
            <ul>
                <li> {props.address.city} </li>
                <li> {props.address.street} </li>
            </ul>
        </div>
    )
}