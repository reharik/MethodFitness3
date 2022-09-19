import { v4 as uuidv4 } from 'uuid';
// paging the data
type TableData = {
	name: string;
	type: string;
	created: string;
	id: string;
	status: string;
};
export const mockData = (): TableData[] => {
	const data = [];

	//PAGE1
	for (let i = 0; i < 5; i++) {
		data.push({
			name: 'Mock Org.',
			type: 'Clinical',
			created: '2021-09-13T22:57:21.981Z',
			id: uuidv4(),
			organizationType: 'Clinical',
			status: 'Test',
		});
	}
	//PAGE2
	for (let i = 0; i < 5; i++) {
		data.push({
			name: 'Mock Org. pt.2',
			type: 'Clinical',
			created: '2021-09-13T22:57:21.981Z',
			id: uuidv4(),
			organizationType: 'Clinical',
			status: 'Test',
		});
	}
	//PAGE3
	for (let i = 0; i < 5; i++) {
		data.push({
			name: 'Mock Org. pt.3',
			type: 'Clinical',
			created: '2021-09-13T21:57:21.981Z',
			id: uuidv4(),
			organizationType: 'Clinical',
			status: 'Test',
		});
	}
	//PAGE4
	for (let i = 0; i < 5; i++) {
		data.push({
			name: 'Mock Org. pt.4',
			type: 'Clinical',
			created: '2021-09-13T21:57:21.981Z',
			id: uuidv4(),
			organizationType: 'Clinical',
			status: 'Test',
		});
	}
	//PAGE5
	for (let i = 0; i < 5; i++) {
		data.push({
			name: 'Mock Org. pt.5',
			type: 'Clinical',
			created: '2021-09-13T19:57:21.981Z',
			id: uuidv4(),
			organizationType: 'Clinical',
			status: 'Test',
		});
	}
	//PAGE6
	for (let i = 0; i < 5; i++) {
		data.push({
			name: 'Mock Org. pt.6',
			type: 'Clinical',
			created: '2021-09-13T22:57:21.981Z',
			id: uuidv4(),
			organizationType: 'Clinical',
			status: 'Test',
		});
	}
	//PAGE7
	for (let i = 0; i < 5; i++) {
		data.push({
			name: 'Mock Org. pt.7',
			type: 'Clinical',
			created: '2021-09-13T20:57:21.981Z',
			id: uuidv4(),
			organizationType: 'Clinical',
			status: 'Test',
		});
	}
	//PAGE8
	for (let i = 0; i < 5; i++) {
		data.push({
			name: 'Mock Org. pt.8',
			type: 'Clinical',
			created: '2021-09-13T21:57:21.981Z',
			id: uuidv4(),
			organizationType: 'Clinical',
			status: 'Test',
		});
	}
	//PAGE9
	for (let i = 0; i < 5; i++) {
		data.push({
			name: 'Mock Org. pt.9',
			type: 'Clinical',
			created: '2021-09-13T22:57:21.981Z',
			id: uuidv4(),
			organizationType: 'Clinical',
			status: 'Test',
		});
	}
	//PAGE10 - shows that the count in the footer works to display the specific nodes
	for (let i = 0; i < 3; i++) {
		data.push({
			name: 'Mock Org. pt.10',
			type: 'Clinical',
			created: '2021-09-13T20:57:21.981Z',
			id: uuidv4(),
			organizationType: 'Clinical',
			status: 'Test',
		});
	}

	return data;
};
