import request from "@/utils/request"
class JobModel extends request{
  getJobList(params){
    return this.get("/job/list",params)
  }
}
export default new JobModel()