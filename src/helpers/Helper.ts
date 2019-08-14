export default class Helper {
	static groupBy = (items, key) => items.reduce(
		(result, item) => ({
			...result,
			[item[key]]: [ ...(result[item[key]] || []), item ]
		}),
		{}
	)

	static objectToCamelCase = (obj: any) =>
		Object.keys(obj).reduce((c: any, k) =>
			(c[k[0].toLowerCase() + k.substring(1)] = obj[k], c), {})

	static objectKeysToArray = (array: any[]) =>
		Object.getOwnPropertyNames(array).map(c => array[c][0])

	static orderArrayObjectProp = (array, prop) =>
		array.sort((a, b) => {
			if (a[prop] > b[prop]) return 1
			else if (a[prop] < b[prop]) return -1
			else return 0
		})
}
