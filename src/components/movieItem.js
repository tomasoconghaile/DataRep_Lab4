import React from 'react';
import Card from 'react-bootstrap/Card'; {/* import to use bootstrap code */}

export class MovieItem extends React.Component {

    render() {
        return (
            <div>
                 <Card> {/*code taken from bootstrap */}
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                            {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>

        );
    }
}