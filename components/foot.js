'use strict';

class Foot extends React.Component {
    constructor(props) {
        super(props);
    }

    redirect = () => {
        console.log("%c'Redirecting'", "color: red;font-size: 250%;")
    }

    toTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    render() {
        return <div className={"foot"}>
            <div className={"f-left"}>
                <h2>FoxArch Linux</h2>
                <p className={"copyright"}>&copy; Copyright | FireTheFox</p>
            </div>
            <div>
                <h2 style={{margin: "16px"}}>Follow us</h2>
                <div>
                    <button onClick={this.redirect} title={"Github"}>
                        <span className={"fa fa-github"}></span>
                    </button>
                    <button onClick={this.redirect} title={"SourceForge"}>
                        <span className={"fa fa-folder-open"}></span>
                    </button>
                    <button onClick={this.redirect} title={"Instagram"}>
                        <span className={"fa fa-instagram"}></span>
                    </button>

                    <button onClick={this.toTop} title={"Back to top"}>
                        <span className={"fa fa-arrow-circle-up"}></span>
                    </button>
                </div>
            </div>
        </div>
    }
}

const container = document.getElementById('foot');
const root = ReactDOM.createRoot(container);
root.render(<Foot />)