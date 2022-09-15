# T_IoT_Network_3

<!---------------------------------------------------------------  
-------Section 2 of IoT_Network_Tutorial------InComplete--------
----------------------------------------------------------------->
### @activities true

## Introduction
### Introduction @unplugged

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_IoT_Network/IoT_Network_Banner.gif)
About this section
-----------------
In the previous section, we created code to simulate an IoT gateway. In this section, we will code a sensor.<br>
If you haven't done so already, disconnect the previous micro:bit from your computer.<br>
Connect and pair the micro:bit you intend to use as the Gateway.<br>
**This is the third and final part of this tutorial sequence.**<br>


## Section 1 - Code a sensor device  @showdialog
![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_IoT_Network/IoT_Network_Banner.gif)
Code a sensor device
---------------------
In this system, the Gateway 'listens' for signals from the other devices and then transmits signals accordingly. 
When the temperature sensor senses a temperature that excedes 20 degrees, it sends an "OverTemp" signal via the radio. 
The Gateway receives this signal, and signals the fan to turn on. 

### Step 1 Connections
Connections
-----------------
Connect the components and then set the Radio Group.
1. Connect one micro:bit, one battery pack and one connector wire.
2. Drag a ``||radio: Set Radio Group||`` block into the ``||Basic: on start||`` block.<br>
3. Set the **Radio Group to 1**. Check that each device is in the same radio group.
```blocks
radio.setGroup(1)
```
### Step 2 Set the trigger
Set the trigger
-----------------
For this tutorial, the trigger to transmit the "OverTemp" signal is a conditional "if" statement that compares a value received from the temperature sensor.
1. **Drag** an ``||Logic:if||`` block into the ``||basic: forever||`` block.

```blocks
basic.forever(function () {
    if () {
        
    }
})
```

### Step 3 Add the extension @unplugged
Coding: Add the Smart Science extension
----------------------------------------
An extension is code that is supplied by a developer to help 'extend' the functionality of the MakeCode app. Extensions add extra blocks to the block menu and only need to be added once. 
<br>The blocks for this tutorial are already present in the menu, however you will normally have to do the following:
1. Go to the ``||Extensions||`` menu and search for the Environment-and-Science-iot extension. 
2. Click the Environment-and-Science-iot extension to load it. New menu items will now appear, giving access to the ``||Extensions:Octopus||`` sensors.
![Add the extension](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Add_Extension.gif)


### Step 4 Sense and transmit
Sense and transmit
-----------------
1. Add a 'greater than' block from the Logic Menu to the 'if' conditional.
2. Find the BME280 temperature in Celcius block in the Octopus menu and place it into the first placeholder.
3. Insert the number 20 in to the second placeholder.
4. Place a sendString block into the 'if' conditonal and change the string to **"OverTemp"**.
5. Create a 'else' section and sendString **"underTemp"**

```blocks
radio.setGroup(1)
basic.forever(function () {
    if (Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C) < 20) {
        radio.sendString("OverTemp")
    } else {
        radio.sendString("UnderTemp")
    }
})
```

### Step 5 Download to the micro:bit
Download to the micro:bit
-----------------
1. **Download your work to your micro:bit**<br>

## Where to next?
### Where to next? @unplugged
Where to next?
-----------------
Now that each of the micro:bit computers have been coded and connected, its time to test your work.<br>
Extensions:
* Are the results as you expected? How could you improve your system?
* How could you expand the network to include more devices?
* Could you use variables to control multiple radio groups?
* Could you use an internet connection to control remote devices?

**This is the end of this tutorial sequence.**<br>
[Click here to return to the Home menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)<br>
 

<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>

----------------------------------------------