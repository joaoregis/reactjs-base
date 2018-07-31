import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardactions'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        
        const { credit, debt } = this.props.summary

        return (
            <div>
                Dashboard
            </div>            
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)