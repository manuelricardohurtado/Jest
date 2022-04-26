const text = "Hola Mundo";
const fruits = ['manzana', 'melon', 'banana'];

//Prueba de contrenido de texto:
test('Debe contener un texto', () => {
    expect(text).toMatch(/Mundo/);
});

//Prueba de contenido den un array:
test('Tenemos una banana?', () => {
    expect(fruits).toContain('banana');
});

//Prueba de Mayor que:
test('Mayor que', () => {
    expect(10).toBeGreaterThan(9);
});

//Prueba de Booleano:
test('Verdadero', () => {
    expect(true).toBeTruthy();
});

//Prueba de Callback:
const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
};

test('Probar un Callback', () => {
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH');
    });
});

//Preubas con Promesas:

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""))
    });
};

test('Probar una promesa', () => {
    return reverseString2('Hola')
        .then(string => {
            expect(string).toBe('aloH');
        });
});

//Pruebas con Async & Await:

test('Probar async/await', async () => {
    const string = await reverseString2('hola');
    expect(string).toBe('aloh');
});

afterEach(() => console.log('Despues de casa prueba'));
afterAll(() => console.log('Despues de todas las pruebas'));

beforeEach(() => console.log('Antes de cada prueba'));
beforeAll(() => console.log('Antes de todas las pruebas'));
