import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Player extends Component {
    render () {
        // console.log(this.props);
        const { selectMovie, selectCategory} = this.props;
        
        return (
            <div>
                <fieldset>
                    <legend>
                        {'<'} Player {'>'}
                    </legend>
                    <h2>{selectCategory}</h2>
                    <h3>{selectMovie}</h3>
                </fieldset>
            </div>
        )    
    }
}

function mapStateToProps(state) {
    return {
        selectMovie: state.movies.selectedMovie,
        selectCategory: state.movies.selectedCategory
    }
}

export default connect(mapStateToProps)(Player);