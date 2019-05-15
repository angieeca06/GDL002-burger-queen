class App extends Component {
    constructor () {
      super()
      this.state = { name: 'Pepe' }
    }
  }

const nameRef = firebase.database().ref().child('object').child('name');
nameRef.on('value', snapshot => {
    this.setState({
      name: snapshot.val()
    })
  })