import React, { useContext } from 'react'
import { FeatureFlagsContext } from './context'
import LightDarkMode from '../light-dark';
import RandomColor from '../randomColor';
import TicTacToe from '../tic-tac-toe';
import Accordion from '../accordion';
import TreeView from '../TreeView';
import menus from '../TreeView/data';

const FeatureFlags = () => {
  const {loading, enabledFlags} = useContext(FeatureFlagsContext);

  const componentsRender = [
    {
      key: 'showLightAndDarkMode',
      component: <LightDarkMode />,
    },
    {
      key: 'showRandomColorGenerator',
      component: <RandomColor />,
    },
    {
      key: 'showTicTacToeBoard',
      component: <TicTacToe />,
    },
    {
      key: 'showAccordion',
      component: <Accordion />,
    },
    {
      key: 'showTreeView',
      component: <TreeView menus={menus}/>,
    }
  ]

  function checkEnabledFlags(getCurrentKey){
    return enabledFlags[getCurrentKey];
  }

  if(loading) return <h1>Loading Data! Please Wait</h1>

  return (
    <div>
        <h1>Feature Flags</h1>
        {
          componentsRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
        }
    </div>
  )
}

export default FeatureFlags