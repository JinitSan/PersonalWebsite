import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Img} from "./ExperienceStyles"
import ReactRoundedImage from "react-rounded-image";
import { ExperienceData } from '../../constants/constants';

const Experience = () => (
        <VerticalTimeline>
            {ExperienceData.map((p, i) => {
            return (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={p.date}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width:"75px", height:"75px" }}
                        icon={<Img src={p.image}/>}>
                        <h1 className="vertical-timeline-element-title">{p.Company}</h1>
                        <h3 className="vertical-timeline-element-subtitle">{p.title}</h3>
                        <p>
                        {p.description}
                        </p>
                </VerticalTimelineElement>
            );
            })}
        </VerticalTimeline>    
);

export default Experience;