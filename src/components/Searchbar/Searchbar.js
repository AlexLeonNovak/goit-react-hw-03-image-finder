import {Component} from "react";
import PropTypes from "prop-types";

export class Searchbar extends Component {

    state = {
        searchQuery: ''
    }

    handleInputChange = ({target}) => {
        this.setState({searchQuery: target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.searchQuery);
    };

    render() {
        const { searchQuery } = this.state;

        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleInputChange}
                        value={searchQuery}
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
