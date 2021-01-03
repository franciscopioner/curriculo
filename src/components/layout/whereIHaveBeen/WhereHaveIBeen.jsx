import React from 'react'
import Column from '../Column'
import Content from '../Content'
import './WhereHaveIBeen.css'

import ImgWhere01 from '../../../assets/zaffari.png'
import ImgWhere02 from '../../../assets/bourbon.png'
import ImgWhere03 from '../../../assets/senac.png'
import ImgWhere04 from '../../../assets/sttrois.png'
import ImgWhere05 from '../../../assets/thyssen.png'
import ImgWhere06 from '../../../assets/duplo.png'


const WhereHaveIBeen = (props) => (
    <section id="WhereHaveIBeen">
        <Content title="Where i have been" subtitle="Places where I made friends while having fun" bgcolor="skyblue">
            <Column>
                <img src={ImgWhere01} alt="Zaffari logo" />
            </Column>
            <Column>
                <img src={ImgWhere02} alt="Bourbon logo" />
            </Column>
            <Column>
                <img src={ImgWhere03} alt="Senac logo" />
            </Column>
            <Column>
                <img src={ImgWhere04} alt="Sttrois logo" />
            </Column>
            <Column>
                <img src={ImgWhere05} alt="Thyssen logo" />
            </Column>
            <Column>
                <img src={ImgWhere06} alt="Duplo logo" />
            </Column>
        </Content>
    </section>
)

export default WhereHaveIBeen;