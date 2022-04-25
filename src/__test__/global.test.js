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

