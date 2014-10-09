if (Pulse.find().count() === 0) {

    Pulse.insert({
         userName: "Marius 'the beast' Espejo",
         status: 3
    });

    Pulse.insert({
         userName: "Ktan-asurus Rext",
         status: 2
    });

    Pulse.insert({
         userName: "Davinder",
         status: 3
    });

    Pulse.insert({
         userName: "Alex 'Sass'acino",
         status: 1
    });

    Pulse.insert({
         userName: "Taco taco burrito",
         status: 1
    });

    Pulse.insert({
         userName: "Russell Wilson",
         status: 2
    });

}

if (Capacity.find().count() === 0) {

    Capacity.insert({
        name:"Alex",
        planned:"80",
        actual:"80"
    });

    Capacity.insert({
        name:"Kevin",
        planned:"80",
        actual:"50"
    });

    Capacity.insert({
        name:"Davinder",
        planned:"80",
        actual:"70"
    });

    Capacity.insert({
        name:"Marius",
        planned:"80",
        actual:"140"
    });
}
