var row = 8 + 2;
var column = 8 + 2;
//keycode
var key = new Array(300);


var white_num = 0;
var black_num = 0;
var able_b_num = 0;
var able_w_num = 0;
var able_num = 0;
var able_e_num = 0;
var empty_num = 0;

var turn = 1;
var kifu = new Array(0);
kifu[0]={};
kifu[0].x=0;
kifu[0].y=0;

var size = 50;

var reversi_color = 1;
var enemy_color = 2;

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var i,j;

var focus_x;
var focus_y;

var field = new Array(row);
for(i=0;i<row;i++)field[i] = new Array(column); 
for(i=1;i<row-1;i++){
	for(j=1;j<column-1;j++){
		field[i][j]=0;		
	}
}
for(j=0;j<column;j++)field[0][j]=field[row-1][j]=4;
for(i=0;i<row;i++)field[i][0]=field[i][column-1]=4;
field[row/2-1][column/2-1]	=2;
field[row/2-1][column/2]	=1;
field[row/2][column/2-1]	=1;
field[row/2][column/2]		=2;




onload = function() {
	field_check(); 
	update();
};

document.onkeydown = function (e){
  if(!e)e = window.event;
  //console.log(e);
  key[e.keyCode] = 1;
  if(key[65]==1){
  	ai();
  	field_click(answer.x,answer.y);
    console.log("answer x:" + answer.x + " y:" + answer.y + " score:" + answer.max_score);
	 update();
  }
  if(key[83]==1){
  	ai();
  	score_draw();
  }
}
document.onkeyup = function (e){
  if(!e)e = window.event;
  key[e.keyCode] = 0;
}


function field_draw(){
	context.font= 'bold 30px "Century Gothic"';
	count();
    context.strokeStyle = 'rgb(00,0,0)';
    context.fillStyle = 'rgb(00,0,0)';
    context.textAlign = 'end';
    for(i=2;i<row;i++) context.fillText(i-1,size*1,size*i,50);
    context.textAlign = 'canter';
    

    context.fillText("A",size*1.5,size*1,50);
	context.fillText("B",size*2.5,size*1,50);
	context.fillText("C",size*3.5,size*1,50);
	context.fillText("D",size*4.5,size*1,50);
	context.fillText("E",size*5.5,size*1,50);
	context.fillText("F",size*6.5,size*1,50);
	context.fillText("G",size*7.5,size*1,50);
	context.fillText("H",size*8.5,size*1,50);
}

function draw(r,c,color){
	context.lineWidth=2;
	context.strokeStyle = 'rgb(00,80,60)';
	context.fillStyle = 'rgb(0,120,30)';
	context.fillRect(r*size,c*size,size,size); 
	context.strokeRect(r*size,c*size,size,size);
	
	context.strokeStyle = 'rgb(00,40,30)';
	context.lineWidth=1;
	switch(color){
		case  0: break;
		case  1: 
			context.fillStyle = 'rgb(0,0,0)';
			context.beginPath();
			context.arc((r+0.5)*size,(c+0.5)*size, size*0.4, 0, Math.PI*2, false);
			context.fill();
			context.stroke();
			break;
		case  2:
			context.fillStyle = 'rgb(255,255,255)';
			context.beginPath();
			context.arc((r+0.5)*size,(c+0.5)*size, size*0.4, 0, Math.PI*2, false);
			context.fill();
			context.stroke();
			break;
		case  3:
			context.beginPath();
			context.arc((r+0.5)*size,(c+0.5)*size, size*0.4, 0, Math.PI*2, false);
			context.stroke();
			break;
		default: break;
	}	
}

function count_draw(){
	context.font= 'bold 30px "Century Gothic"';
	count();
    context.strokeStyle = 'rgb(00,0,0)';
    context.fillStyle = 'rgb(00,0,0)';
    context.textAlign = 'start';
    context.fillText("BLACK : " + black_num,size*1,size*column,520);
    context.textAlign = 'end';
    context.strokeText("WHITE : " + white_num,size*(row-1),size*column,520);
    
    context.lineWidth = 2;
   	context.beginPath();
	if(reversi_color==1){
		context.moveTo(size,size*column);
		context.lineTo(180,size*column);
	}else{
		context.moveTo(size*row-180,size*column);
		context.lineTo(size*(row-1),size*column);
	}
	context.closePath();
	context.stroke();

}

