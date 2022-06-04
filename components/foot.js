'use strict';

class Foot extends React.Component {
  constructor(props) {
    super(props);
  }

  redirect = (url = window.location.href.toString()) => {
    if (url === window.location.href.toString()) {
      console.log("%c'Not redirecting'", "color: red;font-size: 450%;");
    } else {
      console.log("%c'Redirecting to %s'", "color: lime;font-size: 250%;", url);
      window.location.href = url;
    }
  };

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "foot"
    }, /*#__PURE__*/React.createElement("div", {
      className: "f-left"
    }, /*#__PURE__*/React.createElement("h2", null, "FoxArch Linux"), /*#__PURE__*/React.createElement("p", {
      className: "copyright"
    }, "\xA9 Copyright | FireTheFox")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "16px"
      }
    }, "Pozri aj"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: () => this.redirect("https://github.com/Panko-Linux"),
      title: "Github"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fa fa-github"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => this.redirect(),
      title: "SourceForge"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fa fa-folder-open"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => this.redirect(),
      title: "Instagram"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fa fa-instagram"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: toTop,
      title: "Back to top"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fa fa-arrow-circle-up"
    })))));
  }

}

const container = document.getElementById('foot');
const root = ReactDOM.createRoot(container);
root.render( /*#__PURE__*/React.createElement(Foot, null));

