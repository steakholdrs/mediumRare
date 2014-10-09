if (Pulse.find().count() === 0) {

    Pulse.insert({
         userName: "Marius 'the beast' Espejo",
         status: "fa fa-frown-o fa-5x"
    });

    Pulse.insert({
         userName: "Ktan-asurus Rext",
         status: "fa fa-meh-o fa-5x"
    });

    Pulse.insert({
         userName: "Davinder",
         status: "fa fa-frown-o fa-5x"
    });

    Pulse.insert({
         userName: "Alex 'Sass'acino",
         status: "fa fa-smile-o fa-5x"
    });

    Pulse.insert({
         userName: "Taco taco burrito",
         status: "fa fa-smile-o fa-5x"
    });

    Pulse.insert({
         userName: "Russell Wilson",
         status: "fa fa-meh-o fa-5x"
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
