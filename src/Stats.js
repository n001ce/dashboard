function Stats(props){
    console.log(props.stats)
    const analysis = props.stats.analysis.map((an,index)=>{
        return <li key={index}>{an}</li>

    })
    return(
        <>
            <div className="stats">
                <div id="reviews">
                    <h2>Reviews</h2>
                    <h1>{props.stats.reviews}</h1>
                </div>
                <div id="avgRating">
                    <h2>Average Rating</h2>
                    <h1>{props.stats.avgRating}</h1>
                </div>
                <div id="analysis">
                    <h2>Sentiment Analysis</h2>
                    <h1>{analysis}</h1>
                </div>
            </div>
        </>
    )

}

export default Stats