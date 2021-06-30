function Card(props) {
    let { width } = props ;
    return (
        <div className ={`bg-white  flex  justify-center rounded-lg shadow my-5 mx-5 `}>
             {props.children}
        </div>
    )
}

export default Card;
