function Dashboard(props){
    console.log(props.dashboard)
    return(
        <>
            <div className="dashboard">
                <nav>
                    <ul>
                        <li>{props.dashboard.widget}</li>
                        <li>{props.dashboard.reviews}</li>
                        <li>{props.dashboard.customers}</li>
                        <li>{props.dashboard.onAn}</li>
                        <li>{props.dashboard.settings}</li>
                    </ul>
                </nav>
            </div>
        </>
    )

}

export default Dashboard