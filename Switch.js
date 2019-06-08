function Switch(x,y,w,h,t,ts,xOffset=5,onColor=[165,230,250]){
  this.switchedOn = false;

  this.update = function(){
    if(!this.switchedOn){
      fill(255);
    }else{
      fill(onColor[0],onColor[1],onColor[2]);
    }
    noStroke();
    rect(x,y,w,h,10);
    stroke(0);
    textSize(ts);
    fill(0);
    text(t,x+xOffset,y+h-13);
    if(mouseIsPressed&&mouseX>x&&mouseX<x+w&&mouseY>y&&mouseY<y+h){
      this.switchedOn = true;
    }else if(mouseIsPressed/*&&mouseX<300*/&&(mouseX<x||mouseX>x+w||mouseY<y||mouseY>y+h)){
      this.switchedOn = false;
    }
  }
}
