import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, PortFolio } from './HeaderStyles';

const Header = () =>  (
  <Container>
      <Div1>
          <Link href="/">
            <a style={{display:"flex", alignItems:"center", color:"white", marginBottom:"20px"}}>
                <DiCssdeck size="3rem" /> <Span>Personal Website</Span>
            </a>
          </Link>
      </Div1>
      <Div2>
          <li>
            <Link href="#experience">
                <NavLink>Experience</NavLink>
            </Link>
          </li>
          <li>
              <Link href="#projects">
                  <NavLink>Projects</NavLink>
              </Link>
          </li>
          <li>
              <Link href="#skills">
                  <NavLink>Skills</NavLink>
              </Link>
          </li>
          <li>
              <Link href="#others">
                  <NavLink>Others</NavLink>
              </Link>
          </li>
      </Div2>
      <Div3>
          <SocialIcons href="https://github.com/JinitSan">
              <AiFillGithub size="3rem"></AiFillGithub>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/jinit-sanghvi-4329a016b/">
              <AiFillLinkedin size="3rem"></AiFillLinkedin>
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/jinitsan/">
              <AiFillInstagram size="3rem"></AiFillInstagram>
          </SocialIcons>
      </Div3>
  </Container>
);

export default Header;
