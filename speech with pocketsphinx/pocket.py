import RPi.GPIO as GPIO
import os
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(17,GPIO.OUT)
GPIO.setup(4,GPIO.OUT)


i=0

while True:
    try:
        with open("words.txt") as f:
            lines=(line.rstrip() for line in f)
            lines=list(line for line in lines if line)
        if lines[i]=="ALEXA" or lines[i]=="LIGHTS ON" or lines[i]=="LIGHTS OFF" or lines[i]=="FAN ON" or lines[i]=="FAN OFF":


             if lines[i]=="ALEXA":
                os.system("mpg321 Beep.mp3")
                os.system("mpg321 yes.mp3")
                i=i+1
             if lines[i]=="LIGHTS ON":
                GPIO.output(17,GPIO.HIGH)
                os.system("mpg321 on.mp3")
                i=i+1

             if lines[i]=="LIGHTS OFF":
                GPIO.output(17,GPIO.LOW)
                os.system("mpg321 off.mp3")
                i=i+1
             if lines[i]=="FAN ON":
                GPIO.output(4,GPIO.HIGH)
                os.system("mpg321 fon.mp3")
                i=i+1
             if lines[i]=="FAN OFF":
                GPIO.output(4,GPIO.LOW)
                os.system("mpg321 foff.mp3")
                i=i+1  
        
    except:
        pass
