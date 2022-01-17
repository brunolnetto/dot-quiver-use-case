# Library ```dot-quiver``` use case

This an use case of library [node-link](https://github.com/brunolnetto/node-link). It is a NodeJS application. Hence, to start it, you might:

1. Run on command ```npm install && npm start```
2. Type on URL field ```localhost:8080```

The result rendering depends of browser. Either browser choice, the result must be as below:

```
{
    "vertices":"A,B,C,D,E,F",
    "edges":"A_B,B_C,C_D,C_E,E_B,C_F,F_B",
    "vertices_to_indices":{
        "A":0,
        "B":1,
        "C":2,
        "D":3,
        "E":4,
        "F":5
    },
    "adjacency_list":{
        "0":[
            1
        ],
        "1":[
            2
        ],
        "2":[
            3,
            4,
            5
        ],
        "3":[
            
        ],
        "4":[
            1
        ],
        "5":[
            1
        ]
    },
    "loose_nodes":[
        3
    ],
    "orphan_nodes":[
        0
    ],
    "is_cyclic":true,
    "all_cycles":[
        [
            1,
            2,
            4
        ],
        [
            1,
            2,
            5
        ]
    ]
}
```
