import React from 'react'
import Column from '../Column'
import Content from '../Content'
import SkillsList from './SkillsList'
import Card from '../Card'


const Skills = (props) => (
    <section id="Skills">
        <Content title="Skills" subtitle="My study results">
            <Column>
                <Card>
                    <SkillsList name="Design Skills" />
                </Card>
            </Column>
            <Column>
                <Card>
                    <SkillsList name="Developer Skills" />
                </Card>
            </Column>
            <Column>
                <Card>
                    <SkillsList name="Soft Skills" />
                </Card>
            </Column>
        </Content>
    </section>
)

export default Skills;