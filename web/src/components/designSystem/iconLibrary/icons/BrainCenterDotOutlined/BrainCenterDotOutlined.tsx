// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const BrainCenterDotOutlined = ({
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
			viewBox='0 0 34 34'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='BrainCenterDotOutlined-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'BrainCenterDotOutlined'}</title>
			<path
				d='M3.12618 24.8244L3.61008 24.9502L3.66179 24.7514L3.55874 24.5736L3.12618 24.8244ZM1 33L0.516096 32.8741L0.298532 33.7107L1.13219 33.4822L1 33ZM9.16082 30.7629L9.40498 30.3266L9.22621 30.2265L9.02864 30.2807L9.16082 30.7629ZM32.5 16.8994C32.5 25.4012 25.5634 32.2987 17 32.2987V33.2987C26.1097 33.2987 33.5 25.9594 33.5 16.8994H32.5ZM17 1.5C25.5634 1.5 32.5 8.3975 32.5 16.8994H33.5C33.5 7.83928 26.1097 0.5 17 0.5V1.5ZM1.5 16.8994C1.5 8.3975 8.43661 1.5 17 1.5V0.5C7.89028 0.5 0.5 7.83928 0.5 16.8994H1.5ZM3.55874 24.5736C2.24917 22.3146 1.5 19.6946 1.5 16.8994H0.5C0.5 19.8757 1.2982 22.6681 2.69361 25.0751L3.55874 24.5736ZM1.4839 33.1258L3.61008 24.9502L2.64227 24.6985L0.516096 32.8741L1.4839 33.1258ZM9.02864 30.2807L0.867813 32.5178L1.13219 33.4822L9.29301 31.2451L9.02864 30.2807ZM17 32.2987C14.2394 32.2987 11.6489 31.5822 9.40498 30.3266L8.91667 31.1992C11.3061 32.5363 14.0643 33.2987 17 33.2987V32.2987Z'
				fill='#676671'
			/>
			<ellipse
				cx='17.4827'
				cy='16.9679'
				rx='1.72414'
				ry='1.71329'
				fill='#B4E8E8'
			/>
			<path
				d='M13.7887 26.5333V18.9141C14.2387 18.7837 14.569 18.3694 14.569 17.879C14.569 17.2842 14.084 16.8003 13.4879 16.8003C12.8918 16.8003 12.4068 17.2842 12.4068 17.879C12.4068 18.3945 12.7716 18.8264 13.2571 18.9322V22.8268L10.3221 19.8983L8.73865 18.3118C8.82683 18.1557 8.87773 17.976 8.87773 17.7842C8.87773 17.1894 8.39273 16.7055 7.79662 16.7055C7.20051 16.7055 6.7155 17.1894 6.7155 17.7842C6.7155 18.379 7.20051 18.8628 7.79662 18.8628C8.00825 18.8628 8.20553 18.801 8.37232 18.6954L9.57764 19.8983H7.80291C6.76791 19.8983 5.92565 19.0582 5.92565 18.0253V16.6C5.92565 15.5671 6.76766 14.727 7.80291 14.727H10.8396C10.9503 15.2053 11.3796 15.5633 11.8923 15.5633C12.4884 15.5633 12.9734 15.0794 12.9734 14.4846C12.9734 13.8899 12.4884 13.406 11.8923 13.406C11.3962 13.406 10.9782 13.7413 10.8515 14.1966H8.42598V12.5498C8.42598 12.2449 8.5449 11.9583 8.76107 11.7426L10.078 10.4287C10.2942 10.213 10.5817 10.0944 10.887 10.0944H12.2564L13.4627 11.298C13.3599 11.4631 13.2994 11.6569 13.2994 11.8651C13.2994 12.4598 13.7844 12.9437 14.3805 12.9437C14.9766 12.9437 15.4616 12.4598 15.4616 11.8651C15.4616 11.2703 14.9766 10.7864 14.3805 10.7864C14.1855 10.7864 14.0029 10.8389 13.8449 10.9294L13.0079 10.0944H18.454C18.5634 10.7967 19.1718 11.3367 19.906 11.3367C20.7173 11.3367 21.3771 10.6783 21.3771 9.86889C21.3771 9.05946 20.7173 8.40111 19.906 8.40111C19.1995 8.40111 18.6082 8.90059 18.4671 9.56422H14.8905L16.023 8.43429C16.3319 8.12611 16.7425 7.95643 17.1794 7.95643H22.0894C22.5263 7.95643 22.937 8.12611 23.2458 8.43429L26.1019 11.2841C25.9926 11.4516 25.9283 11.6509 25.9283 11.8651C25.9283 12.4533 26.408 12.9319 26.9976 12.9319C27.5872 12.9319 28.0669 12.4533 28.0669 11.8651C28.0669 11.2768 27.5872 10.7982 26.9976 10.7982C26.8152 10.7982 26.6436 10.8442 26.4932 10.9249L23.6212 8.05924C23.2118 7.65076 22.6679 7.42603 22.0891 7.42603H17.1792C16.6005 7.42603 16.0562 7.65076 15.6468 8.05924L14.1387 9.56422H10.887C10.4396 9.56422 10.0188 9.73818 9.7021 10.0539L8.38517 11.3678C8.06872 11.6836 7.89437 12.1034 7.89437 12.5501V14.1968H7.80291C6.47464 14.1968 5.39429 15.275 5.39429 16.6V18.0253C5.39429 19.3503 6.47489 20.4284 7.80291 20.4284H10.1022L13.2573 23.5761V26.5351C12.798 26.6547 12.4574 27.071 12.4574 27.5665C12.4574 28.1547 12.9371 28.6333 13.5267 28.6333C14.1162 28.6333 14.5959 28.1547 14.5959 27.5665C14.5959 27.0687 14.2518 26.6505 13.7887 26.5333ZM7.24712 17.7842C7.24712 17.4818 7.49377 17.2359 7.79662 17.2359C8.09946 17.2359 8.34612 17.4818 8.34612 17.7842C8.34612 18.0866 8.09946 18.3324 7.79662 18.3324C7.49377 18.3324 7.24712 18.0866 7.24712 17.7842ZM11.8923 13.9364C12.1954 13.9364 12.4418 14.1822 12.4418 14.4846C12.4418 14.787 12.1951 15.0329 11.8923 15.0329C11.5894 15.0329 11.3428 14.787 11.3428 14.4846C11.3428 14.1822 11.5892 13.9364 11.8923 13.9364ZM14.9303 11.8651C14.9303 12.1675 14.6836 12.4133 14.3805 12.4133C14.0774 12.4133 13.831 12.1675 13.831 11.8651C13.831 11.5627 14.0777 11.3166 14.3805 11.3166C14.6836 11.3168 14.9303 11.5627 14.9303 11.8651ZM19.906 8.93126C20.424 8.93126 20.8458 9.35181 20.8458 9.86889C20.8458 10.386 20.4243 10.8065 19.906 10.8065C19.3878 10.8065 18.9662 10.386 18.9662 9.86889C18.9662 9.35181 19.388 8.93126 19.906 8.93126ZM26.9976 11.3284C27.2942 11.3284 27.5355 11.5692 27.5355 11.8651C27.5355 12.1609 27.2942 12.4017 26.9976 12.4017C26.7011 12.4017 26.4597 12.1609 26.4597 11.8651C26.4597 11.5692 26.7011 11.3284 26.9976 11.3284ZM12.9381 17.8787C12.9381 17.5763 13.1848 17.3305 13.4876 17.3305C13.7905 17.3305 14.0371 17.5763 14.0371 17.8787C14.0371 18.1811 13.7905 18.427 13.4876 18.427C13.1848 18.427 12.9381 18.1811 12.9381 17.8787ZM13.5264 28.1032C13.2299 28.1032 12.9885 27.8623 12.9885 27.5665C12.9885 27.2706 13.2299 27.0298 13.5264 27.0298C13.823 27.0298 14.0643 27.2706 14.0643 27.5665C14.0643 27.8623 13.8232 28.1032 13.5264 28.1032ZM27.6297 15.6098L24.4922 12.4794C24.6139 12.305 24.686 12.0933 24.686 11.8651C24.686 11.2703 24.201 10.7864 23.6049 10.7864C23.0088 10.7864 22.5238 11.2703 22.5238 11.8651C22.5238 12.4598 23.0088 12.9437 23.6049 12.9437C23.7795 12.9437 23.9437 12.9012 24.0899 12.8276L27.2541 15.9846C27.4375 16.1676 27.5385 16.4107 27.5385 16.6696V17.148C27.5385 17.6819 27.1032 18.1165 26.5678 18.1165H26.1163L24.5242 16.5281C24.6263 16.3634 24.686 16.1704 24.686 15.9632C24.686 15.3685 24.201 14.8846 23.6049 14.8846C23.0088 14.8846 22.5238 15.3685 22.5238 15.9632C22.5238 16.558 23.0088 17.0419 23.6049 17.0419C23.8009 17.0419 23.9841 16.9888 24.1428 16.8976L25.3647 18.1168H21.2837V17.3327C21.2837 16.8114 21.0809 16.3202 20.7128 15.9502L18.3268 13.5518C18.4102 13.399 18.4576 13.2237 18.4576 13.0377C18.4576 12.443 17.9726 11.9591 17.3765 11.9591C16.7803 11.9591 16.2953 12.443 16.2953 13.0377C16.2953 13.6325 16.7803 14.1164 17.3765 14.1164C17.5936 14.1164 17.7957 14.0515 17.9653 13.9412L20.3353 16.3237C20.6042 16.5939 20.7521 16.9521 20.7521 17.3327V19.2284C20.7521 19.4031 20.6843 19.5617 20.5742 19.6811L18.9295 18.0401C19.1451 17.7329 19.2729 17.3601 19.2729 16.9577C19.2729 15.9145 18.422 15.0656 17.3765 15.0656C16.3309 15.0656 15.48 15.9145 15.48 16.9577C15.48 18.0009 16.3309 18.8498 17.3765 18.8498C17.8272 18.8498 18.2414 18.6914 18.5672 18.4285L20.0408 19.8988H16.6874C15.9746 19.8988 15.3949 20.4772 15.3949 21.1883V23.6752C14.9336 23.7936 14.5912 24.2109 14.5912 24.7073C14.5912 25.2955 15.0709 25.7742 15.6604 25.7742C16.25 25.7742 16.7297 25.2955 16.7297 24.7073C16.7297 24.2109 16.3873 23.7936 15.9262 23.6752V21.1883C15.9262 20.7695 16.2676 20.4289 16.6874 20.4289H20.0804C20.7437 20.4289 21.2837 19.8905 21.2837 19.2284V18.6472H26.5675C27.3957 18.6472 28.0696 17.975 28.0696 17.1485V16.6701C28.0696 16.2694 27.9134 15.8928 27.6297 15.6098ZM23.0551 11.8651C23.0551 11.5627 23.3018 11.3166 23.6049 11.3166C23.908 11.3166 24.1544 11.5627 24.1544 11.8651C24.1544 12.1675 23.9077 12.4133 23.6049 12.4133C23.3015 12.4136 23.0551 12.1675 23.0551 11.8651ZM23.0551 15.963C23.0551 15.6606 23.3018 15.4147 23.6049 15.4147C23.908 15.4147 24.1544 15.6606 24.1544 15.963C24.1544 16.2654 23.9077 16.5115 23.6049 16.5115C23.3015 16.5115 23.0551 16.2654 23.0551 15.963ZM17.3765 13.586C17.0734 13.586 16.827 13.3399 16.827 13.0375C16.827 12.7351 17.0736 12.4892 17.3765 12.4892C17.6795 12.4892 17.9262 12.7351 17.9262 13.0375C17.9262 13.3399 17.6795 13.586 17.3765 13.586ZM16.1983 24.7068C16.1983 25.0027 15.957 25.2435 15.6604 25.2435C15.3639 25.2435 15.1225 25.0027 15.1225 24.7068C15.1225 24.411 15.3639 24.1701 15.6604 24.1701C15.957 24.1701 16.1983 24.411 16.1983 24.7068ZM17.3765 18.3191C16.6239 18.3191 16.0114 17.7083 16.0114 16.9572C16.0114 16.2061 16.6236 15.5952 17.3765 15.5952C18.129 15.5952 18.7415 16.2061 18.7415 16.9572C18.7415 17.7083 18.1293 18.3191 17.3765 18.3191Z'
				fill='#676671'
			/>
		</svg>
	);
};