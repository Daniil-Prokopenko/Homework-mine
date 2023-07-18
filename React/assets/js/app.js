const API_KEY = 'acb499f4dc5572b3198b7eec9043c0c7';

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2I0OTlmNGRjNTU3MmIzMTk4YjdlZWM5MDQzYzBjNyIsInN1YiI6IjY0YjQwMmFjMjNkMjc4MDEwNzMwZjdkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tAEFQB8H08x7aqpEgoF1tmQHB2ZHP3GG0Gs3YzSO6uk';

const API_URL = 'https://api.themoviedb.org/3/';

const isDev = true;

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' +TOKEN
    }
};

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchList: []
        }
    }

    searchHandler = (search)=>{

        const url = isDev ? 'mock/search.json' : `${API_URL}'search/movie?query=${search}'`;
        fetch(url, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({searchList: response.results})
            })
            .catch(err => console.error(err));
            }

     render(){

        console.log(API_KEY);
        return (
            <div className="container">
                <Card>
                    <SearchForm submit={this.searchHandler}/>
                </Card>

                <Card title="Search results">
                    <MovieList movies={this.state.searchList} />
                </Card>
            </div>
        )
    }

}

class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {search: ''} 

    }

    submitHandler = (event) =>{
        event.preventDefault();
        if(this.state.search === ''){
            toast.error("Enter search value");
            return false;
        }
        this.props.submit(this.state.search);
    }

    render(){
        return (
            <form onSubmit={this.submitHandler}>
                   <div className= "row"> 
                        <div className= "col-8">
                            <input type="search" className="form-control" onChange={(event)=>{
                                this.setState({search: event.target.value})
                                }
                            }/>
                        </div>
                        <div className="col-4">
                             <button type="submit" className = "btn btn-info">Search</button>
                        </div>
                    </div>
            </form>
        )
    }
}

class Card extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const header = this.props.title ? (
            <div className="card-header">
            <h4>{this.props.title}</h4>
        </div>
        ) : null;

        return (
            <div className="card mb-5">
                {header}
                <div className="card-body">
                {this.props.children}
                </div>
            </div>
        )
    }
}

class MovieList extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="row">
                {this.props.movies.map((item)=> <MovieItem movie= {item} key={item.id}/>)}
            </div>
        )
    }
}

class MovieItem extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const item = this.props.movie;
        return(
            <div className="col-3" >
                <div className="poster-wrapp">
                    <img src={'https://image.tmdb.org/t/p/w342' +item.poster_path} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.release_date}</p>
            </div>
        )
    }
}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(<App/>);