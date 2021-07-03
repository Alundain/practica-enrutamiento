import React from 'react'
import { Link } from '@reach/router';

const Dashboard = () => {
    return (
        <div>
           <Link to = "/home">Home</Link>

           <Link to ="/4">4</Link>

           <Link to ="/hello">Hello</Link>

           <Link to ="/hello/blue/red">Hello Blue Red</Link>
        </div>
    )
}

export default Dashboard


