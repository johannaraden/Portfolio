import { Karamba } from 'components/Karamba'
import { Language } from 'components/Language'
import { HighlightButton } from 'common/HighlightButton'
import React from 'react'
import '../styling.css'


class Tabs extends React.Component {
  constructor(props) {
    super();
    this.state = {
      actived: 0
    }
  }
  
  select = (i) => {
    let _this = this;
    return function() {
      _this.setState({
        actived: i
      });
    }
  }
  
  renderTabs = () => {
    return React.Children.map(this.props.children, (item, i) => {
      if (i%2 === 0) {
        let actived = this.state.actived === i ? 'actived' : ''
        return <button onClick={this.select(i)} className={`${actived} subHeader`}>{item}</button>
      }
    })
  }
  
  renderContent = () => {
    return React.Children.map(this.props.children, (item, i) => {
      if (i-1 === this.state.actived) {
        return <div className='content'>{item}</div>;
      } else {
        return
      }
    })
  }
  
  render() {
    return (
      <>
      <div className="tabs">
        {this.renderTabs()}
      </div>
      <div>
        {this.renderContent()}
      </div>
      </>
    )
  }
}

export const Menu = () => {
  
    return (
      <main>
        <Tabs>
        <HighlightButton primary page='language app'></HighlightButton>
          <span>
              <Language />
          </span>
          <HighlightButton page='dance school website'></HighlightButton>
          <span>
              <Karamba />
          </span>
        </Tabs>
      </main>
    )
  }