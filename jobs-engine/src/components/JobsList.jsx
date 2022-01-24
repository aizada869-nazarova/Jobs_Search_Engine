import {Link} from 'react-router-dom';
import React from 'react';

class JobsList extends React.Component {
    render() {
        return (
            <ul classname="text-center">
                {this.props.jobs?.slice(0,10).map(job => 
                    <Link to={`/details/${job.id}`} >
                        <li key={job.id}>{job.company_name}</li>
                    </Link>
                )}
            </ul>
        );
    }
}

export default JobsList;
  