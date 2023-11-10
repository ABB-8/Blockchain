import LoginPage from "../page/LoginPage"
import MainPage from "../page/MainPage"
import SignUpPage from "../page/SignUpPage"
import ListPage from "../page/ListPage"
import DetailPage from "../page/DetailPage"
import ChargePage from "../page/ChargePage"
import DonatePage from "../page/DonatePage"

const router = [
    { path: '', component: MainPage },
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignUpPage },
    { path: '/list', component: ListPage },
    { path: '/detail', component: DetailPage },
    { path: '/charge', component: ChargePage },
    { path: '/donate', component: DonatePage }
]

export default router