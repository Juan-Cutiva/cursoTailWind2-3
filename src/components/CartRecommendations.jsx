import { Fragment } from 'react';

import data from '../data/city.json';

export default function Cart() {
	return (
		<>
			{data.map((item) => {
				const color = item.background === 'bg-Green' ? 'bg-Green' : 'bg-white';
				const text = item.text === 'text-white' ? 'text-white' : 'text-Blue';
				const margin = item.name === 'Roma' ? 'mr-8' : '';
				return (
					<div
						className={`ml-8 h-72 w-60 flex-none transform rounded-lg shadow-lg transition-all hover:-translate-y-3 hover:shadow-xl md:h-80 md:w-72 ${margin}`}
						id={item.id}
					>
						<div className="h-3/5">
							<img
								src={item.src}
								alt={item.name}
								className="size-full overflow-hidden rounded-t-lg"
							/>
						</div>
						<div className={`h-2/5 rounded-b-lg ${color} ${text}`}>
							<p className="pl-4 pt-2 text-xl font-semibold">{item.name}</p>
							<p className="pl-4 pt-2 text-sm font-medium">{item.description}</p>
						</div>
					</div>
				);
			})}
		</>
	);
}
