import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import HomePage from "./view/pages/homepage/homepage";
import SignIn from "./view/pages/signIn/signin";
import SignUp from "./view/pages/signUp/signup";
import Trainers from "./view/pages/trainers/trainers";
import Horses from "./view/pages/horses/horses";
import Courses from "./view/pages/courses/courses";
import Course from "./view/pages/course/course";
import CourseRegistration from "./view/pages/courseRegistration/courseRegistration";
import Data from "./view/pages/data/participantsInCour";
import AdminCourses from "./view/pages/adminCourses/admincourses";
import AdminPage from "./view/pages/AdminPage/adminpage";
import TableDatePicker from "./view/pages/TableDatePicker/TableDatePicker"
import CalendarFun from "./view/pages/courseRegistration/courseregistration2";
import AddOffer from './view/pages/addOffer/addOffer';
import UserLevel from './view/pages/courseRegistration/userLevel';
import AddHorse from './view/pages/addHorse/addHorse';
import AddTrainer from './view/pages/addTrainer/addTrainer';
import UsercourseType from './view/components/courseSelection/courseSelection';
import ChooseCourse from './view/pages/courseRegistration/choosecourse';
import AddSingleCourse from './view/pages/addCourse/addSingleCourse';
import AddGroupCourse from './view/pages/addCourse/addGroupCourse';
import PrivateCourseReg from './view/pages/courseRegistration/privateCourseReg';
import MyData from './view/pages/data/myData';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="courses" element={<Courses />} >
        <Route path=":courseId" element={<Course />} />
     
      </Route>
      <Route path="homepage" element={<HomePage />} />
      <Route path="signIn" element={<SignIn />} />
  
      <Route path="signUp" element={<SignUp />} />
      <Route path="trainers" element={<Trainers />} />
      <Route path="horses" element={<Horses />} />
      <Route path="courses" element={<Courses />} />
      <Route path="data" element={<Data />} /> 
      <Route path="privateCourseReg" element={<PrivateCourseReg />} /> 
      <Route path="choosecourse" element={<ChooseCourse />} /> 
      <Route path="adminpage" element={<AdminPage />} /> 
      <Route path="addGroupCourse" element={<AddGroupCourse />} /> 
      <Route path="addSingleCourse" element={<AddSingleCourse />} /> 
      <Route path="addOffer" element={<AddOffer />} /> 
      <Route path="TableDatePicker" element={<TableDatePicker />} /> 
      <Route path="admincourses" element={<AdminCourses />} /> 
      <Route path="addHorse" element={<AddHorse />} /> 
      <Route path="addTrainer" element={<AddTrainer />} /> 
      <Route path="courseSelection" element={<UsercourseType />} /> 
      <Route path="myData" element={<MyData />} /> 
      
      <Route path="userLevel" element={<UserLevel />} /> 
      <Route path="courseRegistration" element={<CourseRegistration />} />
      <Route path="courseregistration2" element={<CalendarFun />} />
      <Route path="course/:courseId" element={<Course />} />
    </Routes>
  </BrowserRouter>,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
