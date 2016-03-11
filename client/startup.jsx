import App from './components/app/App';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('render-target'));
});
