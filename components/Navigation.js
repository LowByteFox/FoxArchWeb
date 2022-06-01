'use strict';

class Part1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="bg-foxarch shadow-lg">
                <a href="#">
                    <img src="images/logo.png" alt="logo"/>
                </a>
                <div>
                    <p className="hover:bg-foxarch-darker/75 rounded-md">About</p>
                    <p className="hover:bg-foxarch-darker/75 rounded-md">Reason</p>
                    <p className="hover:bg-foxarch-darker/75 rounded-md">Wiki</p>
                    <p className="hover:bg-foxarch-darker/75 rounded-md">Stack</p>
                </div>
                <button id="DropdownButton" onClick={DropMenu}>
                    <span className="fas fa-bars rounded-md hover:bg-foxarch-darker/75"></span>
                </button>
            </nav>
        )
    }
}

class Part2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="drop" className="rounded-md border-2 border-foxarch shadow-xl bg-neutral-100" style={{display: "none"}}>
                <h1>FoxArch</h1>
                <p className="hover:bg-neutral-200/75 rounded-md">About</p>
                <p className="hover:bg-neutral-200/75 rounded-md">Reason</p>
                <p className="hover:bg-neutral-200/75 rounded-md">Wiki</p>
                <p className="hover:bg-neutral-200/75 rounded-md">Stack</p>
            </div>
        )
    }
}

function NavFinish() {
    return (
        <div>
            <React.StrictMode>
            <Part1 />
            <Part2 />
            </React.StrictMode>
        </div>
    )
}

const container = document.getElementById('navigation');
const root = ReactDOM.createRoot(container);
root.render(<NavFinish />)