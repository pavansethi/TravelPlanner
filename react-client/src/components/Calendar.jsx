import React from 'react';
import DatePicker from 'material-ui/DatePicker';


class Calendar extends React.Component {



  render() {
    return(
      <div className="field clearfix date-range-start date-wrapper">
        <div className="label">
          <label >{this.props.description} Date:</label>
        </div>
        <div className="input" onChange = {this.props.handleChange} >

          <input type="date" className="input-text" placeholder="mm/dd/yyyy"></input>

          <DatePicker 
            hintText="Date" 
            mode="landscape" 
            autoOk={true} 
            onChange={this.props.handleChange}
          />

        </div>
      </div>
    )
  }
}

export default Calendar;
