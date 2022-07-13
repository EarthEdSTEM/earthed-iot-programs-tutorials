# T_Connect

<!---------------------------------------------------------------  
-------------------------  NEW ACTIVITY -------------------------
----------------------------------------------------------------->

<!---  Designed to test if the microbit is working --->

## Step 1 Connecting the microbit
![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/Earth%20Ed%20Horizontal%20Logo.png)

Plug in your micro:bit to connect!<br>
You will need a USB cable, micro:bit comuter and a PC computer to complte this task. Make sure you have removed the micro:bit computer from the IOT sheild.

![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/USB_Connection.png)
_________________________________
Connect the micro:bit to your your computer using the USB cable.
Need to know how to connect your micro:bit to your computer? [Watch this video](https://www.youtube.com/watch?v=qSjMDG84bMY)
<br>

## Step 2 @fullscreen
Create some simple code to test your micro:bit.
------------------------------------
In the Basic Tab, place the ``||basic:show leds||`` block in the ``||basic:forever||`` block and draw a pattern like this.
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
## Step 3 - Upload the code
Pair and Upload your code
-------------------------
Clicking ``|Download|`` opens a dialogue box. From here, you can download the file to your computer and then transfer it (upload) using File Explorer, or click ``|Pair|``. If it is already attached by USB, ``|Pair|`` sends your code directly to the memory in the micro:bit.

[Need more help connecting? Click here.](https://www.youtube.com/watch?v=qSjMDG84bMY)

## Step 4 - Success!
Congratulations! This connecting and downloading process needs to be done, each time you wish to test your code with the IoT kits.<br>
** [Click here to return to the menu](/earthed-iot-programs-tutorials/README)**<br>

<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>
