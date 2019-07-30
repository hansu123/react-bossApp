import React, { Component } from 'react'
import { jobModel } from "@/models"
import { Card, WhiteSpace, Tag,NavBar,Icon } from "antd-mobile"
import "./index.scss"
export default class Dashborad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobList: []
    }
  }
  toDetail = (recruiter) => {
    this.props.history.push({
      pathname:"/chat",
      state:{
        recruiter
      }
    })
  }
  componentWillMount() {
    console.log(jobModel)
    jobModel.getJobList().then((res) => {
      console.log(res)
      this.setState({
        jobList: [...res.data.list]
      })
    })
  }
  render() {
    return (
      <div className="dashboard_wrap">
        <NavBar
          mode="dark"
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >web移动端</NavBar>
        <div className="dashboard_conetent">
        {
          this.state.jobList.map((item) => {
            return (
              <div key={item._id} className="job_content">
                <Card onClick={()=>{this.toDetail(item.recruiter)}}>
                  <Card.Header
                    title={item.position.name}
                    extra={<span style={{ color: "#5dd5c8" }}>{item.position.money}</span>}
                  />
                  <Card.Body >
                    <div className="job_body" >
                      {item.position.compony}
                      <div className="tag_content">
                        {
                          item.tags.map((tag, index) => {
                            return (<Tag key={index} data-seed="logId" style={{ background: "#eee" }}>{tag}</Tag>)
                          })
                        }
                      </div>
                    </div>
                  </Card.Body>
                  <Card.Footer
                    content={<div style={{ display: "flex", alignItems: "center" }}>
                      <img style={{ borderRadius: "50%" }} src={item.recruiter.avatar} alt="招聘者头像" />
                      <span style={{ marginLeft: "10px" }}>{item.recruiter.name}-{item.recruiter.identity}</span>
                    </div>} />
                </Card>
                <WhiteSpace size="md" />
              </div>
            )
          })
        }
                 
      </div>

      </div>
    )
  }
}
