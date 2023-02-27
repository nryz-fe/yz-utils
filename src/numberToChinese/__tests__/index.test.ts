import { numberToChinese } from '../index'
test('35000', () => {
	expect(numberToChinese(35000)).toStrictEqual('叁万伍仟元整')
})
