# T_Moisture_Sensor Tutorial

<!---------------------------------------------------------------
------------Moisture Sensor TUTORIAL------------INComplete-----
----------------------------------------------------------------->

## Step 1 Sensing Moisture @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/EarthEd_Horizontal_Logo.png)
Sensing a soil moisture using the Soil Moisture sensor
-------------------------------------------

In this tutorial, we will use the soil moisture sensor to trigger a display event. We will also add an extension to MakeCode, to help us access the sensor readings.  Extensions only need to be added once.

## Step 2 Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts:<br>
1x micro:bit, 1x iot:bit sheild, 1x Connector wire, 1x Soil moisture sensor<br><br>
![Parts Needed: 1x micro:bit, 1x iot:bit sheild, 1x Connector wire, 1x Soil moisture sensor](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Soil_Moisture/IoT_Soil_Moisture_Parts_List.png)
<br>

## Step 3 Connect Up!
Physical connections
--------------------
1. Plug the micro:bit into the iot:bit sheild.
2. Use the wire to connect the soil moisture sensor to Pin 1 on the iot:bit sheild. 
3. Connect the other end of the wire to the soil moisture sensor.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Soil_Moisture/IoT_Soil_Moisture_Connections.png)

## Step 4 Prepare to Code!
Delete unused blocks
--------------------
**Skip to Step 5 if you are leaving your old code on the desktop. Otherwise:**
1. Clear the previous blocks by dragging them to the menu bar.
2. Place a ``||basic:forever||`` block and a ``||basic: on start||`` onto the work space.
![Deleting code](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Delete_blocks.png)

## Step 5 Add the Extension
Coding: Add the Smart Science Extension
----------------------------------------
In this section, we will add an extension so that we can access the readings from the soil moisture sensor. Extensions are code that is supplied by developers to help 'extend' the functionality of the MakeCode app.
1. Go to the ``||Extensions||`` menu and search for the Environment-and-Science-iot extension. 
2. Click the Environment-and-Science-iot extension to load it. New menu items will now appear, giving access to the ``||Extensions:Octopus||`` sensors.

## Step 6 Setting up the If...Then...Else
Coding: Setting up the If...Then...Else
--------------------------
If...Then...Else statements are a type of conditional statement. They are used to ask a question then act according to the response.
1. Click the ``|| Logic: If ||`` block in the ``|| Logic: ||`` menu and place it in the ```|| basic: forever ||`` block.
2. Go to the  ``|| Logic: If ||`` block you just created and click the 'Else' plus sign.<br>
This creates the If...Then...Else statement.

## Step 7 Add a Boolean Operator
Coding: Add a Boolean Operator
----------------------------------------
In the ``|| Logic: If ||`` block there is a place holder. This is used to ask a question by adding values and operators.
1. Find the ``|| Logic: Less than ||`` block in the ``|| Logic: ||`` menu and drag it into the ``|| Logic: If ||`` placeholder.
2. Go to the ``|| Extensions:Octopus ||`` menu and find the ``|| Extensions:Value of soil moisture ||`` block. Drag it into the first placeholder in the ``|| Logic: Less than ||`` block.
3. Enter the number '20' into the second placeholder.<br>
The code now asks "Is the soil moisture level less than 20?"

```blocks
basic.forever(function () {
    if (Environment.ReadSoilHumidity(AnalogPin.P1) < 20) {    
    } else {
    	
    }
})
```

## Step 8 Add an Action
Coding: Display an Icon
----------------------------------------
Now that we have asked a question, we need to add an action if it is true. 
1. In the 'If' section of the If...Then...Else statement, add a ``|| basic: Show icon ||`` block.
2. Click the Icon to change it to a cross symbol.

```blocks
basic.forever(function () {
    if (Environment.ReadSoilHumidity(AnalogPin.P1) < 20) {
        basic.showIcon(IconNames.No)
    } else {
    	
    }
})
```

## Step 9 Add a Nested If Statement
Coding: Add another If
-------------------------------------
1. In the 'Else' section you created earlier, add a ``|| Logic: If ||`` block.
2. Create another boolean and add it to the new ``|| Logic: If ||`` as per the previous step, except make it a 'Larger than 80' value.
3. Add an umbrella icon.<br>
Now, if the value is over 80, an umbrella will be displayed.

```blocks
basic.forever(function () {
    if (Environment.ReadSoilHumidity(AnalogPin.P1) < 20) {
        basic.showIcon(IconNames.No)
    } else {
        if (Environment.ReadSoilHumidity(AnalogPin.P1) > 80) {
            basic.showIcon(IconNames.Umbrella)
        }
    	
    }
})
```
## Step 9 Add a Nested If Statement
Coding: Add another If
-------------------------------------
1. In the 'Else' section you created earlier, add a ``|| Logic: If ||`` block.
2. Create another boolean and add it to the new ``|| Logic: If ||`` as per the previous step, except make it a 'Larger than 80' value.<br>
3. Add an umbrella icon.
Now, if the value is over 80, an umbrella will be displayed.

```blocks
basic.forever(function () {
    if (Environment.ReadSoilHumidity(AnalogPin.P1) < 20) {
        basic.showIcon(IconNames.No)
    } else {
        if (Environment.ReadSoilHumidity(AnalogPin.P1) > 80) {
            basic.showIcon(IconNames.Umbrella)
        } else {
            basic.showIcon(IconNames.Yes)
        }
    }
})
```
** Note: In the sample code shown here, the join block has been used to added to items of text together.
 
## Step 9 Test It
Test it! Debug it!
------------------
Time to test your code. Download the code to the micro: bit and try it out. Observe what happens.<br>
How could you integrate the sensors into your code to trigger the servo or LED lights or both?<br><br>

Congratulations! You have finished this tutorial.
** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>

<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>
