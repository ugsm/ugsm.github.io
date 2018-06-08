var img = document.getElementById("slider_image");

var txt = document.getElementById("slider_text");

var i=1;

function bk_clk(){

  if(i==1)
  {
    i=5;
    img.src="img/pro5.png";
    txt.innerText="Авто-кран JONG.";
  }
  else
  {
    if(i==5)
    {
      i--;
      img.src="img/pro4.png";
      txt.innerText="Авто-кран Галичанин 25 тонн.";
    }
    else
    {
      if(i==4)
      {
        i--;
        img.src="img/pro3.png";
        txt.innerText="Авто-кран JONG.";
      }
      else
      {
        if(i==3)
        {
          i--;
          img.src="img/pro2.png";
          txt.innerText="BobCat.";
        }
        else
        {
          if(i==2)
          {
            i=1;
            img.src="img/pro1.png";
            txt.innerText="Авто-кран Клинцы 25 тонн.";
          }
        }
      }
    }
  }

}

function nt_clk(){
  if(i==1)
  {
    i++;
    img.src="img/pro2.png";
    txt.innerText="BobCat.";
  }
  else
  {
    if(i==2)
    {
      i++;
      img.src="img/pro3.png";
      txt.innerText="Авто-кран JONG.";
    }
    else
    {
      if(i==3)
      {
        i++;
        img.src="img/pro4.png";
        txt.innerText="Авто-кран Галичанин 25 тонн.";
      }
      else
      {
        if(i==4)
        {
          i++;
          img.src="img/pro5.png";
          txt.innerText="Авто-кран JONG.";
        }
        else
        {
          if(i==5)
          {
            i=1;
            img.src="img/pro1.png";
            txt.innerText="Авто-кран Клинцы 25 тонн.";
          }
        }
      }
    }
  }

}
