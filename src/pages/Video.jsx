import React from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplyIcon from "@mui/icons-material/Reply";
import AddTaskIcon from "@mui/icons-material/AddTask";
const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div``;

const Image = styled.img``;
const ChannelDetail = styled.div``;
const ChannelName = styled.span``;
const ChannelCounter = styled.span``;
const Description = styled.p``;

const Subscribe = styled.button``;

function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="620"
            src="https://www.youtube.com/embed/NmVzPufr8pY"
            title="YouTube Video Player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>3,454,698</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon /> 12345
            </Button>
            <Button>
              <ThumbDownIcon /> Dislike
            </Button>
            <Button>
              <ReplyIcon /> Share
            </Button>
            <Button>
              <AddTaskIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />

        <Channel>
          <ChannelInfo></ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
      </Content>
      <Recommendation>Recommendation</Recommendation>
    </Container>
  );
}

export default Video;
