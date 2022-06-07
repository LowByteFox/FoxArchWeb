'use strict';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.idInfo} className="carousel-card">
                <p className={this.props.iconClass}></p>
                <p className="carousel-card-text">{this.props.text}</p>
            </div>
        );
    }
}

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: this.props.children,
            id_number: 0
        }
    }

    nextCard = async () => {
        let tempArray = this.state.cards;
        // $(`#${tempArray[0].props.idInfo}`).hide('slide', {direction: 'right'})
        $(`#${tempArray[0].props.idInfo}`).hide()

        const leftOver = tempArray.shift();
        tempArray.push(leftOver);

        await this.setState({cards: tempArray});
        // $(`#${this.state.cards[0].props.idInfo}`).show('slide', {direction: 'left'})
        $(`#${this.state.cards[0].props.idInfo}`).fadeIn()
    }

    lastCard = async () => {
        let tempArray = this.state.cards;
        $(`#${tempArray[0].props.idInfo}`).hide()
        const leftOver = tempArray.pop();
        tempArray.unshift(leftOver);

        await this.setState({cards: tempArray});
        $(`#${this.state.cards[0].props.idInfo}`).fadeIn()
    }

    render() {
        return (
            <div className="carousel bg-neutral-100">
                <span className={""}>
                    <button className="carousel-arrow-l" onClick={this.lastCard}>
                        <span className="fas fa-arrow-left"></span>
                    </button>
                </span>
                {this.state.cards[0]}
                <span className={""}>
                    <button className="carousel-arrow-r" onClick={this.nextCard} >
                        <span className="fas fa-arrow-right"></span>
                    </button>
                </span>
            </div>
        );
    }
}

function Carousel1() {
    return (
        <div>
            <Carousel>
                <Card idInfo={self.crypto.randomUUID()} iconClass="fas fa-feather" text="Minimálna pohľadom"></Card>
                <Card idInfo={self.crypto.randomUUID()} iconClass="fas fa-bolt" text="Výkonná pocitom"></Card>
                <Card idInfo={self.crypto.randomUUID()} iconClass="fas fa-palette" text="Nastaviteľná entuziazmom"></Card>
                <Card idInfo={self.crypto.randomUUID()} iconClass="fab fa-linux" text="Založená na Arch Linuxe"></Card>
            </Carousel>
        </div>
    )
}

const CarouselContainer = document.getElementById('carousel1');
const CarouselRoot = ReactDOM.createRoot(CarouselContainer);
CarouselRoot.render(<Carousel1 />)
