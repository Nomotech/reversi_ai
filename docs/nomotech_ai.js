var answer = {};
answer.totalscore = {};
answer.able_min = {};
answer.turn_min = {};
answer.turn_max = {};
answer.field = new Array(row);
for(i=0;i<row;i++) answer.field[i] = new Array(column); 
answer.po = new Array(row);
for(i=0;i<row;i++) answer.po[i] = new Array(column); 

/*
.-----.-----.-----.-----.-----.-----.-----.-----.
| 1.0 | 0.2 | 0.5 | 0.5 | 0.5 | 0.5 | 0.2 | 1.0 |
|-----|-----|-----|-----|-----|-----|-----|-----|
| 0.2 | 0.1 | 0.4 | 0.6 | 0.6 | 0.4 | 0.1 | 0.2 |
|-----|-----|-----|-----|-----|-----|-----|-----|
| 0.5 | 0.4 | 0.8 | 0.7 | 0.7 | 0.8 | 0.4 | 0.5 |
|-----|-----|-----|-----|-----|-----|-----|-----|
| 0.5 | 0.6 | 0.7 | 0.8 | 0.8 | 0.7 | 0.6 | 0.5 |
|-----|-----|-----|-----|-----|-----|-----|-----|
| 0.5 | 0.6 | 0.7 | 0.8 | 0.8 | 0.7 | 0.6 | 0.5 |
|-----|-----|-----|-----|-----|-----|-----|-----|
| 0.5 | 0.4 | 0.8 | 0.7 | 0.7 | 0.8 | 0.4 | 0.5 |
|-----|-----|-----|-----|-----|-----|-----|-----|
| 0.5 | 0.1 | 0.4 | 0.6 | 0.6 | 0.4 | 0.1 | 0.2 |
|-----|-----|-----|-----|-----|-----|-----|-----|
| 1.0 | 0.2 | 0.5 | 0.5 | 0.5 | 0.5 | 0.2 | 1.0 |
'-----'-----'-----'-----'-----'-----'-----'-----'
*/

/*
answer.po = [
	[0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0],
	[0.0 , 1.0 , 0.2 , 0.8 , 0.7 , 0.7 , 0.8 , 0.2 , 1.0 , 0.0],
	[0.0 , 0.2 , 0.1 , 0.5 , 0.5 , 0.5 , 0.5 , 0.1 , 0.2 , 0.0],
	[0.0 , 0.8 , 0.5 , 0.8 , 0.7 , 0.7 , 0.8 , 0.5 , 0.5 , 0.0],
	[0.0 , 0.7 , 0.5 , 0.7 , 0.7 , 0.7 , 0.7 , 0.5 , 0.5 , 0.0],
	[0.0 , 0.7 , 0.5 , 0.7 , 0.7 , 0.7 , 0.7 , 0.5 , 0.5 , 0.0],
	[0.0 , 0.8 , 0.5 , 0.8 , 0.7 , 0.7 , 0.8 , 0.5 , 0.5 , 0.0],
	[0.0 , 0.2 , 0.1 , 0.5 , 0.5 , 0.5 , 0.5 , 0.1 , 0.2 , 0.0],
	[0.0 , 1.0 , 0.2 , 0.8 , 0.7 , 0.7 , 0.8 , 0.2 , 1.0 , 0.0],
	[0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0]
];
*/

/*
answer.po = [
	[0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0],
	[0.0 , 1.0 , 0.2 , 0.5 , 0.5 , 0.5 , 0.5 , 0.2 , 1.0 , 0.0],
	[0.0 , 0.2 , 0.1 , 0.6 , 0.6 , 0.6 , 0.6 , 0.1 , 0.2 , 0.0],
	[0.0 , 0.5 , 0.6 , 0.8 , 0.7 , 0.7 , 0.8 , 0.6 , 0.5 , 0.0],
	[0.0 , 0.5 , 0.6 , 0.7 , 0.8 , 0.8 , 0.7 , 0.6 , 0.5 , 0.0],
	[0.0 , 0.5 , 0.6 , 0.7 , 0.8 , 0.8 , 0.7 , 0.6 , 0.5 , 0.0],
	[0.0 , 0.5 , 0.6 , 0.8 , 0.7 , 0.7 , 0.8 , 0.6 , 0.5 , 0.0],
	[0.0 , 0.2 , 0.1 , 0.6 , 0.6 , 0.6 , 0.6 , 0.1 , 0.2 , 0.0],
	[0.0 , 1.0 , 0.2 , 0.5 , 0.5 , 0.5 , 0.5 , 0.2 , 1.0 , 0.0],
	[0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0]
];
*/


