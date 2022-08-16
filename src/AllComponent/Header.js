import Header from "./Header.css"


function header(){

    return (
        <div>
        <div className="Header">
            <div><h2>Logo</h2></div>

            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>

                </ul>
            </div>
        </div>

        </div>
    )
}

export default header;