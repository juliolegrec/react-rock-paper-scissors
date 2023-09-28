import React from 'react';

export default function Button() {
	return (
		<button
			style={{
				backgroundColor: 'white',
				border: '20px solid hsl(349, 71%, 52%)',
				borderRadius: '100%',
				padding: '20px',
				aspectRatio: '1/1',
				width: '10rem',
				cursor: 'pointer',
				boxShadow: 'inset 0 8px rgba(0,0,0,0.1), 0 8px 0 hsl(349, 76%, 35%)',
			}}
		>
			<img src="./images/icon-rock.svg" alt="" />
		</button>
	);
}
