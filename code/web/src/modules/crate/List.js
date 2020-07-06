// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import { getList as getCratesList } from './api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
import CrateItem from './Item'

// Component that creates the list of crates that is displayed to the user on the crate page.
// Allows the user to view all of the crates and subscribe to a crate.
// When functionality is added, the first time a user clicks on the '+ Subscribe' button the style survey will appear
// for the user to find out their style
class List extends PureComponent {

  // Runs on server only for SSR
  // Grabs crates that are made by the admin
  static fetchData({ store }) {
    return store.dispatch(getCratesList('ASC'))
  }

  // Runs on client only
  // Displays the crate list on the page
  componentDidMount() {
    this.props.getCratesList('ASC')
  }

  // Renders the crates and uses styling components
  render() {
    return (
      <div>
        {/* SEO */}
        {/* Changes the title of the page */}
        <Helmet>
          <title>Crates for everyone! - Crate</title>
        </Helmet>

        {/* Top title bar */}
        {/* Organizes the crates into a grid using a component */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">Crates for everyone!</H3>

            <p style={{ marginTop: '1em', color: grey2 }}>You can choose crate which suits your need. You can also
              subscribe to multiple crates.</p>
          </GridCell>
        </Grid>

        {/* Crate list */}
        <Grid>
          <GridCell>
            {/* Displays all of the crates in the crates list prop, maps each crate to its own component CrateItem */}
            {
              this.props.crates.isLoading
                ? <Loading/>
                : this.props.crates.list.length > 0
                    ? this.props.crates.list.map(crate => (
                      <div key={crate.id} style={{ margin: '2em', float: 'left' }}>
                        <CrateItem crate={crate}/>
                      </div>
                    ))
                    : <EmptyMessage message="No crates to show" />
            }
            {/* Will add the functionality of redirecting to the user style survey page if no crates have been subscribed to */}
          </GridCell>
        </Grid>
      </div>
    )
  }
}

// Component Properties
List.propTypes = {
  crates: PropTypes.object.isRequired,
  getCratesList: PropTypes.func.isRequired
}

// Component State
function listState(state) {
  return {
    crates: state.crates
  }
}

export default connect(listState, { getCratesList })(List)
