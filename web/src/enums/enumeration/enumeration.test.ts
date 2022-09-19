import { arrayHelper, enumeration } from './enumeration';
import { BaseEnum } from './types';

const testEnum1 = {
	test1: {
		value: 'test1',
	},
	test2: {
		value: 'test2',
	},
};

const testEnum2 = {
	key1: {
		value: 'value1',
		display: 'displayMe!',
	},
	key2: {
		value: 'value2',
		display: 'displayMeToo',
	},
};

const testEnum3 = {
	key1: {
		value: 'value1',
		display: 'displayMe!',
		currencyType: 'USD',
		lovelyFunc: (someProp: string) => {
			return `I'm a lovely func prop! ${someProp}`;
		},
	},
	key2: {
		value: 'value2',
		display: 'displayMeToo',
		currencyType: 'EURO',
		lovelyFunc: (someProp: string) => {
			return `I'm NOT a lovely func prop! ${someProp}`;
		},
	},
};

const testEnum4 = ['HiMom', 'HiSweetie'] as const;
type TTestEnum4 = Record<typeof testEnum4[number], BaseEnum>;

type CustomBaseEnum = BaseEnum & {
	currencyType: string;
	lovelyFunc: (someProp: string) => string;
};
type TTestEnum1 = {
	[property in keyof typeof testEnum1]: BaseEnum;
};
type TTestEnum2 = {
	[property in keyof typeof testEnum2]: BaseEnum;
};
type TTestEnum3 = {
	[property in keyof typeof testEnum3]: CustomBaseEnum;
};
describe('ENUMERATIONS', () => {
	describe('When calling enumeration with basic object', () => {
		it('should return enumeration with proper value', () => {
			const result = enumeration<TTestEnum1>({ input: testEnum1 });
			expect(result.test1.value).toEqual('test1');
			expect(result.test2.value).toEqual('test2');
		});
		it('should return enumeration with all properties', () => {
			const result = enumeration<TTestEnum1>({ input: testEnum1 });
			expect(result.test1.key).toEqual('test1');
			expect(result.test1.value).toEqual('test1');
			expect(result.test1.display).toEqual('test1');
			expect(result.test1.index).toEqual(0);
		});
	});
	describe('When calling enumeration with various properties set on object', () => {
		it('should have the specified prop values on enumeration', () => {
			const result = enumeration<TTestEnum2>({ input: testEnum2 });
			expect(result.key1.key).toEqual('key1');
			expect(result.key1.value).toEqual('value1');
			expect(result.key1.display).toEqual('displayMe!');
		});
	});
	describe('When calling fromValue', () => {
		it('should retrieve proper enum item', () => {
			const testEnum = enumeration<TTestEnum2>({ input: testEnum2 });
			const result = testEnum.fromValue('value2');
			expect(result?.key).toEqual('key2');
			expect(result?.value).toEqual('value2');
			expect(result?.display).toEqual('displayMeToo');
		});
	});
	describe('When calling fromDisplay', () => {
		it('should retrieve proper enum item', () => {
			const testEnum = enumeration<TTestEnum2>({ input: testEnum2 });
			const result = testEnum.fromDisplay('displayMeToo');
			expect(result?.key).toEqual('key2');
			expect(result?.value).toEqual('value2');
			expect(result?.display).toEqual('displayMeToo');
		});
	});
	describe('When calling toOptions', () => {
		it('should return proper dropdownoptions', () => {
			const testEnum = enumeration<TTestEnum2>({ input: testEnum2 });
			const result = testEnum.toOptions();
			expect(result).toHaveLength(2);
			expect(result[1]?.value).toEqual('value2');
			expect(result[1]?.display).toEqual('displayMeToo');
		});
	});
	describe('When calling toValues', () => {
		it('should return array of all the values', () => {
			const testEnum = enumeration<TTestEnum2>({ input: testEnum2 });
			const result = testEnum.toValues();
			expect(result).toHaveLength(2);
			expect(result[0]).toEqual('value1');
			expect(result[1]).toEqual('value2');
		});
	});
	describe('When calling toKeys', () => {
		it('should return array of all the keys', () => {
			const testEnum = enumeration<TTestEnum2>({ input: testEnum2 });
			const result = testEnum.toKeys();
			expect(result).toHaveLength(2);
			expect(result[0]).toEqual('key1');
			expect(result[1]).toEqual('key2');
		});
	});
	describe('When calling toEnumItems', () => {
		it('should return array of all the EnumItems', () => {
			const testEnum = enumeration<TTestEnum2>({ input: testEnum2 });
			const result = testEnum.toEnumItems();
			expect(result).toHaveLength(2);
			expect(result[0].key).toEqual('key1');
			expect(result[0].value).toEqual('value1');
			expect(result[0].display).toEqual('displayMe!');
			expect(result[1].key).toEqual('key2');
			expect(result[1].value).toEqual('value2');
			expect(result[1].display).toEqual('displayMeToo');
		});
	});
	describe('When calling enumeration with custom properties set on object', () => {
		it('should have the specified custom prop values on enumeration', () => {
			const result = enumeration<TTestEnum3, CustomBaseEnum>({
				input: testEnum3,
			});
			expect(result.key1.key).toEqual('key1');
			expect(result.key1.value).toEqual('value1');
			expect(result.key1.display).toEqual('displayMe!');
			expect(result.key1.currencyType).toEqual('USD');
			expect(result.key1.lovelyFunc('Hi Mom!')).toEqual(
				"I'm a lovely func prop! Hi Mom!"
			);
			expect(result.key2.key).toEqual('key2');
			expect(result.key2.value).toEqual('value2');
			expect(result.key2.display).toEqual('displayMeToo');
			expect(result.key2.currencyType).toEqual('EURO');
			expect(result.key2.lovelyFunc('Hi Mom!')).toEqual(
				"I'm NOT a lovely func prop! Hi Mom!"
			);
		});
	});
	describe('When calling arrayHelper', () => {
		it('should return an object with key and object value of array values', () => {
			const result = arrayHelper(testEnum4);
			expect(result.HiMom.value).toEqual('HiMom');
			expect(result.HiSweetie.value).toEqual('HiSweetie');
		});
	});
	describe('When calling enum with arrayHelper', () => {
		it('should return a valid enumeration', () => {
			const result = enumeration<TTestEnum4>({
				input: arrayHelper(testEnum4),
			});
			expect(result.HiMom.value).toEqual('HiMom');
			expect(result.HiMom.display).toEqual('HiMom');
			expect(result.HiSweetie.value).toEqual('HiSweetie');
			expect(result.HiSweetie.display).toEqual('HiSweetie');
		});
	});
});
