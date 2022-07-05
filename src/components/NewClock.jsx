/*
import React from "react";

class NewClock extends React.Component {
    constructor(props) {
      super(props); 
      this.state = {date: props.date};
    }
  
    render() {
        return (
            <>{this.state.date.toLocaleTimeString()}</>
        );
      }
  }
*/
import { useState, useEffect } from "react";

const NewClock = (props) => {

    const [date, setDate] = useState(props.date);

    useEffect(() => {
        setInterval(() => {
            setDate(prevDate => new Date())
        }, 1000)
    }, [])

    return(
        <>{date.toLocaleTimeString()}</>
    )
}

export default NewClock;