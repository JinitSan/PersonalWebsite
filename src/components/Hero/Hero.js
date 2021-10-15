import React from 'react';

import { Section, RainbowText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { RainbowHighlight } from "./RainbowHightlight"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const colors = ["#83D37C", "#EEB7D4", "#9DABCF"];

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Hey there,<br/>
                 I'm Jinit!
            </SectionTitle>
            <RainbowText>
                <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
                    <RoughNotationGroup show={true}>
                        <RainbowHighlight color={colors[0]}>
                            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                            Developer.
                            </h1>
                        </RainbowHighlight>
                        <RainbowHighlight color={colors[1]}>
                            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                            Data Science Enthusiast.
                            </h1>
                        </RainbowHighlight>
                        <RainbowHighlight color={colors[2]}>
                            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                            Student.
                            </h1>
                        </RainbowHighlight>
                    </RoughNotationGroup>
                </div>
            </RainbowText>
        </LeftSection>
    </Section>
);

export default Hero;