
// ds - for describe
// ms - for movements
// er - for expected result

movements_data = [
    {ds: "empty movement", ms: "", er: 1},
    {ds: "one move only", ms: "E", er: 2},
    {ds: "one move only", ms: "O", er: 2},
    {ds: "one move only", ms: "N", er: 2},
    {ds: "one move only", ms: "S", er: 2},
    {ds: "Circular Movement", ms: "NESO", er: 4}, 
    {ds: "Circular Movement", ms: "NNEESSOO", er: 8}, 
    {ds: "Circular Movement", ms: "OOOSSSEEENNN", er: 12}, 
    {ds: "Circular Movement", ms: "SSSSSSEENNEENNEENNOOOOOOO", er: 25},
    {ds: "Circular Movements", ms: "NSNSNSNSNS", er: 2},
    {ds: "Circular Movements", ms: "NNSSEEEENN", er: 9},
    {ds: "Move on, move back", ms: "EEEOOO", er: 4},
    {ds: "Move on, move back", ms: "OOOEEE", er: 4},
    {ds: "Move on, move back", ms: "NNNSSS", er: 4},
    {ds: "Move on, move back", ms: "SSSNNN", er: 4},
    {ds: "Just Going forward", ms: "EEE", er: 4},
    {ds: "Just Going forward", ms: "OOO", er: 4},
    {ds: "Just Going forward", ms: "NNN", er: 4},
    {ds: "Just Going forward", ms: "SSS", er: 4},
    
    {ds: "medium walk", 
     ms: 'N'.repeat (10)+
         'S'.repeat(10),
     er: 11      
    },
    {ds: "Big Movement", 
     ms: 'N'.repeat (10e5),
     er: 10e5+1 
    },
    {ds: "Big Movement", 
     ms: 'N'.repeat (10e2)+
         'S'.repeat (10e2),
     er: 10e2+1 
    },
    {ds: "Big Movement", 
     ms: 'N'.repeat (10e1)+
         'E'.repeat (10e1)+
         'S'.repeat (10e1),
     er: 3*10e1+1 
    },
//    {ds: "Max String Movement Test", 
//     ms: 'N'.repeat (Math.pow(2, 25)-1),
//     er: Math.pow(2, 53) +1
    },
]

module.exports= movements_data;
