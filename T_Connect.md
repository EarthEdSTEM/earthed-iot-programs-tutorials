# micro:bit Connection Tutorial 

<!---------------------------------------------------------------  
-------------------------TEST and CONNECT------Complete----------
----------------------------------------------------------------->

## Step 1 Introduction @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/EarthEd_Horizontal_Logo.png)
Welcome
----------------------------------------------

In this tutorial, you will learn how to plug your micr:bit into your computer and download code. You will also learn how to display shapes on the micro:bit LED array.

## Step 2 Plug and Connect @unplugged
Plug in your micro:bit to connect and download!
-----------------------------------------------

You will need a USB cable, micro:bit comuter and a PC computer to complte this task. Make sure you have removed the micro:bit computer from the IOT sheild.

![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/USB_Connection.png)

Connect the micro:bit to your your computer using the USB cable.
Need to know how to connect your micro:bit to your computer? **[Watch this video](https://www.youtube.com/watch?v=qSjMDG84bMY)**<br>

## Step 3 Simple Code @fullscreen
Create some simple code to test your micro:bit.
------------------------------------
In the Basic Tab, place the ``||basic:show leds||`` block in the ``||basic:forever||`` block and draw a pattern like the one shown in the 'Hint'. Click the light bulb to see it.
```blocks
basic.forever(function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
})
```
## Step 4 - Upload the code
Pair and Upload your code
-------------------------
Clicking ``|Download|`` opens a dialogue box. From here, you can download the file to your computer and then transfer it (upload) using File Explorer, or click ``|Pair|``. If it is already attached by USB, ``|Pair|`` sends your code directly to the memory in the micro:bit.
![image](![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/PairMicrobit.png))

**[Need more help connecting? Click here.](https://www.youtube.com/watch?v=qSjMDG84bMY)**

## Step 5 - Success!
Congratulations!<br>
This connecting and downloading process needs to be done, each time you wish to test your code with the IoT kits.<br>
** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>

<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>
