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
        $(`#${tempArray[0].props.idInfo}`).hide('slide', {direction: 'right'})

        const leftOver = tempArray.shift();
        tempArray.push(leftOver);

        await this.setState({cards: tempArray});
        $(`#${this.state.cards[0].props.idInfo}`).show('slide', {direction: 'left'})
    }

    lastCard = async () => {
        let tempArray = this.state.cards;
        $(`#${tempArray[0].props.idInfo}`).hide('slide', {direction: 'left'})
        const leftOver = tempArray.pop();
        tempArray.unshift(leftOver);

        await this.setState({cards: tempArray});
        $(`#${this.state.cards[0].props.idInfo}`).show('slide', {direction: 'right'})
    }

    render() {
        return (
            <div className="carousel rounded-md border-gray-500 border-2">
                {this.state.cards[0]}
                <div className="carousel-arrows">
                    <button className="carousel-arrow-l" onClick={this.lastCard}>&lt;</button>
                    <button className="carousel-arrow-r" onClick={this.nextCard}>&gt;</button>
                </div>
            </div>
        );
    }
}

function Carousel1() {
    return (
        <div>
            <Carousel>
                <Card idInfo={self.crypto.randomUUID()} iconClass="fas fa-cog" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis dolor at metus maximus feugiat. Morbi et posuere nisi. Maecenas et tellus at lorem ultrices aliquet. Sed sollicitudin leo non ligula lobortis imperdiet. Aenean eget justo sagittis, ultricies nunc vitae, tincidunt ipsum. Donec lacus ipsum, viverra in metus vitae, finibus feugiat felis. Aliquam vehicula eget lectus id pellentesque. Pellentesque nec sodales orci, in faucibus mi. Donec eu vehicula massa, et cursus nisi. Vivamus metus dui, semper pulvinar nulla at, congue viverra nulla. Sed interdum placerat elit, nec commodo turpis convallis sed. Etiam volutpat mollis quam, in bibendum ante finibus eget. Sed sit amet placerat ipsum. Donec ac neque imperdiet, tincidunt nunc at, rutrum felis. "></Card>
                <Card idInfo={self.crypto.randomUUID()} iconClass="fas fa-bars" text="In suscipit volutpat tellus, et vestibulum nunc volutpat in. Nullam condimentum rutrum sem, vitae posuere nunc cursus nec. Suspendisse at efficitur felis, id posuere libero. Aenean nisi mauris, posuere nec libero vel, vestibulum finibus quam. Nam laoreet at neque feugiat faucibus. In nisi est, tincidunt id volutpat in, ultricies non nibh. Integer tincidunt ex eget turpis finibus fringilla. Donec accumsan convallis ex ac commodo. Sed iaculis, risus sed rhoncus hendrerit, magna metus congue tellus, a vulputate nunc odio at turpis. Nullam rutrum eleifend mi, ac aliquam tortor accumsan eget. Morbi euismod mauris nec mauris euismod ultrices. Aliquam in ex placerat, pulvinar lacus vitae, consectetur purus. Sed nec velit sed dui ornare mattis. Sed sit amet nisl  . "></Card>
            </Carousel>
        </div>
    )
}

const container = document.getElementById('carousel1');
const root = ReactDOM.createRoot(container);
root.render(<Carousel1 />)
