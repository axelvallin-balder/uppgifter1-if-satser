import { uppgift1 } from './app';

const outputMock = jest.fn();
const inputMock = jest.fn();

(globalThis as typeof globalThis & { output: jest.Mock }).output = outputMock;
(globalThis as typeof globalThis & { input: jest.Mock }).input = inputMock;

test('17 är omyndig', () => {
  let promise = new Promise((resolve) => {
    resolve('17')
  })
  inputMock.mockReturnValue(promise);
  uppgift1().then(() => {
    expect(outputMock).toHaveBeenCalledTimes(1);
    expect(outputMock).toHaveBeenCalledWith('Omyndig');
  });
});

test('18 är myndig', () => {
  let promise = new Promise((resolve) => {
    resolve('18')
  })
  inputMock.mockReturnValue(promise);
  uppgift1().then(() => {
    expect(outputMock).toHaveBeenCalledTimes(1);
    expect(outputMock).toHaveBeenCalledWith('Myndig');
  });
  jest.clearAllMocks()
});

test('99 är myndig', () => {
  let promise = new Promise((resolve) => {
    resolve('18')
  })
  inputMock.mockReturnValue(promise);
  uppgift1().then(() => {
    expect(outputMock).toHaveBeenCalledTimes(1);
    expect(outputMock).toHaveBeenCalledWith('Myndig');
  });
  jest.clearAllMocks()
});