function update(){
	context.clearRect(0, 0, 1000, 1000);
	for(i=1;i<row-1;i++){
   		for(j=1;j<column-1;j++){
   			draw(i,j,field[i][j]);		
   		}
    }
    field_draw();
    count_draw();
}





document.getElementById("ai").addEventListener("click",function(){
  ai();
  field_click(answer.x,answer.y);
  console.log("answer x:" + answer.x + " y:" + answer.y + " score:" + answer.max_score);
  update();
});
document.getElementById("sc").addEventListener("click",function(){
  ai();
  score_draw();
});

function turn_change(){
	var po = reversi_color;
   	reversi_color = enemy_color;
   	enemy_color = po;
   	turn++;
}




function field_mouse(){
	focus_x = Math.floor((mouse_x-6)/size);
	focus_y = Math.floor((mouse_y-75)/size);
	//console.log("x:"+focus_x+" y:"+focus_y);
}

function field_click(x,y){
	if(field[x][y]==3){
		field[x][y]=reversi_color;
 		reversi_serch(x,y);
 		turn_change();
   		field_check();
   		update();
   	}
   	if(able_w_num==0&&able_b_num==0)result();
   	else if(empty_num==0) result();
   	else if(able_num==0) pass();
}

function log(){
	kifu[turn]={};
	kifu[turn].color=reversi_color;
	kifu[turn].x=focus_x;
	kifu[turn].y=focus_y;
	switch(focus_x){
		case 1: console.log(turn+": A"+focus_y); break;
		case 2: console.log(turn+": B"+focus_y); break;
		case 3: console.log(turn+": C"+focus_y); break;
		case 4: console.log(turn+": D"+focus_y); break;
		case 5: console.log(turn+": E"+focus_y); break;
		case 6: console.log(turn+": F"+focus_y); break;
		case 7: console.log(turn+": G"+focus_y); break;
		case 8: console.log(turn+": H"+focus_y); break;
	}
}

function field_check(){
	var able = 0;
    for(i=1;i<row-1;i++){
        for(j=1;j<column-1;j++){
            if(field[i][j]==3){
                field[i][j]=0;
            }
        }
    }
    for(i=1;i<row-1;i++){
        for(j=1;j<column-1;j++){
            if(field[i][j]==enemy_color){
                if(field[i-1][j-1]==0)  field[i-1][j-1]=3;
                if(field[i-1][j]  ==0)  field[i-1][j]=3;
                if(field[i-1][j+1]==0)  field[i-1][j+1]=3;
                if(field[i][j-1]  ==0)  field[i][j-1]=3;
                if(field[i][j+1]  ==0)  field[i][j+1]=3;
                if(field[i+1][j-1]==0)  field[i+1][j-1]=3;
                if(field[i+1][j]  ==0)  field[i+1][j]=3;
                if(field[i+1][j+1]==0)  field[i+1][j+1]=3;
            }
        }
    }
    for(i=1;i<row-1;i++){
        for(j=1;j<column-1;j++){
            if(field[i][j]==3){
                able = 0;
                if(field[i-1][j-1]==enemy_color)able+=0b00000001*reversi_able(i-1,j-1,0);
                if(field[i-1][j]  ==enemy_color)able+=0b00000010*reversi_able(i-1,j,1);
                if(field[i-1][j+1]==enemy_color)able+=0b00000100*reversi_able(i-1,j+1,2);
                if(field[i][j+1]  ==enemy_color)able+=0b00001000*reversi_able(i,j+1,3);
                if(field[i+1][j+1]==enemy_color)able+=0b00010000*reversi_able(i+1,j+1,4);
                if(field[i+1][j]  ==enemy_color)able+=0b00100000*reversi_able(i+1,j,5);
                if(field[i+1][j-1]==enemy_color)able+=0b01000000*reversi_able(i+1,j-1,6);
                if(field[i][j-1]  ==enemy_color)able+=0b10000000*reversi_able(i,j-1,7);
                if(able==0)field[i][j]=0;
            }
        }
    }
}

