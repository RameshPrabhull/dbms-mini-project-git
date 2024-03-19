function Userportal(props){
    return(
        <>
        <p>Userportal</p>
        <div>Name:{props.name}</div>
        <div>Email:{props.email}</div>
        <div>Phone:{props.phone}</div>
        <div>Address:{props.add}</div>
        <div>Customer ID:{props.id}</div>
        </>
    )
}
export default Userportal;