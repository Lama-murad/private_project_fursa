
// import  './course.scss';
import './courses.scss';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Card from '../../components/trainersCard/card';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/header';
import { Outlet } from 'react-router-dom'
import { coursesProps } from './course';
//components
import Course from "./course";

// export interface coursesProps {
//     name: string;
//     hours:number;
//     lessons:string;
//     participants:string;
//     cost:number;
//   }
const courses = [{
    name: 'group lessons', hours: 5, lessons: 10, participants: "4-8", cost: 1000,
    description: 'Saturdays,Tuesdays or Wednesdays.duration 10 weeks , one lesson a week (30 minutes). working hours:9:00-18:00'
},

{ name: 'single lesson', hours: 0.5, lessons: 1, participants: "1", cost: 110,
description:'Sundays,Mondays or Thursdays .signle lesson (30 minutes). working hours:9:00-18:00'}];
// { name: 'private lessons', hours: 5, lessons: 10, participants: "1", cost: 1200 },
function Courses() {

    return (
        <div className="maindiv">
            <h3>Courses and private lessons</h3>

            <div className="courses">
                {courses.map((c, i) => {
                    return <Course key={i} name={c.name} hours={c.hours}
                        lessons={c.lessons} participants={c.participants} cost={c.cost} description={c.description}/>
                }

                )}

                <Outlet />
            </div>
        </div>
    );
}

export default Courses;