class Consultorio {
    #nombre;
    #paciente;
    constructor(nombre) {
        this.#nombre = nombre;
        this.#paciente = [];
    }

    get getNombre() {
        return this.#nombre;
    }

    get getPaciente() {
        return this.#paciente;
    }
    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    agregarPaciente(paciente) {
        return this.#paciente.push(paciente);
    }

    buscarPaciente(nombre) {
        return this.#paciente.find((enfermo) => enfermo._nombre === nombre);
    }
}

class Paciente {
    _nombre;
    _edad;
    _rut;
    _diagnostico;
    constructor(nombre, edad, rut, diagnostico) {
        this._nombre = nombre;
        this._edad = edad;
        this._rut = rut;
        this._diagnostico = diagnostico;
    }

    get getNombre() {
        return this._nombre;
    }
    get getedad() {
        return this._edad;
    }
    get getRut() {
        return this._rut;
    }
    get getDiagnostico() {
        return this._diagnostico;
    }

    set setNombre(nombre) {
        this._nombre = nombre;
    }
    set setEdad(edad) {
        this._edad = edad;
    }
    set setRut(rut) {
        this._rut = rut;
    }
    set setDiagnostico(diagnostico) {
        this._diagnostico = diagnostico;
    }
}

const person1 = new Paciente("María González", 35, "12.345.678-9", "Gastritis crónica");
const person2 = new Paciente("Juan Pérez", 45, "23.456.789-0", "Diabetes tipo 1");
const person3 = new Paciente("Carlos Soto", 50, "34.567.890-1", "Artritis reumatoide");
const person4 = new Paciente("Laura Díaz", 28, "45.678.901-2", "Infección respiratoria");
const person5 = new Paciente("Andrea Muñoz", 62, "56.789.012-3", "Hipotiroidismo");

const consultorio = new Consultorio("Buenos metodos");

consultorio.agregarPaciente(person1);
consultorio.agregarPaciente(person2);
consultorio.agregarPaciente(person3);
consultorio.agregarPaciente(person4);
consultorio.agregarPaciente(person5);

person2.setNombre = "Juan Rubio";

console.log(consultorio.getPaciente);

console.log(consultorio.buscarPaciente("Laura Díaz"));
console.log(consultorio.buscarPaciente("Juan Rubio"));
