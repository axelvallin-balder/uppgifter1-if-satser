type UppgiftFn = () => Promise<void>;

const outputMock = jest.fn();
const inputMock = jest.fn();

const NOT_IMPLEMENTED = 'NOT_IMPLEMENTED';

(globalThis as typeof globalThis & { output: jest.Mock }).output = outputMock;
(globalThis as typeof globalThis & { input: jest.Mock }).input = inputMock;

const {
  uppgift1,
  uppgift2,
  uppgift3,
  uppgift4,
  uppgift5,
  uppgift6,
  uppgift7,
  uppgift8,
  uppgift9,
  uppgift10,
  uppgift11,
  uppgift12,
  uppgift13,
  uppgift14,
} = require('./app') as {
  uppgift1: UppgiftFn;
  uppgift2: UppgiftFn;
  uppgift3: UppgiftFn;
  uppgift4: UppgiftFn;
  uppgift5: UppgiftFn;
  uppgift6: UppgiftFn;
  uppgift7: UppgiftFn;
  uppgift8: UppgiftFn;
  uppgift9: UppgiftFn;
  uppgift10: UppgiftFn;
  uppgift11: UppgiftFn;
  uppgift12: UppgiftFn;
  uppgift13: UppgiftFn;
  uppgift14: UppgiftFn;
};

function hasNotImplementedMarker(fn: UppgiftFn): boolean {
  return fn.toString().includes(NOT_IMPLEMENTED);
}

function testWhenImplemented(
  name: string,
  fnUnderTest: UppgiftFn,
  fn: jest.ProvidesCallback,
) {
  if (hasNotImplementedMarker(fnUnderTest)) {
    test.todo(name);
    return;
  }

  test(name, fn);
}

beforeEach(() => {
  jest.clearAllMocks()
})

testWhenImplemented('[Uppgift 1] 17 är omyndig', uppgift1, async () => {
  inputMock.mockResolvedValue('17');

  await uppgift1();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Omyndig');
});

testWhenImplemented('[Uppgift 1] 18 är myndig', uppgift1, async () => {
  inputMock.mockResolvedValue('18');

  await uppgift1();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Myndig');
});

testWhenImplemented('[Uppgift 1] 99 är myndig', uppgift1, async () => {
  inputMock.mockResolvedValue('99');

  await uppgift1();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Myndig');
});

testWhenImplemented('[Uppgift 2] 202 är lång', uppgift2, async () => {
  inputMock.mockResolvedValue('202');

  await uppgift2();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Hej du långe!');
});

testWhenImplemented('[Uppgift 2] 199 är kort', uppgift2, async () => {
  inputMock.mockResolvedValue('199');

  await uppgift2();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Hej du korte!');
});

testWhenImplemented('[Uppgift 3] -32 är negativt', uppgift3, async () => {
  inputMock.mockResolvedValue('-32');

  await uppgift3();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Talet är negativt.');
});

testWhenImplemented('[Uppgift 3] 1 är positivt', uppgift3, async () => {
  inputMock.mockResolvedValue('1');

  await uppgift3();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Talet är positivt.');
});


testWhenImplemented('[Uppgift 3] Talet är 0', uppgift3, async () => {
  inputMock.mockResolvedValue(0);

  await uppgift3();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Talet är noll.');
});

testWhenImplemented('[Uppgift 4] x < y', uppgift4, async () => {
  inputMock
    .mockResolvedValueOnce('5')
    .mockResolvedValueOnce('7')

  await uppgift4();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('x < y');
});

testWhenImplemented('[Uppgift 4] x > y', uppgift4, async () => {
  inputMock
    .mockResolvedValueOnce('1')
    .mockResolvedValueOnce('-1')
  
  await uppgift4();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('x > y');
});

testWhenImplemented('[Uppgift 4] x = y', uppgift4, async () => {
  inputMock
    .mockResolvedValueOnce('0')
    .mockResolvedValueOnce('0')

  await uppgift4();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('x = y');
});


testWhenImplemented('[Uppgift 5] 34 + 75 = 109', uppgift5, async () => {
  inputMock
    .mockResolvedValueOnce('34')
    .mockResolvedValueOnce('75')
    .mockResolvedValueOnce('+')

  await uppgift5();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Summa: 109');
});


testWhenImplemented('[Uppgift 5] 10 - 7 = 3', uppgift5, async () => {
  inputMock
    .mockResolvedValueOnce('10')
    .mockResolvedValueOnce('7')
    .mockResolvedValueOnce('-')

  await uppgift5();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Differens: 3');
});

testWhenImplemented('[Uppgift 5] 9 * 9 = 81', uppgift5, async () => {
  inputMock
    .mockResolvedValueOnce('9')
    .mockResolvedValueOnce('9')
    .mockResolvedValueOnce('*')
  
  await uppgift5();
  
  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Produkt: 81');
});

testWhenImplemented('[Uppgift 5] 1 / 4 = 0.25', uppgift5, async () => {
  inputMock
    .mockResolvedValueOnce('1')
    .mockResolvedValueOnce('4')
    .mockResolvedValueOnce('/')

  await uppgift5();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Kvot: 0.25');
});

testWhenImplemented('[Uppgift 6] En 7:a', uppgift6, async () => {
  inputMock.mockResolvedValueOnce('7')

  await uppgift6();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('En 7:a');
});

