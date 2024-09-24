import { Fragment } from 'react';
import data from '../data/stays.json';

export default function Cart() {
	return (
		<>
			{data.map((item) => {
				const text =
					item.text === 'text-gray-900'
						? 'text-gray-900'
						: '' || item.text === 'text-red-500'
							? 'text-red-500'
							: '';
				const img = item.src === '/hotel.webp' ? '/hotel.webp' : '';
				return (
					<div className={`mx-auto mb-20 h-[28rem] w-[85vw] rounded-3xl ${text}`}>
						<img
							src={img}
							alt={`${item.name} image`}
							className="absolute -z-10 h-[28rem] w-[85vw] rounded-3xl object-cover"
						/>
						<div className="z-10 pl-10 pt-14 text-3xl font-semibold">
							<p>{item.name}</p>
							<p className="w-[80%] text-pretty pt-4 text-xl font-normal">{item.description}</p>
						</div>
					</div>
				);
			})}
		</>
	);
}