answer.po = [
    [0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0],
    [0.0 , 3.0 ,-1.2 , 0.0 ,-0.1 ,-0.1 , 0.0 ,-1.2 , 3.0 , 0.0],
    [0.0 ,-1.2 ,-1.5 ,-0.3 ,-0.3 ,-0.3 ,-0.3 ,-1.5 ,-1.2 , 0.0],
    [0.0 , 0.0 ,-0.3 , 0.0 ,-0.1 ,-0.1 , 0.0 ,-0.3 , 0.0 , 0.0],
    [0.0 ,-0.1 ,-0.3 ,-0.1 ,-0.1 ,-0.1 ,-0.1 ,-0.3 ,-0.1 , 0.0],
    [0.0 ,-0.1 ,-0.3 ,-0.1 ,-0.1 ,-0.1 ,-0.1 ,-0.3 ,-0.1 , 0.0],
    [0.0 , 0.0 ,-0.3 , 0.0 ,-0.1 ,-0.1 , 0.0 ,-0.3 , 0.0 , 0.0],
    [0.0 ,-1.2 ,-1.5 ,-0.3 ,-0.3 ,-0.3 ,-0.3 ,-1.5 ,-1.2 , 0.0],
    [0.0 , 1.0 ,-1.2 , 0.0 ,-0.1 ,-0.1 , 0.0 ,-1.2 , 3.0 , 0.0],
    [0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0]
];








answer.max_score = 0;

var turn_num;
var po_black_num;
var po_white_num;


var field_copy = new Array(row);
for(i=0;i<row;i++)field_copy[i] = new Array(column); 


function ai(){
	var i,j;
	var po_reversi_color = reversi_color;
	var po_enemy_color = enemy_color;
	var turn_num;

	po_black_num = black_num;
	po_white_num = white_num;

	answer.max_score = -row*column*10;
	answer.able_min.point = row*column;
	answer.turn_min.point = row*column;
	answer.turn_max.point = 0;
    answer.totalscore.score = -row*column;
	for(i=1;i<row-1;i++){
        for(j=1;j<column-1;j++){
        	if(field[i][j]==3) ai_try(i,j);
        	//console.log(i+" "+j);
        	else answer.field[i][j] = 0;
        }
    }
    reversi_color = po_reversi_color;
	enemy_color = po_enemy_color;
	update();

	for(i=1;i<row-1;i++){
        for(j=1;j<column-1;j++){
            if(field[i][j] == 3 && answer.field[i][j]>answer.max_score){
                answer.max_score = answer.field[i][j];
                answer.x = i;
                answer.y = j;
            }
        }
    }
}

