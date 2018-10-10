import { array, func, object } from 'prop-types'
import React, {Component} from 'react'

export default class DaysSelectorDecorator extends Component {
  static propTypes = {
    initial: array,
    onDaysChanged: func
  }

  constructor(props) {
    super(props)

    this.state = {
      days: props.initial
    }
  }

  toggleDay (dayIndex, checked) {
    let {days} = this.state

    days[dayIndex] = checked
    this.setState({days}, this.props.onDaysChanged(days))
  }

  render() {
    return this.props.children(this.state.days, this.toggleDay)
  }
}
