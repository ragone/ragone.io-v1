import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Skills from '../views/Skills'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const SkillText = styled.p`
  ${tw`text-white font-sans text-xl md:text-2xl lg:text-3xl`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={6}>
      <Hero>
        <BigTitle>
          Hello, <br /> I'm Alex Ragone.
        </BigTitle>
        <Subtitle>I'm a <code>developer</code> from Denmark currently living in New Zealand.</Subtitle>
      </Hero>
      <About>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Alex Ragone" />
          <AboutSub>
          I am a software developer and very passionate about life and programming.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I find great plasure in tinkering with technology or spend my Sunday playing video games on my consoles. I love a good story whether it is in a book or a game.
          I am also a huge history nerd - especially when it comes to Ancient Rome. I can spend hours learning about the slaves and the common people of the Roman Republic.
        </AboutDesc>
        <AboutDesc>
          My biggest dream is to visit all the historical sites of Ancient Rome and relive the life of the plebians.
          When I relax I like to look inwards and practice meditation. It is very important to me in order to stay sane and get to know myself better.
        </AboutDesc>
      </About>
      <Skills>
        <Title>Skills</Title>
        <SkillText>
          These are skills which I enjoy using for both personal and professional projects.
        </SkillText>
      </Skills>
      <Projects>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="QuietMind"
            year="2018"
            tech="React Native"
            link="https://itunes.apple.com/app/quietmind/id1375294277"
            bg="linear-gradient(to right, #7EE0EB 0%, #FFD195 100%)"
          >
            A silent meditation timer built using React Native with more than 30.000 downloads.
          </ProjectCard>
          <ProjectCard
            title="Android Chess"
            year="2015"
            tech="Java, Android"
            link="https://github.com/ragone/chess-android"
            bg="linear-gradient(to right, #00b09b 0%, #96c93d 100%)"
          >
            An Android chess app which allows you to play chess over SMS or Bluetooth.
          </ProjectCard>
          <ProjectCard
            title="ezyVet Scan"
            year="2018"
            tech="React Native"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="AUT(PT)"
            link="https://github.com/ragone/AUT-PT"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Java application for the personal trainers at AUT City Fitness
          </ProjectCard>
          <ProjectCard
            title="ragone.io"
            link="https://github.com/ragone/ragone.io"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Java application for the personal trainers at AUT City Fitness
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <Contact>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:ragonedk@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/ragone">GitHub</a> &{' '}
            <a href="https://www.linkedin.com/in/alex-ragone-614343113/">LinkedIn</a>
          </ContactText>
        </Inner>
      </Contact>
    </Parallax>
  </>
)

export default Index
