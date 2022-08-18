import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
`;

function Comment() {
  return (
    <Container>
      <Avatar src="https://play-lh.googleusercontent.com/-u-oG-Ni_pco9h7zc3CQl-lFkKJjztO3RGZMjnbaDiznnbXoMQZYUjITHN0BVxYHBg=w240-h480-rw" />
      <Details>
        <Name>
          Hannah <Date>1 day ago</Date>
        </Name>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque
          architecto numquam? Quia aperiam debitis maiores esse commodi
          deserunt! Iusto quam asperiores et hic placeat dolorem explicabo nemo
          fugiat tenetur!
        </Text>
      </Details>
    </Container>
  );
}

export default Comment;
