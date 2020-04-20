import React, {Component, Fragment} from 'react';

class HeaderLogin extends Component {
  state = {
    isEnteringKey: true,
  };

  clickLoginHandler = open => {
    this.setState({
      isEnteringKey: open
    })
  };

  render() {
    const {isEnteringKey} = this.state;
    let keyHandlerElement;

    if (isEnteringKey) {
      keyHandlerElement = (
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter API key"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-primary"
                onClick={() => this.clickLoginHandler(false)}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )
    } else {
      keyHandlerElement = (
        <button
          className="btn btn-outline-primary"
          onClick={() => this.clickLoginHandler(true)}
        >
          Enter API key
        </button>
      )
    }

    return (
      <Fragment>
        {keyHandlerElement}
      </Fragment>
    );
  }
}

export default HeaderLogin;
