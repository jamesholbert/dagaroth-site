import { useState, useEffect } from 'react'

const useScrollPosition = () => {
	const [y, setY] = useState(window.scrollPosition);

	const handleScroll = e => {
		setY(window.pageYOffset)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll)
	})
	
	return y;
}

export default useScrollPosition;