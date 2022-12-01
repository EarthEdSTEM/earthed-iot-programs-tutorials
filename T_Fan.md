# Fan Tutorial
<!----Fan Tutorial-----------------------------------Complete----
------Connect a fan and use IO pins to control it----------------
----------------------------------------------------------------->


## Step 1 - Control a Fan @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Fan/Fan_Banner.gif)
Control a Fan
---------------------------------

In this tutorial we will use input commands and the input/output pins, to make a fan motor spin. 
The pins can be switched between active (having power) or not active (not having power) states. 
Pins can also be connected to sensors to receive data signals.

## Step 2 - Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts: <br>
1x micro:bit, 1x GPIO sheild, 1x Connector Wire, 1x Fan <br><br>
![Parts Needed: 1x GPIO sheild, 1x micro:bit, 1x Connector Wire, 1x Fan](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Fan/IoT_Fan_Parts_List.png)
<br>

## Step 3 - Connect Up!
Connect the Parts Together
--------------------------
1. Plug the micro:bit into the GPIO sheild.
2. Connect the wire to Pin 2 on the GPIO sheild.
3. Connect the other end of the wire to the Fan.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Fan/IoT_Fan_Connections.png)

## Step 4 - Prepare to Code!
Using MakeCode
------------------------------
The software we are using is called MakeCode. In these tutorials, if you see coloured words such as ``||basic: forever||``, this is a commond that can be found and dragged out of a menu. THe corresponds with the menu colour. The commands click together like a jigsaw. 
If you need to delete blocks, dragging them to the menu bar will cause a 'bin' to appear. 
You can delete single blocks or groups of blocks, but make sure that you leave 
a ``||basic: forever||`` block and a ``||basic: on start||`` block on the work space.
![Image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Delete_blocks.png)

## Step 5 - Set the Environment
Coding: Creating Variables
--------------------------
Setting up the environment means getting things ready for the program. 
In this case, we will set up a variable called 'FanOn' and set its value to zero. Variables are containers that hold a value.
1. Go to the Variables Menu and click ``|| Variables: make a variable...||`` to create the variable and call it **'FanOn'**.
2. Go to ``|| Variables: Variables ||`` and place the ``|| Variables: Set FanOn to||`` block inside the ``|| Basic: on start ||`` block.
3. Check that the value of the ``|| Variables: set FanOn to||`` is set to **'0'**. This will ensure that the fan doesn't run until it is switched on.
![Image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Fan/IoT_Fan_Create_Variables.png)

## Step 6 - Add some inputs
Coding: Add Inputs to Trigger the Fan
---------------------------------------
For this tutorial, we will use Buttons 'A and 'B' on the micro:bit as user inputs to trigger the fan. 
When a user presses the 'A' button, a '1' (true) value will be stored in the 'FanOn' variable.
When a user presses the 'B' button, a '0' (false) value will be stored in the 'FanOn' variable.
Using the variable in this way lets us create a switch.
1. Place an ``||Input: if button A pressed||`` block from the ``||Input: Input||`` menu onto the workspace.
2. Go to ``||Variables: Variables||`` and place a ``||Variables: set FanOn to||`` block in the ``||Input: if button A pressed||`` block.
3. Replace the value **'0'** with a **'1'**. This sets the 'FanOn' variable to 'True' to turn the fan on.
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
This section adds the logic command 'if' to the workspace then uses an 'equals' block to ask if 'FanOn' is true (1). 
The logic command 'Equals' has two sides where two values can be added and compared.<br>
1. Go to the Logic menu and place an ``||Logic: if||`` block inside the ``||Basic: forever||`` block.
2. Go to the Logic Menu and drag a ``||Logic: =||`` block in to the placeholder on the ``||Basic: forever||`` block.
3. Go to the Variables Menu and place a ``||Variables: FanOn||`` variable into the first placeholder of the ``||Logic: =||`` block.
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
This section uses the 'Pins' command to control power to the output pins. 
The fan should be connected to Pin 16 since this pin has the higher voltage output needed to spin the fan.
1. Place a ``||Pins: digital write pin||`` block from the ``||Pins: pins||`` menu into the ``||Basic: forever||`` block. Set the Pin to **'16'**.
2. Add a ``||Variables: FanOn||`` block into the value box to replace the '0'.<br>
When FanOn is "1" (true), power is sent to Pin 16. When '0', no power is sent.<br>
** Note: The pin value on the ``||Pins: digital write pin||`` block can be changed, 
but needs to match the pin number that the input/output device (such as the fan or a sensor) is attached to. 
This is useful when more than one device or sensor is attached to the GPIO sheild<br>

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

## Step 9 - Test It
Test It! Debug it!
------------------
Time to test your code. Download the code to the micro:bit and try it out. 
One thing to note is that the voltage from the GPIO shield may not be enough to start the motor. 
I you press Button A and nothing happens, try troubleshooting by tapping the fan with your finger to see if it starts.<br>
Another way to fix this problem is to use a relay. **See the optional relay task in the next step.*<br>

## Step 10 - Optional Relay  @showdialog
Optional relay connections
------------------
A relay is a type of switch that uses an input circuit (often low voltage) to activate a second circuit.
This can be seen in a car's headlights. The switch on the dash board doesn't need much power 
but is connected to a headlight circuit which does. Connecting it this way protects the switch.

1. Plug the micro:bit into the iot:bit sheild.
2. Connect the wire to Pin 2 on the iot:bit sheild. 
3. Attach the main wire from Pin 2 to the plug on the relay. 
4. Attach the high voltage fan circuit to the relay as shown in the diagram.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Fan/IoT_Relay_Connections.png)

## Step 11 - Optional Relay
Optional relay code
------------------
The relay's activation code is structured in a similar way to the previous fan code. 
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
## Step 12 - Test It
Test It! Debug it!
------------------
Time to test your code. Download the code to the micro:bit and try it out. Observe what happens and adjust the values as needed.<br>
How could you integrate the other sensors into your code to trigger the fan in a different way?<br><br>


Congratulations! You have finished this tutorial.
** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>


<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>

