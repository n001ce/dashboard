function WebsiteVisitors(props){
    console.log(props.WebsiteVisitors)
    return(
        <>
            <div className="webVis">
                <h3>{props.graph.title}</h3>
                <h2>{props.graph.numViewers}</h2>
                <div className="graph"></div>
            </div>
        </>
    )

}

export default WebsiteVisitors