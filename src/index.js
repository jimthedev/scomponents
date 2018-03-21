import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { Alert } from "./Alert";
import { H2, H3 } from "./Headings";
const styles = {
  main: { },
  pre: { backgroundColor: '#dedede', padding: '20px', textAlign: 'left', color: '#222', fontSize: '13px', marginBottom: '40px', fontWeight: '500' }
};

const Pre = ({children, ...props}) => (
  <pre style={styles.pre} {...props}>{children}</pre>
);

class App extends React.Component {
  state = {
    alertType: "success",
    gold: false
  };
  render() {
    return (
      <div style={styles.main}>
        <H2>Alerts</H2>
        <H3>Basic</H3>
        <Alert type="tip" message="Tip!" />
        <Pre>{`<Alert type="tip" message="Tip!" />`}</Pre>
        <Alert type="success" message="Success!" />
        <Pre>{`<Alert type="success" message="Success!" />`}</Pre>
        <Alert type="error" message="Error!"  />
        <Pre>{`<Alert type="error" message="Error!" />`}</Pre>
        <Alert type="warning" message="Warning!" />
        <Pre>{`<Alert type="warning" message="Warning!" />`}</Pre>
        <Alert type="info" message="Info!" />
        <Pre>{`<Alert type="info" message="Info!" />`}</Pre>
        <H3>Using render props</H3>
        <Alert type="tip" message={({ AlertMessage }) => (
          <AlertMessage type="tip" style={{ fontWeight: 'bold', color: 'purple', paddingLeft: '10px' }}>
            I am a customized alert message, while the surrounding alert box is kept the same but ultimately the text for this alert is also very long, excessively long.  It is as though someone did this on purpose.
          </AlertMessage>
        )} />
        <Pre>{`<Alert type="tip" message={({ AlertMessage }) => (
  <AlertMessage type="tip" style={{ fontWeight: 'bold', color: 'purple' }}>
    I am a customized alert message, while the box is kept the same.
  </AlertMessage>
)} />`}</Pre>
        
        <hr />
        <H2>Pick</H2>
        <Alert type={this.state.alertType} message={({AlertMessage}) => (
          <AlertMessage type={this.state.alertType}>asdada</AlertMessage>
        )} />
        <Alert type={this.state.alertType} message={({ AlertMessage }) => (
          <AlertMessage type={this.state.alertType}>asdada <a href="#">I am a link.</a></AlertMessage>
        )} />
        <select defaultValue={"success"} onChange={e => this.setState({ alertType: e.target.value })}>
          <option value="tip">Tip</option>
          <option value="success">Success</option>
          <option value="error">Error</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </select>
        
        <br /><br />
        <label htmlFor="gold"><input type="checkbox" onChange={() => {this.setState((prev)=>({ gold: !prev.gold }))}} id="gold" /> Make text gold</label>
        <br /><br />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
