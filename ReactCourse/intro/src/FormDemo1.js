import React, { Component } from 'react'

//Form'un acilabilmes, icin App.js'de bir root tanımı gerceklestirilmelidir.

export default class FormDemo1 extends Component {
  state = {userName:'', city:''}
  onChangeHandler = (event) => {
    //his.setState({userName:event.target.value}) //event'e sebep olan nesnenin degeri
    //Event'in baska nesneler icin calismamasi gerekir. (city vs. gibi)
    let name = event.target.name;
    let value = event.target.value;

    this.setState({[name]:value})
  }

  onSubmitHandler = (event) => {
    event.preventDefault(); //Default davranişi uygulama demektir. Submit ettiginde refresh etmesini, sepetin yeniden bosalmasini vs. engeller.
    alert(this.state.userName)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
            <h3>User Name</h3>
            <input name='userName' onChange={this.onChangeHandler} type="text"></input>
            {/* verdigin name state'teki isimle ayni olmali ki event sadece o nesne icin calissin */}
            <h3>User Name is {this.state.userName}</h3>

            <h3>City</h3>
            <input name='city' onChange={this.onChangeHandler} type="text"></input>
            <h3>City is {this.state.city}</h3>

            <input type='submit' value='Save'></input>
        </form>
      </div>
    )
  }
}
