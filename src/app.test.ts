import { 
  uppgift1, uppgift10, uppgift11, uppgift12, uppgift13, uppgift14, uppgift2, uppgift3, uppgift4, uppgift5,
  uppgift6,
  uppgift7,
  uppgift8,
  uppgift9
 } from './app';

const outputMock = jest.fn();
const inputMock = jest.fn();

(globalThis as typeof globalThis & { output: jest.Mock }).output = outputMock;
(globalThis as typeof globalThis & { input: jest.Mock }).input = inputMock;

beforeEach(() => {
  jest.clearAllMocks()
})

test('[Uppgift 1] 17 är omyndig', async () => {
  inputMock.mockResolvedValue('17');

  await uppgift1();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Omyndig');
});

test('[Uppgift 1] 18 är myndig', async () => {
  inputMock.mockResolvedValue('18');

  await uppgift1();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Myndig');
});

test('[Uppgift 1] 99 är myndig', async () => {
  inputMock.mockResolvedValue('99');

  await uppgift1();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Myndig');
});

test('[Uppgift 2] 202 är lång', async () => {
  inputMock.mockResolvedValue('202');

  await uppgift2();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Hej du långe!');
});

test('[Uppgift 2] 199 är kort', async () => {
  inputMock.mockResolvedValue('199');

  await uppgift2();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Hej du korte!');
});

test('[Uppgift 3] -32 är negativt', async () => {
  inputMock.mockResolvedValue('-32');

  await uppgift3();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Talet är negativt.');
});

test('[Uppgift 3] 1 är positivt', async () => {
  inputMock.mockResolvedValue('1');

  await uppgift3();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Talet är positivt.');
});


test('[Uppgift 3] Talet är 0', async () => {
  inputMock.mockResolvedValue(0);

  await uppgift3();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Talet är noll.');
});

test('[Uppgift 4] x < y', async () => {
  inputMock
    .mockResolvedValueOnce('5')
    .mockResolvedValueOnce('7')

  await uppgift4();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('x < y');
});

test('[Uppgift 4] x > y', async () => {
  inputMock
    .mockResolvedValueOnce('1')
    .mockResolvedValueOnce('-1')
  
  await uppgift4();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('x > y');
});

test('[Uppgift 4] x = y', async () => {
  inputMock
    .mockResolvedValueOnce('0')
    .mockResolvedValueOnce('0')

  await uppgift4();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('x = y');
});


test('[Uppgift 5] 34 + 75 = 109', async () => {
  inputMock
    .mockResolvedValueOnce('34')
    .mockResolvedValueOnce('75')
    .mockResolvedValueOnce('+')

  await uppgift5();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Summa: 109');
});


test('[Uppgift 5] 10 - 7 = 3', async () => {
  inputMock
    .mockResolvedValueOnce('10')
    .mockResolvedValueOnce('7')
    .mockResolvedValueOnce('-')

  await uppgift5();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Differens: 3');
});

test('[Uppgift 5] 9 * 9 = 81', async () => {
  inputMock
    .mockResolvedValueOnce('9')
    .mockResolvedValueOnce('9')
    .mockResolvedValueOnce('*')
  
  await uppgift5();
  
  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Produkt: 81');
});

test('[Uppgift 5] 1 / 4 = 0.25', async () => {
  inputMock
    .mockResolvedValueOnce('1')
    .mockResolvedValueOnce('4')
    .mockResolvedValueOnce('/')

  await uppgift5();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Kvot: 0.25');
});

test('[Uppgift 6] En 7:a', async () => {
  inputMock.mockResolvedValueOnce('7')

  await uppgift6();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('En 7:a');
});

test('[Uppgift 6] Ett ess', async () => {
  inputMock.mockResolvedValueOnce('1')

  await uppgift6();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Ett ess');
});

test('[Uppgift 6] En dam', async () => {
  inputMock.mockResolvedValueOnce('12')

  await uppgift6();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('En dam');
});

test('[Uppgift 7] Oktober', async () => {
  inputMock.mockResolvedValueOnce('10')

  await uppgift7();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Oktober');
});

test('[Uppgift 7] Januari', async () => {
  inputMock.mockResolvedValueOnce('1')

  await uppgift7();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Januari');
});

test('[Uppgift 8] Höst', async () => {
  inputMock.mockResolvedValueOnce('10')

  await uppgift8();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Höst');
});

test('[Uppgift 8] Vinter', async () => {
  inputMock.mockResolvedValueOnce('1')

  await uppgift8();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Vinter');
});

test('[Uppgift 9] 11 * 12 = 130?', async () => {
  inputMock
    .mockResolvedValueOnce('11')
    .mockResolvedValueOnce('12')
    .mockResolvedValueOnce('130')

  await uppgift9();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Fel. Rätt svar: 132');
});

test('[Uppgift 9] 13 * 13 = 169?', async () => {
  inputMock
    .mockResolvedValueOnce('13')
    .mockResolvedValueOnce('13')
    .mockResolvedValueOnce('169')

  await uppgift9();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Rätt!');
});

test('[Uppgift 10] 4 och 7', async () => {
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

test('[Uppgift 11] 5, 10 och 7', async () => {
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

test('[Uppgift 12] B', async () => {
  inputMock
    .mockResolvedValueOnce('B')

  await uppgift12();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Stor bokstav');
});

test('[Uppgift 12] p', async () => {
  inputMock
    .mockResolvedValueOnce('p')

  await uppgift12();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Liten bokstav');
});

test('[Uppgift 12] !', async () => {
  inputMock
    .mockResolvedValueOnce('!')

  await uppgift12();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Annat tecken');
});

test('[Uppgift 13] 32', async () => {
  inputMock
    .mockResolvedValueOnce('32')

  await uppgift13();

  expect(outputMock).toHaveBeenCalledTimes(2);
  expect(outputMock).toHaveBeenCalledWith('Två siffror');
  expect(outputMock).toHaveBeenCalledWith('Positivt');
});

test('[Uppgift 13] -100', async () => {
  inputMock
    .mockResolvedValueOnce('-100')

  await uppgift13();

  expect(outputMock).toHaveBeenCalledTimes(2);
  expect(outputMock).toHaveBeenCalledWith('Tre siffror');
  expect(outputMock).toHaveBeenCalledWith('Negativt');
});

test('[Uppgift 13] 0', async () => {
  inputMock
    .mockResolvedValueOnce('0')

  await uppgift13();

  expect(outputMock).toHaveBeenCalledTimes(2);
  expect(outputMock).toHaveBeenCalledWith('En siffra');
  expect(outputMock).toHaveBeenCalledWith('Noll');
});

test('[Uppgift 14] Sidlängder 5, 10 och 4', async () => {
  inputMock
    .mockResolvedValueOnce('5')
    .mockResolvedValueOnce('10')
    .mockResolvedValueOnce('4')

  await uppgift14();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Triangel? Nej!');
});

test('[Uppgift 14] Sidlängder 5, 6 och 7', async () => {
  inputMock
    .mockResolvedValueOnce('5')
    .mockResolvedValueOnce('6')
    .mockResolvedValueOnce('7')

  await uppgift14();

  expect(outputMock).toHaveBeenCalledTimes(1);
  expect(outputMock).toHaveBeenCalledWith('Triangel? Ja!');
});