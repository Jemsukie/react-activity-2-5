const Cards = (props) =>{
    
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="https://thumbs.dreamstime.com/b/no-user-profile-picture-24185395.jpg" alt="No Face" />

                <div className="card-body">
                    <h5 className="card-title">{props.user.name}</h5>
                    <p className="card-text">{props.user.message}</p>
                </div>
            </div>
        </>
    )
}

export default Cards;