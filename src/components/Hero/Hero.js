import React from 'react';
import { Link } from 'react-router-dom';
import { Button,Container,Column,MainHeading,Row,TextWrapper } from '../../globalStyles';
import {BiPlayCircle} from 'react-icons/bi';
import { HeroSection,  ButtonContainer} from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection id ="hero">
      <Row justify="center" align="center" height="100%" padding="2rem">
        <Column align="center" mb="10%">
          <MainHeading>Where words fail, music speaks.</MainHeading>
           <TextWrapper
            color="white"
            size="clamp(1rem, 3vw, 1.3 rem)"
            lineHeight="1.1rem"
            maxWidth="480px"
            align="center"
           >
            Find your favoruite songs and mix tap of your favourite artists around the world. Select songs to boost your mood!!!
           </TextWrapper>
           <ButtonContainer>
             <Link to ='sign-up'>
              <Button big fontBig>
                 Start Listning!!!
              </Button>
             </Link>
             <Button big fontBig>
                 <BiPlayCircle size='2.3rem'>
                    Download
                 </BiPlayCircle>
              </Button>
           </ButtonContainer>
        </Column>

      </Row>

    </HeroSection>
  );
};

export default Hero;