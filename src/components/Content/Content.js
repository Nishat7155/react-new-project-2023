import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Container,Button,Section } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import {ContentRow, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img, BigColumn, SmallColumn, Box} from './ContentStyles.js'

import { useAnimation } from 'framer-motion';
const Content = (props) => {
  const {
    primary,
    topLine,
    headline, 
    description, 
    buttonLabel,
    img,
    alt, 
    start, 
    bottomIng, 
    linkto, 
    inverse, 
    reverse, 
    bigImage, 
    id,
  } =props;

  const initial={opacity:0, y:30};
  const transition ={delay:0.3, duration:0.6}
  const animation = useAnimation();
  
  const {ref, inView} = useInView({
    threshold:0.2
  })
  useEffect(()=> {
    if (inView){
      animation.start({
        opacity:1,
        y:0,
      });

      return;
    }

    animation.start({
      opacity:0,
      y:0,
    });
  },[inView, animation])
  
  return (
    <>
      <Section padding ="160px 0" invers={inverse} id={id}>
        <Container>
          <ContainerRow reverse="reverse">
            <SmallColumn>
              <TextWrapper>
                <TopLine>
                  {topLine.text &&(
                    <Box>
                      <Box>{topLine.extraText}</Box>
                      {topLine.text}
                    </Box>
                  )}
                </TopLine>
              </TextWrapper>
            </SmallColumn>

          </ContainerRow>
        </Container>

      </Section>
    </>
  )
}

export default Content;