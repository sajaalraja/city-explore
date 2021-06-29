import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

class Alertmesge extends Component {
    render() {
        return (
            <div>
                {this.props.alert &&
                    <Alert >
                        error: ' this is Wrong : Please Enter City Name'(wrong)
                    </Alert>
                }
            </div>
        )
    }
}

export default Alertmesge ;