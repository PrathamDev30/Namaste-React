const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "hellow guyssss " ), React.createElement("h2", {}, "hellow guyssss ") ]),React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "hellow guyssss " ), React.createElement("h2", {}, "hellow guyssss ") ])]
  )
;
root.render(parent);
