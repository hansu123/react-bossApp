import React, { Component } from 'react'
import {Card,WhiteSpace,Tag} from "antd-mobile"

import "./index.css"

export default class Dashborad extends Component {
  constructor(props){
    super(props)
    this.state={
      jobList:[
        {id:1,position:{name:"前端工程师",compony:"苏州华为",money:"10-20k"},recruiter:{name:"lilei",avatar:""},tags:['苏州 苏州工业园区','3-5年']},
        {id:2,position:{name:"前端工程师",compony:"英大网络科技",money:"6-10k"},recruiter:{name:"lilei",avatar:""},tags:['苏州 苏州工业园区','3-5年']},
        {id:3,position:{name:"前端工程师",compony:"罗想软件",money:"5-11k"},recruiter:{name:"lilei",avatar:""},tags:['苏州 苏州工业园区','3-5年']},
        {id:4,position:{name:"前端工程师",compony:"罗想软件",money:"6-8k"},recruiter:{name:"lilei",avatar:""},tags:['苏州 苏州工业园区','3-5年']},
        {id:5,position:{name:"前端工程师",compony:"罗想软件",money:"8-11k"},recruiter:{name:"lilei",avatar:""},tags:['苏州 苏州工业园区','3-5年']},
        {id:6,position:{name:"前端工程师",compony:"罗想软件",money:"7-12k"},recruiter:{name:"lilei",avatar:""},tags:['苏州 苏州工业园区','3-5年']}
      ]
    }
  }
  render() {
    return (
      <div>
        
        {
          this.state.jobList.map((item)=>{
            return (
              <div key={item.id} className="job_content">
              
              <Card>
              <Card.Header
                title={item.position.name}
                extra={<span style={{color:"#5dd5c8"}}>{item.position.money}</span>}
              />
              <Card.Body >
                <div className="job_body" >
                {item.position.compony}
                <div className="tag_content">
                  {
                    item.tags.map((tag,index)=>{
                      return (<Tag key={index} data-seed="logId" style={{background:"#eee"}}>{tag}</Tag>)
                    })
                  }
                </div>
                </div>
              </Card.Body>
            <Card.Footer 
              content={<div style={{display:"flex",alignItems:"center"}}>
              <img style={{borderRadius:"50%"}} src="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg" alt="招聘者头像" />
              <span style={{marginLeft:"10px"}}>{item.recruiter.name}招聘者</span>
              </div>} />
            </Card>
            <WhiteSpace size="md"/>
            </div>
            )
          })
        }
   
      </div>
    )
  }
}
