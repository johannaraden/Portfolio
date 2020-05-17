import React from 'react'
import '../styling.css'
import styled from 'styled-components/macro'
// import { makeStyles } from "@material-ui/core/styles"
// import Chip from "@material-ui/core/Chip"

const CardContainer = styled.div`
  border-radius: 6px;
  background-color: var(--mdc-theme-surface, #fff);
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  display: flex;
  flex-direction: column; 
  box-sizing: border-box;
  margin: 3em;
  width: 30%;
  transition: ease-in 300ms;
  :hover {
    box-shadow: 0px 3px 1px -1px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 2px 4px 0px rgba(0,0,0,.12);
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px) translateY(-3px);
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const CoverImage = styled.img`
  width: 100%;
  border-radius: 6px 6px 0 0;
`
const Title = styled.h1`
  font-size: 1.2em;
`

const Description = styled.p`

`

const Content = styled.div`

`

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     listStyle: "none",
//     padding: theme.spacing(2),
//     margin: 0
//   },
//   chip: {
//     margin: theme.spacing(0.5)
//   },
//   chipActive: {
//     margin: theme.spacing(0.5),
//     background: "primary"
//   }
// }));

export const ProjectCard = ({ title, secondaryText, coverImage }) => {
  // const classes = useStyles();
  // const [chipData, setChipData] = React.useState([
  //   { key: 0, label: "Angular" },
  //   { key: 3, label: "React" },
  //   { key: 4, label: "Vue.js" }
  // ]);
  return (
    <CardContainer>
      <Content>
        <Header>
          {coverImage && <CoverImage src={coverImage} />}
          <div className="cardText">
            {title && <Title>{title}</Title>}
            {secondaryText && <Description>{secondaryText}</Description>}
            <a href='https://www.google.se/'>>></a>
          </div>
        </Header>
        {/* <Chip {technology}/> */}
      </Content>
    </CardContainer>
  )
}