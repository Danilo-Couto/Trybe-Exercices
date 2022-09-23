import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../store/actions';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          id: 1,
          name: 'Drama',
          movies: [
            { id: 1, title: 'The boy in the striped pajamas', released: 2008 },
            { id: 2, title: 'The pursuit of hapiness', released: 2006 },
            { id: 3, title: 'Fences', released: 2016 },
          ],
        },
        {
          id: 2,
          name: 'Action',
          movies: [
            { id: 4, title: 'Shooter', released: 2007 },
          ],
        },
        {
          id: 3,
          name: 'Romantic',
          movies: [
            { id: 5, title: 'Me before you', released: 2016 },
            { id: 6, title: 'The lake house', released: 2006 },
          ],
        },
      ],
    };
  }

  render() {
    const { categories } = this.state;
    // console.log(this.props);
    const { dispatch } = this.props;
    return (
      <aside>
        <fieldset>
          <legend>
            {'< '}
            Sidebar
            {' >'}
          </legend>
          {
            categories.map((category) => (
              <div key={ category.id }>
                <h3>{category.name}</h3>
                <ul>
                  {
                    category.movies.map((movie) => (
                      <li key={ movie.id }>
                        {movie.title}
                        {' '}
                        was released in
                        {' '}
                        {movie.released}
                        <button
                          type="button"
                          onClick={
                            () => dispatch(selectMovie(category.name, movie.title))
                          }
                        >
                          Assistir
                        </button>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </fieldset>
      </aside>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
    selectMovie: (category, movie) => dispatch((selectMovie(category, movie)))});
  
export default connect(null, mapDispatchtoProps)(Sidebar);

