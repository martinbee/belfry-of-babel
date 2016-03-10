import App from '/client/components/app/App';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('render-target'));
});
