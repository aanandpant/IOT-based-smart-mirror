import RPi.GPIO as GPIO

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
        if lines[i]=="LIGHTS ON" or lines[i]=="LIGHTS OFF" or lines[i]=="FAN ON" or lines[i]=="FAN OFF":
           
            if lines[i]=="LIGHTS ON":
                GPIO.output(17,GPIO.HIGH)
                print "on"
                i=i+1

            if lines[i]=="LIGHTS OFF":
                GPIO.output(17,GPIO.LOW)
                print "off"
                i=i+1
            if lines[i]=="FAN ON":
                GPIO.output(4,GPIO.HIGH)
                print "fan on"
                i=i+1
            if lines[i]=="FAN OFF":
                GPIO.output(4,GPIO.LOW)
                print "fan off"
                i=i+1  
        else:
            print "ignored"
            i=i+1
        print i
    except:
        pass
