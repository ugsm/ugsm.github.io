var img = document.getElementById("slider_image");

var txt1 = document.getElementById("slider_text_1");

var txt2 = document.getElementById("slider_text_2");

var i=1;

function bk_clk() {

  if (i == 1) {
    i = 8;
    img.src = "img/pro8.png";
    txt1.innerText = "Авто-кран Krupp 70-GMT-AT.";
    txt2.innerText = "Грузоподьёмность: 70тн. Длина стрелы: 40м. + Гусёк 8м.";
  }
  else {
    if (i == 8) {
      i--;
      img.src = "img/pro7.png";
      txt1.innerText = "Авто-кран Grove GMK5100-L.";
      txt2.innerText = "Грузоподьёмность: 100тн. Длина стрелы: 51м. + Гусёк 34м.";
    }
    else {
      if (i == 7) {
        i--;
        img.src = "img/pro6.png";
        txt1.innerText = "Авто-кран Grove GMK4100-L.";
        txt2.innerText = "Грузоподьёмность: 100тн. Длина стрелы: 60м. + Гусёк 22м.";
      }
      else {
        if (i == 6) {
          i--;
          img.src = "img/pro5.png";
          txt1.innerText = "Авто-кран XCMG-QY30K5.";
          txt2.innerText = "Грузоподьёмность: 30тн. Длина стрелы: 38м. + Гусёк 9м.";
        }
        else {
          if (i == 5) {
            i--;
            img.src = "img/pro4.png";
            txt1.innerText = "Авто-кран Галичанин";
            txt2.innerText = "Грузоподьёмность: 25тн. Длина стрелы: 28м. + Гусёк 9м.";
          }
          else {
            if (i == 4) {
              i--;
              img.src = "img/pro3.png";
              txt1.innerText = "Авто-кран XCMG-QY25K2.";
              txt2.innerText = "Грузоподьёмность: 25тн. Длина стрелы: 34м. + Гусёк 9м.";
            }
            else {
              if (i == 3) {
                i--;
                img.src = "img/pro2.png";
                txt1.innerText = "TEREX-DEMAG AC 50-1.";
                txt2.innerText = "Грузоподьёмность: 50тн. Длина стрелы: 42м. + Гусёк 15м.";
              }
              else {
                if (i == 2) {
                  i = 1;
                  img.src = "img/pro1.png";
                  txt1.innerText = "Авто-кран Клинцы.";
                  txt2.innerText = "Грузоподьёмность: 25 тн. Длина стрелы: 21 м.";
                }
              }
            }
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
    txt1.innerText = "TEREX-DEMAG AC 50-1.";
    txt2.innerText = "Грузоподьёмность: 50тн. Длина стрелы: 42м. + Гусёк 15м.";
  }
  else
  {
    if(i==2)
    {
      i++;
      img.src="img/pro3.png";
      txt1.innerText = "Авто-кран XCMG-QY25K2.";
      txt2.innerText = "Грузоподьёмность: 25тн. Длина стрелы: 34м. + Гусёк 9м.";
    }
    else
    {
      if(i==3)
      {
        i++;
        img.src="img/pro4.png";
        txt1.innerText = "Авто-кран Галичанин";
        txt2.innerText = "Грузоподьёмность: 25тн. Длина стрелы: 28м. + Гусёк 9м.";
      }
      else
      {
        if(i==4)
        {
          i++;
          txt1.innerText = "Авто-кран XCMG-QY30K5.";
          txt2.innerText = "Грузоподьёмность: 30тн. Длина стрелы: 38м. + Гусёк 9м.";
        }
        else
        {
          if(i==5)
          {
            i++;
            img.src="img/pro6.png";
            img.src = "img/pro6.png";
            txt1.innerText = "Авто-кран Grove GMK4100-L.";
            txt2.innerText = "Грузоподьёмность: 100тн. Длина стрелы: 60м. + Гусёк 22м.";
          }
          else
          {
            if(i==6)
            {
              i++;
              img.src="img/pro7.png";
              txt1.innerText = "Авто-кран Grove GMK5100-L.";
              txt2.innerText = "Грузоподьёмность: 100тн. Длина стрелы: 51м. + Гусёк 34м.";
            }
            else
            {
              if(i==7)
              {
                i++;
                img.src="img/pro8.png";
                txt1.innerText = "Авто-кран Krupp 70-GMT-AT.";
                txt2.innerText = "Грузоподьёмность: 70тн. Длина стрелы: 40м. + Гусёк 8м.";
              }
              else
              {
                if(i==8)
                {
                  i=1;
                  img.src="img/pro1.png";
                  txt1.innerText = "Авто-кран Клинцы.";
                  txt2.innerText = "Грузоподьёмность: 25 тн. Длина стрелы: 21 м.";
                }
              }
            }
          }
        }
      }
    }
  }

}
