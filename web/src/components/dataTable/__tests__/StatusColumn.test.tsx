import {
	StatusColumn,
	StatusColumnProps,
} from '../columnComponents/statusColumn';
import { render, screen } from '../../../../jest/test-utils';
import { userStatus } from 'eng-common-web/enumerations';

describe('<StatusColumn />', () => {
	it('should render without error', () => {
		const props: StatusColumnProps = { status: userStatus.Active.value };
		render(<StatusColumn {...props} />);
	});
	it('should display appropriate text when active', () => {
		const props: StatusColumnProps = { status: userStatus.Active.value };
		render(<StatusColumn {...props} />);
		const res = screen.getByText(/Active/i);
		expect(res).toBeTruthy();
	});
	it('should display appropriate text when inactive', () => {
		const props: StatusColumnProps = {
			status: userStatus.Deactivated.value,
		};
		render(<StatusColumn {...props} />);
		const res = screen.getByText(/Deactivated/i);
		expect(res).toBeTruthy();
	});
	it('should display appropriate text when invited', () => {
		const props: StatusColumnProps = { status: userStatus.Invited.value };
		render(<StatusColumn {...props} />);
		const res = screen.getByText(/Invited/i);
		expect(res).toBeTruthy();
	});
});