function reversi_able(h,w,vec){
    //._._._.
    //|0|1|2|
    //|7|O|3|
    //|6|5|4|
    if(field[h][w]==enemy_color){
        switch(vec){
            case 0:return reversi_able(h-1,w-1,0);
            case 1:return reversi_able(h-1,w  ,1);
            case 2:return reversi_able(h-1,w+1,2);
            case 3:return reversi_able(h  ,w+1,3);
            case 4:return reversi_able(h+1,w+1,4);
            case 5:return reversi_able(h+1,w  ,5);
            case 6:return reversi_able(h+1,w-1,6);
            case 7:return reversi_able(h  ,w-1,7);
            default:break;
        }
    }
    if(field[h][w]==reversi_color){
        return 1;
    }
    return 0;
}

function reversi_serch(h,w){
	log();
    var able = 0;
	if(field[h-1][w-1]==enemy_color)able+=0b00000001*reversi_turn(h-1,w-1,0);
	if(field[h-1][w]  ==enemy_color)able+=0b00000010*reversi_turn(h-1,w,1);
	if(field[h-1][w+1]==enemy_color)able+=0b00000100*reversi_turn(h-1,w+1,2);
	if(field[h][w+1]  ==enemy_color)able+=0b00001000*reversi_turn(h,w+1,3);
	if(field[h+1][w+1]==enemy_color)able+=0b00010000*reversi_turn(h+1,w+1,4);
	if(field[h+1][w]  ==enemy_color)able+=0b00100000*reversi_turn(h+1,w,5);
	if(field[h+1][w-1]==enemy_color)able+=0b01000000*reversi_turn(h+1,w-1,6);
	if(field[h][w-1]  ==enemy_color)able+=0b10000000*reversi_turn(h,w-1,7);
	if(able==0)field[h][w]=0;
}


function reversi_turn(h,w,vec){
    //._._._.
    //|0|1|2|
    //|7|O|3|
    //|6|5|4|
    var turn = 0;
    if(field[h][w]==enemy_color){
        switch(vec){
            case 0:turn += reversi_turn(h-1,w-1,0);break;
            case 1:turn += reversi_turn(h-1,w  ,1);break;
            case 2:turn += reversi_turn(h-1,w+1,2);break;
            case 3:turn += reversi_turn(h  ,w+1,3);break;
            case 4:turn += reversi_turn(h+1,w+1,4);break;
            case 5:turn += reversi_turn(h+1,w  ,5);break;
            case 6:turn += reversi_turn(h+1,w-1,6);break;
            case 7:turn += reversi_turn(h  ,w-1,7);break;
            default:break;
        }
    }
    if(turn > 0){
        field[h][w]=reversi_color;
        return 1;
    }
    if(field[h][w]==reversi_color){
        return 1;
    }
    return 0;
}

function count(){
	empty_num = black_num = white_num = able_num = 0;
	for(i=1;i<row-1;i++){
   		for(j=1;j<column-1;j++){
   			switch(field[i][j]){
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

function pass(){
	context.font= 'bold 30px "Century Gothic"';
	context.strokeStyle = 'rgb(00,0,0)';
    context.fillStyle = 'rgb(00,0,0)';
    context.textAlign = 'center';
    context.fillText("PASS",size*1,size*column,520);
    turn_change();
    field_check();
   	update();
   	console.log("pass");
}

function result(){
	console.log("result");
	context.font= 'bold 30px "Century Gothic"';
	context.strokeStyle = 'rgb(00,0,0)';
    context.fillStyle = 'rgb(00,0,0)';
    context.textAlign = 'center';
	if(black_num>white_num)context.fillText("BLACK WIN",size*row*0.5,size*(column+1),520);
	if(black_num<white_num)context.fillText("WHITE WIN",size*row*0.5,size*(column+1),520);
	if(black_num==white_num)context.fillText("DRAW",size*row*0.5,size*(column+1),520);
}