testWhenImplemented('[Uppgift 6] Ett ess', uppgift6, async () => {
  inputMock.mockResolvedValueOnce('1')

  await uppgift6();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Ett ess');
});

testWhenImplemented('[Uppgift 6] En dam', uppgift6, async () => {
  inputMock.mockResolvedValueOnce('12')

  await uppgift6();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('En dam');
});

testWhenImplemented('[Uppgift 7] Oktober', uppgift7, async () => {
  inputMock.mockResolvedValueOnce('10')

  await uppgift7();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Oktober');
});

testWhenImplemented('[Uppgift 7] Januari', uppgift7, async () => {
  inputMock.mockResolvedValueOnce('1')

  await uppgift7();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Januari');
});

testWhenImplemented('[Uppgift 8] Höst', uppgift8, async () => {
  inputMock.mockResolvedValueOnce('10')

  await uppgift8();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Höst');
});

testWhenImplemented('[Uppgift 8] Vinter', uppgift8, async () => {
  inputMock.mockResolvedValueOnce('1')

  await uppgift8();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Vinter');
});

testWhenImplemented('[Uppgift 9] 11 * 12 = 130?', uppgift9, async () => {
  inputMock
    .mockResolvedValueOnce('11')
    .mockResolvedValueOnce('12')
    .mockResolvedValueOnce('130')

  await uppgift9();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Fel. Rätt svar: 132');
});

testWhenImplemented('[Uppgift 9] 13 * 13 = 169?', uppgift9, async () => {
  inputMock
    .mockResolvedValueOnce('13')
    .mockResolvedValueOnce('13')
    .mockResolvedValueOnce('169')

  await uppgift9();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Rätt!');
});

testWhenImplemented('[Uppgift 10] 4 och 7', uppgift10, async () => {
  inputMock
    .mockResolvedValueOnce('4')
    .mockResolvedValueOnce('7')

  await uppgift10();

  expect(outputMock).toHaveBeenCalledTimes(4);
  expect(outputMock).toHaveBeenCalledWith('Summa: 11');
  expect(outputMock).toHaveBeenCalledWith('Medel: 5.5');
  expect(outputMock).toHaveBeenCalledWith('Minsta: 4');
  expect(outputMock).toHaveBeenCalledWith('Största: 7');
});

testWhenImplemented('[Uppgift 11] 5, 10 och 7', uppgift11, async () => {
  inputMock
    .mockResolvedValueOnce('5')
    .mockResolvedValueOnce('10')
    .mockResolvedValueOnce('7')

  await uppgift11();

  expect(outputMock).toHaveBeenCalledTimes(4);
  expect(outputMock).toHaveBeenCalledWith('Summa: 22');
  expect(outputMock).toHaveBeenCalledWith(expect.stringMatching(/^Medel: 7\.3+$/));
  expect(outputMock).toHaveBeenCalledWith('Minsta: 5');
  expect(outputMock).toHaveBeenCalledWith('Största: 10');
});

testWhenImplemented('[Uppgift 12] B', uppgift12, async () => {
  inputMock
    .mockResolvedValueOnce('B')

  await uppgift12();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Stor bokstav');
});

testWhenImplemented('[Uppgift 12] p', uppgift12, async () => {
  inputMock
    .mockResolvedValueOnce('p')

  await uppgift12();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Liten bokstav');
});

testWhenImplemented('[Uppgift 12] !', uppgift12, async () => {
  inputMock
    .mockResolvedValueOnce('!')

  await uppgift12();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Annat tecken');
});

testWhenImplemented('[Uppgift 13] 32', uppgift13, async () => {
  inputMock
    .mockResolvedValueOnce('32')

  await uppgift13();

  expect(outputMock).toHaveBeenCalledTimes(2);
  expect(outputMock).toHaveBeenCalledWith('Två siffror');
  expect(outputMock).toHaveBeenCalledWith('Positivt');
});

testWhenImplemented('[Uppgift 13] -100', uppgift13, async () => {
  inputMock
    .mockResolvedValueOnce('-100')

  await uppgift13();

  expect(outputMock).toHaveBeenCalledTimes(2);
  expect(outputMock).toHaveBeenCalledWith('Tre siffror');
  expect(outputMock).toHaveBeenCalledWith('Negativt');
});

testWhenImplemented('[Uppgift 13] 0', uppgift13, async () => {
  inputMock
    .mockResolvedValueOnce('0')

  await uppgift13();

  expect(outputMock).toHaveBeenCalledTimes(2);
  expect(outputMock).toHaveBeenCalledWith('En siffra');
  expect(outputMock).toHaveBeenCalledWith('Noll');
});

testWhenImplemented('[Uppgift 14] Sidlängder 5, 10 och 4', uppgift14, async () => {
  inputMock
    .mockResolvedValueOnce('5')
    .mockResolvedValueOnce('10')
    .mockResolvedValueOnce('4')

  await uppgift14();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Triangel? Nej!');
});

testWhenImplemented('[Uppgift 14] Sidlängder 5, 6 och 7', uppgift14, async () => {
  inputMock
    .mockResolvedValueOnce('5')
    .mockResolvedValueOnce('6')
    .mockResolvedValueOnce('7')

  await uppgift14();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Triangel? Ja!');
});