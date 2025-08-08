function Car(props){
    let icon = '';
    if(props.name == '아반떼')
        icon = '🚗';
    else if(props.name == 'SUV')
        icon = '🚓';
    else if(props.name == '트럭')
        icon = '🚚';
    else if(props.name == '버스')
        icon = '🚌';

    return (
        <div className={`bg-${props.color}`}>
            <h2>{icon} {props.name}</h2>
        </div>
    )
}
export default Car;