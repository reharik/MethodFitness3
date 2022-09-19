// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const TestGears = ({
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
			viewBox='0 0 13 12'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='TestGears-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'TestGears'}</title>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M11.585 3.31038H12.195L12.195 3.31038C12.3635 3.31038 12.5 3.44699 12.5 3.61557V5.01738C12.5 5.18597 12.3635 5.32258 12.195 5.32258H11.585C11.5058 5.32231 11.4284 5.34629 11.3633 5.39143C11.2982 5.43657 11.2485 5.50061 11.221 5.57491C11.2213 5.58172 11.2213 5.58845 11.221 5.59526C11.1942 5.66347 11.1873 5.73786 11.2009 5.8099C11.2146 5.88192 11.2484 5.94859 11.2983 6.00219L11.7314 6.43765C11.8503 6.55672 11.8503 6.74984 11.7314 6.86892L10.7411 7.8598C10.622 7.97879 10.4291 7.97879 10.31 7.8598L9.87694 7.42643C9.81012 7.37166 9.76973 7.29109 9.76564 7.20471C9.76165 7.11842 9.79433 7.0344 9.85569 6.97363C9.91706 6.91278 10.0013 6.8809 10.0875 6.88571C10.1738 6.89061 10.2538 6.93185 10.308 6.99916L10.5256 7.22297L11.0909 6.64918L10.8733 6.43145C10.7353 6.28984 10.6424 6.11045 10.6061 5.91598C10.57 5.72161 10.5922 5.52078 10.67 5.33893V5.32258C10.7451 5.14172 10.8721 4.98732 11.035 4.87868C11.1978 4.76996 11.3893 4.71209 11.585 4.71218L11.89 4.71228V3.92077H11.5606C11.3652 3.92022 11.1744 3.862 11.012 3.75345C10.8496 3.64481 10.7229 3.49067 10.6476 3.31037V3.28793C10.5696 3.10619 10.5472 2.90526 10.5834 2.71079C10.6196 2.51623 10.7127 2.33684 10.851 2.19541L11.0686 1.97768L10.5094 1.41817L10.2918 1.6359C10.1502 1.77396 9.97091 1.86697 9.77664 1.90312C9.5823 1.93936 9.38159 1.91711 9.19986 1.83935H9.19977L9.17744 1.82918C8.99725 1.75387 8.84319 1.62698 8.73463 1.46448C8.62615 1.30199 8.56796 1.11106 8.56742 0.915593L8.56751 0.610397H7.77649V0.921685C7.77658 1.11752 7.71875 1.30909 7.61019 1.47204C7.50161 1.63499 7.3472 1.76206 7.16647 1.83727H7.15022C6.96849 1.91512 6.76779 1.93737 6.57343 1.90113C6.37909 1.86489 6.1998 1.77188 6.05828 1.63381L5.84069 1.41609L5.28152 1.9756L5.50928 2.19333C5.6212 2.31357 5.61794 2.50096 5.50174 2.61723C5.38562 2.7334 5.19836 2.73676 5.07817 2.62468L4.64101 2.19131C4.58336 2.13436 4.55096 2.0567 4.55096 1.97559C4.55096 1.89456 4.58336 1.8169 4.64101 1.75995L5.63127 0.769069C5.75246 0.655347 5.9411 0.655347 6.06237 0.769069L6.50154 1.20244C6.55673 1.25194 6.625 1.28446 6.69816 1.29636C6.77124 1.30826 6.84631 1.29899 6.9143 1.26965H6.93463C7.00616 1.24177 7.0678 1.19317 7.11155 1.13014C7.1554 1.0671 7.17946 0.992342 7.18073 0.915589V0.305196C7.18073 0.136612 7.31725 0 7.48573 0H8.88668C9.05516 0 9.19168 0.136612 9.19168 0.305196V0.915589C9.19087 0.994158 9.21402 1.071 9.25795 1.13613C9.30189 1.20117 9.36462 1.2513 9.43778 1.27983H9.45603C9.5261 1.30935 9.60326 1.3177 9.67807 1.30399C9.75277 1.29027 9.82195 1.25494 9.87696 1.20244L10.3101 0.769071C10.4313 0.65535 10.62 0.65535 10.7412 0.769071L11.7416 1.75995C11.8605 1.87912 11.8605 2.07215 11.7416 2.19132L11.3085 2.62469C11.256 2.67973 11.2207 2.74895 11.207 2.8237C11.1933 2.89855 11.2017 2.97575 11.2312 3.04588V3.06413C11.259 3.13571 11.3076 3.19739 11.3706 3.24126C11.4336 3.28504 11.5083 3.30911 11.585 3.31038ZM8.21069 2.37766C7.74434 2.37895 7.29433 2.5535 6.94487 2.86867C6.88512 2.92315 6.84901 2.99974 6.84442 3.08138C6.83993 3.16311 6.86733 3.24327 6.9207 3.30427C7.03183 3.43141 7.22283 3.44241 7.34735 3.32895C7.68828 3.05395 8.1399 2.9682 8.55487 3.09954C8.96983 3.23099 9.29469 3.56267 9.42343 3.98636C9.55208 4.41004 9.46808 4.87115 9.19875 5.21924C9.08861 5.34665 9.0993 5.54092 9.22292 5.65485C9.3477 5.76731 9.53797 5.7563 9.64956 5.63018C9.97757 5.25081 10.1493 4.75659 10.1289 4.25091C10.1086 3.74532 9.8976 3.26723 9.54014 2.91658C9.18267 2.56599 8.70634 2.36999 8.2107 2.36943L8.21069 2.37766ZM8.83942 6.66998H8.22817C8.12384 6.66716 8.02451 6.62432 7.95074 6.55046C7.87697 6.47651 7.8344 6.37709 7.83186 6.27266C7.82922 6.16833 7.86678 6.06691 7.93682 5.98941L8.3708 5.55544C8.42856 5.49841 8.46103 5.42064 8.46103 5.33941C8.46103 5.25828 8.42856 5.18051 8.3708 5.12348L7.37853 4.13121C7.3215 4.07345 7.24372 4.04097 7.16259 4.04097C7.08145 4.04097 7.00368 4.07345 6.94665 4.13121L6.51058 4.56318C6.45309 4.61757 6.3806 4.65341 6.30247 4.66614C6.22442 4.67888 6.14429 4.66778 6.07252 4.63449C6.00066 4.60666 5.93863 4.55808 5.89433 4.49496C5.85013 4.43183 5.82557 4.35706 5.82393 4.27993V3.66868C5.82393 3.49995 5.68713 3.36306 5.51831 3.36306H4.12063C3.95181 3.36306 3.81501 3.49995 3.81501 3.66868V4.27993C3.81155 4.38499 3.76761 4.48468 3.69239 4.55807C3.61717 4.63148 3.51648 4.67305 3.41143 4.67396C3.30628 4.67496 3.20486 4.63521 3.12837 4.56317L2.69439 4.1292C2.57287 4.01532 2.38385 4.01532 2.26242 4.1292L1.27015 5.11739C1.21239 5.17442 1.17992 5.25219 1.17992 5.33333C1.17992 5.41446 1.21239 5.49232 1.27015 5.54936L1.70412 5.98941C1.75715 6.04553 1.79254 6.11602 1.80591 6.19206C1.81928 6.26811 1.81018 6.34642 1.77953 6.41728C1.7516 6.49105 1.70203 6.55463 1.63727 6.59974C1.5726 6.64486 1.49573 6.66933 1.41687 6.66996H0.805624C0.636803 6.66996 0.5 6.80677 0.5 6.97559V8.37936C0.5 8.54818 0.636803 8.68499 0.805624 8.68499H1.41687C1.5222 8.68799 1.62217 8.73156 1.69602 8.80669C1.76988 8.88182 1.81172 8.98261 1.8129 9.08793C1.814 9.19326 1.77434 9.29496 1.70212 9.37165L1.27014 9.80562C1.21238 9.86265 1.17991 9.94042 1.17991 10.0216C1.17991 10.1028 1.21238 10.1806 1.27014 10.2376L2.26241 11.2299C2.31945 11.2876 2.39722 11.3201 2.47835 11.3201C2.55958 11.3201 2.63735 11.2876 2.69438 11.2299L3.12836 10.7959C3.18666 10.7429 3.25906 10.708 3.33683 10.6953C3.4146 10.6826 3.49428 10.6928 3.56642 10.7246C3.63882 10.7529 3.70104 10.8021 3.74533 10.8659C3.78963 10.9299 3.81383 11.0055 3.81501 11.0831V11.6944C3.81501 11.8632 3.95181 12 4.12063 12H5.52441C5.69323 12 5.83004 11.8632 5.83004 11.6944V11.0831C5.83386 10.9793 5.87733 10.8807 5.95138 10.8077C6.02551 10.7348 6.12465 10.6929 6.22862 10.6907C6.33258 10.6885 6.43346 10.7261 6.51058 10.7959L6.94456 11.2299C7.00159 11.2876 7.07936 11.3201 7.16058 11.3201C7.24172 11.3201 7.31949 11.2876 7.37652 11.2299L8.36879 10.2376C8.48795 10.1182 8.48795 9.92495 8.36879 9.80562L7.93682 9.37164C7.88243 9.31415 7.84659 9.24166 7.83385 9.16353C7.82112 9.08548 7.83222 9.00535 7.86551 8.93358C7.89334 8.86172 7.94191 8.79969 8.00504 8.75539C8.06817 8.71119 8.14294 8.68663 8.22007 8.68499H8.83132C9.00005 8.68499 9.13694 8.54819 9.13694 8.37937V6.97559C9.13694 6.80987 9.00505 6.67432 8.83942 6.66997L8.83942 6.66998ZM4.82145 9.62236C4.30536 9.62235 3.81027 9.41724 3.44534 9.05224C3.08041 8.68721 2.87547 8.19211 2.87565 7.67594C2.87584 7.15974 3.08113 6.66474 3.44634 6.29999C3.81155 5.93515 4.30672 5.7304 4.82282 5.73078C5.33902 5.73114 5.83394 5.93662 6.19859 6.3019C6.56324 6.66721 6.76781 7.16247 6.76727 7.67866C6.76673 8.19432 6.56152 8.68877 6.19668 9.05324C5.83184 9.41761 5.33721 9.62236 4.82145 9.62236Z'
				fill='#936F00'
			/>
		</svg>
	);
};
