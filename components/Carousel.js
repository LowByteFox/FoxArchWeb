'use strict';

function toTop() {
  $([document.documentElement, document.body]).animate({
    scrollTop: 0
  }, 2000);
}

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: this.props.idInfo,
      className: "carousel-card"
    }, /*#__PURE__*/React.createElement("p", {
      className: this.props.iconClass
    }), /*#__PURE__*/React.createElement("p", {
      className: "carousel-card-text"
    }, this.props.text));
  }

}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.children,
      id_number: 0
    };
  }

  nextCard = async () => {
    let tempArray = this.state.cards; // $(`#${tempArray[0].props.idInfo}`).hide('slide', {direction: 'right'})

    $(`#${tempArray[0].props.idInfo}`).hide();
    const leftOver = tempArray.shift();
    tempArray.push(leftOver);
    await this.setState({
      cards: tempArray
    }); // $(`#${this.state.cards[0].props.idInfo}`).show('slide', {direction: 'left'})

    $(`#${this.state.cards[0].props.idInfo}`).fadeIn();
  };
  lastCard = async () => {
    let tempArray = this.state.cards;
    $(`#${tempArray[0].props.idInfo}`).hide();
    const leftOver = tempArray.pop();
    tempArray.unshift(leftOver);
    await this.setState({
      cards: tempArray
    });
    $(`#${this.state.cards[0].props.idInfo}`).fadeIn();
  };

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "carousel bg-neutral-100"
    }, /*#__PURE__*/React.createElement("span", {
      className: ""
    }, /*#__PURE__*/React.createElement("button", {
      className: "carousel-arrow-l",
      onClick: this.lastCard
    }, /*#__PURE__*/React.createElement("span", {
      className: "fas fa-arrow-left"
    }))), this.state.cards[0], /*#__PURE__*/React.createElement("span", {
      className: ""
    }, /*#__PURE__*/React.createElement("button", {
      className: "carousel-arrow-r",
      onClick: this.nextCard
    }, /*#__PURE__*/React.createElement("span", {
      className: "fas fa-arrow-right"
    }))));
  }

}

function Carousel1() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Carousel, null, /*#__PURE__*/React.createElement(Card, {
    idInfo: self.crypto.randomUUID(),
    iconClass: "fas fa-feather",
    text: "Minim\xE1lna poh\u013Eadom"
  }), /*#__PURE__*/React.createElement(Card, {
    idInfo: self.crypto.randomUUID(),
    iconClass: "fas fa-bolt",
    text: "V\xFDkonn\xE1 pocitom"
  }), /*#__PURE__*/React.createElement(Card, {
    idInfo: self.crypto.randomUUID(),
    iconClass: "fas fa-palette",
    text: "Nastavite\u013En\xE1 entuziazmom"
  }), /*#__PURE__*/React.createElement(Card, {
    idInfo: self.crypto.randomUUID(),
    iconClass: "fab fa-linux",
    text: "Zalo\u017Een\xE1 na Arch Linuxe"
  })));
}

const CarouselContainer = document.getElementById('carousel1');
const CarouselRoot = ReactDOM.createRoot(CarouselContainer);
CarouselRoot.render( /*#__PURE__*/React.createElement(Carousel1, null));

