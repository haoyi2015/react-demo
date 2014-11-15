var Header = React.createClass({displayName: 'Header',

  render: function(){

    return (
      React.createElement("div", {className: "calendar-head"}, 
        React.createElement("div", {className: "title"}, "2013年 12月"), 
        React.createElement("a", {className: "btn prev-y", href: "javascript:;"}, 
          React.createElement("span", {className: "arrow arrow-left"}), 
          React.createElement("span", {className: "arrow arrow-left second"})
        ), 
        React.createElement("a", {className: "btn next-y", href: "javascript:;"}, 
          React.createElement("span", {className: "arrow arrow-right second"}), 
          React.createElement("span", {className: "arrow arrow-right"})
        ), 
        React.createElement("a", {className: "btn prev-m", href: "javascript:;"}, 
          React.createElement("span", {className: "arrow arrow-left"})
        ), 
        React.createElement("a", {className: "btn next-m", href: "javascript:;"}, 
          React.createElement("span", {className: "arrow arrow-right"})
        )
      )
    )
  
  }

})
