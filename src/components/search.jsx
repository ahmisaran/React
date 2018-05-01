import React from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props)

        this.state = { term :""}
    }
    render(){
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.onTermChange(event.target.value)}/>
            </div>
        )
    }

    onTermChange(term){
        this.setState({term});
        this.props.onSearchTerm(term);
    }

}

export default SearchBar