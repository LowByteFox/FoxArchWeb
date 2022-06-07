'use strict';

function toTop() {
  $([document.documentElement, document.body]).animate({
    scrollTop: 0
  }, 2000);
}

class Part1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("nav", {
      className: "bg-foxarch shadow-lg"
    }, /*#__PURE__*/React.createElement("a", {
      onClick: toTop
    }, /*#__PURE__*/React.createElement("img", {
      src: "images/logo.png",
      alt: "logo"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      id: "InfoBTN",
      className: "hover:bg-foxarch-darker/75 rounded-md"
    }, "Info"), /*#__PURE__*/React.createElement("p", {
      id: "WikiBTN",
      className: "hover:bg-foxarch-darker/75 rounded-md"
    }, "Wiki"), /*#__PURE__*/React.createElement("p", {
      id: "StackBTN",
      className: "hover:bg-foxarch-darker/75 rounded-md"
    }, "Stack")), /*#__PURE__*/React.createElement("button", {
      id: "DropdownButton",
      onClick: DropMenu
    }, /*#__PURE__*/React.createElement("span", {
      className: "fas fa-bars rounded-md hover:bg-foxarch-darker/75"
    })));
  }

}

class Part2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "drop",
      className: "rounded-md border-2 border-foxarch shadow-xl bg-neutral-100",
      style: {
        display: "none"
      }
    }, /*#__PURE__*/React.createElement("h1", null, "FoxArch"), /*#__PURE__*/React.createElement("p", {
      id: "DInfoBTN",
      className: "hover:bg-neutral-200/75 rounded-md"
    }, "Info"), /*#__PURE__*/React.createElement("p", {
      id: "DWikiBTN",
      className: "hover:bg-neutral-200/75 rounded-md"
    }, "Wiki"), /*#__PURE__*/React.createElement("p", {
      id: "DStackBTN",
      className: "hover:bg-neutral-200/75 rounded-md"
    }, "Stack"));
  }

}

function NavFinish() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(Part1, null), /*#__PURE__*/React.createElement(Part2, null)));
}

const NavigationContainer = document.getElementById('navigation');
const NavigationRoot = ReactDOM.createRoot(NavigationContainer);
NavigationRoot.render( /*#__PURE__*/React.createElement(NavFinish, null));

