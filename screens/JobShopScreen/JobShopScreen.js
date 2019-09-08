import React, { Component } from "react";
import { Page } from "../../components/Containers";
import JobCard from "../../components/Card/JobCard";
import ApiManager from "../../lib/ApiManager";
import {
  TitleText,
} from "../../components/Typography";

class JobShopScreen extends Component {
    static navigationOptions = {
        title: "The Job Shop",
    };

    constructor() {
        super();
        this.state = {
            jobs: []
        }
    }

    componentDidMount() {
        ApiManager.jobs
          .getJobs()
          .then(jobs => {
              this.setState({jobs: jobs});
          });
    }

    render() {
        const { jobs } = this.state;
        return (
            <Page>
                <TitleText>Jobs</TitleText>
                {jobs.map(job => {
                    <JobCard
                        jobTitle={job.jobTitle}
                        employer={job.employer}
                        wage={job.wage}
                        url={job.url}
                    />
                })}
            </Page>
        );
    }
}

export default JobShopScreen;