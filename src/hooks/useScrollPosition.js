import { useState, useEffect } from 'react'

const useScrollPosition = () => {
	const [y, setY] = useState(window.scrollPosition);

	const handleScroll = e => {
		if (window.pageYOffset <= 10) {
			setY(window.pageYOffset)	
		} 
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll)
	})
	
	return y;
}

export default useScrollPosition;