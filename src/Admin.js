/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";


class AddingNewInfo extends Component{
    render(){
        return(
            <React.Fragment>
                <p>Admin Jobs to New info to the Website Database</p>
                <form >
                    <label for='image'>Insert a Spcial image For the Flight reference</label><br/>
                    <input type={'file'} name='image' id='image'/><br/>
                    <label for='name'></label>
                    <br/>
                    
                    <input type={'text'} name='name' id="name"/><br/>
                    
                    <label type='date'>Fix the Date</label>
                    <br/>
                    <input type={'date'} name='date' id="date"/>
                    <br/>
                    <label for='time'>Enter the  Regular Timing</label>
                    <br/>
                    <input type={'time'} name='time' id='time'/>
                    <br/>
                    <input type={'button'} value='submit'/>
                    
                </form>
            </React.Fragment>
        )
    }
}

export default AddingNewInfo