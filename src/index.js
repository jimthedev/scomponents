import React, { Fragment } from "react";
import { render } from "react-dom";
import { Alert } from "./Alert";
import { H2, H3 } from "./Headings";
import { JSX } from './JSX';
import { alertTypes } from './stylelibrary/alert';
const styles = {
  example: { marginTop: "40px" }
};

const BasicAlertExample = ({ type }) => (
  <Fragment>
    <Alert type={type} message={`${type}!`} onClick={() => {alert(`You clicked ${type}.`)}} />
    <JSX>{`
          // Use attributes
          <Alert
            type="${type}" 
            message="${type}!" 
            onClick={() => {alert('You clicked ${type}.')}} />

          // OR Use the \`children\` prop
          <Alert
            type="${type}"
            onClick={() => {alert('You clicked ${type}.')}}>${type}!</Alert>

          // OR Use render props
          <Alert type="${type}" message={({ AlertMessage }) => (
            <AlertMessage type="${type}">
              ${type}!
            </AlertMessage>
          )} onClick={() => {alert('You clicked ${type}.')}} />
        `}</JSX>
  </Fragment>
);

class App extends React.Component {
  state = {
    alertType: "success",
    gold: false,
    showAdvanced: false
  };
  render() {
    return (
      <div style={styles.main}>
        <H2
          heading="Alerts"
          caption="Alerts are used to give feedback to the user"
        />
        <H3 style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          Basic alerts types
        </H3>
        {Object.keys(alertTypes).map(t => (
          <BasicAlertExample showAdvanced={this.state.showAdvanced} type={t} />
        ))}
        <H3>Composing an alert for right-to-left languages</H3>
        <Alert
          type="tip"
          style={{
            textAlign: 'right',
            justifyContent: 'flex-end',
            flexDirection: 'row-reverse'
          }}
          message={({ AlertMessage }) => (
            <AlertMessage
              type="tip"
              style={{
                fontWeight: "bold",
                color: "purple",
                textAlign: "right",
                paddingRight: "10px",
                
              }}
            >
              Hello!<br />
              I am a customized, right-to-left alert message, while the surrounding alert box
              is kept the same but ultimately the text for this alert is also
              very long, excessively long. It is as though someone did this on
              purpose.<br />
              Thanks!
            </AlertMessage>
          )}
        />
        <JSX>{`
        <Alert
          type="tip"
          style={{
            textAlign: 'right',
            justifyContent: 'flex-end',
            flexDirection: 'row-reverse'
          }}
          message={({ AlertMessage }) => (
            <AlertMessage
              type="tip"
              style={{
                fontWeight: "bold",
                color: "purple",
                textAlign: "right",
                paddingRight: "10px",
                
              }}
            >
              Hello!<br />
              I am a customized, right-to-left alert message, while the surrounding alert box
              is kept the same but ultimately the text for this alert is also
              very long, excessively long. It is as though someone did this on
              purpose.<br />
              Thanks!
            </AlertMessage>
          )}
        />
        `}</JSX>
        <hr />
        <H2>Pick</H2>
        <Alert
          type={this.state.alertType}
          message={({ AlertMessage }) => (
            <AlertMessage type={this.state.alertType}>asdada</AlertMessage>
          )}
        />
        <Alert
          type={this.state.alertType}
          message={({ AlertMessage }) => (
            <AlertMessage type={this.state.alertType}>
              asdada <a href="#">I am a link.</a>
            </AlertMessage>
          )}
        />
        <select
          defaultValue={"success"}
          onChange={e => this.setState({ alertType: e.target.value })}
        >
          <option value="tip">Tip</option>
          <option value="success">Success</option>
          <option value="error">Error</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </select>

        <br />
        <br />
        <label htmlFor="gold">
          <input
            type="checkbox"
            onChange={() => {
              this.setState(prev => ({ gold: !prev.gold }));
            }}
            id="gold"
          />{" "}
          Make text gold
        </label>
        <br />
        <br />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
