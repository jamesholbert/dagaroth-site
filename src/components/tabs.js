import React, { useState } from 'react';
import styled from 'styled-components'

import { getFontSize } from '../helpers'

const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 2rem;
`

const Tabs = ({ wide, tabs, initialTab = 0 }) => {
	const [tab, setTab] = useState(tabs[initialTab].name);
	const selectedTab = tabs.find(t => t.name === tab)
	
	const NavItem = styled.div`
		cursor: pointer;
		padding: 0 1rem;
    	font-size: ${getFontSize(3.25, wide)};
    	text-decoration: ${p => p.selected ? 'underline' : 'none'};
	`

	return (
		<div>
			<Nav>
				{tabs.map((tab, i) => (
					<NavItem 
						key={i}
						selected={tab.name === selectedTab.name}
						onClick={() => setTab(tab.name)}
					>
						{tab.name}
					</NavItem>)
				)}
			</Nav>
			{selectedTab.contents}
		</div>
	)
}

export default Tabs;