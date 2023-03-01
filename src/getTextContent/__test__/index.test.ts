import { getTextContent } from '../index'

const table = [
	{
		json: "全款拿下一线城市大房子，感谢那个努力不放弃的自己@MVE<front class='wd-text-primary'>护肤</front>",
		expected: '全款拿下一线城市大房子，感谢那个努力不放弃的自己@MVE护肤'
	},
	{
		json: "<front class='wd-text-primary'>护肤</front>分享｜学上党晚间<front class='wd-text-primary'>护肤</front>",
		expected: '护肤分享｜学上党晚间护肤'
	},
	{
		json: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body></body></html>',
		expected: 'Document'
	},
	{
		json: 0,
		expected: 0
	}
]

describe('getTextContent', () =>
	test.concurrent.each(table)(
		'expected only return text',
		({ json, expected }) => {
			expect(getTextContent(json as any)).toBe(expected)
		}
	))
