import React from 'react'
import PropTypes from 'prop-types'
import { PolarAngleAxis, PolarRadiusAxis, LabelList, RadialBar, RadialBarChart, ResponsiveContainer, Cell } from 'recharts'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'
import { UpDown, UpDownWide } from '../styles/animations'
import { Divider } from '../elements/Dividers'

const data = [
  {
    tech: 'Java',
    value: 30,
    color: colors.red,
  },
  {
    tech: 'Rust',
    color: colors.orange,
    value: 30,
  },
  {
    tech: 'PHP',
    color: colors.indigo,
    value: 50,
  },
  {
    tech: 'Elisp',
    color: colors.purple,
    value: 30,
  },
  {
    tech: 'React Native',
    value: 50,
    color: colors["blue-light"],
  },
  {
    tech: 'ReactJS',
    value: 60,
    color: colors["blue-light"],
  },
  {
    tech: 'Javascript',
    value: 70,
    color: colors.yellow,
  },
]

const Skills = ({ children }) => (
  <>
    <Divider speed={0.1} offset={2}>
      <UpDownWide>
        <SVG icon="js" hiddenMobile width={16} fill={colors.purple} left="5%" top="80%" />
        <SVG icon="code" width={12} fill={colors.white} left="95%" top="50%" />
        <SVG icon="code" width={6} fill={colors.white} left="85%" top="15%" />
        <SVG icon="emacs" hiddenMobile width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="code" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG icon="code" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
      <SVG icon="rome" width={6} fill={colors.orange} left="10%" top="10%" />
      <SVG icon="rome" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
      <SVG icon="emacs" width={8} fill={colors['grey-darkest']} left="80%" top="70%" />
      <UpDown>
        <ResponsiveContainer>
          <RadialBarChart innerRadius="20%" startAngle={180} endAngle={0} data={data}>
            <RadialBar cornerRadius={20} background dataKey="value">
              <LabelList dataKey="tech" fill="#fff" position="insideStart" />
              {data.map(entry => (
                <Cell fill={entry.color} />
              ))}
            </RadialBar>
          </RadialBarChart>
        </ResponsiveContainer>
        <SVG icon="rome" hiddenMobile width={6} fill={colors.blue} left="50%" top="75%" />
        <SVG icon="emacs" hiddenMobile width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
        <SVG icon="code" width={8} fill={colors['grey-darkest']} left="25%" top="5%" />
        <SVG icon="emacs" hiddenMobile width={24} fill={colors.red} left="80%" top="80%" />
      </UpDown>
    </Divider>
    <Content speed={0.4} offset={2}>
      <Inner>
        {children}
      </Inner>
    </Content>
  </>
)

export default Skills

Skills.propTypes = {
  children: PropTypes.node.isRequired,
}
