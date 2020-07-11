
// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link, withRouter } from 'react-router-dom'
import { topsAnswer, bottomsAnswer, shoesAnswer, accessoriesAnswer, styleResult, fetchStylePreference, setStylePreference } from './api/actions';


// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import { H2 } from '../../ui/typography'
import { grey, grey2, white, black } from '../../ui/common/colors'
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import H4 from '../../ui/typography/H4'


// App Imports
import { getListByUser } from '../subscription/api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
import SubscriptionItem from '../subscription/Item'


class Survey extends PureComponent {

  constructor(props) {
    super(props)
  }

  computeStyle() {
    const styleResponses = [this.props.topsResponse, this.props.bottomsResponse, this.props.shoesResponse, this.props.accessoriesResponse];
    const styles = {
      funkyFresh: 0,
      classic: 0,
      artsy: 0,
      1: 'Funky Fresh',
      2: 'Classic',
      3: 'Artsy'
    };

    for (let i=0; i<4; i++){
      if(styleResponses[i] === 1){
        styles.funkyFresh++;
      } else if(styleResponses[i] === 2){
        styles.classic++;
      } else {
        styles.artsy++;
      }
    }

    if(styles.funkyFresh >= 3) {
      return this.props.styleResult(styles[1])
    } else  if(styles.classic >= 3) {
      return this.props.styleResult(styles[2])
    } else if(styles.artsy >=3) {
      return this.props.styleResult(styles[3])
    } else {
      const surveyTotal = styleResponses.reduce((total,style)=>{
        total += style;
        return total
      },0);
      const surveyAverage = surveyTotal/4;
      const styleIndex = Math.round(surveyAverage);
      return this.props.styleResult(styles[styleIndex])
    }
  }

  render() {
    return (
      <div>
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">Style Survey</H3>
          </GridCell>
        </Grid>

          <div>
            <H4 style={{ textAlign: 'center' }} font="secondary">Choose Your Favorite Top</H4>
          </div>
        <Grid>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button
                    onClick={() => this.props.topsAnswer(1)}  
                    style={{ marginBottom: '1em' } } 
                    theme="primary">Style Choice 1
                </Button>
              </p>
            </Card>
          </GridCell>

            <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button
                  onClick={() => this.props.topsAnswer(2)}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 2</Button>
              </p>
            </Card>
          </GridCell>

          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button 
                  onClick={() => this.props.topsAnswer(3)}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 3
                </Button>
              </p>
            </Card>
          </GridCell>
          </Grid>

          <div>
            <H4 style={{ textAlign: 'center' }} font="secondary">Choose Your Favorite Bottoms</H4>
          </div>
        <Grid>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button 
                  onClick={() => this.props.bottomsAnswer(1)}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 1
                </Button>
              </p>
            </Card>
          </GridCell>

            <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button 
                  onClick={() => this.props.bottomsAnswer(2)}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 2
                </Button>
              </p>
            </Card>
          </GridCell>

          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button 
                  onClick={() => this.props.bottomsAnswer(3)}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 3
                </Button>
              </p>
            </Card>
          </GridCell>
          </Grid>

          <div>
          <H4 style={{ textAlign: 'center' }} font="secondary">Choose Your Favorite Shoes</H4>
          </div>
          <Grid>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button 
                  onClick={() => this.props.shoesAnswer(1)}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 1
                </Button>
              </p>
            </Card>
          </GridCell>
            <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button 
                  onClick={() => this.props.shoesAnswer(2)}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 2
                </Button>
              </p>
            </Card>
          </GridCell>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center' , marginTop: '1em', marginBottom: '1em' }}>
                <Button 
                  onClick={() => this.props.shoesAnswer(3)}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 3
                </Button>
              </p>
            </Card>
          </GridCell>
          </Grid>

          <div>
            <H4 style={{ textAlign: 'center' }} font="secondary">Choose Your Favorite Accessory</H4>
          </div>
          <Grid>
            <GridCell style={{ padding: '2em', textAlign: 'center' }}>
              <Card style={{ width: '18em', backgroundColor: white }}>
              <p style={{ padding: '2em 3em 0 3em' }}>
                <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
                </p>
                <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                  <Button 
                    onClick={() => this.props.accessoriesAnswer(1)}
                    style={{ marginBottom: '1em' }} 
                    theme="primary">Style Choice 1
                  </Button>
                </p>
              </Card>
            </GridCell>

            <GridCell style={{ padding: '2em', textAlign: 'center' }}>
              <Card style={{ width: '18em', backgroundColor: white }}>
              <p style={{ padding: '2em 3em 0 3em' }}>
                <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
                </p>
                <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                  <Button 
                    onClick={() => this.props.accessoriesAnswer(2)}
                    style={{ marginBottom: '1em' }} 
                    theme="primary">Style Choice 2
                  </Button>
                </p>
              </Card>
          </GridCell>

          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <Card style={{ width: '18em', backgroundColor: white }}>
            <p style={{ padding: '2em 3em 0 3em' }}>
              <img src={'http://placekitten.com/200/300'} style={{ width: '100%' }}/>
              </p>
              <p style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
                <Button
                  onClick={() => this.props.accessoriesAnswer(3)}
                  style={{ marginBottom: '1em' }} 
                  theme="primary">Style Choice 3
                </Button>
              </p>
            </Card>
          </GridCell>
          <Button
            onClick={() => this.computeStyle()}
            style={{ marginBottom: '1em' }} 
            theme="primary">Get yo' style!
          </Button>
          <h6>{this.props.determinedStyle}</h6>
          <Button
            onClick={() => this.props.fetchStylePreference(2)}
            style={{ marginBottom: '1em' }} 
            theme="primary">Get Style for User 1
          </Button>
          <Button
            onClick={() => this.props.setStylePreference('coolio',2)}
            style={{ marginBottom: '1em' }} 
            theme="primary">Post Style
          </Button>
          <h6>{this.props.savedStyle}</h6>
      </Grid>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    topsResponse: state.surveyReducer.topsAnswer,
    bottomsResponse: state.surveyReducer.bottomsAnswer,
    shoesResponse: state.surveyReducer.shoesAnswer,
    accessoriesResponse: state.surveyReducer.accessoriesAnswer,
    determinedStyle: state.surveyReducer.determinedStyle,
    savedStyle: state.surveyReducer.savedStyle,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    topsAnswer: (answer) => dispatch(topsAnswer(answer)),
    bottomsAnswer: (answer) => dispatch(bottomsAnswer(answer)),
    shoesAnswer: (answer) => dispatch(shoesAnswer(answer)),
    accessoriesAnswer: (answer) => dispatch(accessoriesAnswer(answer)),
    styleResult: (result) => dispatch(styleResult(result)),
    fetchStylePreference: (userId) => dispatch(fetchStylePreference(userId)),
    setStylePreference: (style, userId) => dispatch(setStylePreference(style,userId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Survey)