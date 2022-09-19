// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const EatGreenAndLeanLHQ = ({
	title,
	width = '24',
	height = '24',
	color = '#676671',
	rotate = 0,
	horizontalFlip = false,
	verticalFlip = false,
}: IconProps): JSX.Element => {
	const { scaleX, scaleY, translateX, translateY } = flipFunction({
		horizontalFlip,
		verticalFlip,
	});
	return (
		<svg
			viewBox='0 0 32 32'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='EatGreenAndLeanLHQ-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'EatGreenAndLeanLHQ'}</title>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M15.1279 20.982C16.0783 21.2202 17.0541 21.3423 18.0339 21.3456C20.7663 21.3456 23.9618 20.3405 26.8655 16.8669C27.0376 16.66 27.0453 16.3621 26.884 16.1467C24.5824 13.0783 21.8755 11.3623 18.8328 11.052C14.6416 10.6212 11.1058 12.9833 9.89239 13.9096C9.28571 13.3399 7.97973 12.3928 5.66416 12.057C5.19089 11.9854 4.84147 12.4883 5.07369 12.9069L6.25695 15.0652C6.71541 15.8987 6.67803 16.9168 6.15969 17.7144L5.09453 19.3656C4.98077 19.5429 4.97191 19.768 5.07138 19.9538C5.17003 20.1402 5.36294 20.2576 5.57385 20.2595H5.57482C5.70919 20.2595 8.22445 20.2597 9.78125 18.5064C11.3992 19.648 13.2107 20.4867 15.1279 20.982ZM10.0383 17.2536C9.93529 17.1685 9.85091 17.1396 9.74524 17.1245C9.64011 17.1095 9.52587 17.1219 9.42944 17.1664C9.3323 17.2112 9.28139 17.2449 9.19077 17.381C8.56326 18.3235 7.54209 18.7496 6.74553 18.9418L7.13223 18.3443C7.88226 17.1895 7.93566 15.7155 7.27117 14.5094L6.69691 13.4604C8.59799 14.0138 9.32508 14.9957 9.3575 15.0397C9.45231 15.1757 9.60049 15.265 9.76504 15.2852C9.92885 15.3052 10.0933 15.2537 10.2166 15.1439C10.2559 15.1092 14.1299 11.7467 18.7147 12.2098C19.5821 12.2992 20.4217 12.52 21.2313 12.8711C21.1863 13.505 20.9532 14.878 19.7971 15.6191C19.3554 15.7123 19.1146 16.3746 19.5933 16.6789C19.6269 16.7037 19.6638 16.725 19.7038 16.7421C20.941 17.4703 21.1863 18.9614 21.233 19.6443C19.448 20.2974 17.5126 20.3729 15.4405 19.8658C13.4848 19.3606 11.6487 18.4728 10.0383 17.2536ZM22.3494 19.1502C23.2911 18.6586 24.1868 17.9943 25.0342 17.1582C24.8367 17.1411 24.6415 17.101 24.4527 17.0382C23.6625 16.7793 24.1496 15.5975 24.8926 15.9706C25.021 15.9853 25.1497 15.9951 25.2785 16.0001C24.3539 14.9195 23.3698 14.0648 22.331 13.4391C22.2089 14.2378 21.8678 15.3697 20.9274 16.2104C21.9067 17.0953 22.2394 18.3206 22.3494 19.1502ZM17.3374 14.4814C17.2613 14.4817 17.1858 14.4669 17.1155 14.4379C17.0451 14.409 16.9812 14.3663 16.9273 14.3125C16.8735 14.2587 16.8309 14.1947 16.8019 14.1244C16.7729 14.054 16.7582 13.9786 16.7585 13.9024V13.7033C16.7585 13.5497 16.8195 13.4025 16.928 13.2939C17.0366 13.1853 17.1838 13.1243 17.3374 13.1243C17.4909 13.1243 17.6381 13.1853 17.7467 13.2939C17.8553 13.4025 17.9163 13.5497 17.9163 13.7033V13.9024C17.9166 13.9786 17.9018 14.054 17.8728 14.1244C17.8438 14.1947 17.8012 14.2587 17.7474 14.3125C17.6936 14.3663 17.6296 14.409 17.5593 14.4379C17.4889 14.4669 17.4135 14.4817 17.3374 14.4814ZM16.928 16.6881C17.0366 16.7967 17.1838 16.8577 17.3374 16.8577C17.4134 16.8577 17.4887 16.8427 17.5589 16.8136C17.6291 16.7845 17.6929 16.7419 17.7467 16.6881C17.8005 16.6344 17.8431 16.5705 17.8722 16.5003C17.9013 16.4301 17.9162 16.3548 17.9162 16.2788V16.0796C17.9162 15.926 17.8553 15.7788 17.7467 15.6702C17.6381 15.5616 17.4909 15.5007 17.3374 15.5007C17.1838 15.5007 17.0366 15.5616 16.928 15.6702C16.8195 15.7788 16.7585 15.926 16.7585 16.0796V16.2788C16.7585 16.4323 16.8195 16.5796 16.928 16.6881ZM17.3374 19.2333C17.1838 19.2333 17.0366 19.1725 16.928 19.0641C16.8195 18.9557 16.7585 18.8087 16.7585 18.6554V18.4543C16.7585 18.301 16.8195 18.154 16.928 18.0456C17.0366 17.9372 17.1838 17.8763 17.3374 17.8763C17.4909 17.8763 17.6381 17.9372 17.7467 18.0456C17.8553 18.154 17.9162 18.301 17.9162 18.4543V18.6554C17.9162 18.7313 17.9013 18.8064 17.8722 18.8766C17.8431 18.9467 17.8005 19.0104 17.7467 19.0641C17.6929 19.1177 17.6291 19.1603 17.5589 19.1894C17.4887 19.2184 17.4134 19.2333 17.3374 19.2333ZM14.3365 15.6255C14.4068 15.6546 14.482 15.6695 14.5581 15.6695C14.7116 15.6695 14.8588 15.6085 14.9674 15.5C15.076 15.3914 15.137 15.2441 15.137 15.0906V14.8914C15.137 14.7379 15.076 14.5906 14.9674 14.4821C14.8588 14.3735 14.7116 14.3125 14.5581 14.3125C14.4045 14.3125 14.2573 14.3735 14.1487 14.4821C14.0402 14.5906 13.9792 14.7379 13.9792 14.8914V15.0906C13.9792 15.1666 13.9941 15.2419 14.0232 15.3122C14.0523 15.3824 14.095 15.4462 14.1487 15.5C14.2025 15.5537 14.2663 15.5964 14.3365 15.6255ZM14.5581 18.0458C14.482 18.0458 14.4068 18.0309 14.3365 18.0018C14.2663 17.9727 14.2025 17.93 14.1487 17.8763C14.095 17.8225 14.0523 17.7587 14.0232 17.6885C13.9941 17.6182 13.9792 17.5429 13.9792 17.4669V17.2677C13.9792 17.1142 14.0402 16.9669 14.1487 16.8584C14.2573 16.7498 14.4045 16.6888 14.5581 16.6888C14.7116 16.6888 14.8588 16.7498 14.9674 16.8584C15.076 16.9669 15.137 17.1142 15.137 17.2677V17.4669C15.137 17.6204 15.076 17.7677 14.9674 17.8763C14.8588 17.9848 14.7116 18.0458 14.5581 18.0458ZM23.6708 15.3016C23.6708 15.6224 23.4107 15.8825 23.09 15.8825C22.7692 15.8825 22.5091 15.6224 22.5091 15.3016C22.5091 14.9808 22.7692 14.7207 23.09 14.7207C23.4107 14.7207 23.6708 14.9808 23.6708 15.3016Z'
				fill='#676671'
			/>
		</svg>
	);
};
