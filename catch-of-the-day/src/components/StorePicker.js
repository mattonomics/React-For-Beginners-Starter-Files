import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
//  constructor(props) {
//    super(props);
//    this.goToStore = this.goToStore.bind(this);
//  }

  goToStore(event) {
    event.preventDefault();
    console.log('You changed the URL');
    // first grab the text from the box
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    // second we're going to transition from / to /store/:stroreid
    this.context.router.transitionTo(`store/${storeId}`);
    console.log(this.storeInput.value);
  }

  render() {
    return (
      <form className='store-selector' onSubmit={ (e) => this.goToStore(e) /* this binds the custom goToStore method so that `${this}` is available within the method above. Could also use the constructor to do that. */ }>
        <h2> Please Enter A Store</h2>
        <input type='text' required placeholder='Store name' defaultValue={getFunName()} ref={ (input) => { this.storeInput = input } /* ref is how we reference this piece within the class. React doesn't want us to directly reference the DOM */ } />
        <button type='submit'>Visit Store &rarr;</button>
      </form>
    );
  }
}

// this gives access to the React Router methods we need to transition pages
StorePicker.contextTypes = {
  router: React.PropTypes.object
};

export default StorePicker;
