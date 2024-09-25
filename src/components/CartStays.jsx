import { Fragment } from 'react';
import data from '../data/stays.json';
import '../css/cartStays.css';

export default function Cart() {
	return (
		<>
			{data.map((item) => {
				const text =
					item.text === 'text-white'
						? 'text-white'
						: '' || item.text === 'text-gray-900'
							? 'text-gray-900'
							: '';
				const img = item.src === item.src ? item.src : '';
				return (
					<div
						id={item.id}
						className={`mx-auto mb-10 h-[30rem] w-[85vw] rounded-3xl md:mx-0 ${text} shadow-lg`}
					>
						<img
							src={img}
							alt={`${item.name} image`}
							className={`-z-10 h-[30rem] w-[85vw] rounded-3xl object-cover object-center`}
						/>
						<div id="text" className="z-10 pl-10 pt-14 text-3xl font-semibold">
							<p>{item.name}</p>
							<p id="p" className="w-[80%] text-pretty pt-4 text-xl font-normal">
								{item.description}
							</p>
						</div>
					</div>
				);
			})}
		</>
	);
}
