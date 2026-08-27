import {uppgift1} from "./app"

jest.mock('./balder.ts', () => ({
    write: jest.fn(),
  }));

it('should do something', () => {
    write.mockReturnValue();
    uppgift1()

    expect(write).toHaveBeenCalledTimes(1);
});