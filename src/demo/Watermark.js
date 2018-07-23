/***
* watermark of deployed by helloDeploy
*/
import React from 'react'

import './Watermark.css'

export default class Watermark extends React.Component {
    render() {
        return (
            <a href='https://www.quantfive.org' target='_blank' rel="noopener noreferrer">
                <div className='watermark'>
                    Built By Q5
                </div>
            </a>
        )
    }
}