function ai_try(x,y){
	for(i=1;i<row-1;i++){
		for(j=1;j<column-1;j++){
			field_copy[i][j]=field[i][j];		
		}
	}   
	turn_num = 0;
    var totalscore_b = 0;
    var totalscore_w = 0;
    var totalscore_sub = 0;
	field_copy[x][y]=reversi_color;

	reversi_serch_try(x,y);
 	turn_change_try();
   	field_check_try();
   	count_try();


    for(i=1;i<row-1;i++){
        for(j=1;j<column-1;j++){
            if(field_copy[i][j]==1) totalscore_b += answer.po[i][j];
            if(field_copy[i][j]==2) totalscore_w += answer.po[i][j];
        }
    }
    totalscore_sub = totalscore_b - totalscore_w;
    if(reversi_color==1)totalscore_sub*=-1;
    if(totalscore_sub > answer.totalscore.score){
        answer.totalscore.x = x;
        answer.totalscore.y = y;
        answer.totalscore.score = totalscore_sub;
    }
    console.log("totalscore" + totalscore_sub);
   	//相手のおける場所が最小
   	//console.log("x:" + x + " y:" + y + " able:" + able_num);
  //  	if(able_num<=answer.able_min.point){
  //  		answer.able_min.x = x;
		// answer.able_min.y = y;
		// answer.able_min.point = able_num;
  //  	}

   	
  //  	if(reversi_color!=1)turn_num = black_num - po_black_num;
  //  	if(reversi_color!=2)turn_num = white_num - po_black_num;
  //  	//ひっくり返る石の数が最小
  //  	if(turn_num < answer.turn_min.point){
  //  		answer.turn_min.x = x;
  //  		answer.turn_min.y = y;
  //  		answer.turn_min.point = turn_num;
  //  	}

  //  	//ひっくり返る石の数が最大
  //  	if(turn_num > answer.turn_max.point){
  //  		answer.turn_max.x = x;
  //  		answer.turn_max.y = y;
  //  		answer.turn_max.point = turn_num;
  //  	}



  //マスの得点
  answer.field[x][y] = 0;
  answer.field[x][y] += ((row-2)*(column-2) - able_num)*2;
	if(turn<(row-2)*(column-2)-4-16){
		answer.field[x][y] += (row-2)*(column-2) - turn_num;
	}
	if(turn>=(row-2)*(column-2)-4-16){
		answer.field[x][y] += turn_num;
	}
	answer.field[x][y] += answer.po[x][y] * (row-2) * (column-2);

    answer.field[x][y] += totalscore_sub * 10;
   	turn_change_try();
}

function turn_change_try(){
	var po = reversi_color;
   	reversi_color = enemy_color;
   	enemy_color = po;
}

function field_check_try(){
	var able = 0;
    for(i=1;i<row-1;i++){
        for(j=1;j<column-1;j++){
            if(field_copy[i][j]==3){
                field_copy[i][j]=0;
            }
        }
    }
    for(i=1;i<row-1;i++){
        for(j=1;j<column-1;j++){
            if(field_copy[i][j]==enemy_color){
                if(field_copy[i-1][j-1]==0)  field_copy[i-1][j-1]=3;
                if(field_copy[i-1][j]  ==0)  field_copy[i-1][j]=3;
                if(field_copy[i-1][j+1]==0)  field_copy[i-1][j+1]=3;
                if(field_copy[i][j-1]  ==0)  field_copy[i][j-1]=3;
                if(field_copy[i][j+1]  ==0)  field_copy[i][j+1]=3;
                if(field_copy[i+1][j-1]==0)  field_copy[i+1][j-1]=3;
                if(field_copy[i+1][j]  ==0)  field_copy[i+1][j]=3;
                if(field_copy[i+1][j+1]==0)  field_copy[i+1][j+1]=3;
            }
        }
    }
    for(i=1;i<row-1;i++){
        for(j=1;j<column-1;j++){
            if(field_copy[i][j]==3){
                able = 0;
                if(field_copy[i-1][j-1]==enemy_color)able+=0b00000001*reversi_able_try(i-1,j-1,0);
                if(field_copy[i-1][j]  ==enemy_color)able+=0b00000010*reversi_able_try(i-1,j,1);
                if(field_copy[i-1][j+1]==enemy_color)able+=0b00000100*reversi_able_try(i-1,j+1,2);
                if(field_copy[i][j+1]  ==enemy_color)able+=0b00001000*reversi_able_try(i,j+1,3);
                if(field_copy[i+1][j+1]==enemy_color)able+=0b00010000*reversi_able_try(i+1,j+1,4);
                if(field_copy[i+1][j]  ==enemy_color)able+=0b00100000*reversi_able_try(i+1,j,5);
                if(field_copy[i+1][j-1]==enemy_color)able+=0b01000000*reversi_able_try(i+1,j-1,6);
                if(field_copy[i][j-1]  ==enemy_color)able+=0b10000000*reversi_able_try(i,j-1,7);
                if(able==0)field_copy[i][j]=0;
            }
        }
    }
}

