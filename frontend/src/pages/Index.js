import { Link, useLoaderData, Form } from 'react-router-dom';

function Index(props) {
    // get data from loader
    const cheeses = useLoaderData()
   
    return (
        <div>
            <h2>Add a new Cheese</h2>
            <Form action="/create" method="post">
                <input type="text" name="name" placeholder="name of cheese" />
                <input type="text" name="image" placeholder="image of cheese" />
                <input type="text" name="countryOfOrigin" placeholder="country of origin" />
                <input type="submit" value="Add New Cheese" />
            </Form>
        {cheeses.map((cheese, index) => {
        return (
            <div key={cheese._id} className='cheese'>
                <Link to={`/${cheese._id}`}>
                    <h1>{cheese.name}</h1>
                </Link>
                <img src={cheese.image} alt={cheese.name} />
                <h3>{cheese.countryOfOrigin}</h3>
            </div>
        );
    })}
        </div>
    );
}

export default Index;