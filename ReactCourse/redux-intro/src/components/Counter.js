import React, { Component } from 'react'
import { connect } from 'react-redux'

// export default class Counter extends Component {
class Counter extends Component {
  render() {
    return (
      <div>
        {/* State redux'tan gelir, oan reducer'dan gelir. Redux'a baglamaliyiz. */}
        <h1>{this.props.counter}</h1> 
        {/* Counter bilgisini artis app.js'den yollamak yerine state'den aldik. */}
      </div>
    )
  }
}

//Counter'ın prop'larına state'i baglar.
function mapStateToProps(state){
    return {counter:state.counterReducer}
} 

export default connect(mapStateToProps)(Counter);