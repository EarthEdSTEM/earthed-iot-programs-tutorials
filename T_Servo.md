# Servo Tutorial
<!---------------------------------------------------------------
----------------------- SERVO TUTORIAL----------Complete---------
----------------------------------------------------------------->


## Step 1 - Control a Servo Motor @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Servo/Servo_Banner.gif)
Control a Servo Motor
---------------------------------

In this tutorial, we will use [variables](https://launchschool.com/books/ruby/read/variables) to control a servo motor. A servo is a type of motor that can rotate to a given position then hold it. 
By using variables, inputs from users or sensors will be stored and used to control when the servo moves and by how far.

## Step 2 - Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts: <br>
1x iot:bit sheild, 1x micro:bit, 1x Connector Wire, 1x Servo Motor <br><br>
![Parts Needed: 1x iot:bit sheild, 1x micro:bit, 1x Connector Wire, 1x Servo Motor](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Servo/IoT_Servo_Parts_List.png)
<br>

## Step 3 - Connect Up!
Connect the Parts Together
--------------------------
1. Plug the micro: bit into the iot:bit sheild.
2. Connect the wire to Pin 2 on the iot:bit sheild.
3. Connect the other end of the wire to the Servo.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Servo/IoT_Servo_Connections.png)

## Step 4 - Prepare to Code!
Delete unused blocks if needed
------------------------------
1. If starting fresh, clear the previous blocks by dragging them to the menu bar where a 'bin' will appear.
2. Place a ``||basic: forever||`` block and a ``||on start||`` onto the work space.
![Image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Delete_blocks.png)

## Step 5 - Set the Environment Part 1
Coding: Creating Variables
--------------------------
Setting up the environment means getting things ready for the program. In this case, we will set up the variables we will use. Variables are containers that hold a value.
1. Click ``|| Variables: Make a Variable...||`` to create a variable and call it 'ServoValue'.
2. Go to ``|| Variables ||`` and place the ``|| Variables: Set ServoValue to||`` block inside the ``|| Basic: on Start ||`` block.
3. Check that the value of the ``|| Variables: Set ServoValue to||`` is set to '0'. This can be changed later, depending on what start angle you want the servo to begin at.
![Image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Servo/IoT_Servo_Create_Variable.png)

## Step 6 - Set the Environment Part 2
Coding: Create More Variables
-----------------------------
Setting up the environment means getting things ready for the program.In this case, we will set up the variables we will use. Variables are containers that hold a value.
1. Click ``|| Variables: Make a Variable...||`` and create two more variables; 'ServoValueLow' and 'ServoValueHigh'.
2. Place the new ``|| Variables: Set ServoValue to||`` blocks inside the ``|| Basic: on Start||`` block.
3. Set the value of ``|| Variables: Set ServoValue to||`` to '0' for ServoValueLow and '180' for ServoValueHigh.<br><br>
The servo motor uses steps that range from 0 to 180 degrees. Having low and high values between 0 and 180, allow start and finish angles to be set. 
```blocks
let ServoValue = 0
```

## Step 7 - Add some inputs
Coding: Add Inputs to Trigger the Servo
---------------------------------------
For this tutorial, we will use Buttons A and B on the Microbit as user inputs to trigger the servo.
1. Place a ``||input: If Button A Pressed||`` block from the Input menu onto the workspace.
2. Go to ``||Variables||`` and place a ``||Variables: Set ServoValue to||`` block in the ``||input: If Button A Pressed||`` block.
3. Go to ``||Variables||`` and replace the value '0' with the rounded ServoValue block.
4. Repeat steps 1 - 3 to create an input for Button B.

```blocks
input.onButtonPressed(Button.A, function () {
    ServoValue = ServoValueLow
})
input.onButtonPressed(Button.B, function () {
    ServoValue = 0
})
```

## Step 8 - Add the Servo Control Command
Coding: Add the Servo Control Command
-------------------------------------
1. Place a ``||Pins: DigitalWritePin||`` block from the ``||Pins||`` menu into the ``||Basic: Forever||`` block.Set the Pin to '2'.
2. Add a ``||variables: ServoValue||`` block into the value box to replace the '0'.
3. Add a ``|| Basic.Pause||`` block next and set it to 1 second. This will give the servo time to react. Tweak this value as needed.<br>
** Note: The Pin value on the ``||Pins: DigitalWritePin||`` block can be changed, but needs to match the pin number that the servo is attached to. This is useful when more than one device or sensor is attached to the iot:bit sheild<br>

```blocks
input.onButtonPressed(Button.A, function () {
    ServoValue = ServoValueLow
})
input.onButtonPressed(Button.B, function () {
    ServoValue = ServoValueHigh
})
let ServoValue = 0
let ServoValueHigh = 0
let ServoValueLow = 0
ServoValueLow = 0
ServoValueHigh = 180
ServoValue = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, ServoValue)
    basic.pause(1000)
})
```

## Step 9 - Test It
Test It! Debug it!
------------------
Time to test your code. Download the code to the micro:bit and try it out. Observe what happens and adjust the values as needed.<br>
How could you integrate the other sensors into your code to trigger the servo in a different way?<br><br>


Congratulations! You have finished this tutorial.
** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>


<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>

