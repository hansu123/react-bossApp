import Dashboard from "@/views/dashboard"
import Login from "@/views/login"
import Compony from "@/views/compony"
import Message from "@/views/message"
import Chat from "@/views/chat"
import My from "@/views/my"
const routers = [
  {
    path: "/login",
    meta:{auth:false},
    component: Login
  },
  {
    path: "/",
    meta: { auth: true },
    redirect:"/dashboard"
  },
  {
    path: "/dashboard",
    meta: { auth: true },
    component: Dashboard
  },
  {
    path: "/compony",
    meta: { auth: true },
    component: Compony
  },
  {
    path: "/message",
    meta: { auth: true },
    component: Message
  },
  {
    path: "/chat",
    meta: { auth: true },
    component: Chat
  },
  {
    path: "/my",
    meta: { auth: true },
    component: My
  }

]

export default routers