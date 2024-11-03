import { useEffect, useRef } from 'react';

export const useDebounce = (callback, delay) => {
	const timerRef = useRef(null);
	useEffect(() => {
		return () => {
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, []);

	const debouncedCallback = (...args) => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		timerRef.current = setTimeout(() => {
			callback(...args);
		}, delay);
	};
	return debouncedCallback;
};
