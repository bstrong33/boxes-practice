function BoxesDisplay(props) {

    const styles = {
        backgroundColor: props.active ? "green" : "white"
    }

    return (
       <div 
        className="Box" 
        onClick={() => props.toggleActive(props.id)} 
        style={styles}
       >

       </div>
    )
}

export default BoxesDisplay;