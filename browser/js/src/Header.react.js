var Header = React.createClass({

  render: function(){

    return (
      <div className="calendar-head">
        <div className="title">2013年 12月</div>
        <a className="btn prev-y" href="javascript:;">
          <span className="arrow arrow-left"></span>
          <span className="arrow arrow-left second"></span>
        </a>
        <a className="btn next-y" href="javascript:;">
          <span className="arrow arrow-right second"></span>
          <span className="arrow arrow-right"></span>
        </a>
        <a className="btn prev-m" href="javascript:;">
          <span className="arrow arrow-left"></span>
        </a>
        <a className="btn next-m" href="javascript:;">
          <span className="arrow arrow-right"></span>
        </a>
      </div>
    )
  }
})