function reversi_able_try(h,w,vec){
    //._._._.
    //|0|1|2|
    //|7|O|3|
    //|6|5|4|
    if(field_copy[h][w]==enemy_color){
        switch(vec){
            case 0:return reversi_able_try(h-1,w-1,0);
            case 1:return reversi_able_try(h-1,w  ,1);
            case 2:return reversi_able_try(h-1,w+1,2);
            case 3:return reversi_able_try(h  ,w+1,3);
            case 4:return reversi_able_try(h+1,w+1,4);
            case 5:return reversi_able_try(h+1,w  ,5);
            case 6:return reversi_able_try(h+1,w-1,6);
            case 7:return reversi_able_try(h  ,w-1,7);
            default:break;
        }
    }
    if(field_copy[h][w]==reversi_color){
        return 1;
    }
    return 0;
}

function reversi_serch_try(h,w){
    var able = 0;
	if(field_copy[h-1][w-1]==enemy_color)able+=0b00000001*reversi_turn_try(h-1,w-1,0);
	if(field_copy[h-1][w]  ==enemy_color)able+=0b00000010*reversi_turn_try(h-1,w,1);
	if(field_copy[h-1][w+1]==enemy_color)able+=0b00000100*reversi_turn_try(h-1,w+1,2);
	if(field_copy[h][w+1]  ==enemy_color)able+=0b00001000*reversi_turn_try(h,w+1,3);
	if(field_copy[h+1][w+1]==enemy_color)able+=0b00010000*reversi_turn_try(h+1,w+1,4);
	if(field_copy[h+1][w]  ==enemy_color)able+=0b00100000*reversi_turn_try(h+1,w,5);
	if(field_copy[h+1][w-1]==enemy_color)able+=0b01000000*reversi_turn_try(h+1,w-1,6);
	if(field_copy[h][w-1]  ==enemy_color)able+=0b10000000*reversi_turn_try(h,w-1,7);
	if(able==0)field_copy[h][w]=0;
}


function reversi_turn_try(h,w,vec){
    //._._._.
    //|0|1|2|
    //|7|O|3|
    //|6|5|4|
    var turn = 0;
    if(field_copy[h][w]==enemy_color){
        switch(vec){
            case 0:turn += reversi_turn_try(h-1,w-1,0);break;
            case 1:turn += reversi_turn_try(h-1,w  ,1);break;
            case 2:turn += reversi_turn_try(h-1,w+1,2);break;
            case 3:turn += reversi_turn_try(h  ,w+1,3);break;
            case 4:turn += reversi_turn_try(h+1,w+1,4);break;
            case 5:turn += reversi_turn_try(h+1,w  ,5);break;
            case 6:turn += reversi_turn_try(h+1,w-1,6);break;
            case 7:turn += reversi_turn_try(h  ,w-1,7);break;
            default:break;
        }
    }
    if(turn > 0){
        field_copy[h][w]=reversi_color;
        return 1;
    }
    if(field_copy[h][w]==reversi_color){
        return 1;
    }
    return 0;
}

function count_try(){
	empty_num = black_num = white_num = able_num = 0;
	for(i=1;i<row-1;i++){
   		for(j=1;j<column-1;j++){
   			switch(field_copy[i][j]){
   				case 0: empty_num++; break;
   				case 1: black_num++; break;
   				case 2: white_num++; break;
   				case 3: able_num++;empty_num++;  break;
   				default: break;
   			}		
   		}
    }
    if(reversi_color==1) able_b_num = able_num;
    if(reversi_color==2) able_w_num = able_num;
    //console.log("b:" + able_b_num + " w:" + able_w_num);
}

function score_draw(){
	context.font= 'bold 20px "Century Gothic"';
	count();
    context.strokeStyle = 'rgb(150,150,150)';
    context.fillStyle = 'rgb(150,150,150)';
    context.textAlign = 'start';
    for(i=1;i<row-1;i++){
    	for(j=1;j<column-1;j++){
    		if(field[i][j]==3)context.fillText(Math.floor(answer.field[i][j]),size*i,size*(j+1),50);
    	}
    }
}

function side_check(){
}