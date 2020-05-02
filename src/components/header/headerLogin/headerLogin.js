import React, {Component, Fragment} from 'react';
import './headerLogin.css';

class HeaderLogin extends Component {
  state = {
    isForm: false,
    localKey: null,
  };

  constructor(props) {
    super(props);

    const key = sessionStorage.getItem('API-key');
    if (key) {
      this.state.localKey = key;
      this.props.onAcceptKey(key);
    }
  }


  clickAcceptOrClear = (formState, clear) => {
    this.setState({
      isForm: formState,
    });

    this.writeKey(clear);
  };

  writeKey(clear) {
    if (clear) {
      this.props.onAcceptKey(null);
      this.setState({
        localKey: null,
      });
      sessionStorage.removeItem('API-key');
    } else {
      this.props.onAcceptKey(this.state.localKey);
      sessionStorage.setItem('API-key', this.state.localKey);
    }
  }

  onChangeInput = e => {
    this.setState({
      localKey: e.target.value
    })
  };

  render() {
    const {isForm, localKey} = this.state;
    let keyHandlerElement;

    if (isForm) {
      keyHandlerElement = (
        <div className="form-group header-login-form">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter API key"
              onChange={this.onChangeInput}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-primary"
                onClick={() => this.clickAcceptOrClear(false)}
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
          onClick={() => this.clickAcceptOrClear(true, true)}
        >
          {
            localKey
            ? 'Clear key'
            : 'Enter API key'
          }
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
