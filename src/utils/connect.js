import { connect } from "react-redux"
import {bindActionCreators} from 'redux'
import  actions from "@/store/actionCreators"
console.log(actions)
export default connect(
  state => ({
      state
  }),
  dispatch=>bindActionCreators(actions,dispatch)
)