import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, FormControl } from "react-bootstrap"
import JobsList from "./JobsList"


class HomePage extends Component {
    state={
        jobs:[],
        companies:[],
        search:"",
        companySearch:""
       
    }

   
    searchJobs = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://remotive.io/api/remote-jobs?search=${this.state.search}`) 
            const data = await response.json()
            this.props.jobs(data.jobs)
            console.log(data);
            if(response.ok){
                this.setState({
                    ...this.state,
                    jobs: data.jobs,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }


    searchCompanies = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://remotive.io/api/remote-jobs?company_name=${this.state.companySearch}`) 
            const data = await response.json()
            this.props.companies(data.jobs)
            console.log(data.jobs);
            if(response.ok){
                this.setState({
                    ...this.state,
                    companies: data.jobs,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
   

    render() {
        return (
            <Container fluid className="" >
                <Row className="justify-content-center my-5 HomePage-body pb-5">
                   <Col md={4} className=" ">
                       <h4 className="py-3">Search By Job Title</h4>
                        <Form inline onSubmit={(e)=>this.searchJobs(e)}>
                            <FormControl
                            value={this.state.search}
                            onChange={(e)=>
                                this.setState({
                                    ...this.state,
                                    search:e.target.value
                            })}	
                            type="text" 
                            placeholder="Search" 
                            className=" mr-sm-2" />
                            <Button type="submit">Submit</Button>
                        </Form>
                   </Col>
                   
                 
                               
                       

                   <Col md={4} className="ml-auto">
                   <h4 className="py-3">Search By Company Name</h4>
                        <Form inline onSubmit={(e)=>this.searchCompanies(e)}>
                            <FormControl
                            value={this.state.companySearch}
                            onChange={(e)=>
                                this.setState({
                                    ...this.state,
                                    companySearch:e.target.value
                            })}	
                            type="text" 
                            placeholder="Search" 
                            className=" mr-sm-2" />
                            <Button type="submit">Submit</Button>
                        </Form>
                   </Col>
                </Row>
                <Row classname=" job-list">
                    <Col >
                        <JobsList jobs={this.state.jobs.length ?this.state.jobs:this.state.companies.length?this.state.companies:this.state.categoryJobs} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HomePage;