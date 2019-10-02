import { useState, useEffect } from 'react'

const useWidth = () => {
	const [wide, setWide] = useState(window.innerWidth >= 800);

	const update = e => {
		setWide(e.target.window.innerWidth >= 800)
	}

	useEffect(() => {
		window.addEventListener('resize', update)

		return () => window.removeEventListener('resize', update)
	})
	
	return wide;
}

export default useWidth;