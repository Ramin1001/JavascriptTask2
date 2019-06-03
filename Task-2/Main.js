 jQuery(document).ready(function($){
     
//    инициализируем шахматную доску
    var chess=[
        [
           {num:11, name:"A1"},
           {num:12, name:"B1"},
           {num:13, name:"C1"},
           {num:14, name:"D1"},
           {num:15, name:"E1"},
           {num:16, name:"F1"},
           {num:17, name:"G1"},
           {num:18, name:"H1"}
        ],
        [
           {num:21, name:"A2"},
           {num:22, name:"B2"},
           {num:23, name:"C2"},
           {num:24, name:"D2"},
           {num:25, name:"E2"},
           {num:26, name:"F2"},
           {num:27, name:"G2"},
           {num:28, name:"H2"}
        ],
        [
           {num:31, name:"A3"},
           {num:32, name:"B3"},
           {num:33, name:"C3"},
           {num:34, name:"D3"},
           {num:35, name:"E3"},
           {num:36, name:"F3"},
           {num:37, name:"G3"},
           {num:38, name:"H3"}
        ],
        [
           {num:41, name:"A4"},
           {num:42, name:"B4"},
           {num:43, name:"C4"},
           {num:44, name:"D4"},
           {num:45, name:"E4"},
           {num:46, name:"F4"},
           {num:47, name:"G4"},
           {num:48, name:"H4"}
        ],
        [
           {num:51, name:"A5"},
           {num:52, name:"B5"},
           {num:53, name:"C5"},
           {num:54, name:"D5"},
           {num:55, name:"E5"},
           {num:56, name:"F5"},
           {num:57, name:"G5"},
           {num:58, name:"H5"}
        ],
        [
           {num:61, name:"A6"},
           {num:62, name:"B6"},
           {num:63, name:"C6"},
           {num:64, name:"D6"},
           {num:65, name:"E6"},
           {num:66, name:"F6"},
           {num:67, name:"G6"},
           {num:68, name:"H6"}
        ],
        [
           {num:71, name:"A7"},
           {num:72, name:"B7"},
           {num:73, name:"C7"},
           {num:74, name:"D7"},
           {num:75, name:"E7"},
           {num:76, name:"F7"},
           {num:77, name:"G7"},
           {num:78, name:"H7"}
        ],
        [
           {num:81, name:"A8"},
           {num:82, name:"B8"},
           {num:83, name:"C8"},
           {num:84, name:"D8"},
           {num:85, name:"E8"},
           {num:86, name:"F8"},
           {num:87, name:"G8"},
           {num:88, name:"H8"}
        ]
    ];
    
    
//        при нажатие на кнопку
        $("#btn").click(function(){
            
//            берем значение инпута
            var selectStr=$("#inpt1").val();
            
//            объявляем переменую для найденного значения 
            var findInput;
            
//            объявляем массив для заполнении им последнего результата
            var res=new Array();
            
//            метод для определения значений конечных кординатов ходов коня
            function Horse(str){
                var res1=str+8;
                var res2=str-8;
                var res3=str+12;
                var res4=str-12;
                var res5=str+19;  
                var res6=str-19;
                var res7=str+21;
                var res8=str-21;
                   
                
                var result=[res1,res2,res3,res4,res5,res6,res7,res8];
                return result;
            }
            
            
//            сортировка для нахождение вводимом инпуте значения в доске
            for(var i=0; i<chess[0].length; i++)
            {     
                
                for(var j=0; j<chess[0].length;j++)
                {
                   
                    if(selectStr==chess[i][j].name)
                    {
                        
                        findInput=chess[i][j].num;
                        
                    }

                }
                
            }
    
//            определения значений конечных кординатов ходов коня
             var funcRes=Horse(findInput);
            
            
//             сортировка доски для нахождение данных кординатов ходов коня 
             for(var i=0; i<chess[0].length; i++)
            {     
                
                for(var j=0; j<chess[0].length;j++)
                {
                   
                    for(var s=0; s<funcRes[0]; s++)
                    {
                        
                        if(funcRes[s]==chess[i][j].num)
                           {
                        
                             res.push(chess[i][j].name);
                        
                            }
                    }
                    
                }
                
            }
             
//            вывод результата
            alert("Результат: "+res+" ");
        });
          
          
    });

    


