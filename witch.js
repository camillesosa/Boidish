//might need to have seperate files instead of doing all of the script in index.html but for now it's working lol

class witch{
      constructor(){
        this.status = "idle";
        this.x = 10;
        this.y = 10;
        //next position
        this.x_dest = 0;
        this.y_dest = 0;
        this.animationLoop = [];
        this.loopI = 0;
        this.direction;
      }
    }

function draw() {
      window.requestAnimationFrame(draw);

      if (dataReady == false) {
        //console.log("Loading..");
        return;
      }

      if (timeDelta + lastAnimationTime > new Date().getTime()) {
         //console.log("timedelta return");
         return;
      }
      lastAnimationTime = new Date().getTime();
      if (bkImg != null) {
        context.putImageData(bkImg, x, y);
      }



      //                                    START WORK HERE
      //MAKE PUMPKIN STATUS = IDLE
      //MAKE STATUS = INTERATION STATE


      //IF OBJECT == WITCH
      //leftclick equals move
      $(document).on("mousedown", function () {
        this.status = "moving";
        //get coordinates of mouse
        //since you can't click off of the page, the only thing I need to do is make sure the image isn't cut off
        //just adjusting the coordinates if they are too far over
        this.x_dest = event.pageX;
        if(this.x_dest > canvas.width - 100){
          this.x_dest = canvas.width - 160;
        }
        this.y_dest = event.pageY;
        if(this.y_dest > canvas.height - 100){
          this.y_dest = canvas.height - 160;
        }
        console.log(this.x_dest);
        console.log(this.y_dest);
      });



      var img = new Image();
      img.src = "imgs/Idle (0).png";

      //console.log("draw image test b4 hit");
      //this.context.drawImage(img, this.curX, this.curY, this.imgWidth, this.imgHeight)

      tempx = this.x;
      tempy = this.y;
      xdiff = Math.abs(tempx - this.x_dest);
      ydiff = Math.abs(tempy - this.y_dest);

      //repainting canvas
      bkImg = context.getImageData(this.x, this.y, 134, 142);

      //idle
      //for idle I need to set loopi to 21, also I may need to move this but it maybe be fine here
      if (this.x_dest == tempx && this.y_dest == tempy) {
        // play idle animation
        //animationLoop = [spriteImgs['(Idle)']['Idle0'], spriteImgs['(Idle)']['Idle1'], spriteImgs['(Idle)']['Idle2'], spriteImgs['(Idle)']['Idle3'], spriteImgs['(Idle)']['Idle4'], spriteImgs['(Idle)']['Idle5'], spriteImgs['(Idle)']['Idle6'], spriteImgs['(Idle)']['Idle7'], spriteImgs['(Idle)']['Idle8'], spriteImgs['(Idle)']['Idle9'], spriteImgs['(Idle)']['Idle10'], spriteImgs['(Idle)']['Idle11'], spriteImgs['(Idle)']['Idle12'], spriteImgs['(Idle)']['Idle13'], spriteImgs['(Idle)']['Idle14'], spriteImgs['(Idle)']['Idle15'], spriteImgs['(Idle)']['Idle16'], spriteImgs['(Idle)']['Idle17'], spriteImgs['(Idle)']['Idle18'], spriteImgs['(Idle)']['Idle19'], spriteImgs['(Idle)']['Idle20'], spriteImgs['(Idle)']['Idle21']]
        if (this.direction == "(East)" | "(NorthEast)" | "(SouthEast)"){
          this.direction = "(East)";
        } else {
          this.direction = "(West)";
        }
        //for testing pumpkin animation
        this.direction = "(PSouth)";
        this.animationLoop = [spriteImgs[direction]['walk1'], spriteImgs[direction]['walk2'], spriteImgs[direction]['walk3'], spriteImgs[direction]['walk4']];
        //Thought I'd give it a shot lol
        //I'll try again after I've recharged :)
      }

      //movement
      if (this.x_dest < tempx && this.y_dest < tempy) {
        this.direction = "(NorthWest)";
        direction = this.direction;
        this.animationLoop = [spriteImgs[direction]['walk1'], spriteImgs[direction]['walk2'], spriteImgs[direction]['walk3'], spriteImgs[direction]['walk4']];
      }
      if (x_dest < tempx && y_dest > tempy) {
        direction = "(SouthWest)";
        animationLoop = [spriteImgs[direction]['walk1'], spriteImgs[direction]['walk2'], spriteImgs[direction]['walk3'], spriteImgs[direction]['walk4']];
      }
      if (x_dest > tempx && y_dest < tempy) {
        direction = "(NorthEast)";
        animationLoop = [spriteImgs[direction]['walk1'], spriteImgs[direction]['walk2'], spriteImgs[direction]['walk3'], spriteImgs[direction]['walk4']];
      }
      if (x_dest > tempx && y_dest > tempy) {
        direction = "(SouthEast)";
        animationLoop = [spriteImgs[direction]['walk1'], spriteImgs[direction]['walk2'], spriteImgs[direction]['walk3'], spriteImgs[direction]['walk4']];
      }
      if (x_dest < tempx && y_dest == tempy) {
        direction = "(West)";
        animationLoop = [spriteImgs[direction]['walk1'], spriteImgs[direction]['walk2'], spriteImgs[direction]['walk3'], spriteImgs[direction]['walk4']];
      }
      if (x_dest > tempx && y_dest == tempy) {
        direction = "(East)";
        animationLoop = [spriteImgs[direction]['walk1'], spriteImgs[direction]['walk2'], spriteImgs[direction]['walk3'], spriteImgs[direction]['walk4']];
      }
      if (x_dest == tempx && y_dest < tempy) {
        direction = "(North)";
        animationLoop = [spriteImgs[direction]['walk1'], spriteImgs[direction]['walk2'], spriteImgs[direction]['walk3'], spriteImgs[direction]['walk4']];
      }
      if (x_dest == tempx && y_dest > tempy) {
        direction = "(South)";
        animationLoop = [spriteImgs[direction]['walk1'], spriteImgs[direction]['walk2'], spriteImgs[direction]['walk3'], spriteImgs[direction]['walk4']];
        animation_x = xdiff;
        animation_y = ydiff + tempy;
      }


      img.src = animationLoop[loopI];
      //console.log(animationLoop[loopI]);

      x = tempx;
      y = tempy;
      while(xdiff + ydiff > 0){
        loopI++;
        //if (status == "moving" && loopI > 3
          //loopI = 0;
        //if (status == "idle" && loopI > 20
          //loopI = 0
        if (loopI > 3) {
          loopI = 0;
        }
        if(xdiff != 0 && tempx > x_dest){
          x--;
          xdiff--;
        }
        if(xdiff !=0 && tempx < x_dest){
          x++;
          xdiff--;
        }
        if(ydiff != 0 && tempy > y_dest){
          y--;
          ydiff--;
        }
        if(ydiff != 0 && tempy < y_dest){
          y++;
          ydiff--;
        }
        //console.log("distance is now");
        //console.log(xdiff);
        //console.log(ydiff);
        img.src = animationLoop[loopI];
        console.log("hit");
                context.drawImage(img, x, y, 134, 142);
                break;
      }
      if (xdiff + ydiff <= 0){
        status = "idle";
      }
      while (status == "idle"){
          timeDelta = 80;
          //maybe try to create an idle function again so i can call it regardless of the object/class
            //idle animation
            loopI++;
            if (loopI > 4) {
              loopI = 0;
            }
            img.src = animationLoop[loopI];
            //console.log("idle hit");
                  context.drawImage(img, x, y, 134, 142);
                  break;
      }
    context.drawImage(img, x, y, 134, 142);
    }