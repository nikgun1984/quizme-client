import {formatDate} from '../../utilities/getCorrectDate';

describe("check for correct date to return", function () {
	test("convert a date", function () {
		const date = formatDate("Fri Jun 25 2021 13:44:45 GMT-0400 (Eastern Daylight Time)");
		expect(date).toEqual("2021-06-25");
	});
});