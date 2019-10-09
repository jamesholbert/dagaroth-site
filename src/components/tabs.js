import React, { useState } from 'react';
import styled from 'styled-components'

import { getFontSize } from '../helpers'

const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 2rem;
`

const Tabs = ({ wide, tabs }) => {
	const [tab, setTab] = useState(tabs[0].name);
	const selectedTab = tabs.find(t => t.name === tab)
	
	const NavItem = styled.div`
		cursor: pointer;
    	font-size: ${getFontSize(3, wide)};
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