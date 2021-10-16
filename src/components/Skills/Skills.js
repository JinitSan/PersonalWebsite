import React from 'react';
import { DiGoogleAnalytics, DiDatabase } from 'react-icons/di';
import {SiTensorflow} from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './SkillsStyles';

const Skills = () =>  (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
        I have worked in multiple domains such as Software, Healthcare, Finance, etc and I've fruitfully applied my skills in these domains 
    </SectionText>
    <List>
        <ListItem>
            <SiTensorflow size="3rem" />
            <ListContainer>
            <ListTitle>Machine Learning and Deep Learning</ListTitle>
            <ListParagraph>
                Experience in Machine Learning and Deep Learning frameworks such as Tensorflow, Pytorch, etc.
            </ListParagraph>
            </ListContainer>
        </ListItem>
    
        <ListItem>
            <DiDatabase size="3rem" />
            <ListContainer>
                <ListTitle>Development</ListTitle>
                <ListParagraph>
                Experience in latest development technologies such as React, NodeJs, Django, Java, etc.
                </ListParagraph>
            </ListContainer>
        </ListItem>

        <ListItem>
            <DiGoogleAnalytics size="3rem" />
            <ListContainer>
                <ListTitle>Math and Analytics</ListTitle>
                <ListParagraph>
                Experience in mathematical modelling and data analytics with application in Finance and Economics.
                </ListParagraph>
            </ListContainer>
        </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Skills;
