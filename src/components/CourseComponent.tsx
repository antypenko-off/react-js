import {coursesAndDurationArray} from "../arrays.ts";
import type {ICourseModel} from "../models/CourseModel.ts";
import {CoursesComponent} from "./CoursesComponent.tsx";


export const CourseComponent = () => {


    return (
        <ul>
            {
                coursesAndDurationArray.map((course: ICourseModel, index: number) => {
                    return <CoursesComponent course={course} key={index}/>;
                })
            }

        </ul>
    );
};