# Fan Tutorial
<!---------------------------------------------------------------
----------------------- FAN TUTORIAL-----------Complete----------
----------------------------------------------------------------->


## Step 1 - Control a Fan @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Fan/Fan_Banner.gif)
Control a Fan
---------------------------------

In this tutorial we will use input commands and output pins, to activate a fan. The pins can be switched between active (having power) or not active (not having power) states. Pins can also receive signals from sensors.

## Step 2 - Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts: <br>
1x iot:bit sheild, 1x micro:bit, 1x Connector Wire, 1x Fan <br><br>
![Parts Needed: 1x iot:bit sheild, 1x micro:bit, 1x Connector Wire, 1x Fan](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Fan/IoT_Fan_Parts_List.png)
<br>

## Step 3 - Connect Up!
Connect the Parts Together
--------------------------
1. Plug the micro:bit into the iot:bit sheild.
2. Connect the wire to Pin 2 on the iot:bit sheild.
3. Connect the other end of the wire to the Fan.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Fan/IoT_Fan_Connections.png)

## Step 4 - Prepare to Code!
Delete unused blocks if needed
------------------------------
**Skip to Step 5 if you are leaving your old code on the desktop. Otherwise:**
1. If starting fresh, clear the previous blocks by dragging them to the menu bar where a 'bin' will appear.
2. Place a ``||basic: forever||`` block and a ``||on start||`` onto the work space.
![Image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Delete_blocks.png)

## Step 5 - Set the Environment
Coding: Creating Variables
--------------------------
Setting up the environment means getting things ready for the program. In this case, we will set up the variables we will use. Variables are containers that hold a value.
1. Click ``|| Variables: make a variable...||`` to create a variable and call it **'FanOn'**.
2. Go to ``|| Variables: Variables ||`` and place the ``|| Variables: Set FanOn to||`` block inside the ``|| Basic: on start ||`` block.
3. Check that the value of the ``|| Variables: set FanOn to||`` is set to **'0'**. This will ensure that the fan doesn't run until it is switched on.
![Image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Fan/IoT_Fan_Create_Variables.png)

## Step 6 - Add some inputs
Coding: Add Inputs to Trigger the Fan
---------------------------------------
For this tutorial, we will use Buttons A and B on the Microbit as user inputs to trigger the fan. Pressing a button will store either a '1' for true or a '0' for false.
1. Place an ``||Input: if button A pressed||`` block from the ``||Input: Input||`` menu onto the workspace.
2. Go to ``||Variables: Variables||`` and place a ``||Variables: set FanOn to||`` block in the ``||Input: if button A pressed||`` block.
3. Replace the value '0' with a **'1'**. This sets the 'FanOn' variable to 'True' to turn the fan on.
4. Repeat steps 1 - 3 to create an input for Button B, leaving the value as **'0'** for 'False'.

```blocks
input.onButtonPressed(Button.A, function () {
    FanOn = 1
})
input.onButtonPressed(Button.B, function () {
    FanOn = 0
})
```

## Step 7 - Add the Fan Control Command
Coding: Add the fan control command 'if' block
-------------------------------------
This section adds an 'if' command to ask if the FanOn is true. <br>
1. Place a ``||Basic: if||`` block inside the ``||Basic: forever||`` block.
2. Drag a ``||Logic: =||`` block in to the placeholder on the ``||Basic: forever||`` block.
3. Place a ``||Variables: FanOn||`` variable into the first placeholder of the ``||Logic: =||`` block.
4. Change the value of the second placeholder in the ``||Logic: =||`` block to **1**.

```blocks
basic.forever(function () {
    let FanOn = 0
    if (FanOn == 1) {
    	
    }
})
```

## Step 8 - Add the Fan Control Command
Coding: Add the Fan Control Command
-------------------------------------

3. Place a ``||Pins: digital write pin||`` block from the ``||Pins: pins||`` menu into the ``||Basic: forever||`` block. Set the Pin to **'16'**.
4. Add a ``||Variables: FanOn||`` block into the value box to replace the '0'.<br>
When FanOn is "1" (true), power is sent to Pin 16. When '0', no power is sent.<br>
** Note: The Pin value on the ``||Pins: digital write pin||`` block can be changed, but needs to match the pin number that the fan is attached to. This is useful when more than one device or sensor is attached to the iot:bit sheild<br>

```blocks
input.onButtonPressed(Button.A, function () {
    FanOn = 1
})
input.onButtonPressed(Button.B, function () {
    FanOn = 0
})
let FanOn = 0
FanOn = 0
basic.forever(function () {
    if (FanOn == 1) {
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
})

```
## Step 9 - Optional Relay  @showdialog
Optional relay
------------------
The voltage from the IoT:Bit is three volts and may not be enough to start the motor. Check by turning the fan. One way to solve this, is by using a relay.<br>
A relay is an electronic switch. A low voltage signal triggers the switch which allows a higher voltage or current to pass through an attached circuit.
To use the relay:
1. Plug the micro:bit into the iot:bit sheild.
2. Connect the wire to Pin 2 on the iot:bit sheild. 
3. Attach the main wire from Pin 2 to the plug on the relay. 
4. Attach the high voltage fan circuit to the relay as shown in the diagram.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Fan/IoT_Relay_Connections.png)

## Step 10 - Optional Relay
Optional relay code
------------------
The relay is activation code is structured in a similar way to the previous fan code. 
A button press or other input is used to set the FanOn variable to true, which then sends a signal to a pin.
This time, we are using pin 2 instead of pin 16.
```blocks
input.onButtonPressed(Button.A, function () {
    FanOn = 1
})
input.onButtonPressed(Button.B, function () {
    FanOn = 0
})
let FanOn = 0
FanOn = 0
basic.forever(function () {
    if (FanOn == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})

```
## Step 11 - Test It
Test It! Debug it!
------------------
Time to test your code. Download the code to the micro:bit and try it out. Observe what happens and adjust the values as needed.<br>
How could you integrate the other sensors into your code to trigger the servo in a different way?<br><br>


Congratulations! You have finished this tutorial.
** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>


<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>

