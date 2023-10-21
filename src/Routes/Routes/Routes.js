import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses";
import Course from "../../Pages/Course/Course";
import Category from "../../Pages/Category/Category";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Signup from "../../Pages/Signup/Signup";
import Terms from "../../Pages/Terms/Terms";
import Signin from "../../Pages/Signin/Signin";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import CoursePurchased from "../../Pages/CoursePurchased/CoursePurchased";
import Faq from "../../Pages/Faq/Faq";
import Profile from "../../Pages/Profile/Profile";
import Blog from "../../Pages/Blog/Blog";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
           {
            path:'/',
            loader:() => fetch('https://30-minute-school-server.vercel.app/courses'),
            element:<Courses></Courses>
           },
           {
            path:'/courses',
            loader:() => fetch('https://30-minute-school-server.vercel.app/courses'),
            element:<Courses></Courses>
           },
           {
            path:'/courses/:id',
            loader:({params}) => {
              return  fetch(`https://30-minute-school-server.vercel.app/courses/${params.id}`)
            },
            element:<Category></Category>
           },
           {
            path:'/course/:id',
            loader:({params}) => {
              return  fetch(`https://30-minute-school-server.vercel.app/course/${params.id}`)
            },
            element:<PrivateRoutes><CourseDetails></CourseDetails></PrivateRoutes>
           },
           {
            path:'/signup',
            element:<Signup></Signup>
           },
           {
            path:'/signin',
            element:<Signin></Signin>
           },
           {
            path:'/terms',
            element:<Terms></Terms>
           }

        ]
        
    },
    {
      path:'*',
      element: <PageNotFound></PageNotFound>
    },
    {
      path:'/purchased',
      element:<CoursePurchased></CoursePurchased>
    },
    {
      path:'/faq',
      element:<Faq></Faq>
    },
    {
      path:'/purchased',
      element:<CoursePurchased></CoursePurchased>
    },
    {
      path:'/profile',
      element:<Profile></Profile>
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    }
])